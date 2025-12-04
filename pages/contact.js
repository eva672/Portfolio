import Head from 'next/head'


export default function Contact() {
return (
<>
<Head>
<title>Contact — Eva Manuska</title>
</Head>
<div className="container mx-auto px-6 py-16">
<h1 className="text-3xl font-bold mb-4">Contact</h1>
<p className="mb-6">Email: <a href="mailto:eva@example.com" className="underline">eva@example.com</a></p>
<form className="max-w-xl">
<label className="block mb-2">Message</label>
<textarea className="w-full p-3 rounded border" rows={6}></textarea>
<button className="mt-3 px-4 py-2 rounded bg-blue-600 text-white">Send</button>
</form>
</div>
</>
)
}