import Head from 'next/head'
import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import AboutPreview from '../components/AboutPreview'


export default function Home() {
return (
<>
<Head>
<title>Eva Manuska — Developer</title>
<meta name="description" content="Eva Manuska — Rust, JS, Security, DevOps" />
</Head>


<main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<div className="container mx-auto px-6 py-16">
<Hero />
<AboutPreview />
<ProjectsPreview />
</div>
</main>
</>
)
}