import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Menu from '../../layouts/Menu';
import profile2 from '../../assets/images/profile-2.png';
import logout from '../../assets/images/logout.png';

const Profil = () => {
  const [selfData, setSelfData] = useState({});

  const history = useHistory();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://52.230.82.65:8000/api/user/self`,
    })
    .then(res => {
      setSelfData(res.data);
    })
    .catch(err => {
      console.log('Error: ', err.message);
    })
  }, []);

  const handleUpdateProfil = () => {
    history.push({ pathname: "/" })
  }

  return (
    <div style={{ paddingTop: '45px', position: 'relative' }}>
      <div style={{ width: '170px', paddingLeft: '45px', cursor: 'pointer' }}>
        <img src={profile2} alt="Profil" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', top: '50px', right: '30px', width: '33px', cursor: 'pointer' }}>
        <img src={logout} alt="Logout" style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: '30px', paddingLeft: '45px' }}>
        <div className="profil-label">Nama:</div>
        <div className="profil-isi">{selfData.name}</div>
      </div>
      <div style={{ marginTop: '30px', paddingLeft: '45px' }}>
        <div className="profil-label">Email:</div>
        <div className="profil-isi">{selfData.email}</div>
      </div>
      <div style={{ marginTop: '30px', paddingLeft: '45px' }}>
        <div className="profil-label">Phone:</div>
        <div className="profil-isi">{selfData.phone}</div>
      </div>
      <div style={{ marginTop: '30px', paddingLeft: '45px' }}>
        <div className="profil-label">Golongan Darah:</div>
        <div className="profil-isi">{selfData.blood_type}</div>
      </div>
      <div style={{ marginTop: '30px', padding: '0 30px 0 45px' }}>
        <div className="profil-label">Lokasi</div>
        <div className="profil-isi">{selfData.location}</div>
      </div>
      <div style={{ marginTop: '100px', padding: '0 45px' }}>
        <button className="update-profil" onClick={handleUpdateProfil}>Update Profil</button>
      </div>
      <Menu />
    </div>
  )
};

export default Profil;