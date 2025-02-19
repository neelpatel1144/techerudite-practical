import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
              const response = await axios.post('http://localhost:5000/user/login', values);
              if (response.status === 200) {
                const role = response?.data?.user?.role;
                alert('Login successful');
          
                if (role === 'customer') {
                  navigate('/customer/dashboard');
                } else if (role === 'admin') {
                  navigate('/admin/dashboard');
                }
              }
            } catch (error) {
              // Display backend error message if available
              const errorMessage = error?.response?.data?.message || 'Invalid credentials';
              alert(errorMessage);
            }
          }          
        });

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
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

                <button type="submit" className="submit-button">Login</button>
            </form>

        </div>
    );
};

export default AdminLogin;
