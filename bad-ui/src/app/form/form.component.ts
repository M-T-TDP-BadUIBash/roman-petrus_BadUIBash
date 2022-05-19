import { Component, OnInit } from '@angular/core';


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
  public phon: any;
  // phone
  public home: any;
  // address
  public WHY: any;
  // why hire you
  public beans:boolean = false;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }

  addChAr(chartadd: number, elementID: string) {
    let element: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    let chartoAdd = String.fromCharCode(chartadd);
    element.value = element.value + chartoAdd;
  }

 // data
  addDate(datetadd: number, elementID: string){
    let element: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    let datetadds = datetadd.toString();
    let formattedthing: string;
    if(datetadds.length == 7) {
      formattedthing = datetadds[0] + datetadds[1] + datetadds[2] + datetadds[3] + '/' + datetadds[4] + datetadds[5] + '/' + datetadds[6];
    }
    else {
      formattedthing = datetadds[0] + datetadds[1] + datetadds[2] + datetadds[3] + '/' + datetadds[4] + datetadds[5] + "/" + datetadds[6] + datetadds[7];
    }
    element.value = formattedthing;
  }

  //submiT
  onSubmit() {
    console.log(this.validateFirstLast(), ' Date:' , this.valiDate(), ' Email:', this.validateEmail(), ' Box:', this.validateWhy(), ' Phone:', this.validatePhon());

    this.validateNoHackers();

    if(!this.validateFirstLast() || !this.valiDate() || !this.validateEmail() || !this.validatePhon()) {
      alert("UH OH OOPSIE, Please verify all sections are comoplete and meet the standards: {{VALIDATION_STANDARDS}} \n \n Thank you in advnace for applying as a UI designer! ");
    } else{
      alert("Thank you for applying to EXCELLERANT UI Contractors Inc. \n We'll be in touch with you after reviewing your qualifications!")
    }

  }

  validateFirstLast(): boolean {
    let first: HTMLInputElement = document.getElementById('first-name') as HTMLInputElement;
    console.log(first.value);
    let last: HTMLInputElement = document.getElementById('last-name') as HTMLInputElement;
    console.log(last.value);
    let regName = /^([A-Za-z]+([ ]?[A-Za-z]?['-]?[A-Za-z]+)*)$/;
    if(!regName.test(first.value)) {
      //console.log(first.value);
      return false;
      
    }
    if(!regName.test(last.value)) {
      //console.log(last.value);
      return false;
    }

    return true;
  }
  

  valiDate(): boolean {
    let regex = /^(1900|19\d{2}|200[0-4])\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[0-1])$/;
    let date: HTMLInputElement = document.getElementById('date') as HTMLInputElement;
    if(!regex.test(date.value)) {
      return false;
    }

    return true;
  }

  validateEmail(): boolean {
    let regex = /[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])/g;
    let email = document.getElementById('email') as HTMLInputElement;
    if(!regex.test(email.value)) {
      return false;
    }

    return true;
  }

  validateWhy():boolean { 
    let regex = /^([a-z]|[A-Z]|[0-9]|\s|\.|\!)+$/g;
    let whyt = document.getElementById('description') as HTMLInputElement;
    if(!regex.test(whyt.value)){
      return false;
    }
    return true;
  }

  validatePhon(): boolean {
    let regex = /^[1-9]\d{2}-\d{3}-\d{4}/g;
    let phon = document.getElementById('phone') as HTMLInputElement;
    if(!regex.test(phon.value)) {
      return false;
    }

    return true;
  }
 
  validateNoHackers() {
    let regex = /[`~#$%^&*()|+=;:<>¯¿¢©ª\{\}\[\]\\]/gi;
    let field1 = document.getElementById('first-name') as HTMLInputElement;
    let last: HTMLInputElement = document.getElementById('last-name') as HTMLInputElement;
    let date: HTMLInputElement = document.getElementById('date') as HTMLInputElement;
    let email = document.getElementById('email') as HTMLInputElement;
    let whyt = document.getElementById('description') as HTMLInputElement;
    let phonee = document.getElementById('phone') as HTMLInputElement;
    if(regex.test(field1.value)||regex.test(last.value)||regex.test(email.value)||regex.test(date.value)||regex.test(whyt.value)||regex.test(phonee.value)){
      //ALERT, ROUTE TO CYBERPOLICE
      alert("WOAH THERE PARTNER /n ARE YOU TRYING TO INJECT CODE?!!?? YOU'vE just been REPORTED to the CYBER POLICE. Expect the FBI to be ion contact with you in the coming months!!!")
      this.report();
    }
  }

  report() {
   window.open("../../assets/POPO.jpg",'Image');
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
