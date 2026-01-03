import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.scss';

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
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
          placeholder="Your name"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters'
            }
          })}
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
          placeholder="your.email@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address'
            }
          })}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.formLabel}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className={styles.formInput}
          placeholder="What's this about?"
          {...register('subject')}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          rows="6"
          className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
          placeholder="Tell me about your project..."
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
        />
        {errors.message && (
          <span className={styles.errorMessage}>{errors.message.message}</span>
        )}
      </div>

      <motion.button
        type="submit"
        className={styles.submitButton}
        disabled={submitStatus === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {submitStatus === 'sending' ? (
          <>
            <span className={styles.spinner}></span>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you! Your message has been sent successfully. I'll get back to you soon!
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className={styles.errorMessageBox}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Oops! Something went wrong. Please try again or email me directly.
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
