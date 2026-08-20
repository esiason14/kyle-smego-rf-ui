import { LogoMark, EventIcon } from '../icons/Icons.jsx'
import SidebarAvatar from './SidebarAvatar.jsx'

function SidebarRail({ eventName, userInitials }) {
  return (
    <div className="sidebar__rail">
      <div className="sidebar__rail-top">
        <button type="button" className="sidebar__logo-button" aria-label="RainFocus home">
          <LogoMark className="sidebar__logo" height={32} alt="" />
        </button>
        <button type="button" className="sidebar__rail-icon" aria-label={eventName}>
          <EventIcon size={32} alt="" />
        </button>
      </div>
      <div className="sidebar__rail-bottom">
        <SidebarAvatar initials={userInitials} />
      </div>
    </div>
  )
}

export default SidebarRail
