import './card.css'

const Card = ({title, description, deleteItem}) => {
  return (
      <div className='card-container'>
          <div className='card-title'>{title}</div>
          <div className='card-description'>{description}</div>
          <button onClick={deleteItem}>X</button>
      </div>
  )
}

export default Card;