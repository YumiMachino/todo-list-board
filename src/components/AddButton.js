import React from 'react';

const AddButton = ({ addBtnClicked }) => {
  return (
    <div className='btn-wrapper'>
      <button className='add-btn' onClick={addBtnClicked}>
        Add
      </button>
    </div>
  );
};

export default AddButton;
