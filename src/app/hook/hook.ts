import { AfterViewChecked, Component, OnChanges, OnInit,AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements AfterViewInit, OnChanges ,AfterViewChecked,OnInit,OnDestroy{




  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
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
 ngOnDestroy()
 {
  console.log("Destroy")
 }
}
