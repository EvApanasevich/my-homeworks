import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const Affairs: React.FC<AffairsPropsType> = ({data, filter, setFilter, deleteAffairCallback}) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {setFilter('all')} // need to fix
    const setHigh = () => {setFilter('high')}
    const setMiddle = () => {setFilter('middle')}
    const setLow = () => {setFilter('low')}

    return (
        <div>
            {mappedAffairs}
            <SuperButton className={filter === 'all' ? s.active_button : ''}
                         onClick={setAll} children={'all'}
            />
            <SuperButton className={filter === 'high' ? s.active_button : ''}
                         onClick={setHigh} children={'higt'}
            />
            <SuperButton className={filter === 'middle' ? s.active_button : ''}
                         onClick={setMiddle} children={'middle'}
            />
            <SuperButton className={filter === 'low' ? s.active_button : ''}
                         onClick={setLow} children={'low'}
            />
        </div>
    )
}

export default Affairs
