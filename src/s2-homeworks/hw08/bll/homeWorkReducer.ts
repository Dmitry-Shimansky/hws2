import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = state.sort(action.payload === 'down'
                ? (a, b) => b.name.localeCompare(a.name)
                : (a, b) => a.name.localeCompare(b.name));
            return state = newState // need to fix
        }
        case 'check': {
            const newState = state.filter((user) => user.age >= action.payload)
                .sort((a, b) => a.name.localeCompare(b.name));
            return state = newState // need to fix
        }
        default:
            return state
    }
}
