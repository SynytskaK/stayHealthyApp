import { Link } from 'react-router-dom';
import './ProfileCard.css'

const ProfileCard = ({setShowDropdown}) => {
    return (
        <div className="prof-wrapper">
            <Link to='/profile'>
                <button className='text' onClick={()=>setShowDropdown(false)}>Your Profile</button>
            </Link>
        </div>
    )
}

export default ProfileCard;