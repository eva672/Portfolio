import Link from 'next/link'


export default function Layout({ children }) {
return (
<div className="min-h-screen flex flex-col">
<header className="bg-white dark:bg-gray-800 shadow">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<Link href="/"><a className="font-semibold">Eva Manuska</a></Link>
<nav className="space-x-4">
<Link href="/about"><a>About</a></Link>
<Link href="/projects"><a>Projects</a></Link>
<Link href="/blog"><a>Blog</a></Link>
<Link href="/contact"><a>Contact</a></Link>
</nav>
</div>
</header>


<div className="flex-1">{children}</div>


<footer className="bg-gray-100 dark:bg-gray-800 py-6">
<div className="container mx-auto px-6 text-center text-sm">© {new Date().getFullYear()} Eva Manuska — Built with Next.js</div>
</footer>
</div>
)
}