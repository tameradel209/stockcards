import * as ActionTypes from '../actions/actionTypes'
import db from '../../../assets/test.json'

const copy = JSON.parse(JSON.stringify(db))

const initialState = {past:[], present:copy, future:[]}

const UndoRedo = (state = initialState, action) =>{

    switch(action.type){
        case ActionTypes.INITIALIZETRACK :
            state.present = action.payload
            return state

        case ActionTypes.UPDATETRACK :
            state.past.push(state.present)
            state.present = action.payload
            return state
        
        case ActionTypes.UNDO :
            state.future.push(state.present)
            state.present=state.past.pop()
            return state

        case ActionTypes.REDO :
            state.past.push(state.present)
            state.present=state.future.pop()
            return state
            
        default :
            return state
    }
}

export default UndoRedo