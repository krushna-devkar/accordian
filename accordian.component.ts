import { Component, Input, OnInit } from '@angular/core';
import { Acco } from 'src/shared/model/acco.model';
import { AccoService } from 'src/shared/service/acco.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() set newAccoSetter(catchedData : any) {
    console.log('catchedData triger',catchedData)
    this.accordList.push(catchedData)
  } ;

  accordList : Acco[] = [];

  constructor(private  accoServe :AccoService){}

  ngOnInit(): void {
      this.accordList =this.accoServe.getaccoList();
      this.accoServe.accordianSubject.subscribe({
        next:(updatedaccordList: any)=>{
          this.accordList=updatedaccordList
        }
      })
  }

}
 