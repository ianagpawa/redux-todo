import { VisibilityFilters } from '../actions/actions';

const intialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state=initialState, action) {
    return state;
}
