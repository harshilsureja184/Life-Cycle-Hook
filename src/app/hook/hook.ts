
import { AfterViewChecked, Component, OnChanges,DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements  DoCheck, OnChanges,AfterViewChecked,OnChanges ,OnInit{



  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnInit(): void {
    console.log("Harshil - Constructor")
  }
  

 

  ngDoCheck(): void {
    console.log("ngDoCheck Called")
  }

  ngOnChanges() {
    console.log("ng on change done by mahek")
  }
}
