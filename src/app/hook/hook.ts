import { AfterViewInit, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements OnChanges, AfterViewInit {

  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
ngAfterViewInit()
{
    console.log("The afterviewinit hook");
}
 ngOnChanges()
 {
  console.log("ng on change done by mahek")
}

}
