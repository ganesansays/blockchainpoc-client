import { Contract } from './contract';

export class Package {
  public Identifier: string;
  public Name: string;
  public Temperature: number;
  public Contract: Contract;
  public Consumed: boolean = false;

  constructor(name: string) {
    this.Name = name;
    this.Identifier = "1";
    this.Temperature = -5;
  }

  consume() {
    this.Consumed = true;
  }
}
