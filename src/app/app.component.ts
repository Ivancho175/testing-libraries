import { Component, OnInit } from '@angular/core';
import { CoreService } from './@core/services/core.service';
import { Subject, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'testing-libraries';

  public dtable = new Subject<any>();
  private lat: number = 4.75752;
  private lon: number = -74.0358;

  constructor(private service: CoreService) {}

  async ngOnInit() {
    const characters: any = await lastValueFrom(this.service.getAll(50, 0));
    /* const weather: any = await lastValueFrom(
      this.service.getWeather(this.lat, this.lon)
    ); */
    this.setDataTable(characters.results);
  }

  setDataTable(data: any[]) {
    /* const rows: any[] = [];
    data.forEach((d) => {
      const { weather, wind_cdir_full, vis, temp, clouds, rh } = d;
      console.log(weather.description, wind_cdir_full, vis, temp, clouds, rh);
      const item = {
        weather: weather.description,
        wind_cdir_full,
        vis,
        temp,
        clouds,
        rh,
      };
      rows.push(item);
    });
    const newData = {
      titles: [
        'Weather',
        'Wind direction',
        'Visibility',
        'Temperature',
        'Clouds',
        'Relative humidity',
      ],
      rows,
    }; */
    const characters: any[] = [];
    for (const res of data) {
      const { id, name, image, gender, species, status } = res;
      const char = {
        id,
        name,
        image: `<img src="${image}">`,
        gender,
        species,
        status,
      };
      characters.push(char);
    }
    const newData = {
      titles: ['Id', 'Name', 'Image', 'Gender', 'Species', 'Status'],
      rows: characters,
    };
    this.dtable.next(newData);
  }
}
