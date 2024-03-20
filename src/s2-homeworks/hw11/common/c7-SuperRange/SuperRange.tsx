import React from 'react'
import Slider from '@mui/material/Slider'
import {SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return <Slider sx={{width: 150, color: '#00CC22'}}
                   {...props}
    />
}
// отдаём слайдеру пропсы если они есть (value на пример там внутри/>


export default SuperRange
