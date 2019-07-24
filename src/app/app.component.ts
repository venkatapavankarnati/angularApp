import { Component } from "@angular/core";
import { DataService } from './app.data';
import { Inject,} from '@angular/core';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "SandBox";
  data: any[];
    //
    constructor(@Inject(DataService) private dataService: DataService) {
        this.data = dataService.getData();
    }
    montht = this.data[1].month;
}
