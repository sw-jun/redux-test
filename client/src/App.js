import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './Container.js';

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Container />
            </BrowserRouter>
        )
    }
}
export default App;