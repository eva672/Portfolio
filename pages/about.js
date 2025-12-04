import Head from 'next/head'


export default function About() {
return (
<>
<Head>
<title>About — Eva Manuska</title>
</Head>
<div className="container mx-auto px-6 py-16">
<h1 className="text-3xl font-bold mb-4">About — Eva Manuska</h1>
<p className="mb-4 leading-7">I am a developer focused on systems, security, and cloud infrastructure. I work with Rust, JavaScript, Kubernetes, and tools like Suricata and Wazuh. I enjoy building reliable, observable systems and contributing to open-source.</p>


<h2 className="text-2xl font-semibold mt-8 mb-3">Skills</h2>
<ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
<li>Rust • Systems programming</li>
<li>JavaScript • Node.js</li>
<li>Chrome Extensions</li>
<li>Kubernetes • Docker</li>
<li>Suricata • Wazuh • IDS/IPS</li>
<li>AWS • Infrastructure</li>
</ul>


<h2 className="text-2xl font-semibold mt-8 mb-3">Experience</h2>
<div className="prose dark:prose-invert">
<p>Include your work history here — roles, responsibilities, and highlights.</p>
</div>
</div>
</>
)
}