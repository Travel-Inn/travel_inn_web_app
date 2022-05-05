import './Login.scss';
import PersonIcon from '@mui/icons-material/Person';
import TabTitle from '../../components/UI/TabTitle';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';




export default function Login() {

    TabTitle('Travel Inn | Log In');
    return (
        <div className="login-container">

            <div className="other-part">
                <img src={require('../../assests/Pictures/hotel-presidente-4s.jpg')} alt="hotel-pic" className="login-img" />
            </div>

            <div className="form">
                <form className='login-form'>
                    <div className="login-admin">
                        <PersonIcon className='login-admin-icon' />
                        <input type='text' placeholder='Username...' className='username' />

                    </div>
                    <div className="tel">
                        <PhoneForwardedIcon className='login-admin-icon'/>
                        <span className="prefix">+233</span>
                        <input type="tel" placeholder='0550742172' className='phone' />

                    </div>
                </form>

            </div>
        </div>
    );
}