import './styles/InfoLocation.css'

const InfoLocation = ( { location } ) => {
    return (
    <article className='location'>
        <h2 className='location_name'>{location?.name}</h2>
        <ul className='location_info'>
            <li className='location_item'><span className='location_label'>Tipe: </span><span>{location?.type}</span></li>
            <li className='location_item'><span className='location_label'>Dimension: </span><span>{location?.dimension}</span></li>
            <li className='location_item'><span className='location_label'>Population: </span><span>{location?.residents.length}</span></li>
        </ul>
    </article>
    )
}

export default InfoLocation