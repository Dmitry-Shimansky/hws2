import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: Function) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    name === '' ? setError('Ошибка! Введите имя!') : setName('');
    addUserCallback(name);
}

export const pureOnBlur = (name: string, setError: Function) => { // если имя пустое - показать ошибку
    if (name === '') setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: KeyboardEvent, addUser: Function) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const value = e.currentTarget.value;
        setName(value) // need to fix
        value ? setError('') : setError('Ошибка! Введите имя!')
        // error && setError('Ошибка! Введите имя!')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers: number = users.length // need to fix
    const lastUserName: string = users[users.length - 1]?.name || '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
