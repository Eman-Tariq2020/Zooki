import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { Section10Component } from './section10/section10.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Section1Component,Section2Component,Section3Component,Section4Component,Section5Component,Section6Component,Section7Component,Section8Component,Section9Component,Section10Component,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zooki';
}
