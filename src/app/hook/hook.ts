import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css',
})
export class Hook implements OnInit {

  labelName = 'Life Cycle Hook';

  constructor()
  {
    console.log("Constructor")
  } 
  
  ngOnInit() {
    console.log('Component initialized');
  }
 
}
