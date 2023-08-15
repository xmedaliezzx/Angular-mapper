import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'encoder-decoder';
  constructor(private api: ApiService) {
    this.api.getData().subscribe((data: any) => {
      console.log(data);
    });
  }
}
