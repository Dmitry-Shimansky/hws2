type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: any): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeTheme = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeTheme => ({ type: 'SET_THEME_ID', id }) // fix any
