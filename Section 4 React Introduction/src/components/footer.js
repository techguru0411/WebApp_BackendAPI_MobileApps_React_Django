import React, { Component } from 'react';
import { CtxConsumer } from '../index';

class Footer extends Component{

    state = {
        name: '',
        age: 22,
        islogin: true
    }

    componentDidMount() {
        this.setState({name: 'MyName'});
    }

    changed = evt => {
        this.setState({name: evt.target.value});
        console.log(this.state.name);
    }

    render() {

        return(
            <CtxConsumer> 
                {(context) => {
                    return(
                        <div>
                            { context.animals.map( animal => {
                                return (
                                    <div key={animal}>
                                        <h1>{animal}</h1>
                                    </div>
                                );
                            }) }
                        </div>
                    )
                }}
            </CtxConsumer>
        )
    }
}

export default Footer;