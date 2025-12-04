import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="mb-12">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 max-w-2xl">I focus on backend systems, security engineering, and cloud infrastructure. I publish notes and tools to GitHub — check my projects and blog for write-ups.</p>
          <Link href="/about" className="mt-4 inline-block hover:text-blue-600 transition-colors">
            Read more →
          </Link>
        </div>
        <div className="mt-6 md:mt-0">
          <img src="/avatar-placeholder.png" alt="Eva" className="w-40 h-40 rounded-full" />
        </div>
      </div>
    </section>
  )
}