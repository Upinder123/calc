import React,{Component} from 'react';
import Keypad from './components/keypad'
import Result from './components/result'
class App extends Component {

  state={
        result: ""
  }
  onClick = button =>{
    if(button === "="){
      this.calculate()
    }
    else if(button === "clear"){
      this.reset()
    }
    else if(button === "x"){
      this.backspace()
    }else{
      this.setState({
      result: this.state.result + button})
      
    }
  }
  calculate = () =>{
    try{
      this.setState(
        {
          result:(eval(this.state.result)||"")+""
        }
      )
    }catch(e){
      this.setState(
        {
          result:""
        }
      )
    }
  };
  clear = () =>{
    this.setState({
      result:""
    }
    )};
  backspace = () =>{
    this.setState(
      {
        result:this.state.result.slice(0,-1)
      }
    )
  };
  
  
  
  render(){
  return (
    <div className="App">
      <Result result={this.state.result}/>
      <Keypad onClick={this.onClick}/>
    </div>
  );
}
}

export default App;
