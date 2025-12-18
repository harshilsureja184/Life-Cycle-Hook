import { Component , OnInit , OnChanges} from '@angular/core';


@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements OnInit , OnChanges {


  labelName = 'Life Cycle Hook';
  labelColor = 'black';

  constructor() {
    console.log("Constructor")
  }
  ngOnInit(): void {
    console.log("Harshil - Constructor")
  }
  

 ngOnChanges()
 {
  console.log("ng on change done by mahek")
 }

}
