import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'


const projects = [
{
title: 'Proof-of-Work Chrome Extension',
description: 'Extension that performs client-side PoW for rate-limiting or anti-abuse flows. Built with Manifest V3 and JS.',
tech: ['Chrome Extension', 'JS', 'WebExtensions'],
repo: '#'
},
{
title: 'Suricata Automation',
description: 'Bash scripts and configuration management to deploy Suricata IDS/IPS across Linux and macOS.',
tech: ['Suricata', 'Bash', 'Ansible'],
repo: '#'
},
{
title: 'Rust Auth Service',
description: 'Auth & authorization system implemented in Rust (Axum), OpenAPI docs with Utoipa.',
tech: ['Rust', 'Axum', 'OpenAPI'],
repo: '#'
}
]


export default function Projects() {
return (
<>
<Head>
<title>Projects — Eva Manuska</title>
</Head>
<div className="container mx-auto px-6 py-16">
<h1 className="text-3xl font-bold mb-6">Projects</h1>
<div className="grid gap-6 md:grid-cols-2">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</div>
</>
)
}