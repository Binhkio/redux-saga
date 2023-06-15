import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <button
        onClick={() => {
          navigate('/', { replace: true });
        }}
        type="button"
      >
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
