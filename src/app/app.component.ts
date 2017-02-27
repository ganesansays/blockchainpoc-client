import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { Package } from '../model/package';
import { Party } from '../model/party';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blockchain POC!';
  package: Package;
  
  ngOnInit() {
    this.init();
  }

  init() {
    this.package = new Package("Perishable");
    this.package.Contract = new Contract(this.package);
    
    let producer: Party = new Party("Producer", this.package);
    producer.Responsible = true;
    
    let carrier: Party = new Party("International Carrier", this.package);
    let consumer: Party = new Party("Consumer", this.package, true);
    
    this.package.Contract.Parties = [];
    this.package.Contract.Parties.push(producer);
    this.package.Contract.Parties.push(carrier);
    this.package.Contract.Parties.push(consumer);
  }
}
