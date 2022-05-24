import Table from '../../components/UI/Table/Table';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Rooms.scss'
import TabTitle from '../../components/UI/TabTitle';

const Rooms = () => {
  TabTitle('Travel Inn | ROOMS');
  return (
    <div className='rooms-container'>
      <TitleCard pageTitle='Rooms' />

      <div className="room-form">
        <div className="find-form">
          <input type="text" className="find-rnum" placeholder='Room Number' />
          <button className="find">Find Room</button>
        </div>
        <div className="add-form">
          <div className="add-inputs">
            <input type="text" className="add-room" placeholder='Room ID' />
            <input type="text" className="add-room" placeholder='Room No' />
            <input type="text" className="add-room" placeholder='Room Type' />
            <input type="text" className="add-room" placeholder='Bed No' />
            <input type="text" className="add-room" placeholder='Max Occupants' />

          </div>

          <button className="add">Add Room</button>
        </div>
      </div>

      <Table title='Room Info' subtitle='All Available Rooms' />
    </div>
  )
}

export default Rooms;