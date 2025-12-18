
import { AfterViewChecked, Component, OnChanges, DoCheck, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements DoCheck, OnChanges, AfterViewChecked, OnChanges, OnInit, AfterViewInit {
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
    console.log("Harshil - Constructor")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Called")
  }

  ngOnChanges() {
    console.log("ng on change done by mahek")
  }
}
