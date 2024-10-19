import { Component } from '@angular/core';
import { TopComponent } from "../top/top.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [TopComponent,FontAwesomeModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
    faSearch = faSearch;
  

}
