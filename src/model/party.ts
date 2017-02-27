import { Package } from './package';

export class Party {
  public Name: string;
  public Responsible: boolean = false;
  public Transporting: boolean = false;
  public Transported: boolean = false;
  public package: Package;
  public n = 0;
  public temperatureOnHandover: number = null;
  public Consumer: boolean;

  constructor(name: string, packageHandled: Package, isConsumer: boolean = false) {
    this.Name = name;
    this.package = packageHandled;
    this.Consumer = isConsumer;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public startTransport() {
    this.n = 0;
    this.Transporting = true;
    this.transport();
  }

  public transport() {
    setTimeout(() => {
       this.package.Temperature = this.getRandomInt(-5,0);
       if(this.n < 5) {
         this.n++;
         this.transport();
       } else {
         this.Transported = true;
         this.Transporting = false;
       }
    }, 1000);
  }

  public ContractHonored() : boolean {
    return (this.temperatureOnHandover && this.temperatureOnHandover <= 0) 
    || (!this.temperatureOnHandover && this.package.Temperature <= 0);
  }
}
