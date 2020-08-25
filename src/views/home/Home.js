import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { pendonor } from './data';
import CardList from './CardList';
import Menu from '../../layouts/Menu';

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [pendonor, setPendonor] = useState([]);
  const [selfData, setSelfData] = useState([]);

  useEffect(() => {
    axios.all([
      axios({
        method: 'GET',
        url: 'http://52.230.82.65:8000/api/donor/list/self',
      }),
      axios({
        method: 'GET',
        url: 'http://52.230.82.65:8000/api/donor',
      }),
      axios({
        method: 'GET',
        url: 'http://52.230.82.65:8000/api/user/self',
      })
    ])
    .then(axios.spread((res1, res2, res3) => {
      res1.data.sort(function(a, b) {
        if (a.updated_at < b.updated_at) {
          return 1;
        }

        if (a.updated_at > b.updated_at) {
          return -1;
        }

        return 0;
      })

      res2.data.sort(function(a, b) {
        if (a.updated_at < b.updated_at) {
          return 1;
        }

        if (a.updated_at > b.updated_at) {
          return -1;
        }

        return 0;
      })

      setUserList(res1.data);
      setPendonor(res2.data);
      setSelfData(res3.data);
    }))
    .catch(err => {
      console.log('Error: ', err.message);
    })
  }, []);

  return (
    <div>
      <div style={{ color: '#fff', margin: '15px 7.5%', fontSize: '18px', fontWeight: '700' }}>Anda meminta bantuan darah</div>
      <div>
        {userList.length > 0 && (
          userList.map((item, idx) => {
            return (
              <CardList donor={item} key={idx} />
            )
          })
        )}
      </div>
        <div style={{ color: '#fff', margin: '15px 7.5%', fontSize: '18px', fontWeight: '700' }}>Membutuhkan darah {selfData.blood_type}</div>
      <div>
        {
          pendonor.map((donor, idx) => {
            return (
              <CardList donor={donor} key={idx} />
            )
          })
        }
      
      </div>
      <Menu />
    </div>
  )
}

export default Home;