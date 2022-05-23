import { Tutorial, ngxsAppStateModel } from './../models/tutorial.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { AddTutorial, RemoveTutorial,AddName } from './../actions/tutorial.actions';

//returns a post method with return number after 2 sec
import { OrderService } from '../order.service';



export class TutorialStateModel {
    tutorials!: Tutorial[];
    //ngxsAppClass!: ngxsAppStateModel;
    username!: string;
	orderId!: number;
	status!: 'pending' | 'confirmed' | 'declined';

}


@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: [],
        username: '',
        orderId: Math.floor(Math.random() * 23000),
        status: 'pending'        
    }
})

export class TutorialState {
    //here we define selectors and actions
    constructor() {}
    @Selector() //this selector will populate from the store to the component
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
    }

    @Selector() //this selector will populate from the store to the component
    static getngxsAppInfo(state: TutorialStateModel) {
        return {
            username: state.username,
            orderId: state.orderId,
            status: state.status   
        }
    }

    @Action(AddTutorial)//Definition of action is done here and it will act on the store as a reducer and backend as a effect
    add(
        { getState, patchState }: StateContext<TutorialStateModel>,
        { payload }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        });
    }

    @Action(AddName)//Definition of action is done here and it will act on the store as a reducer and backend as a effect
    addName(
        { patchState }: StateContext<TutorialStateModel>,
        { payload }: AddName) {

        patchState({   
                username: payload
        });
    }

    @Action(RemoveTutorial)
    remove(
        { getState, patchState }: StateContext<TutorialStateModel>,
        { payload }: RemoveTutorial) {
        const state = getState();
        patchState({
            tutorials: state.tutorials.filter(tutorial => tutorial.name !== payload)
                });
    }

}