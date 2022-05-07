import Table from '../../components/UI/Table/Table';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Rooms.scss'
import TabTitle from '../../components/UI/TabTitle';

const Rooms = () => {
  TabTitle('Travel Inn | ROOMS');
  return (
    <div className='rooms-container'>
      <TitleCard pageTitle='Rooms' />
      <Table />
    </div>
  )
}

export default Rooms;