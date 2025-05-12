import './ReportsLayout.css'

const ReportsLayout = () => {
    const appointments = JSON.parse(sessionStorage.getItem("appointment"));

    return (
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

                {appointments ? appointments.map((item, index) => (
                    <ul className='review' key={index}>
                        <li>{index + 1}</li>
                        <li>{item.doctorName}</li>
                        <li>{item.doctorSpeciality}</li>
                        <li>
                            <a
                            target='_blank'
                            rel="noopener noreferrer"
                            className='anchor'
                            href="/fake_medical_report.pdf"
                            >
                                View Report
                            </a>
                        </li>
                        <li>
                            <a
                            className='anchor'
                                href="/fake_medical_report.pdf"
                                download="Medical_Report.pdf"
                            >
                                Download Report
                            </a>
                        </li>
                    </ul>
                )) : <p>No Reports yet</p>}
                <div className='divider'></div>
            </div>
        </div>
    )
}

export default ReportsLayout;