import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteGoal } from "../../redux/goal";
import { Modal } from "react-bootstrap";
import Form from "../../shared/Form";
import "../../styles/Goal.css";



class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDetails: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        let { principle, goal, date, progress, notes, _id, deleteGoal } = this.props;
        if (this.state.isEditing) {
            return (
                <div className="edit-form">
                    <Form className="edit-forms"{...this.props} options={{ toggle: this.toggleEdit }} />
                </div>
            )
        } else if (this.state.showDetails) {
            let style = { color: "black", fontWeight: "900" };
            return (
                <div className="goal-details">
                    <Modal className="backdrop-style" show={this.state.showDetails} animation={true}>
                        <div className="details-modal">
                            <Modal.Dialog>
                                <Modal.Header className="details-header">
                                    <Modal.Title className="details-title">{principle}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="details-body">
                                    <h2 style={{color: "#F45D01"}}>{goal}</h2>
                                    <p><span style={style}>Notes: </span>{notes}</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button style={{ cursor: "pointer" }} onClick={this.toggleDetails}>Close</button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                    </Modal>
                </div>
            )
        }
        return (
            <div className="goal">
                <div className="date-time">
                    <p>{new Date(date).toLocaleDateString()}</p>
                    <p>{progress}</p>
                </div>
                <div className="band-location" onClick={this.toggleDetails}>
                    <h1 style={{ color: "#00A8E8" }}>{principle}</h1>
                    <h3 style={{ fontFamily: "helvetica, serif", fontStyle: "italic" }}>{goal}</h3>
                </div>
                <div className="buttons">
                    <button style={{ cursor: "pointer", outline: "none" }} onClick={this.toggleEdit}>EDIT</button>
                    <button style={{ cursor: "pointer", color: "red", outline: "none" }} onClick={() => deleteGoal(_id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteGoal })(Goal);
