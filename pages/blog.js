import Head from 'next/head'


export default function Blog() {
return (
<>
<Head>
<title>Blog — Eva Manuska</title>
</Head>
<div className="container mx-auto px-6 py-16">
<h1 className="text-3xl font-bold mb-6">Blog</h1>
<p className="text-lg">Use this section for technical posts: tutorials, incident analyses, and deep dives. Publishing regularly will increase your GitHub activity if you store posts in a repo.</p>
</div>
</>
)
}