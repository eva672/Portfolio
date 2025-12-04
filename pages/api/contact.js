export default function handler(req, res) {
if (req.method !== 'POST') return res.status(405).end()
// For demo, we just return success. Connect to an email service in production.
return res.status(200).json({ ok: true })
}