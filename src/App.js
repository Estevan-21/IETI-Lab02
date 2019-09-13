import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import {TodoApp} from "./TodoApp";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
		constructor(props) {
    	super(props);
    	this.state = {isLoggedIn: false};
  	}
    render() {
        return (
            <Router>
                <div className="App">                    
                    <br/>
                    <br/>
                    <ul>
                    	{ this.state.isLoggedIn
                        ? <li><Link to="/todo">Todo</Link></li>
                        : <li><Link to="/">Login</Link></li>
                      }
                    </ul>
                    <div>                
                      { this.state.isLoggedIn
								        ? <Route path="/todo" component={TodoAppView}/>
								        : <Route path="/" component={LoginView}/>								        
								      }
                    </div>
                </div>
            </Router>
        );
    }
    
}

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
        <TodoApp/>
);

export default App;
