import React, { useState } from 'react';

function CertificateVerification() {
  const [certificate, setCertificate] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleCertificateVerification = () => {
    // Implement your certificate verification logic here.
    // For demonstration, we'll use a simple condition to verify the certificate.

    if (certificate === 'valid_certificate') {
      setVerificationResult('Certificate is valid.');
    } else {
      setVerificationResult('Certificate is invalid.');
    }
  };

  return (
<div class="certificate-verification">

<h2>A2z Solutions </h2>


  <h1>Certificate Verification</h1>
  <div class="input-container">
    <label for="certificate">Certificate Code:</label>
    <input
      type="text"
      placeholder="Enter your certificate code"
      id="certificate"
      value={certificate}
      onChange={(e) => setCertificate(e.target.value)}
    />
  </div>
  <button class="verify-button" onClick={handleCertificateVerification}>Verify Certificate</button>
  {verificationResult && <p>{verificationResult}</p>}
</div>

  );
}

export default CertificateVerification;
