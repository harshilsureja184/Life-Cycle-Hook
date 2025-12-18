import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements OnInit, AfterContentInit {

  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }

  ngOnInit() {
    console.log('Component initialized');
  }
  ngDoCheck() {

    console.log("DOCHECK  CALLED ")

  }
  ngAfterContentInit() {
    console.log('MAHEK CHNAGE DONE ');
    this.labelName = "CHNAGES TO MAKE";
    this.labelColor = 'red';
  }


}
