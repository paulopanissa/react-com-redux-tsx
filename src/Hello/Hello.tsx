import React, { Component } from 'react';

class Hello extends Component<{ sayHello: any}, any> {

    constructor(props: any) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(): void {
        this.props.sayHello()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>Clique Aqui!</button>
            </div>
        )
    }
}

export default Hello;
