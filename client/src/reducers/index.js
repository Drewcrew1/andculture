
import {combineReducers} from 'redux';

import auth from './auth';
import search from './search';
import favs from './favs';

export default combineReducers({

    auth,
    search,
    favs

});