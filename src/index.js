import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
      txt:''
  }
  handleChange = e =>{
      // 获取当前DOM对象
      const target = e.target

      // 根据类型获取值
      const value = target.type === 'Checkbox'
          ?target
          :target.value

      // 获取name
      const name = target.name

      this.setState({
          [name]: value
      })
  }
  render(){
      return(
          <div>
              {/* 文本框 */}
              <input  name="txt" type="text" value={this.state.txt} onChange={this.handleChange} />
              <br/>
              <input  name="txt" type="text" value={this.state.txt} onChange={this.handleChange} />
              <br/>
              <p >{this.state.txt}</p> 
          </div>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
