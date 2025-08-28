
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-mitsna-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-mitsna-dark">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Have questions or want to collaborate? We'd love to hear from you.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        {submitted ? (
                             <div className="text-center h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
                                <p className="mt-2 text-gray-600">Thank you for reaching out. We will respond as soon as possible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-2xl font-bold text-center mb-6 text-mitsna-dark">Send us a Message</h3>
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="contact-name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="contact-email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" name="subject" id="contact-subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="contact-message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-mitsna-light-blue text-white font-bold py-3 px-6 rounded-md hover:bg-mitsna-blue transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="space-y-8">
                         <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-mitsna-blue">Contact Information</h3>
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p><strong>Office Email:</strong> <a href="mailto:office@mitsna.org" className="hover:underline">office@mitsna.org</a></p>
                                <p><strong>Letters of Intent:</strong> <a href="mailto:LOI@MITSNA.ORG" className="hover:underline">LOI@MITSNA.ORG</a></p>
                                <p><strong>Phone:</strong> <a href="tel:0385-3544588" className="hover:underline">0385-3544588</a></p>
                                <p><strong>Address:</strong> Manipur, India</p>
                            </div>
                         </div>
                         <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-mitsna-blue">Visit our Website</h3>
                            <div className="mt-4 space-y-3 text-gray-700">
                               <p>For more details, visit our official website at:</p>
                               <a href="http://mitsna.org" target="_blank" rel="noopener noreferrer" className="font-bold text-mitsna-light-blue hover:underline">www.mitsna.org</a>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
