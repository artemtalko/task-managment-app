import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.json'

const boardsSlice = createSlice({
    name: 'boards', 
    initialState : data.boards,
    reducers : {
        //write redusers there
    }
})

export default boardsSlice