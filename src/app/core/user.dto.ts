export interface IUserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: any;
  company: {
    name: string;
  };
}
