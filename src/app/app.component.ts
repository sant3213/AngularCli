import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyAPN5Zhcu1cBv2jQJUCoi5dhV4WHlbNS7c",
      authDomain: "appcompras-572c2.firebaseapp.com",
    });
    }
   
}
