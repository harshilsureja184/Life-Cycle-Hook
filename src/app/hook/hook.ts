
import { AfterViewChecked, Component, OnChanges,DoCheck, OnInit,AfterViewInit, AfterContentInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements  DoCheck, OnChanges,AfterViewChecked,OnChanges ,OnInit,AfterViewInit,AfterContentInit,OnDestroy{
  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnInit(): void {
    console.log("Constructor")
  }
  ngAfterContentInit(): void{
    console.log("Tisa-AfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Called")
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
