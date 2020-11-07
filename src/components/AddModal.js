import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

class AddModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    handleShow = () => {
        this.setState ({ show: !this.state.show});
    };
    handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    +
                </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label className="input">Title:</label>
                                <input type="text" name="name" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Image:</label>
                                <input type="text" name="image" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Rating:</label>
                                <input type="text" name="rating" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Year:</label>
                                <input type="text" name="year" onChange={this.handleChange} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close 
                        </Button>
                        <button variant="primary">Add Movie</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AddModal;
