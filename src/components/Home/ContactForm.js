import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import keyboard from '../../images/mic-headphones-landscape.jpg';
import MyModal from '../MyModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ContactForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.send("service_6xiqkyp","template_te9hpm9",{
        message: document.querySelector('#floatingTextArea').value,
        Name: document.querySelector('#floatingName').value,
        reply_to: document.querySelector('#floatingEmail').value,
        },
        'ChUYKVVUT3MpRwQ5j')
        .then((result) => {
            console.log(result.text);
            setShow(true)
        }, (error) => {
            console.log(error.text);
        });

        
    //   emailjs.sendForm('service_6xiqkyp', 'template_te9hpm9', form.current, 'ChUYKVVUT3MpRwQ5j')
            
      e.target.reset()
    };

    return (
        <div id="contact" className="fullscreen bg-opacity-75 deskPicture" >
            <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container">
        <div className="row h-100 d-flex align-content-center justify-content-center">
          <div className="row mt-5 p-5 width-50-100 h-50 align-left rounded-4 bg-light">
              <h2 className="pb-4 font-36 bold">Get in Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-floating contact-form__container">
                      <input type="text" name="user_name"  class="form-control contact-form__input" id="floatingName" placeholder="Name" required />
                      <label for="floatingInput" className="contact-form__label">Name</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <input type="email" name="user_email" class="form-control contact-form__input" id="floatingEmail" placeholder="name@example.com" required />
                      <label for="floatingInput" className="contact-form__label">Email</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <textarea name="message" className="form-control contact-form__input contact-form__message-input"
                        id="floatingTextArea"
                        placeholder="Message"
                        rows="4"
                         required></textarea>
                      <label for="floatingTextarea" className="contact-form__label">Message</label>
                      
                  </div>
              <input type="submit" className="btn btn-primary py-2 px-5 rounded-pill text-dark font-24 bold contact-form__submit-btn hover-grow" value="Send" />
              </form>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thanks For Reaching Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will contact you soon!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    OK
                </Button>
                </Modal.Footer>
            </Modal>
          </div>
        
        </div>
        
      </div>
      
            </div>

            
            
            
        </div>
    )
}

export default ContactForm;