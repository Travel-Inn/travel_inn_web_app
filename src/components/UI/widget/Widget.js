import './Widget.scss';
import CountUp from 'react-countup';

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Widget = ({fig1, fig2, fig3, sub1, sub2, prefix, suffix, title}) => {
    return (
        <div className="container">
            <div className="widget">
                <div className="top">
                <CountUp end={fig1} suffix={suffix} prefix={prefix}/>
                    <ArrowUpwardOutlinedIcon className='icon' />

                </div>
                <div className="bottom">
                    <div className="booked">
                        <span className="bnumber"><CountUp end={fig2} /></span>
                        <span className="bbooked">{sub1}</span>
                    </div>
                    <div className="checkin">
                        <span className="cnumber"><CountUp end={fig3} /></span>
                        <span className="ccheckin">{sub2}</span>
                    </div>
                </div>
            </div>
            <span className="branch-name">{title}</span>
        </div>

    );
}

export default Widget;