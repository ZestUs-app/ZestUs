import React from 'react';

export default function VisitorCounter() {
  // Placeholder values — you can later connect this to real analytics
  const visitorCount = 1234;
  const country = 'Croatia';

  return (
    <div style={{ margin: '2rem auto' }}>
      <h3>Visitor Counter</h3>
      <p>Visitors: {visitorCount}</p>
      <p>Country: {country}</p>
    </div>
  );
}

