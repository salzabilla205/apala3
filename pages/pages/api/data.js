let suhuData = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { suhu } = req.body;
    if (typeof suhu !== 'number') {
      return res.status(400).json({ error: 'Format suhu salah' });
    }
    const entry = { suhu, timestamp: Date.now() };
    suhuData.push(entry);
    if (suhuData.length > 50) suhuData.shift(); // simpan max 50 data
    return res.status(200).json({ message: 'Data diterima', entry });
  }

  if (req.method === 'GET') {
    return res.status(200).json(suhuData);
  }

  res.status(405).end(); // Method Not Allowed
}
