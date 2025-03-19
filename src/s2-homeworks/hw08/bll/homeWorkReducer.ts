import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: {type:string; payload:any}):UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            if(action.payload === 'up') {
                return copyState.sort((a,b)=> a.name.localeCompare(b.name))
            }
            if(action.payload === 'down') {
                return copyState.sort((a,b)=> b.name.localeCompare(a.name))
            }

            return state // need to fix
        }
        case 'check': {

            return state.filter(u => u.age >= action.payload) 
            // need to fix
        }
        default:
            return state
    }
}
