import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements  AfterViewInit,AfterViewChecked,OnInit,OnChanges{



  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
ngAfterViewInit()
{
    console.log("The afterviewinit hook");
}
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnInit(): void {
    console.log("Harshil - Constructor")
  }
  

 ngOnChanges()
 {
  console.log("ng on change done by mahek")
}

}
