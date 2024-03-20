const initState = {
    isLoading: false,
}

export const loadingReducer = (state :LoadingReducer= initState, action: ReturnType<typeof loadingAC>) => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE_LOADING', isLoading})

type LoadingReducer = {
    isLoading: boolean
}