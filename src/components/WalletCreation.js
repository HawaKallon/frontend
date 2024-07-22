import React, { useState } from 'react';

const WalletCreation = ({ walletAddress }) => {
  const [recipientWallet, setRecipientWallet] = useState('');

  const handleTransfer = async () => {
    const response = await fetch('/api/transferFunds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ walletAddress, recipientWallet }),
    });
    const data = await response.json();
    console.log('Funds transferred:', data);
  };

  return (
    <div>
      <h1>Wallet Created</h1>
      <p>Temporary Wallet Address: {walletAddress}</p>
      <input
        type="text"
        value={recipientWallet}
        onChange={(e) => setRecipientWallet(e.target.value)}
        placeholder="Your Wallet Address"
      />
      <button onClick={handleTransfer}>Transfer Funds</button>
    </div>
  );
};

export default WalletCreation;
