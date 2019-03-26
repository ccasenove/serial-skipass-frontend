import { Component, OnInit } from '@angular/core';
import { ForfaitService } from '../forfait.service';
import { FormBuilder, FormGroup } from '@angular/forms';

const stationId = '666';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form: FormGroup;
  stations = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private forfaitService: ForfaitService) { 
      this.form = formBuilder.group({
        station: 1
      })
    }

  ngOnInit() {
    this.forfaitService.getStations().subscribe(stations => this.stations = stations);
  }

  start() {
    this.forfaitService.startConso(this.form.value.station).subscribe(res => console.log(res));
  }

  stop() {
    this.forfaitService.stopConso().subscribe(res => console.log(res));
  }
}
