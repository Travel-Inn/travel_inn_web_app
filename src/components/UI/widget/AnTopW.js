import React from 'react'
import './AnTopW.scss'
import CountUp from 'react-countup';
import GroupIcon from '@mui/icons-material/Group';


const AnTopW = ({title, value, icon}) => {
  return (
    <div className='AnTopW-container'>

        <h3 className="Antitle">{title}</h3>

        <div className="icon-val">
            {icon === 'GroupIcon' && <GroupIcon className='icon'/>}
            <h2 className="value"><CountUp end={value} /></h2>

        </div>

    </div>
  )
}

export default AnTopW;