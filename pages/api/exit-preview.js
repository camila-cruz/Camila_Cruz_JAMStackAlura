export default function handler(req, res) {
  res.clearPreviewData();

  res.writeHead(307, { location: '/sobre' });

  return res.end();
}
