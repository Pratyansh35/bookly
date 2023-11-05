import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookly';
}

$(document).ready(function () {
  $(".card-btn").click(function () {
      var currentCount = parseInt($("#wishlist-count").text());
      $("#wishlist-count").text(currentCount + 1);
  });
});