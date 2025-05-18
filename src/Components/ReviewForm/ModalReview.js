// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './ReviewForm.css'

// Function component for giving reviews
function ModalReview({onCloseModal, setReview}) {
  // State variables using useState hook

  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    setReview(formData);
      onCloseModal();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className='modal-wrapper'>
        <form onSubmit={handleSubmit} className='modal-form'>
          <h2 className='h2-modal'>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>

          <div>
            <label>Rating:</label>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                         key={star}
                         className={star <= formData.rating ? "filled-star" : "empty-star"}
                          onClick={() => setFormData({ ...formData, rating: star })}
                         >
                      ★
                     </span>
    ))}
  </div>
</div>

          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ModalReview;
