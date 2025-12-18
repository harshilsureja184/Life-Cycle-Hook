import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements AfterViewChecked,OnChanges ,OnInit{



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
  

 ngOnChanges()
 {
  console.log("ng on change done by mahek")
 }

}
