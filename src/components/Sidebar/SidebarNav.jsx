import { SearchIcon, StatusDot } from '../icons/Icons.jsx'

const NAV_SECTIONS = [
  { key: 'guide', label: 'Guide' },
  {
    key: 'attendees',
    label: 'Attendees',
    children: [
      'Attendees',
      'Attendee types',
      'Packages',
      'Reg codes',
      'Discounts',
    ],
  },
  { key: 'content', label: 'Content' },
  { key: 'exhibitors', label: 'Exhibitors' },
]

function SidebarNav({
  navOpen,
  activeSection,
  query,
  onQueryChange,
  eventName,
  eventDate,
  eventLocation,
}) {
  return (
    <div
      id="sidebar-panel"
      className={`sidebar__nav${navOpen ? ' sidebar__nav--open' : ''}`}
    >
      <div className="sidebar__header">
        <p className="sidebar__title">{eventName}</p>
        <div className="sidebar__subtitle">
          <span>{eventLocation}</span>
          <span className="sidebar__subtitle-dot" aria-hidden="true" />
          <span>{eventDate}</span>
        </div>
      </div>

      <label className="sidebar__search">
        <span className="sr-only">Search</span>
        <SearchIcon className="sidebar__search-icon" />
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </label>

      <nav className="sidebar__tree" aria-label="Event sections">
        <ul>
          {NAV_SECTIONS.map((section) => {
            const isActive = section.key === activeSection
            return (
              <li key={section.key} className="sidebar__section">
                <a
                  href={`#${section.key}`}
                  className={`sidebar__item${isActive ? ' sidebar__item--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <StatusDot className="sidebar__dot" active={isActive} />
                  {section.label}
                </a>
                {isActive && section.children && (
                  <ul className="sidebar__children">
                    {section.children.map((child) => (
                      <li key={child}>
                        <a
                          href={`#${child.toLowerCase().replace(/\s+/g, '-')}`}
                          className="sidebar__child"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SidebarNav
