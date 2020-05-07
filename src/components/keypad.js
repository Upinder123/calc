import React,{Component} from 'react';
const btnClear={
    padding: '20px',

}
const btnRest={
    padding: '10px',
    background:"#fff"
}
const grid={
    display:'grid',
    gridTemplateColumns:"60px 60px 60px 60px "
}
class Keypad extends Component{
    render(){
        return(
            <div style={grid}>
                <button name="clear" style={btnRest}>clear</button>
                <button name="x" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="="  style={btnRest}onClick={e => this.props.onClick(e.target.name)}>=</button>

                <button name="/" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>/</button>
                <button name="7" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8"  style={btnRest} onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>9</button>

                <button name="-" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="4" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>6</button>

                <button name="+" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="1" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" style={btnRest} onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name ="*" style={btnRest}onClick={e => this.props.onClick(e.target.name)}>*</button>
            </div>
        );
    }
}
export default Keypad;