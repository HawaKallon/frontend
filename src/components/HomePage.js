import React, { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    try {
      const response = await fetch('/api/createWallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, amount }),
      });
      const data = await response.json();
      console.log('Temporary wallet created:', data.walletAddress);
    } catch (error) {
      console.error('Error sending cryptocurrency:', error);
    }
  };

  return (
    <div>
      <h1>Send Cryptocurrency</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Recipient's Email"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default HomePage;
