export class Registrant {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phoneNumber: string,
    public readonly age: number,
    public readonly country: string
  ) {}
}