// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{


  getBlur = () => {
    console.log('Hey! Eyes on me!')
  }
  getFocus = () => {
    console.log('Good!')
  }


  render(){
    return (<button onFocus={this.getFocus} onBlur={this.getBlur}/>)
  }
}


export default EyesOnMe
