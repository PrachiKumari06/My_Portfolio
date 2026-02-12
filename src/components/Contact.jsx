import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="section1" style={{ textAlign: 'center'}}>
                    <h2>Get In Touch</h2>
                    <h3>
                       I’m always open to discussing opportunities, projects, or collaboration ideas. Feel free to reach out if you want to connect or work together.
                    </h3>
                    <button
                        onClick={() => window.location.href = "mailto:prachi.kumari0004@gmail.com"}
                    >
                        Mail me
                    </button>
                </div>
            </div>
        );
    }
}
