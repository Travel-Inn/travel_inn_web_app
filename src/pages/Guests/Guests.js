import TabTitle from '../../components/UI/TabTitle';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Guests.scss';

const Guests = () => {
    TabTitle('Travel Inn | Guests');

    


  return (
    <div className='guests-container'>
        
        <TitleCard pageTitle="Guests"/>
    </div>
  )
}

export default Guests;