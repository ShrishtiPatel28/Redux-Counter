import { useState } from 'react'
import Counter from './context/Counter'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './Redux/counterReducer.js'

function App() {
  const [count, setCount] = useState(0)
  const store = configureStore({
    reducer:{
       counter:counterReducer
    }
  })
  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  )
}

export default App;
