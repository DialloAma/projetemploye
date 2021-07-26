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
    emp.id=Math.random()
     this.setState({
       employee: [...this.state.employee, emp]
     })

  }
  DeletEmp=(id)=>{
    this.setState({
      employee: this.state.employee.filter((emp)=> emp.id !==id)
    })

  }
  
  render(){
  return (
    <>
    <AddEmp newemp={this.Addempl}/>

    <ListEmp EmpData={this.state.employee} deletemp={this.DeletEmp}/>
    </>
    
  );
}
}

export default App;
