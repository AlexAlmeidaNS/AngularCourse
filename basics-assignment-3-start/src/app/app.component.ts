import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

clicks = [];
lineCreated=false;

onClickLog() {	


		this.lineCreated = !this.lineCreated ;
			
		this.clicks.push(new Date());
			}




}
