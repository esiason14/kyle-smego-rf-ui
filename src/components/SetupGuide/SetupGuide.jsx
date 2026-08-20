import {
  AttendeeIcon,
  ArrowStepIcon,
  PlusCircleIcon,
  LaptopIcon,
} from '../icons/Icons.jsx'
import StepLabel from './StepLabel.jsx'
import GuideCard from './GuideCard.jsx'
import './SetupGuide.scss'

const BASE_SETTINGS = [
  {
    title: 'General',
    description: 'Define Attendee types & attributes',
  },
  {
    title: 'Title',
    description:
      'Description that explains the value goes here. Description that explains the value goes here.',
  },
  {
    title: 'Title',
    description:
      'Description that explains the value goes here. Description that explains the value goes here.',
  },
]

const REGISTRATION_WORKFLOWS = [
  'Attendee Registration',
  'Attendee Registration',
  'Attendee Registration',
]

function SetupGuide() {
  return (
    <section className="setup-guide">
      <h2 className="setup-guide__title">Event setup guide</h2>
      <p className="setup-guide__intro">
        See the available list of modules below. We suggest that you start
        with the attendee module.
      </p>

      <hr className="setup-guide__divider" />

      <div className="setup-guide__section">
        <div className="setup-guide__section-heading">
          <AttendeeIcon size={35} />
          <h3>Attendee</h3>
        </div>

        <div className="setup-guide__step">
          <StepLabel number={1}>Base settings.</StepLabel>
          <div className="base-settings-card">
            {BASE_SETTINGS.map((item, i) => (
              <div className="base-settings-card__col" key={i}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="setup-guide__step">
          <StepLabel number={2}>Build registration workflows.</StepLabel>
          <div className="workflow-grid">
            {REGISTRATION_WORKFLOWS.map((label, i) => (
              <GuideCard
                key={i}
                href="#registration"
                cardClassName="workflow-card"
                icon={<ArrowStepIcon className="workflow-card__icon" />}
                title={label}
                description="Start by creating a general registration workflow"
              />
            ))}
            <button type="button" className="workflow-card workflow-card--add">
              <PlusCircleIcon />
              <span>Add Registration Workflow</span>
            </button>
          </div>
        </div>

        <div className="setup-guide__step">
          <StepLabel number={3}>Design post-registration experiences.</StepLabel>
          <GuideCard
            href="#attendee-portal"
            cardClassName="portal-card"
            icon={<LaptopIcon className="portal-card__icon" />}
            title="Attendee Portal"
            description="Manage the portal that attendees will see after they’ve register for your event."
          />
        </div>
      </div>
    </section>
  )
}

export default SetupGuide
