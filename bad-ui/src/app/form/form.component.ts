import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public changeText: boolean = false;
  public firstnamevalue: any;
  //firstname
  public laSTnamevalue: any;
  //lastname\
  public dateVal :       any;
  //lastname
  public EMAIL_VAL: any;
  // email


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }

  addChAr(chartadd: number, elementID: string) {
    let element: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    let chartoAdd = String.fromCharCode(chartadd)
    element.value = element.value + chartoAdd;
  }

 // data
  addDate(datetadd: number, elementID: string){
    let element: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    let date = new Date(datetadd);
    let datetoadd = date.toString();
    element.value = datetoadd;
    console.log(datetoadd)
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
