import { Tutorial } from './../models/tutorial.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';

//returns a post method with return number after 2 sec
import { OrderService } from '../order.service';



export class TutorialStateModel {
    tutorials!: Tutorial[];
}


@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {
    //here we define selectors and actions
    constructor(private orderService: OrderService) {}
    @Selector() //this selector will populate from the store to the component
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
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