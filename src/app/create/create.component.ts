import { Component, OnInit } from '@angular/core';
import { Store,Select } from '@ngxs/store';
import { AddTutorial } from '../actions/tutorial.actions';
import { TutorialState } from './../state/tutorial.state';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

 
  ngOnInit(): void {
  }

  
  constructor(private store: Store) {

  }

  //Dispatch an action by the user
  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

}
