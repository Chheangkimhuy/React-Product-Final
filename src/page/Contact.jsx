import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdAddCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

function Contact() {
    return (
        <div className='container p-5 rounded' style={{ marginTop: "150px" }}>
            <h1 className='text-center mb-4'>Contact Us</h1>
            <p className='text-center mx-auto' style={{ maxWidth: "600px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae blanditiis aliquam vero accusantium fuga recusandae reprehenderit obcaecati numquam voluptatum asperiores!
            </p>
            <div className='row mt-5 mx-lg-5'>
                {/* Contact Information */}
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='p-4'>
                        <p><IoHomeOutline className='fs-3 me-2'/> Street 385, Boeung Salang, Toul Kork, Phnom Penh</p>
                        <p><MdAddCall className='fs-3 me-2'/> +855 884907877</p>
                        <p><TfiEmail className='fs-3 me-2'/> kimhuy@gmail.com</p>
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className='col-12 col-lg-6'>
                    <div className='p-2 shadow py-4'>
                        <h2 className='mb-3 text-center'>Send Message</h2>
                        <form>
                            <div className='mb-3'>
                                <input type='text' className='form-control' placeholder='Enter your name' required/>
                            </div>
                            <div className='mb-3'>
                                <input type='email' className='form-control' placeholder='Enter your email' required/>
                            </div>
                            <div className='mb-3'>
                                <input type='password' className='form-control' placeholder='Enter your password' required/>
                            </div>
                            <div className='mb-3'>
                                <textarea className='form-control' rows='4' placeholder='Type your message' required></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary w-100'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
