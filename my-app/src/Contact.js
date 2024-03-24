import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function Contact() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <form target="_blank" action="https://formsubmit.co/tanmay32goraksha@gmail.com" method="POST">
                                <input type="text" name="firstName" className="form-control mb-3" placeholder="First Name" />
                                <input type="text" name="lastName" className="form-control mb-3" placeholder="Last Name" />
                                <input type="email" name="email" className="form-control mb-3" placeholder="Email" />
                                <textarea name="message" className="form-control mb-3" placeholder="Message"></textarea>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-dark text-white py-4">
                <div className="container text-center">
                    <p>Other links:</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Link 1</a></li>
                        <li className="list-inline-item"><a href="#">Link 2</a></li>
                        <li className="list-inline-item"><a href="#">Link 3</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
