import React, { PureComponent } from 'react';



class Navbar extends PureComponent {

    render() {
      console.log("nav")
        return (
      <header className="title"><span><i className="fa-solid fa-leaf"></i>
      </span>Habit Tracker<span className="title-count">{this.props.totalCount}</span></header>
        );
    }
}

export default Navbar;