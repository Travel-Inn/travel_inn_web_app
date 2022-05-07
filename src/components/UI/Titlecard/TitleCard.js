import './TitleCard.scss'

const TitleCard = ({pageTitle}) => {


  return (
    <div className='titlecard'>
        <span data-aos='fade-right'>{pageTitle}</span>
    </div>
  )
}

export default TitleCard;