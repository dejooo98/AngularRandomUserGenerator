export class User {
  constructor(
    public id: { name: string },
    public name: {
      first: string;
      last: string;
      title: string;
    },
    public picture: {
      large: string;
      medium: string;
    },
    public location: {
      street: {
        name: string;
      };
    },
    public login: { uuid: any },
    public cell: any,
    public email: string,
    public gender: string,
    public phone: string
  ) {}
}
