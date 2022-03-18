import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class RegistrantRequest {
  @IsNotEmpty()
  @IsString()
  public firstName!: string;

  @IsNotEmpty()
  @IsString()
  public lastName!: string;

  @IsNotEmpty()
  @IsString()
  public phoneNumber!: string;

  @IsNotEmpty()
  @IsNumber()
  public age!: number;

  @IsNotEmpty()
  @IsString()
  public country!: string;
}
