import React, { Component } from "react";
import { connect } from "react-redux";
import Goal from "./Goal";
import "../styles/GoalList.css";

class GoalList extends Component {
    render() {
        console.log(this.props)
        const { data } = this.props;
        const dataMap = data.sort((goal1, goal2)=>{
            let date1 = Date.parse(goal1.date);
            let date2 = Date.parse(goal2.date);
            return date1 - date2;
        }).map((goal, i) => {
            return <Goal key={i} {...goal} ></Goal>
        })
        return (
            <div className="goal-list">
                {dataMap}
            </div>
        )
    }
}

export default connect(state => state.goal, {})(GoalList);
