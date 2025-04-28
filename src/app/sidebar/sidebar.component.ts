import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    standalone: false
})
export class SidebarComponent {

 name=true;
 
  showUserDetails() {
   alert("User clicked")
  }

  showActions() {
   // alert("Actions clicked")
  }

  showSettings() {
    //alert("Settings clicked")
  }
}
