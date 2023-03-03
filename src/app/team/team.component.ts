import { Component, OnInit } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigServiceService } from '../config-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
icone =faLinkedin;
team:any;
  constructor(private service:ConfigServiceService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.get("/equipe-membres").subscribe(data=>{
      this.team=data;
      this.spinner.hide();
    })
  }

}
