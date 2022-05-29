import React from 'react'
import './AnTopW.scss'
import CountUp from 'react-countup';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import MenuBookIcon from '@mui/icons-material/MenuBook';




const AnTopW = (props) => {
  return (
    <div className='AnTopW-container'>

        <h3 className="Antitle">{props.title}</h3>

        <div className="icon-val">
            {props.icon === 'GroupIcon' && <GroupIcon className='icon'/>}
            {props.icon === 'AttachMoneyIcon' && <AttachMoneyIcon className='icon'/>}
            {props.icon === 'BedIcon' && <BedIcon className='icon'/>}
            {props.icon === 'MenuBookIcon' && <MenuBookIcon className='icon'/>}
            <h2 className="value"><CountUp  end={props.value} suffix={props.suffix} /></h2>

        </div>

    </div>
  )
}

export default AnTopW;