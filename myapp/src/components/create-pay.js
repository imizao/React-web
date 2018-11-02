import React, { Component } from 'react'
import './css/createpay.css';

export default class createPay extends Component {
  constructor() {
    super()
    this.state = {
      num: '05',
      msg: '请选择您需要的纸巾数量',
      btn: '支付',
      money: 10
    }
  }
  render() {
    return (
      <div className="y-pay-box">
        <div className="y-pay-text">{this.state.msg}</div>
        <div className="y-pay-num">{this.state.num}</div>
        <div className="y-reduce"></div>
        <div className="y-add"></div>
        <div className="y-money">￥{this.state.money}</div>
        <div className="y-btn">{this.state.btn}</div>
      </div>
    )
  }
}
