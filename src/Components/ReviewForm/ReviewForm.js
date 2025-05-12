import './ReviewForm.css'
import Popup from 'reactjs-popup';
import React, { useState } from 'react';
import ModalReview from './ModalReview';

const ReviewForm = () => {
    const appointments = JSON.parse(sessionStorage.getItem("appointment"));
    const [reviews, setReviews] = useState({});

    return (
        <div className="wrapper-review">
            <h1>Reviews</h1>
            <div className='category-review'>
                <ul className='subcategory'>
                    <li>S.No</li>
                    <li>Doctor Name</li>
                    <li>Doctor Speciality</li>
                    <li>Provide Review</li>
                    <li>Review Given</li>
                </ul>

                {appointments && appointments.map((item, index) => (
                    <ul className='review' key={index}>
                        <li>{index + 1}</li>
                        <li>{item.doctorName}</li>
                        <li>{item.doctorSpeciality}</li>
                        <li>
                            <Popup
                                trigger={
                                    <button
                                        disabled={!!reviews[index]}
                                        className={reviews[index] && "disabled-button"}
                                    >
                                        Give Review
                                    </button>
                                }
                                modal
                            >
                                {(close) => (
                                    <ModalReview
                                        onCloseModal={close}
                                        setReview={(reviewData) =>
                                            setReviews((prev) => ({
                                                ...prev,
                                                [index]: reviewData
                                            }))
                                        }
                                    />
                                )}
                            </Popup>
                        </li>
                        <li className='li-review'>
                            {reviews[index] && (
                                <div className='rewiew-block'>
                                    <p>{reviews[index].name}</p>
                                    <p>{reviews[index].review}</p>
                                    <div className='stars'>
                                        {[...Array(reviews[index].rating)].map((_, i) => (
                                            <span key={i} className='filled-star'>★</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                ))}
                <div className='divider'></div>
            </div>
        </div>
    );
};

export default ReviewForm;
