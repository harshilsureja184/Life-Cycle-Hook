import { AfterViewInit, Component,OnChanges } from '@angular/core';


@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements AfterViewInit, OnChanges {


  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
 ngOnChanges()
 {
  console.log("ng on change done by mahek")
 }

}
