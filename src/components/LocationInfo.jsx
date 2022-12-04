import React from 'react'

function LocationInfo({ location }) {

    return (
        <article className='location'>
            <h2 className='location--title' >{location?.name}</h2>
            <ul className='location--list'>
                <li className='location--item'><span className='location--info'>Type: </span>{location?.type} </li>
                <li className='location--item'><span className='location--info'>Dimension: </span>{location?.dimension}</li>
                <li className='location--item'><span className='location--info'>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>

    )
}

export default LocationInfo