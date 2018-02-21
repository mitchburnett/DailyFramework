import React, { Component } from 'react';
import Calendar from "react-calendar";
import { connect } from "react-redux";
import moment from "moment";
import { modalToggle } from "../redux/modal";
import open from "../images/open.png";
import { getGoal } from "../redux/goal";
import "../styles/Cal.css";


class Cal extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            date: new Date()
        }
        this.handleDayClick = this.handleDayClick.bind(this);
        this.tileContent = this.tileContent.bind(this);
    }

    componentDidMount() {
        this.props.getGoal();
    }

    handleDayClick(date) {
        this.props.modalToggle(date);
    }

    tileContent({date, view}) {
        if (view === "month") {
            const momentDate = moment(date)
            const goal = this.props.goal.data.find(goal => {
                const goalDate = moment(goal.date)
                return momentDate.isSame(goalDate, "day");
            });
            return goal && <img width="24px" height="24px" src={open} alt=""/>;
        }
    }

    onChange = date => this.setState({ date });
    render() {
        return (
            <div className="calendar-wrapper">
                {!this.props.goal.loading && 
                <Calendar
                    onClickDay={this.handleDayClick}
                    onChange={this.onChange}
                    value={this.state.date}
                    className="calendar"
                    calendarType="ISO 8601"
                    tileContent={this.tileContent}
                />
                }
            </div>
        )
    }
}

export default connect(state => state, { modalToggle, getGoal })(Cal);
