import './ReviewForm.css'

const ReviewForm = () => {
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

                <ul className='review'>
                    <li>1</li>
                    <li>name</li>
                    <li>specializ</li>
                    <li>
                        <button>Give Review</button>
                    </li>
                    <li>review</li>
                </ul>
<div className='divider'></div>
            </div>
        </div>
    )
}

export default ReviewForm;