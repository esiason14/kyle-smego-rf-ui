import { useState } from 'react'
import SidebarTopbar from './SidebarTopbar.jsx'
import SidebarRail from './SidebarRail.jsx'
import SidebarNav from './SidebarNav.jsx'
import './Sidebar.scss'

function Sidebar({
  activeSection = 'attendees',
  eventName,
  eventDate,
  eventLocation,
  userInitials,
}) {
  const [query, setQuery] = useState('')
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="sidebar">
      <SidebarTopbar
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((open) => !open)}
        userInitials={userInitials}
      />
      <SidebarRail eventName={eventName} userInitials={userInitials} />
      <SidebarNav
        navOpen={navOpen}
        activeSection={activeSection}
        query={query}
        onQueryChange={setQuery}
        eventName={eventName}
        eventDate={eventDate}
        eventLocation={eventLocation}
      />
    </div>
  )
}

export default Sidebar
