
import React, { useState } from 'react';

const JoinTeamSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', field: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <section id="join-us" className="py-20 bg-mitsna-blue text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">Join Our Global Network</h2>
                        <p className="mt-4 text-lg text-blue-100 leading-relaxed">
                            Become part of MitSna’s growing network of Manipuri students and professionals across the globe. Whether you want to mentor, volunteer, or contribute your skills, we have a place for you. Help us shape the future of education in Manipur.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-2xl text-mitsna-dark">
                        {submitted ? (
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
                                <p className="mt-2 text-gray-600">Your application has been received. We will get in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-2xl font-bold text-center mb-6">Application Form</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="field" className="block text-sm font-medium text-gray-700">Profession / Field of Study</label>
                                    <input type="text" name="field" id="field" required value={formData.field} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why do you want to join?</label>
                                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mitsna-blue focus:border-mitsna-blue"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-mitsna-light-blue text-white font-bold py-3 px-6 rounded-md hover:bg-mitsna-blue transition-colors duration-300">
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinTeamSection;
