import Link from 'next/link'


export default function ProjectsPreview() {
return (
<section className="mb-12">
<h3 className="text-xl font-semibold mb-4">Selected Projects</h3>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-4 border rounded">Proof-of-Work Chrome extension</div>
<div className="p-4 border rounded">Suricata Automation</div>
<div className="p-4 border rounded">Rust Auth Service</div>
</div>
<div className="mt-4">
<Link href="/projects"><a>View all projects →</a></Link>
</div>
</section>
)
}