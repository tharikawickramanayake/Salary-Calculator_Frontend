import React, { Component } from 'react'
import YourSalary from './YourSalary'
import './home.css'
 

export default class Home extends Component {

constructor(props) {
  super(props)

  this.state = {
     basicsalary:0,
     allowance1 :0,
     allowance2 :0,
     deductions :0,

  }
}

handleBasicsalaryChange = (event) =>{

  console.log(this.state)
  
  this.setState({

    basicsalary : parseFloat(event.target.value)
  });
}

handleAllowance1Change = (event) => {
  this.setState({
    allowance1 :  parseFloat(event.target.value)
  })
}

handleAllowance2Change = (event) => {
  this.setState({
    allowance2 : parseFloat(event.target.value)
  })
}

handleDeductionsChange = (event) => {
  this.setState({
    deductions :  parseFloat(event.target.value)
  })
  
}

resetData = () => {
  this.setState({
    basicsalary:null,
    allowance1:null,
    allowance2:null,
    deductions:null
  })
}

  render() {
    return (
        // calculate your salary comp
        <div className="container-fluid-left home__container">
  <div class="row">
    <div class="col">
    
         <div className="main__container">
         <form className='salary-form'>
         <h6 className='heading'><b> CALCULATE YOUR SALARY </b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;	<button type="reset" onClick={this.resetData} class="btn btn-primary">
								<i class="flaticon-cancel-12"></i>Reset
							</button></h6>
              
          
						
						 
         <label for="bsalary">Basic Salary</label> <br></br>
    <input type="number" value={this.state.basicsalary} onChange={this.handleBasicsalaryChange} id="bsalary" name="basicsalary" ></input><br/><br/>
    
    <label for="earnings"><b>Earnings</b></label><br/>
    <h6 className='heading2'>Allowance , Fixed Allowance ,  Bonus and etc</h6>
    <input type="number" value={this.state.allowance1}  onChange={this.handleAllowance1Change} id="earnings" name="earning1"></input><button type="button" i class="bi bi-x-circle-fill"></button><br/><br/>
    <input type="number" value={this.state.allowance2} onChange={this.handleAllowance2Change} id="earnings" name="earnings2"></input><button type="button" i class="bi bi-x-circle-fill"></button><br/><br/>
    <a href="#" class="link-primary">+ Add New Allowance</a><br/><br/>
     
    <label for="deductions"><b>Deductions</b></label><br/>
    <h6 className='heading2'>Salary Adavances , Loan deductions and all</h6>
    <input type="number" value={this.state.deductions} onChange={this.handleDeductionsChange} id="deductions" name="deductions"></input><button type="button" i class="bi bi-x-circle-fill"></button><br/><br/>
    <a href="#" onClick={this.addNewInputField} class="link-primary">+ Add New Allowance</a>
     </form>
    </div>
    </div>
    <div class="col">
    <div className="container">
    <h6 className='heading' align = 'middle'><b>Your Salary Overview</b></h6><br/>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Items</th>
      <th scope="col" align= 'middle'>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Basic Salary</th>
      <td>{this.state.basicsalary == 0 ? 0:this.state.basicsalary}</td>
    </tr>
    <tr>
      <th scope="row">Gross Earning</th>
      <td> {this.state.basicsalary + this.state.allowance1 + this.state.allowance2 } </td>
      
    </tr>
    <tr>
      <th scope="row">Gross Deduction</th>
      <td>{this.state.deductions}</td>
      
    </tr>
    <tr>
      <th scope="row">Employee EPF (8%)</th>
      <td>{(this.state.basicsalary + this.state.allowance1 + this.state.allowance2) * (8 /100)  }</td>
      
    </tr>
  </tbody>
</table><br/>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Net Salary (Take Home)</th>
      <th>{(this.state.basicsalary + this.state.allowance1 + this.state.allowance2)-(this.state.deductions)-(this.state.basicsalary + this.state.allowance1 + this.state.allowance2) * (8 /100)}</th>
    </tr>
  </thead>
  <tr>
      <td scope="row">Contribution from employee</td>
    </tr>
  <tbody>
    <tr>
      <th scope="row">Employeer  EPF (12%)</th>
      <td>{(this.state.basicsalary + this.state.allowance1 + this.state.allowance2) * (12 /100)  }</td>
    </tr>
    <tr>
      <th scope="row">Employeer ETF (3%)</th>
      <td>{(this.state.basicsalary + this.state.allowance1 + this.state.allowance2) * (3 /100)  }</td>
      
    </tr>
    <tr>
      <th scope="row">CTC  (Cost To Company)</th>
      <td>{(this.state.basicsalary == 0 ? 0:this.state.basicsalary)-(this.state.deductions)+(this.state.basicsalary + this.state.allowance1 + this.state.allowance2 )* (12 /100)+(this.state.basicsalary + this.state.allowance1 + this.state.allowance2) *( 3 /100)}</td>
      
    </tr>
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
   


    /* <div>/<div class="container-fluid-right">
  ...
</div>
          {/* Your salary Overview comp   <YourSalaryOver/>/}
          {/* Net Salary <NetSalary/> */
     
    )
  }
}

 