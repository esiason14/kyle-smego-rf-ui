import Sidebar from './components/Sidebar/Sidebar.jsx'
import EventHeader from './components/EventHeader/EventHeader.jsx'
import SetupGuide from './components/SetupGuide/SetupGuide.jsx'
import './App.scss'

const EVENT = {
  name: 'RainFocus Summit',
  date: 'December 15th',
  location: 'Lehi, Utah',
  locationShort: 'Lehi, UT',
}
const USER_INITIALS = 'FL'

function App() {
  return (
    <div className="app">
      <Sidebar
        activeSection="attendees"
        eventName={EVENT.name}
        eventDate={EVENT.date}
        eventLocation={EVENT.locationShort}
        userInitials={USER_INITIALS}
      />
      <main className="app__content">
        <EventHeader
          name={EVENT.name}
          date={EVENT.date}
          location={EVENT.location}
          onEdit={() => {}}
        />
        <SetupGuide />
      </main>
    </div>
  )
}

export default App
