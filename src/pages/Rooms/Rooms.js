import React from 'react';
import Table from '../../components/UI/Table/Table';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import {db} from './../../utils/firebase';
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"; 
import './Rooms.scss'
import TabTitle from '../../components/UI/TabTitle';

const Rooms = () => {
  const [rooms, setRooms] = React.useState([]);
  const [roomNum, setRoomNum] = React.useState("");
  const [search, setSearch] =React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [bedNum, setBedNum] = React.useState("");
  const [roomPrice, setRoomPrice] =React.useState("");
  const [roomName, setRoomName] = React.useState("");
  const [roomType, setRoomType] = React.useState("");
  const [roomNumb, setRoomNumb] = React.useState("");
  const [add, setAdd] = React.useState(true);

  const fetchData = async () => {
    setRooms([]);
    const v = collection(db, "Rooms");
    const querySnapshot = await getDocs(v);
    querySnapshot.forEach((doc)=>{
      const object = {RoomId: doc.data().roomNum, RoomNum: doc.data().roomName, RoomType: doc.data().roomType,
                      BedNum: doc.data().bedNum, Status: doc.data().isRoomAvailable}
      setRooms(rooms=>[...rooms, object]);
    })
  }
  const performSearch = async (e) => {
    setSearchResult([]);
    e.preventDefault();
    const v = query(collection(db, "Rooms"),where("roomName","==",roomNum));
    const querySnapshot = await getDocs(v);
    if(!querySnapshot.empty){
      setIsLoading(false);
      const doc = querySnapshot.docs[0];
      const object = {RoomId: doc.data().roomNum, RoomNum: doc.data().roomName, RoomType: doc.data().roomType,
                      BedNum: doc.data().bedNum, MaxOccupants: doc.data().isRoomAvailable}
      setSearch(true);
      setSearchResult(searchResult=>[...searchResult, object]);
    }
  }

  const addRoom = async ()=>{
    await addDoc(collection(db, "Rooms"), {
      roomName: roomName,
      roomNum: roomNumb,
      roomType: roomType,
      roomPrice: roomPrice,
      roomDesc: "",
      roomID: "",
      isRoomAvailable: true,
      bedNum: bedNum,
      image_url: "",
    });
    setAdd(!add);
  }

  const updateRoomNum = (event) => {
        setRoomNum(event.target.value);
    };
    const updateRoomNumb = (event) => {
      setRoomNumb(event.target.value);
  };
  const updateRoomPrice = (event) => {
        setRoomPrice(event.target.value);
    };
    const updateRoomName = (event) => {
      setRoomName(event.target.value);
  };
  const updateRoomType = (event) => {
        setRoomType(event.target.value);
    };
    const updateBedNum = (event) => {
      setBedNum(event.target.value);
  };
  React.useEffect(()=>{
    fetchData();
  },[add])

  TabTitle('Travel Inn | Rooms');
  return ( 
    <div className='rooms-container'>
      <TitleCard pageTitle='Rooms' />

      <div className="room-form">
        <div className="find-form">
          <input type="text" className="find-rnum" placeholder='Room Number' value={roomNum} onChange={updateRoomNum}/>
          <button className="find" onClick={performSearch}>Find Room</button>
        </div>
        <div className="add-form">
          <div className="add-inputs">
            <input type="text" className="add-room" placeholder='Room ID' value={roomNumb} onChange={updateRoomNumb}/>
            <input type="text" className="add-room" placeholder='Room No' value={roomName} onChange={updateRoomName}/>
            <input type="text" className="add-room" placeholder='Room Type' value={roomType} onChange={updateRoomType}/>
            <input type="text" className="add-room" placeholder='Bed No' value={bedNum} onChange={updateBedNum}/>
            <input type="text" className="add-room" placeholder='RoomPrice' value={roomPrice} onChange={updateRoomPrice}/>

          </div>

          <button className="add" onClick={addRoom}>Add Room</button>
        </div>
      </div>

      <Table title='Room Info' subtitle='All Available Rooms' roomDetails={rooms} isSearch={search}
        result={searchResult} loading={isLoading}/>
    </div>
  )
}

export default Rooms;
