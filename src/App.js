import { Component } from "react";
import { BrowserRouter,Link, Route } from "react-router-dom";

import AddEmp from "./AddEmp";
import ListEmp from "./ListEmp";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: [],
    }
  }
  Addempl = (emp) => {
    emp.id = Math.random()
    this.setState({
      employee: [...this.state.employee, emp]
    })

  }
  DeletEmp = (id) => {
    this.setState({
      employee: this.state.employee.filter((emp) => emp.id !== id)
    })

  }
  EditEm = (id, updte) => {
    this.setState({
      employee: this.state.employee.map((emp) => emp.id === id ? updte : emp)
    })
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <div >
        <div style={{backgroundColor:'blue',height:'4rem'}}>
          React Employee
        
            <Link to="/" ><button style={{marginLeft:'4rem',marginRight:'4rem',marginTop:'1rem'}}>Add</button></Link>
             <Link to="/View"><button>View</button></Link>
        </div>
        <Route path="/" exact>
        <AddEmp newemp={this.Addempl} />
        </Route>
        <Route path="/view">
        <ListEmp EmpData={this.state.employee} deletemp={this.DeletEmp} updatemp={this.EditEm} />
        </Route>
        </div>
      
      </BrowserRouter>
      
      
     
      

          
          
         
        
          
        
      </>

    );
  }
}

export default App;
