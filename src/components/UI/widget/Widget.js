import './Widget.scss';
import CountUp from 'react-countup';

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Widget = () => {
    return (
        <div className="container">
            <div className="widget">
                <div className="top">
                <CountUp end={80} suffix='%'/>
                    <ArrowUpwardOutlinedIcon className='icon' />

                </div>
                <div className="bottom">
                    <div className="booked">
                        <span className="bnumber"><CountUp end={31} /></span>
                        <span className="bbooked">Booked</span>
                    </div>
                    <div className="checkin">
                        <span className="cnumber"><CountUp end={19} /></span>
                        <span className="ccheckin">Check In</span>
                    </div>
                </div>
            </div>
            <span className="branch-name">Saint Dennis</span>
        </div>

    );
}

export default Widget;