import React, { Component } from 'react';

import { HashRouter as Router ,Route,Link} from './react-router-dom';
class App extends Component {
  render() {
    return(
       <Router>
         <div className="container">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <div className="navbar-brand">管理系统</div>
                </div>
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/home">首页</Link>
                  </li>
                  <li>
                    <Link to="/user">用户管理</Link>
                  </li>
                  <li>
                    <Link to="/profile">个人中心</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="row">
              <div className="col-md-12">
                  {this.props.children}
              </div>
            </div>
         </div>
       </Router>
    )
  }
}

export default App;
