import { Component, OnInit } from '@angular/core';
import { Store,Select } from '@ngxs/store';
import { AddTutorial,AddName } from '../actions/tutorial.actions';
import { TutorialState, } from './../state/tutorial.state';
import { Observable } from 'rxjs';
import { ngxsAppStateModel } from './../models/tutorial.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  usernameEntered='';
  @Select(TutorialState.getngxsAppInfo)
  ngxsInfo$!: Observable<ngxsAppStateModel>;

  ngOnInit(): void {
  }

  
  constructor(private store: Store) {

  }

  //Dispatch an action by the user
  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  clickHandler(useraddedname:string) {
    this.store.dispatch([
      new AddName(useraddedname)
    ])
  };
}
