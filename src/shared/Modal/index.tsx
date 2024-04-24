import './Modal.scss';
import { Modal } from 'react-bootstrap';
    
function SharedModal(props : any) {
    
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                
            <Modal.Header closeButton style={{border: "none"}}></Modal.Header>
            {props.modalContent}
        </Modal>
    )
}

export default SharedModal;