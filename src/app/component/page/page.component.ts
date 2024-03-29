import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @Input()
  title: String = "";
  @Input()
  loaded: boolean = true;
}
