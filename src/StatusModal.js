import {Component} from "react";
import React from "react";
import {Modal, ButtonToolbar, Button} from "react-bootstrap"


export default class StatusModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Wrapped Text</h4>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                            unde commodi aspernatur enim, consectetur. Cumque deleniti
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }

}