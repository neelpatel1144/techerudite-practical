import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: "admin"
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
              const res = await axios.post('http://localhost:5000/user/register/admin', values);
              if (res.status === 201) {
                alert('Admin registration successful!');
                navigate('/admin/dashboard');
              }
            } catch (error) {
              // Display backend error message if available
              const errorMessage = error?.response?.data?.message || 'Registration failed!';
              alert(errorMessage);
            }
          }          
    });

    return (
        <div className="form-container">
            <h2>Admin Registration</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName && <div className="error-message">{formik.errors.firstName}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName && <div className="error-message">{formik.errors.lastName}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && <div className="error-message">{formik.errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && <div className="error-message">{formik.errors.password}</div>}
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;
