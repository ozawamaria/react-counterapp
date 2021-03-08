import React from 'react';

import Counter from './components/Counter';

const App = () => {
    return(
        <div className='ui container' style={{marginTop: '20px'}}>
            <Counter />
            <Clock />
        </div>
    );
}

class Clock extends React.Component{
      render(){
        this.now=new Date();
        this.time =`${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
       return <p>{this.time}</p>
 };
};

setInterval('render()',1000);

export default App;