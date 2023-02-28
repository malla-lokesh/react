import './Card.css'

const Card = (props) => {
    const allPropsClasses = 'card ' + props.className
    return <div className={allPropsClasses}>{props.children}</div>
}

export default Card