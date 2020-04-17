import React, { useEffect, useReducer, useState } from 'react'
import { reducer, inititalState } from '../reducer/index'
import { getDistance } from '../helpers/index'
import Map from './Map'
import Loading from './loading'

function GamePlay() {
    const [state, dispatch] = useReducer(reducer, inititalState)
    const { initialLat, initialLng, index, city, score, latOrigin, lngOrigin, loading } = state 

    useEffect(() => {
        dispatch({ type: 'SET_MAP' })
    }, [index, initialLng, initialLat])

    const _onClick = async ({ lat, lng }) => {
        dispatch({type: 'SET_LOADING', value: true})
        try {
            const origin = `${latOrigin},${lngOrigin}`
            const destination = `${lat},${lng}`
            const { data } = await getDistance(origin, destination)
            const distance = data.rows[0].elements[0].distance.value
            console.log(data)
            if (distance <= 50000 && score >= 0 && index < 8) {
                dispatch({type: 'SET_LOADING', value: false})
                dispatch({type: 'SET_SCORE', value: distance/1000})
                dispatch({type: 'SET_INDEX', value: index + 1})
                dispatch({type: 'SET_MAP'})
            } else if (distance <= 50000 && score >= 0 && index === 8) {
                dispatch({type: 'SET_LOADING', value: false})
                dispatch({type: 'SET_INDEX', value: 0})
                dispatch({type: 'SET_SCORE'})
                dispatch({type: 'SET_MAP'})
                alert('congratulations. you win the game')
            }
            else {
                dispatch({type: 'SET_LOADING', value: false})
                dispatch({type: 'SET_INDEX', value: index})
                dispatch({type: 'SET_MAP'})
                alert(`its not ${city} city`)
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (score < 0) {
        dispatch({ type: 'SET_INDEX', value: 0 })
        dispatch({type: 'SET_MAP'})
        dispatch({type: 'SET_SCORE'})
        alert('You lost. Restart Game.')
    }

    if (loading) return <Loading />

    return (
        <div className="App"
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <h3>Your Score: {score} </h3>
            <h3>Find {city} city </h3>
            <h5>just click on the map, when you are sure of the answer</h5>
            <h5>CTRL + Scroll to zoom in or zoom out</h5>
            <Map
                lat={initialLat}
                lng={initialLng}
                _onClick={_onClick}
            />
        </div>
    )
}

export default GamePlay