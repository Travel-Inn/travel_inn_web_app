import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import {db} from './utils/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, updateProfile } from 'firebase/auth'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard404 from './pages/dashboard404/Dashboard404';
import Guests from './pages/Guests/Guests';
import Transactions from './pages/Transactions/Transactions';
import Rooms from './pages/Rooms/Rooms';
import Bookings from './pages/Bookings/Bookings';
import Analytics from './pages/Analytics/Analytics';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Profile/settings';
import MyInfo from './pages/Profile/myInfo';
import NewAdmin from './pages/Profile/newAdmin';

function App() {
  const [adminDetails, setAdminDetails] = useState([]);
  const [user, setUser] = useState("");
  getAuth().onAuthStateChanged(
    function(user){
        if(user!=null)
        setUser(user);
    }
  ); 
  const fetchData = async () => {
      const v = query(collection(db, "admins"), where("email", "==",""+user.email ));
      const querySnapshot = await getDocs(v);
      if(!querySnapshot.empty){
        const doc = querySnapshot.docs[0];
          const object = {name: doc.data().name, email:doc.data().email, fname: doc.data().firstName,
                          lname: doc.data().lastName, sex: doc.data().gender, phone: doc.data().phone,
                        pass: doc.data().priviledged}
          setAdminDetails(object); 
      }
  }

  useEffect(()=>{
      if(user!=null){
        fetchData();
        }
      console.log(adminDetails);
  },[user]);

  useEffect(
    () => {
      AOS.init({duration:900, easing:'ease-in-out'});
    },[]
  )
  

  return (
    <div className="App">
          <Sidebar />
          <div className="main-content">
            <Navbar adminName={user.displayName}/>
            <Routes>
              <Route path='/'  element={<Dashboard adminName={user.displayName}/>} />
              <Route path='/guests' element={<Guests/>} />
              <Route path='/rooms' element={<Rooms/>} />
              <Route path='/bookings' element={<Bookings/>} />
              <Route path='/transactions' element={<Transactions/>} />
              <Route path='/analytics' element={<Analytics/>} />
              <Route path='/profile' element={<Profile adminProfile={adminDetails} />}>
                <Route path='/profile' element={<Navigate to = "information"/>} />
                <Route path="settings" element={<Settings adminProfile={adminDetails}/>}/>
                <Route path="information" element={<MyInfo adminProfile={adminDetails}/>} />
                <Route path="newAdmin" element={<NewAdmin adminProfile={adminDetails}/>} />
              </Route>

              <Route path='*' element={<Dashboard404 />} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
