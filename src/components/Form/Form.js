import React, { Component } from 'react'
import './form.css'
class Form extends Component {
    state = {
      custmoneName: '',
      monthOneProduct: '',
      monthOneAmount: '',
      monthTwoProduct: '',
      monthTwoAmount: '',
      monthThreeProduct: '',
      monthThreeAmount: ''
    }
    handleSubmit = (e) => {
      e.preventDefault();
      let formData = {
        customerName: this.state.custmoneName,
        transactions: {
          monthOne: [
            {
            transactionId: 5423, 
            product: this.state.monthOneProduct, 
            amount: this.state.monthOneAmount}
          ],
          monthTwo: [
            {
            transactionId: 54235, 
            product: this.state.monthTwoProduct, 
            amount: this.state.monthTwoAmount}
          ],
          monthThree: [
            {
            transactionId: 4576, 
            product: this.state.monthThreeProduct, 
            amount: this.state.monthThreeAmount}
          ]
        }
      }
      if(
        this.state.custmoneName !== '' &&
        this.state.monthOneProduct !== '' &&
        this.state.monthOneAmount !== '' &&
        this.state.monthTwoProduct !== '' &&
        this.state.monthTwoAmount !== '' &&
        this.state.monthThreeProduct !== '' &&
        this.state.monthThreeAmount !== ''
        ) {
            console.log(this.props)
          this.props.history.push('/table', formData)
        } else {
          alert("Validate")
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
   
    render(){
        return(
            <div>
              <div>
                <form onSubmit={this.handleSubmit}>
            <div id="custName">
                  <input type="text" className = "customername" placeholder="Customer Name" id="custmoneName" value={this.state.customerName} onChange={this.handleChange}/></div>
            <div id="month1">
                  <h2>First Month</h2>
                  <select value={this.state.monthOneProduct} id="monthOneProduct" onChange={this.handleChange}>
                    <option value="">Select Product</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthOneAmount" value={this.state.monthOneAmount} onChange={this.handleChange}/>
            </div>
            <div>
                  <h2>Second Month</h2>
                  <select value={this.state.monthTwoProduct} id="monthTwoProduct" onChange={this.handleChange}>
                    <option value="">Select Product</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthTwoAmount" value={this.state.monthTwoAmount} onChange={this.handleChange}/>
            </div>
                  <h2>Third Month</h2>
                  <select value={this.state.monthThreeProduct} id="monthThreeProduct" onChange={this.handleChange}>
                    <option value="">Select Product</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthThreeAmount" value={this.state.monthThreeAmount} onChange={this.handleChange}/>
                  <br />
                  <button id="btn">SUBMIT</button>
                </form>
              </div>
            </div>
        )
    }
}

export default Form;