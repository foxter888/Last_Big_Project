import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                
                <div className="contact-bullet-point">


                    <div className="bullet-point-group">
                        <div className="icon">
                            Phone Number:
                        </div>

                        <div className="text">
                            619-365-0942
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            Email:
                        </div>

                        <div className="text">
                            paul.southworth888@yahoo.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            Location:
                        </div>

                        <div className="text">
                            San Diego,Ca
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Contact;