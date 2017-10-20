import { Component } from '@angular/core';
import { DataService } from './services/twitter-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public list: { name: string, url: string }
    constructor(
        private dataService: DataService
    ) { }


    queryTwitter(query) {
        this.dataService.queryTwitter(query).subscribe(
            data => {
                // console.log(data);
                this.list = data[0].trends
            },
            error => console.log(error)
        )
    }

}
