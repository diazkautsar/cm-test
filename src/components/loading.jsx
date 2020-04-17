import React from 'react'

import Loader from 'react-loader-spinner'

export default function loading() {
    return (
        <>
            <div className="loading">
                <Loader
                    type="ThreeDots"
                    color="black"
                    height={500}
                    width={500}
                />
            </div>
        </>
    )
}