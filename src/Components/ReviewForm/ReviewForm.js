import './ReviewForm.css'

const ReviewForm = () => {
    const appointments = JSON.parse(sessionStorage.getItem("appointment"));

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
                            <button>Give Review</button>
                        </li>
                        <li>Pending</li> 
                    </ul>
                ))}

                <div className='divider'></div>
            </div>
        </div>
    )
}

export default ReviewForm;