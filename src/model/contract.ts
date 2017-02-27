import { Party } from './party'
import { Package } from './package'

export class Contract {
  public Identifier: string;
  public Parties: Party[];
  public Package: Package;
  public Breached: boolean;

  constructor(packageHandled: Package) {
    this.Identifier = "1";
    this.Package = packageHandled;
  }

  handOver() {
    console.log('Handing over ...');
    let respPartyFound: boolean = false;
    for(let party of this.Parties) {
      if(respPartyFound) {
        console.log('Handed Over ...');
        party.Responsible = true;
        return;
      } else if(party.Responsible) {
        console.log('Res party found ...');
        respPartyFound = true;
        party.Responsible = false;
        party.temperatureOnHandover = this.Package.Temperature;
      }
    }
  }

  breachContract() {
    this.Package.Temperature += 6;
    this.Breached = true;
  }
}
