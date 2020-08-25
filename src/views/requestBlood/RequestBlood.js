import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Menu from '../../layouts/Menu';
import location from '../../assets/images/location.png'

const RequestBlood = () => {
  const [darahChecked, setDarahChecked] = useState('');
  const [hospital, setHospital] = useState('');
  const [description, setDescription] = useState('');
  const [errDarahChecked, setErrDarahChecked] = useState(false);
  const [errHospital, setErrHospital] = useState(false);
  const [errDescription, setErrDescription] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (darahChecked.length > 0) setErrDarahChecked(false);
    if (hospital.trim().length > 0) setErrHospital(false);
    if (description.trim().length > 0) setErrDescription(false);
  }, [darahChecked, hospital, description])

  const handlePosting = (e) => {
    if (!darahChecked || !hospital || !description) {
      if (!darahChecked) setErrDarahChecked(true);
      if (!hospital) setErrHospital(true);
      if (!description) setErrDescription(true);
    } else {
      setErrHospital(false);
      setErrDescription(false);
      axios({
        method: 'POST',
        url: 'http://52.230.82.65:8000/api/donor/create',
        data: {
          description: description,
          hospital: hospital,
          blood_type: darahChecked
        }
      })
      .then(res => {
        history.push({ pathname: '/' });
      })
      .catch(err => {
        console.log('Error: ', err.message);
      })
    }
  };

  const handleDarahChange = (e, val) => {
    e.preventDefault();
    setDarahChecked(val);
  }

  const handleInputChange = (e) => {
    if (e.target.name === 'hospital') {
      setHospital(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
  };

  return (
    <div>
      <div style={{ color: '#fff', margin: '15px 7.5%', fontSize: '18px', fontWeight: '700' }}>
        Pilih darah yang anda butuhkan
      </div>
      <div style={{ 
        width: '85%', 
        margin: '15px auto',
        border: errDarahChecked ? '3px solid #ef0606' : 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100.11px' }}>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'A+')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="A+" 
              checked={darahChecked === 'A+'} 
              onChange={() => console.log('A+ clicked')} 
            />
            <span className="custom-radio darahA"></span>
          </div>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'A-')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="A-" 
              checked={darahChecked === 'A-'} 
              onChange={() => console.log('A- clicked')} 
            />
            <span className="custom-radio darahAminus"></span>
          </div>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'AB+')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="AB+" 
              checked={darahChecked === 'AB+'} 
              onChange={() => console.log('AB+ clicked')} 
            />
            <span className="custom-radio darahAB"></span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100.11px' }}>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'AB-')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="AB-" 
              checked={darahChecked === 'AB-'} 
              onChange={() => console.log('AB- clicked')} 
            />
            <span className="custom-radio darahABminus"></span>
          </div>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'B+')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="B+" 
              checked={darahChecked === 'B+'} 
              onChange={() => console.log('B+ clicked')} 
            />
            <span className="custom-radio darahB"></span>
          </div>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'B-')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="B-" 
              checked={darahChecked === 'B-'} 
              onChange={() => console.log('B- clicked')} 
            />
            <span className="custom-radio darahBminus"></span>
          </div>
        </div>
        <div style={{ display: 'flex', height: '100.11px' }}>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'O+')} style={{ marginRight: '16px' }}>
            <input 
              type="radio" 
              name="golDarah" 
              value="O+" 
              checked={darahChecked === 'O+'} 
              onChange={() => console.log('O+ clicked')} 
            />
            <span className="custom-radio darahO"></span>
          </div>
          <div className="gol-darah-radio" onClick={(e) => handleDarahChange(e, 'O-')}>
            <input 
              type="radio" 
              name="golDarah" 
              value="O-" 
              checked={darahChecked === 'O-'} 
              onChange={() => console.log('O- clicked')} 
            />
            <span className="custom-radio darahOminus"></span>
          </div>
        </div>
      </div>
      <div style={{ width: '85%', margin: '15px auto'}}>
        <div style={{ color: '#fff', marginBottom: '15px' }}>Lokasi rumah sakit</div>
        <div style={{ position: 'relative' }}>
          <input 
            type="text" 
            name="hospital"
            value={hospital}
            onChange={handleInputChange}
            style={{ 
              width: '100%', 
              padding: '10px 28px 10px 10px', 
              fontSize: '18px', 
              fontWeight: 700, 
              outline: 'none', 
              borderRadius: '5px',
              border: errHospital ? '3px solid #ef0606' : 'none' 
            }} 
          />
          <div style={{ position: 'absolute', top: '8px', right: '5px', width: '25px' }}>
            <img src={location} alt="Location" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div style={{ width: '85%', margin: '15px auto'}}>
        <div style={{ color: '#fff', marginBottom: '15px' }}>Tuliskan pesan anda untuk orang-orang yang akan menerima pemberitahuan ini</div>
        <div>
          <textarea 
            rows={6} 
            name="description"
            value={description}
            onChange={handleInputChange}
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '18px', 
              fontWeight: 700, 
              outline: 'none', 
              borderRadius: '5px',
              border: errDescription ? '3px solid #ef0606' : 'none'
            }} 
          />
        </div>
      </div>
      <div style={{ width: '85%', margin: '15px auto'}}>
        <button className="request-posting" onClick={handlePosting}>Posting</button>
      </div>
      <Menu />
    </div>
  )
};

export default RequestBlood;