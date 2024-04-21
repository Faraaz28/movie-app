import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Shopping({ overview, title, poster_path, release_date }) {
    const sliceTitle = title.length > 20 ? title.slice(0, 20) + '....' : title;
    const sliceOverview = overview.length > 50 ? overview.slice(0, 50) + '....' : overview;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    return (
        <Card className='movie-card    b-5' style={{ width: '18rem', marginTop: '20px', backgroundColor: '#929292 ', }}>
            <Card.Body>
                <Card.Title >{sliceTitle}</Card.Title>
                <Card.Text>{sliceOverview}</Card.Text>
                <Card.Img className='image-card pb-2' variant="top" src={poster_path} />
                <Button style={{ textEmphasisColor: 'green' }} variant="dark" onClick={handleShow}>View detail</Button>
                <Modal  
                   
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header  style={{ backgroundColor:'#aca8b3'}} closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ textDecorationColor: 'white', backgroundColor:'#aca8b3' }}>
                        <img
                            src={poster_path}
                            className='image-responsive'
                            style={{ marginBottom: '10px' }} />
                        <br />
                        {overview}<br />{release_date}
                    </Modal.Body>
                    <Modal.Footer  style={{ backgroundColor:'#aca8b3'}}>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card >
    );
}
export default Shopping;