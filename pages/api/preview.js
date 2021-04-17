export default function handler(req, res) {
  if (req.query.key !== process.env.NEXT_PREVIEW_MODE_KEY) {
    return res.status(401).json({ message: 'Invalid key to enable preview mode' });
  }

  res.setPreviewData({});

  res.writeHead(307, { location: '/sobre' });

  return res.end();
}
