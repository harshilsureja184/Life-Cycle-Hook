import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements AfterViewChecked{

  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  
  ngAfterViewChecked() {
    console.log('AdminContact ngAfterViewChecked');
  }

}
