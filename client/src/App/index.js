import React, { Component } from 'react';
import Header from "./Header";
import GoalList from "./GoalList";
import * as Scroll from "react-scroll";
import "./styles/App.css";
import { connect } from "react-redux";
import { getGoal } from "./redux/goal";
import Cal from "./Calendar";


let scroll = Scroll.animateScroll;


class App extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }
    componentDidMount() {
        this.props.getGoal();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <div className="arrow" onClick={this.scrollToBottom}>
                    <p>GOALS</p>
                    <p><i className="down"></i></p>
                </div>
                <GoalList />
                <Cal />
            </div>
        )
    }
}

export default connect(null, { getGoal })(App);
