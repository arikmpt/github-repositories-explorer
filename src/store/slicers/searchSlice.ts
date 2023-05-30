import { createSlice } from '@reduxjs/toolkit'

interface SearchState {
  param: string;
}

const initialState: SearchState = {
  param: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setParam: (state, action) => {
      state.param = action.payload
    }
  }
})

export const { setParam } = searchSlice.actions

export default searchSlice.reducer