import React from 'react'

export default class CarDetail extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>

        {/* динамические роуты */}
        {/* params.name - параметр, где хранится имя машины, в объекте match */}
        <h1>{this.props.match.params.name}</h1>
      </div>
    )
  }
}