import { Component } from '@angular/core';
import { TestFormComponent } from "./components/test-form/test-form.component";
import { InformationsComponent } from "./components/informations/informations.component";

@Component({
  selector: 'app-root',
  imports: [TestFormComponent, InformationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
