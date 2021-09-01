import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.scss']
})
export class LoanTypeComponent implements OnInit {
   'addLoanTypesForm': FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addLoanTypesForm = new FormGroup({
      'loanName': new FormControl(),
      'loanDescription': new FormControl()
    })  
  }
  addLoanType(){
    console.log(this.addLoanTypesForm.value);

  }
}

