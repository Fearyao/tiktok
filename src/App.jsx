import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage.jsx'
import UserPage from './pages/userPage/userPage.jsx'
class App extends Component {
  render() {
    const routers = [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/user',
        component: UserPage
      }
    ]
    return (
      <Router>
        <div>
          {
            routers.map((route,key)=>{
              return route.exact
              ?<Route exact path={route.path} component={route.component} key={key}></Route>
              :<Route path={route.path} component={route.component} key={key}></Route>
            })
          }

        </div>
      </Router>
    );
  }
}

export default App;
