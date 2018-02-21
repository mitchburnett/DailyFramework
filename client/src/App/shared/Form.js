import React, { Component } from 'react';
import { connect } from "react-redux";
import { postGoal, updateGoal } from "../redux/goal";
import moment from "moment";
import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { modalDate, principle, goal, date, progress, notes } = props;
        this.state = {
            inputs: {
                principle: principle || "",
                goal: goal || "",
                date: date || new Date(modalDate),
                progress: progress || "",
                notes: notes || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value, type } = e.target;
        let date;
        if (type === "date") {
            date = new Date(value);
            let day = date.getDate();
            date.setDate(day + 1);
        }
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "date" ? date : value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                principle: "",
                goal: "",
                date: new Date(),
                progress: "",
                notes: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { _id, add, postGoal, updateGoal, clear, options, submit } = this.props;
        if (add) {
            postGoal(this.state.inputs);
            submit()
        } else {
            updateGoal(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }

    render() {
        let { principle, goal, date, notes } = this.state.inputs;
        date = (moment(date).format("YYYY-MM-DD"));
        return (
            <div>
                <form onSubmit={this.handleSubmit}  >
                    <input onChange={this.handleChange} value={principle} name="principle" placeholder="principle Name" type="text" />
                    <input onChange={this.handleChange} value={goal} name="goal" placeholder="Goal" type="text" />
                    <input onChange={this.handleChange} value={date} name="date" placeholder="Date" type="date" />

                    <textarea onChange={this.handleChange} value={notes} name="notes" placeholder="To achieve this I will..." type="text" cols="30" rows="10"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { postGoal, updateGoal })(Form);
