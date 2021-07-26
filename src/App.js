import { Component } from "react";
import AddEmp from "./AddEmp";
import ListEmp from "./ListEmp";

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

    <ListEmp EmpData={this.state.employee}/>
    </>
    
  );
}
}

export default App;
