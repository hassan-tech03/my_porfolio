import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitStatus('sending');
      
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row g-4">
        {/* Name Field */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label fw-medium">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Your full name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            style={{ 
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '0.95rem'
            }}
          />
          {errors.name && (
            <div className="invalid-feedback d-block">
              {errors.name.message}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-medium">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="your.email@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
            style={{ 
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '0.95rem'
            }}
          />
          {errors.email && (
            <div className="invalid-feedback d-block">
              {errors.email.message}
            </div>
          )}
        </div>

        {/* Subject Field */}
        <div className="col-12">
          <label htmlFor="subject" className="form-label fw-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="form-control"
            placeholder="What's this about?"
            {...register('subject')}
            style={{ 
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '0.95rem'
            }}
          />
        </div>

        {/* Message Field */}
        <div className="col-12">
          <label htmlFor="message" className="form-label fw-medium">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            id="message"
            rows="5"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            style={{ 
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '0.95rem',
              resize: 'vertical'
            }}
          />
          {errors.message && (
            <div className="invalid-feedback d-block">
              {errors.message.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <motion.button
            type="submit"
            className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
            disabled={submitStatus === 'sending'}
            whileHover={{ scale: submitStatus === 'sending' ? 1 : 1.02 }}
            whileTap={{ scale: submitStatus === 'sending' ? 1 : 0.98 }}
            style={{
              borderRadius: '12px',
              padding: '14px 24px',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            {submitStatus === 'sending' ? (
              <>
                <div 
                  className="spinner-border spinner-border-sm me-2" 
                  role="status"
                  style={{ width: '16px', height: '16px' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Sending Message...
              </>
            ) : (
              <>
                <FaPaperPlane size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="col-12">
            <motion.div
              className="alert alert-success d-flex align-items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ borderRadius: '12px' }}
            >
              <FaCheckCircle className="me-2" />
              <div>
                <strong>Message sent successfully!</strong> Thank you for reaching out. 
                I'll get back to you within 24 hours.
              </div>
            </motion.div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="col-12">
            <motion.div
              className="alert alert-danger d-flex align-items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ borderRadius: '12px' }}
            >
              <FaExclamationTriangle className="me-2" />
              <div>
                <strong>Oops! Something went wrong.</strong> Please try again or 
                email me directly at{' '}
                <a 
                  href="mailto:hassan.shahid031998@gmail.com"
                  className="alert-link"
                >
                  hassan.shahid031998@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Form Footer */}
      <div className="mt-4 pt-3 border-top">
        <div className="row align-items-center">
          <div className="col-md-8">
            <p className="small text-muted mb-0">
              <strong>Response Time:</strong> I typically respond within 24 hours during business days.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-2 mt-md-0">
            <div className="d-flex align-items-center justify-content-md-end">
              <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
              <span className="small text-success fw-medium">Available</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
