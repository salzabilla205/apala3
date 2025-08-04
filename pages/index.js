import { useEffect, useState } from 'react';
import '../styles/style.css';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Monitoring Suhu Ruang Vaksin</h1>
      <div className="card">
        {data.length === 0 ? (
          <p>Menunggu data masuk...</p>
        ) : (
          data.map((item, idx) => (
            <div key={idx} className="row">
              <span>Suhu: <b>{item.suhu}°C</b></span>
              <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
