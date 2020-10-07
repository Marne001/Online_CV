import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import emailjs from "emailjs-com"

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_hywnpg5', e.target, 'user_v9ursWosQAPj62Z7ilEFh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  
    return (
      <div>
          <div className="containe">
              <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                            <textarea type="text" className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Email"></input>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    )
  }