import { EventIcon } from '../icons/Icons.jsx'
import './EventHeader.scss'

function EventHeader({ name, date, location, onEdit }) {
  return (
    <header className="event-header">
      <div className="event-header__info">
        <EventIcon size={95} className="event-header__icon" alt={`${name} logo`} />
        <div className="event-header__title-block">
          <h1 className="event-header__name">{name}</h1>
          <div className="event-header__meta">
            <p className="event-header__date">{date}</p>
            <p className="event-header__location">{location}</p>
          </div>
        </div>
      </div>
      <button type="button" className="event-header__edit" onClick={onEdit}>
        Edit event
      </button>
    </header>
  )
}

export default EventHeader
