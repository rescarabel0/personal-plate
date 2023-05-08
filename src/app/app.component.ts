import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "./app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup

  private sub

  constructor(private fb: FormBuilder, private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.route.queryParams.subscribe(q => {
      console.log(q)
    })
  }



  submit(): void {
    console.log(this.form)
  }

}
