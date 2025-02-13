import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[]
const setUsers = (a: UserType[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setUsers as React.Dispatch<React.SetStateAction<UserType[]>> , initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
