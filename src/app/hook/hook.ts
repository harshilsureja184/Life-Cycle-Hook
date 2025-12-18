import { Component, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements DoCheck, OnChanges {

  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called")
  }

  ngOnChanges() {
    console.log("ng on change done by mahek")
  }
}
