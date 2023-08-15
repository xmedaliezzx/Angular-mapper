import { IUserDTO } from './user.dto';
import { IUser } from './user.model';

export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;
  abstract mapTo(param: O): I;
}

export class UserMapper extends Mapper<IUserDTO, IUser> {
  mapFrom(param: IUserDTO): IUser {    
    return {
      id: param.id,
      email: param.email,
      name: param.name,
      phone: param.phone,
      username: param.username,
      website: param.website,
    };
  }

  mapTo(param: IUser): IUserDTO {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      username: param.username,
      address: '',
      company: {
        name: '',
      },
      phone: param.phone,
      website: param.website,
    };
  }
}
