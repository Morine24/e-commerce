import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  faSearch = faSearch;
  faUser = faUser;
  
}
