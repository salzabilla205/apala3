export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Data diterima dari ESP01:', data);

    // kamu bisa simpan data ke file / database / dll di sini
    res.status(200).json({ message: 'Data diterima' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
