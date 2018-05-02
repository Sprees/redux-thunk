## [Redux Thunk](https://github.com/gaearon/redux-thunk)

- Allows you to write an action creator that returns a function instead of an action
  - This allows you to have async functionality inside of your action creator or a conditional dispatch

### What is a thunk?
- A `thunk` is a function that wraps an expression to delay its evaluation
> Example from [react-redux](https://github.com/gaearon/redux-thunk) documentation:
```js
// Calculation of 1 + 2 is immediate
let x = 1 + 2 
// x === 3 // true

// Calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2
```

Another example of a `thunk` in React would be:
```js
<button onClick={ () => this.doSomething() }>Click Me!</button>
// onClick is a thunk!
```
### Setup
Yarn: `yarn add redux-thunk`  
NPM: `npm install --save redux-thunk`

To enable Redux Thunk:

- inside your `store`, import `applyMiddleware` from `redux`
- import the `redux-thunk` middleware
- inside your `createStore` function, call `applyMiddleware()` and insert `ReduxThunk` as an argument
```js
// store.js

// import `applyMiddleware` from redux
import { createStore, applyMiddleware } from 'redux'
// import `redux-thunk` middleware
import ReduxThunk from 'redux-thunk'
import reducer from './ducks/reducer'

const store = createStore(
  reducer, 
  // insert `applyMiddleware()` and give `ReduxThunk` as an argument
  applyMiddleware(ReduxThunk)
)
```

### Usage

```js
// reducer.js
import axios from 'axios'

const ADD_ONE = 'ADD_ONE'

const initialState = {
  number: 0
}

// Action creator that returns an Object with an `action` type and a value of 1
function addOne() {
  // return your action object
  return {
    type: ADD_ONE
    payload: 1
  }
}

// ReduxThunk allows you to return a function that takes 
// `dispatch` and `getState` functions as arguments
function addOneAsync() {
  return (dispatch, getState) => {
    // asynchronous setTimeout function that will invoke `addOne` after 1 second 
    setTimeout(() => {
      // using the available `dispatch` function
      dispatch(addOne())
    }, 1000)
  }
}

function addOneIfOdd() {
  return (dispatch, getState) => {
    // `getState()` will give you the current state so you can create a conditional
    // statement inside your action creator
    if(getState().number % 2 !== 0) {
      return
    }
    dispatch(addOne())
  }
}
```