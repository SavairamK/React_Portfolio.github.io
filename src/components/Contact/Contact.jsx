import React from 'react'
import './contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "629fe6f3-ef99-43ea-aca2-f5d9306401aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact-title">
                    <h1>Chat With Me</h1>
                </div>

                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Share It With Me!</h1>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <i class="fa-solid fa-envelope fa-xl" style={{ color: "#ffffff" }}></i>
                                <p>kshitijasavairam1@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <i class="fa-solid fa-phone-volume fa-xl" style={{ color: "#ffffff" }}></i>
                                <p>+91 1234567890</p>
                            </div>
                            <div className="contact-detail">
                                <i class="fa-solid fa-location-dot fa-xl" style={{ color: "#ffffff" }}></i>
                                <p>India</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="name" id="name" placeholder='Your name here' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" name="email" id="email" placeholder='abc@gmail.com' />
                        <label htmlFor="">Any message for me</label>
                        <textarea name="message" id="message" rows="3" placeholder='Type message here'></textarea>
                        <button type="submit" className='contact-submit'>Share it</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
