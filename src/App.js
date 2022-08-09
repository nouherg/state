import React, { Component } from 'react'

export default class App extends Component {
  state = { fullname:" lana del rey",
             bio :"singer",
             image:"https://th.bing.com/th/id/R.d728318534126f0ec2726c13169cee0f?rik=bsPn54BHirl3qQ&riu=http%3a%2f%2fpicture-cdn.wheretoget.it%2f4miru5-l-610x610-hat-lana%2bdel%2brey-pretty-fashion-sun%2bhat.jpg&ehk=teIoQl9kEUAJy5qKDGE0WQJ712NuqTqu%2bwkA5RMYFkk%3d&risl=&pid=ImgRaw&r=0",
             show:true,
}
handleClick = () => {
  this.setState({ show: !this.state.show });
};

  render() {
    return (
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="img">
                <img className='image' src={this.state.image} />
              </div>
              <div className="name">
                <h1 className='full'>{this.state.fullname}</h1>
                <p className='bio'>{this.state.bio}</p>
              </div>
            </div>
          )}
          <button type="button" className="btn" onClick={this.handleClick}>
            Show
          </button>
        </div>
    )
  }
}
