import { createStore } from 'redux';

import {hotColdReducer} from './components/reducers'

export default createStore(hotColdReducer);