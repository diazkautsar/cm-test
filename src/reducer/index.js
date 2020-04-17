import { cities } from '../data.json'

export const inititalState = {
    index: 0,
    city: '',
    initialLat: 48.054545,
    initialLng: 12.420329,
    latOrigin: '',
    lngOrigin: '',
    score: 1500,
    loading: false
}

export function reducer (state, action) {
    switch (action.type) {
        case 'SET_MAP':
            return {
                ...state,
                city: cities[state.index].name,
                latOrigin: cities[state.index].position.lat,
                lngOrigin: cities[state.index].position.lng
            }    
        case 'SET_SCORE':
            return {
                ...state,
                score: state.score - action.value
            }
        case 'SET_INDEX':
            return {
                ...state,
                index: action.value
            }
        case 'SET_SCORE':
            return {
                ...state,
                score: 1500
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.value
            }
    }
    return state
}
