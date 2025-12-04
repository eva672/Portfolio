export default function Hero() {
return (
<section className="mb-12">
<h1 className="text-4xl md:text-5xl font-bold mb-4">Hi — I’m Eva Manuska</h1>
<p className="text-lg max-w-3xl leading-7">Systems engineer & developer — I build secure, observable infrastructure and developer tools. I work with Rust, JavaScript, Kubernetes, and security tooling like Suricata and Wazuh.</p>
<div className="mt-6 flex gap-3">
<a href="/projects" className="px-4 py-2 rounded bg-blue-600 text-white">See Projects</a>
<a href="/contact" className="px-4 py-2 rounded border">Contact</a>
</div>
</section>
)
}