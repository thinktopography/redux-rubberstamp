import { Singleton } from '../component'
import reducer from './reducer'
import component from './toggler'
import * as actions from './actions'

export const [ Toggler, Reducer ] = Singleton('platform.components.toggler', component, reducer, actions)