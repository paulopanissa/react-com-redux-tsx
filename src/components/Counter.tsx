import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterActions from "../actions/CounterActions";

class Counter extends Component<any, any> {

    constructor(props: any) {
        super(props)

        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement(e: React.MouseEvent<HTMLButtonElement>|React.KeyboardEvent<HTMLButtonElement>, value: number): void {
        // e.keyCode == 39
        this.props.onIncrement(value)
    }

    handleDecrement(e: React.MouseEvent<HTMLButtonElement>|number, value: number): void {
        this.props.onDecrement(value)
    }

    render() {
        /**
         * Styles para Teste
         */
        const style = {
            margin: '0 5px',
        }

        const btn = {
            border: '1px solid #778ca3',
            borderRadius: '3px',
            padding: '10px'
        }

        const vStyle = {
            color: '#3867d6'
        }

        const { value } = this.props;
        return (
            <div>
                <h2>Clicked: <span style={vStyle}>{value.value}</span> times</h2>
                <button style={btn}
                        onClick={(e) => { this.handleDecrement(e, value.value) }}> (-) Decrement</button>
                <span style={style}>|</span>
                <button style={btn}
                        onClick={(e) => { this.handleIncrement(e, value.value) }}>Increment (+)</button>
            </div>
        )
    }

}

/**
 * Map State to Props
 * @param state
 */
const mapStateToProps = (state: any) => {
    return {
         value: state.counter
    }
}
/**
 * Map Dispatch to Props
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrement: (value: any) => dispatch(CounterActions.onIncrement(value)),
        onDecrement: (value: any) => dispatch(CounterActions.onDecrement(value))
    }
}
/**
 * Connect (State, Dispatch) in Redux and Create (Component)
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);