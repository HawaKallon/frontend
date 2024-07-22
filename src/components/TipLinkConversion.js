import React, { useState } from 'react';
import { TipLink } from '@tiplink/api';

const TipLinkConversion = () => {
  const [tipLinkUrl, setTipLinkUrl] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const handleConvert = async () => {
    try {
      const tiplink = await TipLink.fromLink(tipLinkUrl);
      setPublicKey(tiplink.keypair.publicKey.toBase58());
    } catch (error) {
      console.error('Error converting TipLink:', error);
    }
  };

  return (
    <div>
      <h1>Convert TipLink to KeyPair</h1>
      <input
        type="text"
        value={tipLinkUrl}
        onChange={(e) => setTipLinkUrl(e.target.value)}
        placeholder="TipLink URL"
      />
      <button onClick={handleConvert}>Convert</button>
      {publicKey && <p>Public Key: {publicKey}</p>}
    </div>
  );
};

export default TipLinkConversion;
