import React from 'react';

export default function Introduction({ intro }) {
  return (
    <div className="column is-12">
      <h2 className="is-size-2">About Humanity (coming soon!)</h2>
      <p>{intro}</p>
    </div>
  );
}
