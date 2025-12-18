import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements OnChanges {

  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
 ngOnChanges()
 {
  console.log("ng on change done by mahek")
 }

}
