import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import Select from './Select';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';

const FormExample = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        productCategory: '',
        productInterest: '',
        message: '',
        termsAccepted: false,
        contactMethod: 'email',
        contactDetail: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        { value: 'tubers', label: 'Tubers' },
        { value: 'cereals', label: 'Cereals' },
        { value: 'spices', label: 'Spices' },
        { value: 'oils', label: 'Oils' }
    ];

    const productOptions = {
        tubers: [
            { value: 'yam', label: 'Yam' },
            { value: 'sweet_potato', label: 'Sweet Potato' }
        ],
        cereals: [
            { value: 'maize', label: 'Maize' },
            { value: 'beans', label: 'Beans' }
        ],
        spices: [
            { value: 'pepper', label: 'Pepper' },
            { value: 'cloves', label: 'Cloves' }
        ],
        oils: [
            { value: 'shea_butter', label: 'Shea Butter' },
            { value: 'shea_nut', label: 'Shea Nut' }
        ]
    };

    const contactOptions = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone Call' },
        { value: 'whatsapp', label: 'WhatsApp' }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when field is changed
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.productInterest) {
            newErrors.productInterest = 'Please select a product';
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the terms';
        }

        if (!formData.contactDetail.trim()) {
            newErrors.contactDetail = 'Please provide your contact detail';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setIsSubmitting(false);
                alert('Form submitted successfully!');
            }, 1500);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Inquiry</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <TextInput
                        label="Full Name"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        required
                        fullWidth
                    />
                    <TextInput
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        fullWidth
                    />
                </div>

                <Checkbox
                    id="isIndividual"
                    name="isIndividual"
                    checked={formData.isIndividual}
                    onChange={handleChange}
                    label="I am an individual"
                />

                <TextInput
                    label="Company Name"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    helperText="Optional"
                    fullWidth
                />

                <Select
                    label="Product Category"
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    options={categories}
                    error={errors.productCategory}
                    required
                    fullWidth
                />

                {formData.productCategory && (
                    <Select
                        label="Product Interest"
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        options={productOptions[formData.productCategory]}
                        error={errors.productInterest}
                        required
                        fullWidth
                    />
                )}

                <TextArea
                    label="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements..."
                    rows={5}
                    fullWidth
                />

                <RadioGroup
                    label="Preferred Contact Method"
                    name="contactMethod"
                    options={contactOptions}
                    selectedValue={formData.contactMethod}
                    onChange={handleChange}
                    inline
                />

                {/* Conditional input based on the selected contact method */}
                {formData.contactMethod === 'email' && (
                    <TextInput
                        label="Email Address"
                        id="contactDetail"
                        name="contactDetail"
                        type="email"
                        value={formData.contactDetail}
                        onChange={handleChange}
                        error={errors.contactDetail}
                        required
                    />
                )}
                {formData.contactMethod === 'phone' && (
                    <TextInput
                        label="Phone Number"
                        id="contactDetail"
                        name="contactDetail"
                        type="tel"
                        value={formData.contactDetail}
                        onChange={handleChange}
                        error={errors.contactDetail}
                        required
                    />
                )}
                {formData.contactMethod === 'whatsapp' && (
                    <TextInput
                        label="WhatsApp Number"
                        id="contactDetail"
                        name="contactDetail"
                        type="tel"
                        value={formData.contactDetail}
                        onChange={handleChange}
                        error={errors.contactDetail}
                        required
                    />
                )}

                <Checkbox
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    label="I agree to the terms and conditions"
                    error={errors.termsAccepted}
                />

                <div className="mt-6 flex justify-end">
                    <Button type="button" variant="outline" className="mr-4">
                        Cancel
                    </Button>
                    <Button type="submit" isLoading={isSubmitting}>
                        Submit Inquiry
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormExample;