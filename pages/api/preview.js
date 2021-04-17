export default function handler(req, res) {
  res.setPreviewData({});

  res.writeHead(307, { location: '/sobre' });

  return res.end();
}
