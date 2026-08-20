function StepLabel({ number, children }) {
  return (
    <p className="setup-guide__step-label">
      <strong>Step {number}:</strong> {children}
    </p>
  )
}

export default StepLabel
