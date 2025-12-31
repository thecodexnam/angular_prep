import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})


export class AdminComponent implements OnInit,AfterViewInit, OnDestroy {  

  constructor(){
    console.log('Constructor Executed')
    //Propert initialization
  }
  ngOnInit(): void {
    console.log('ngOnit')
    //API call
    //Subscription
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');  
  }

}
