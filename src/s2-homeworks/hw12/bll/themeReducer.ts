const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChType): { themeId:number } => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state,themeId:action.id};

        default:
            return state
    }
}



export const changeThemeId = (id: number): ChType => {
    return { type: 'SET_THEME_ID', id } as const
}  // fix any
type ChType = {
    type: 'SET_THEME_ID',
    id: number

}