import { Component } from "react";
import AddEmp from "./AddEmp";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      employee :[],
    }
  }
   Addempl=(emp)=>{
    
     this.setState({
       employee: [...this.state.employee, emp]
     })

  }
  
  render(){
  return (
    <>
    <AddEmp newemp={this.Addempl}/>
    </>
    
  );
}
}

export default App;
