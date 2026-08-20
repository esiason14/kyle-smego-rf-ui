import { LogoMark, MenuIcon, CloseIcon } from '../icons/Icons.jsx'
import SidebarAvatar from './SidebarAvatar.jsx'

function SidebarTopbar({ navOpen, onToggleNav, userInitials }) {
  return (
    <div className="sidebar__topbar">
      <LogoMark className="sidebar__logo" height={40} />
      <div className="sidebar__topbar-actions">
        <SidebarAvatar initials={userInitials} />
        <button
          type="button"
          className="sidebar__menu-toggle"
          aria-expanded={navOpen}
          aria-controls="sidebar-panel"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          onClick={onToggleNav}
        >
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  )
}

export default SidebarTopbar
