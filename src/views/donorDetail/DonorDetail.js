import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import back from '../../assets/images/back.png';
import phone from '../../assets/images/phone.png';
import siloamMap from '../../assets/images/siloamMap.png';
import profile1 from '../../assets/images/profile-1.png';
import location from '../../assets/images/location.png';

const DonorDetail = (props) => {
  const [donor, setDonor] = useState({});

  const history = useHistory();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://52.230.82.65:8000/api/donor/${props.location.state.id}`,
    })
    .then(res => {
      setDonor(res.data);
    })
    .catch(err => {
      console.log('Error: ', err.message);
    })
  }, [props.location.state.id]);

  return (
    <div style={{ position: 'relative' }}>
      <div onClick={() => history.goBack()} className="map-back" style={{ width: '50px', position: 'absolute', top: '20px', left: '20px' }}><img src={back} alt="Back" style={{ width: '100%' }} /></div>
      <div className="map-call" style={{ width: '50px', position: 'absolute', top: '20px', right: '20px' }}><img src={phone} alt="Phone" style={{ width: '100%'}} /></div>
      <div className="map-box">
        <img src={siloamMap} alt="Siloam Map" style={{ width: '100%' }} />
      </div>
      <div style={{ background: '#fff', position: 'relative', marginTop: '-5px', height: '254px' }}>
        <div style={{ width: '45px', position: 'absolute', left: '15px', top: '20px', }}>
          <img src={profile1} alt="profile" style={{ width: '100%' }} />
        </div>
        <div style={{ padding: '20px 15px 30px 75px', color: '#23231f' }}>
          <div style={{ fontWeight: 900, fontSize: '26px', marginBottom: '3px' }}>{donor.user_name}</div>
          <div style={{ fontSize: '15px', marginBottom: '15px' }}>{donor.updated_at}</div>
          <div style={{ fontWeight: 500, fontSize: '18px', marginBottom: '15px' }}>{donor.description}</div>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '20px', display: 'inline-block' }}>
              <img src={location} alt="location" style={{ width: '100%' }} />
            </div>
            <div style={{ fontSize: '15px', display: 'inline-block', position: 'absolute', left: '24px', top: '0px' }}>{donor.hospital}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DonorDetail;