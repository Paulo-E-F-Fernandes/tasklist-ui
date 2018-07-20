// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public constructor (private titleService: Title, public translateService: TranslateService) {
    this.titleService.setTitle('Task List');
    
    translateService.setDefaultLang('pt');
    translateService.use('pt');
  }

}