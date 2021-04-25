import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPress}
                error={error}
                placeholder={'enter your name'}
            />
            <SuperButton onClick={addUser} children={'add name'}/>
            {/*<button className={s.butt} onClick={addUser}>add</button>*/}
            <span className={s.totUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
