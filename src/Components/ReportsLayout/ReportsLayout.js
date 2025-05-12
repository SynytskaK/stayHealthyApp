import './ReportsLayout.css'

const ReportsLayout = () => {
    const appointments = JSON.parse(sessionStorage.getItem("appointment"));

    return(
        <div className="wrapper-review">
            <h1>Reports</h1>
            <div className='category-review'>
                <ul className='subcategory'>
                    <li>S.No</li>
                    <li>Doctor Name</li>
                    <li>Doctor Speciality</li>
                    <li>View Report</li>
                    <li>Downoload Report</li>
                </ul>

                {appointments && appointments.map((item, index) => (
                    <ul className='review' key={index}>
                        <li>{index + 1}</li>
                        <li>{item.doctorName}</li>
                        <li>{item.doctorSpeciality}</li>
                        <li>
                           <button>View Report</button>
                        </li>
                        <li>
                           <button>Downoload Report</button>
                        </li>
                    </ul>
                ))}
                <div className='divider'></div>
            </div>
        </div>
    )
}

export default ReportsLayout;