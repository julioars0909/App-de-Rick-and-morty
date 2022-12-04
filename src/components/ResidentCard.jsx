import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './styles/residentCard.css'
const ResidentCard = ({ url }) => {
    const [resident, setresident] = useState()

    useEffect(() => {

        axios.get(url)
            .then(res => setresident(res.data))
    }, [])





    return (
        <article className='card'>
            <header className='card--header'>
                <img className='card--avatar' src={resident?.image} alt="" />
                <div className='card--circle-container'>
                    <div className={`circle ${resident?.status}`}></div>
                    <span className='card--circle-label'>{resident?.status}</span>
                </div>
            </header>
            <section className='card--body'>
                <h3 className='card--name'>{resident?.name}</h3>
                <ul className='card--list'>
                    <li className='card--item'><span className='card--item-label'>Species
                    </span> <span className='card--item-value'>{resident?.species}</span></li>
                    <li className='card--item'><span className='card--item-label'>Origin
                    </span> <span className='card--item-value'>{resident?.origin.name}</span></li>
                    <li className='card--item'><span className='card--item-label'>Episodes
                    </span><span className='card--item-value'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard