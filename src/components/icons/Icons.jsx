import navLogo from '../../assets/icons/nav-logo.svg'
import dotActive from '../../assets/icons/dot-active.svg'
import dotInactive from '../../assets/icons/dot-inactive.svg'
import attendeeIcon from '../../assets/icons/attendee.svg'
import addCircleOutline from '../../assets/icons/add-circle-outline.svg'
import computerIcon from '../../assets/icons/computer.svg'
import logicArrow from '../../assets/icons/logic-arrow.svg'
import searchIcon from '../../assets/icons/search.svg'
import eventLogo from '../../assets/images/event-logo.png'

function ImageIcon({ className, src, alt = '', size, width, height }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width ?? size}
      height={height ?? size}
    />
  )
}

function StrokeIcon({ className, d }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function LogoMark({ className, height = 64, alt = 'RainFocus' }) {
  return (
    <ImageIcon className={className} src={navLogo} alt={alt} height={height} />
  )
}

export function EventIcon({ className, size = 54, alt = 'Event logo' }) {
  return (
    <ImageIcon className={className} src={eventLogo} alt={alt} size={size} />
  )
}

export function SearchIcon({ className, size = 16 }) {
  return <ImageIcon className={className} src={searchIcon} size={size} />
}

export function StatusDot({ className, active = false, size = 24 }) {
  return (
    <ImageIcon className={className} src={active ? dotActive : dotInactive} size={size} />
  )
}

export function AttendeeIcon({ className, size = 40, alt = '' }) {
  return (
    <ImageIcon className={className} src={attendeeIcon} alt={alt} size={size} />
  )
}

export function ArrowStepIcon({ className, size = 24 }) {
  return <ImageIcon className={className} src={logicArrow} size={size} />
}

export function PlusCircleIcon({ className, size = 24 }) {
  return <ImageIcon className={className} src={addCircleOutline} size={size} />
}

export function LaptopIcon({ className, size = 24 }) {
  return <ImageIcon className={className} src={computerIcon} size={size} />
}

export function MenuIcon({ className }) {
  return <StrokeIcon className={className} d="M3 6h16M3 11h16M3 16h16" />
}

export function CloseIcon({ className }) {
  return <StrokeIcon className={className} d="M5 5l12 12M17 5 5 17" />
}
