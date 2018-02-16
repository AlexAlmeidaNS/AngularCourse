import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

clicks = [];
numberClicks=0;
lineCreated=false;

onClickLog() {	


		this.lineCreated = !this.lineCreated ;
			
			this.numberClicks += 1;

			this.clicks.push(this.numberClicks);
			}




}
