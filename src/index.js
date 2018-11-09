import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const reducer = (state = {} , action)=>{
    const { type , payload} = action;
}

const store = createStore(reducer);

class App extends React.Component{
    render(){
        return <div>
            this is app page
        </div>
    }
}

ReactDOM.render(<App />,document.getElementById('root'));