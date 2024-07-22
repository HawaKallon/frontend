import React from 'react';

const EmailNotification = ({ email, amount, walletAddress }) => {
  return (
    <div>
      <h1>Email Sent</h1>
      <p>An email has been sent to {email} with instructions to access {amount} SOL.</p>
      <p>Temporary Wallet Address: {walletAddress}</p>
    </div>
  );
};

export default EmailNotification;
