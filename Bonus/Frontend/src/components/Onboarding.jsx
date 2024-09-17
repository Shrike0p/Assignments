import React, { useState } from 'react';
import axios from 'axios';

const Onboarding = () => {
  const [message, setMessage] = useState('');
  const [desiredChanges, setDesiredChanges] = useState([]);

  const handleOnboarding = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/api/v1/session/sleep-goals',
        { desiredChanges },
        { headers: { Authorization: token } }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Onboarding</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="go_to_sleep_easily"
            onChange={(e) => setDesiredChanges([...desiredChanges, e.target.value])}
          />
          I would go to sleep easily
        </label>
        <label>
          <input
            type="checkbox"
            value="sleep_through_the_night"
            onChange={(e) => setDesiredChanges([...desiredChanges, e.target.value])}
          />
          I would sleep through the night
        </label>
        <label>
          <input
            type="checkbox"
            value="wake_up_refreshed"
            onChange={(e) => setDesiredChanges([...desiredChanges, e.target.value])}
          />
          I'd wake up on time, refreshed
        </label>
      </div>
      <button onClick={handleOnboarding}>Submit</button>
      <p>{message}</p>
    </div>
  );
};

export default Onboarding;
