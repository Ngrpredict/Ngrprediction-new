import React from 'react';

const PaymentPage = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
      <p>Select your preferred payment method:</p>
      <ul className="mt-4 list-disc list-inside text-left mx-auto w-fit">
        <li>Stripe (Card)</li>
        <li>PayPal</li>
        <li>Cryptocurrency (USDT, XRP, BTC, ETH, SOL)</li>
      </ul>
      <p className="mt-4">All transactions are secure and encrypted.</p>
    </div>
  );
};

export default PaymentPage;
