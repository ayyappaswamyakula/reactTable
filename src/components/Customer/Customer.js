import React, { Component } from 'react'
import './customer.css'

class Customer extends Component {
    state = {
      custmoneName: '',
      monthOneProduct: '',
      monthOneAmount: '',
      monthTwoProduct: '',
      monthTwoAmount: '',
      monthThreeProduct: '',
      monthThreeAmount: '',
      data: [
        {
          customerName: "John mark",
          transactions: {
            monthOne: [
              {transactionId: 45, product: "TV", amount: 120},
              {transactionId: 78, product: "Watch", amount: 70}
            ],
            monthTwo: [
              {transactionId: 785, product: "Book", amount: 40},
              {transactionId: 25, product: "Mobile", amount: 300}
            ],
            monthThree: [
              {transactionId: 52, product: "Shirt", amount: 110}
            ],
          }
        }
      ]
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
          console.log(formData)
          this.setState({
            data: [...this.state.data, formData]
          })
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
                  <input type="text" placeholder="Customer Name" id="custmoneName" value={this.state.customerName} onChange={this.handleChange}/>
                  <h2>First Month</h2>
                  <select value={this.state.monthOneProduct} id="monthOneProduct" onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthOneAmount" value={this.state.monthOneAmount} onChange={this.handleChange}/>
                  <h2>Second Month</h2>
                  <select value={this.state.monthTwoProduct} id="monthTwoProduct" onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthTwoAmount" value={this.state.monthTwoAmount} onChange={this.handleChange}/>
                  <h2>Third Month</h2>
                  <select value={this.state.monthThreeProduct} id="monthThreeProduct" onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="tv">TV</option>
                    <option value="watch">Watch</option>
                    <option value="book">Book</option>
                    <option value="mobile">Mobile</option>
                    <option value="shirt">Shirt</option>
                  </select>
                  <br />
                  <input type="number" placeholder="Price" id="monthThreeAmount" value={this.state.monthThreeAmount} onChange={this.handleChange}/>
                  <br />
                  <button>SUBMIT</button>
                </form>
              </div>

              <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>First Month</th>
                      <th>Second Month</th>
                      <th>Third Month</th>
                      <th>Total Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.data.map((data, a) => {
                        let overall = []
                        let monthOneTotal = []
                        let monthTwoTotal = []
                        let monthThreeTotal = []
                        return (
                          <tr key={a}>
                            <td>{data.customerName}</td>
                            <td>
                              {
                                data.transactions.monthOne.map((mOne, b) => {
                                  let monthPoints = null
                                  if(mOne.amount > 50 && mOne.amount <= 100){
                                      monthPoints = (mOne.amount - 50) * 1
                                      monthOneTotal.push((mOne.amount - 50) * 1)
                                      overall.push((mOne.amount - 50) * 1)
                                  } else if(mOne.amount > 50 && mOne.amount > 100){
                                      monthPoints = ((mOne.amount - 50) * 1) + ((mOne.amount - 100) * 2)
                                      monthOneTotal.push(((mOne.amount - 50) * 1) + ((mOne.amount - 100) * 2))
                                      overall.push(((mOne.amount - 50) * 1) + ((mOne.amount - 100) * 2))
                                  } else {
                                      monthPoints = 0
                                  }
                                  return (
                                    <div key={b}>
                                      <b>Product Name:</b> {mOne.product}
                                      <ul>
                                        <li>Transaction Id: {mOne.transactionId}</li>
                                        <li>Product Name: {mOne.product}</li>
                                        <li>Price: {mOne.amount}</li>
                                        <li><b>Points on Product:</b> {monthPoints}</li>
                                      </ul>
                                    </div>
                                  )
                                })
                              }
                              <strong>Total Points in this Month: 
                              {
                                monthOneTotal.length ? monthOneTotal.reduce((a, b) => {
                                  return a + b
                                }) : null
                              }
                              </strong>
                            </td>
                            <td>
                              {
                                data.transactions.monthTwo.map((mTwo, b) => {
                                  let monthPoints = null
                                  if(mTwo.amount > 50 && mTwo.amount <= 100){
                                      monthPoints = (mTwo.amount - 50) * 1
                                      monthTwoTotal.push((mTwo.amount - 50) * 1)
                                      overall.push((mTwo.amount - 50) * 1)
                                  } else if(mTwo.amount > 50 && mTwo.amount > 100){
                                      monthPoints = ((mTwo.amount - 50) * 1) + ((mTwo.amount - 100) * 2)
                                      monthTwoTotal.push(((mTwo.amount - 50) * 1) + ((mTwo.amount - 100) * 2))
                                      overall.push(((mTwo.amount - 50) * 1) + ((mTwo.amount - 100) * 2))
                                  } else {
                                      monthPoints = 0
                                  }
                                  return (
                                    <div key={b}>
                                      <b>Product Name:</b> {mTwo.product}
                                      <ul>
                                        <li>Transaction Id: {mTwo.transactionId}</li>
                                        <li>Product Name: {mTwo.product}</li>
                                        <li>Price: {mTwo.amount}</li>
                                        <li><b>Points on Product:</b> {monthPoints}</li>
                                      </ul>
                                    </div>
                                  )
                                })
                              }
                              <strong>Total Points in this Month: 
                              {
                                monthTwoTotal.length ? monthTwoTotal.reduce((a, b) => {
                                  return a + b
                                }) : null
                              }
                              </strong>
                            </td>
                            <td>
                              {
                                data.transactions.monthThree.map((mThree, b) => {
                                  let monthPoints = null
                                  if(mThree.amount > 50 && mThree.amount <= 100){
                                      monthPoints = (mThree.amount - 50) * 1
                                      monthThreeTotal.push((mThree.amount - 50) * 1)
                                      overall.push((mThree.amount - 50) * 1)
                                  } else if(mThree.amount > 50 && mThree.amount > 100){
                                      monthPoints = ((mThree.amount - 50) * 1) + ((mThree.amount - 100) * 2)
                                      monthThreeTotal.push(((mThree.amount - 50) * 1) + ((mThree.amount - 100) * 2))
                                      overall.push(((mThree.amount - 50) * 1) + ((mThree.amount - 100) * 2))
                                    } else {
                                      monthPoints = 0
                                  }
                                  return (
                                    <div key={b}>
                                      <b>Product Name:</b> {mThree.product}
                                      <ul>
                                        <li>Transaction Id: {mThree.transactionId}</li>
                                        <li>Product Name: {mThree.product}</li>
                                        <li>Price: {mThree.amount}</li>
                                        <li><b>Points on Product:</b> {monthPoints}</li>
                                      </ul>
                                    </div>
                                  )
                                })
                              }
                              <strong>Total Points in this Month: 
                              {
                                monthThreeTotal.length ? monthThreeTotal.reduce((a, b) => {
                                  return a + b
                                }) : null
                              }
                              </strong>
                            </td>
                            <td>
                              {
                                overall.length ? overall.reduce((a, b) => {
                                  return a + b
                                }) : null
                              }
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            </div>
        )
    }
}

export default Customer;