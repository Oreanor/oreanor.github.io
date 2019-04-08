import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  onClickButt(e){
  	console.warn(e)
  }

  onChange(e){
  	console.warn(e.target.name);
  	console.warn(e.target.value);
  }

  ngOnInit() {
  }

}
