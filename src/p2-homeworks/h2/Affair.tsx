import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType  // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.item}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={props.affair.priority === 'high' ? s.priority_red :
                            props.affair.priority === 'low' ? s.priority_green : s.priority_yellow}>
                {'[' + props.affair.priority + ']'}
            </div>
            <SuperButton onClick={deleteCallback} children={'x'} red/>
            {/*<button onClick={deleteCallback} className={s.button}>x</button>*/}
        </div>
    )
}

export default Affair
