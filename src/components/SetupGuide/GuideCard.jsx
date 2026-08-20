function GuideCard({ href, cardClassName, icon, title, description }) {
  return (
    <a className={cardClassName} href={href}>
      <div className={`${cardClassName}__header`}>
        {icon}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </a>
  )
}

export default GuideCard
