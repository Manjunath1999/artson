import React from 'react';

function CommonForm({ selectedParent, selectedChildren }) {
  return (
    <div>
      <h1>{selectedParent}</h1>
      <p>{selectedChildren}</p>
    </div>
  );
}

export default CommonForm;