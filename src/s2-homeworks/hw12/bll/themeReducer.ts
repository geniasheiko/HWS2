export type ThemeType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action:ThemeType ):typeof initState => { // fix any
    switch (action.type) {
        // дописать
case 'SET_THEME_ID':
    return {
        ...state, themeId: action.id
    }
        default:
            return state
    }
}

export const changeThemeId = (id: number):ThemeType  => ({ type: 'SET_THEME_ID', id }) // fix any
