import './card.css'

const Card = ({title, description, deleteItem, color}) => {
  return (
      <div className='card-container' style={{borderColor: `#${color}`}}>
          <div className='card-color' style={{backgroundColor: `#${color}`}}/>
          <div className='card-text'>
              <div className='card-title'>{title}</div>
              <div className='card-description'>{description}</div>
          </div>
              <button id='button' onClick={deleteItem}>X</button>
      </div>
  )
}

export default Card;