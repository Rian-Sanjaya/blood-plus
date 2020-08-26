import React from 'react';
import { useHistory } from 'react-router-dom';
import profile1 from '../../assets/images/profile-1.png';
import location from '../../assets/images/location.png';

const CardList = ({ donor }) => {
  const history = useHistory();

  const goToDonorDetail = () => {
    history.push({
      pathname: '/donordetail',
      state: { id: donor.id },
    });
  };

  return (
    <div className="card-box" onClick={goToDonorDetail}>
      <div style={{ width: '45px', position: 'absolute', left: '-15px', top: '-5px', }}>
        <img src={profile1} alt="profile" style={{ width: '100%' }} />
      </div>
      <div style={{ padding: '10px 10px 10px 35px', color: '#23231f' }}>
        <div style={{ fontWeight: 900, fontSize: '26px', marginBottom: '3px' }}>{donor.user_name}</div>
        <div style={{ fontSize: '15px', marginBottom: '15px' }}>
          {`${donor.updated_at.substring(0, 10)} ${donor.updated_at.substring(11, 16)}`}
        </div>
        <div style={{ fontWeight: 500, fontSize: '18px', marginBottom: '15px' }}>
          {donor.description.toString().trim().length > 70 ? donor.description.substring(0, 70) + '...' : donor.description}
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '20px', display: 'inline-block' }}>
            <img src={location} alt="location" style={{ width: '100%' }} />
          </div>
          <div style={{ fontSize: '15px', display: 'inline-block', position: 'absolute', left: '24px', top: '0px' }}>
            {donor.hospital.toString().trim().length > 28 ? donor.hospital.substring(0, 28) + '...' : donor.hospital}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardList;