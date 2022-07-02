import './card.css'

const Card = ({title, description, deleteItem, color}) => {
  return (
      <div className='card-container'>
          <div className='card-color' style={{backgroundColor: `#${color}`}}/>
          <div className='card-text'>
              <div className='card-title'>{title}</div>
              <div className='card-description'>{description}</div>
              <button onClick={deleteItem}>X</button>
          </div>
      </div>
  )
}

export default Card;