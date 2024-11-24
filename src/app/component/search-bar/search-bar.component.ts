import { Component, Output ,EventEmitter ,Input, output, input, model} from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

 
  searchChange = output<string>(); 
  search = model<string> ('Initial');

  searchButtonClicked = output({alias: 'submit'});
  searchClick()
  {
    this.searchButtonClicked.emit() ; 
  }

}
