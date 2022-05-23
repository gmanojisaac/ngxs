// Action in ngrx is connected to reducer and effects
//Action will contact effect for talking to backend
//Backend will contact Action after it has some data
//Action will contact the reducer to mutate the store
//Component will contact the Action whenever user initiates it
//Component will use selector to populate itself.

import { Tutorial, ngxsAppStateModel } from './../models/tutorial.model';


export class AddTutorial {
	static readonly type = '[Tutorial] Add';

	constructor(public payload: Tutorial){
	}

}

export class AddName {
	static readonly type = '[ngxsAppStateModel] Add';

	constructor(public payload: string){
	}

}

export class RemoveTutorial {
	static readonly type = '[Tutorial] Remove';

	constructor(public payload: string) {
	}

}