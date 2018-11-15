import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

  state = {
    isLoggedIn: false
  }

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
              <NavLink
                to={{
                  pathname: '/cars'
                }}
                exact
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <div style={{textAlign: 'center'}}>
          <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({ isLoggedIn: true })}>Login</button>
        </div>

        <hr />

        {/* Switch выдает первый попавшийся url, который полностью совпадает с url в path */}
         <Switch>
        {/* рендеринг jsx */}
        {/* exact - для точного совпадения пути */}
        <Route path='/' exact render={() => <h1>Home Page</h1>} />

        {/* рендеринг компонента */}
        {/* защита роута */}
        { this.state.isLoggedIn ? <Route path='/about' component={About} /> : null }

        {/* динамические роуты, динамическая часть роута после /: */}
        {/* name - название параметра должно совпадать с тем полем,
              что мы указываем в match.params дочернего компонента */}
        <Route path='/cars/:name' component={CarDetail} />

        <Route path='/cars' component={Cars} />

        {/* в случае отсутствия совпадений роутов делаем редирект на определенную страницу,
              напр., если мы введем в адрес. строку несуществующую страницу, произойдет редирект на главную */}
        <Redirect to={'/'} />

        {/* ошибка 404 */}
        {/* этот роут, описывающий ошибку должен идти последним в списке, потому что
            если не нашлось никаких совпадений до него, будет рендериться он */}
        {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 Not Found</h1>} />*/}

        </Switch>
      </div>
    );
  }
}

export default App
