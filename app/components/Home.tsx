import React, { useEffect } from 'react';
import styles from './Home.css';

export default function Home() {
  useEffect(() => {
    (window as any).recurly.configure('ewr1-BrfKUWEllwCxdpRZvZloaJ');
  }, []);

  const paypal = e => {
    const paypal = (window as any).recurly.PayPal({
      display: {
        displayName: 'Test',
        description: 'Test description'
      }
    });

    paypal.on('error', error => {
      console.log(error);
    });

    paypal.on('token', token => {
      console.log(token);
    });

    paypal.on('cancel', () => {
      console.log('cancel');
    });

    paypal.on('ready', () => {
      console.log('ready');
    });

    paypal.start();
  };

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <button onClick={paypal}>Paypal</button>
    </div>
  );
}
