import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              {/* activeClassName - спец. стилистика для активной ссылки */}
              <NavLink
                to="/"
                exact
                activeClassName={'wfm-active'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{
                  color: 'blue'
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              {/* search - гет-параметры
                  hash - напр. для скролла до определенного элемента
              */}
              <NavLink to={{
                pathname: '/cars'
              }}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        {/* рендеринг jsx */}
        {/* exact - для точного совпадения пути */}
        <Route path='/' exact render={() => <h1>Home Page</h1>} />

        {/* рендеринг компонента */}
        <Route path='/about' component={About} />
        <Route path='/cars' component={Cars} />

      </div>
    );
  }
}

export default App
