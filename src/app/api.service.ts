import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserMapper } from './core/mapper';
import { IUserDTO } from './core/user.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private mapper = new UserMapper();
  constructor(private http: HttpClient) {}
  getData() {
    return this.http
      .get<IUserDTO[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data: IUserDTO[]) => data.map((item:IUserDTO) => this.mapper.mapFrom(item)))
      );
  }
}
