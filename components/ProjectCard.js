export default function ProjectCard({ title, description, tech, repo }) {
return (
<div className="p-4 border rounded bg-white dark:bg-gray-800">
<h4 className="font-semibold text-lg">{title}</h4>
<p className="mt-2 text-sm">{description}</p>
<div className="mt-3 text-xs">{tech.join(' • ')}</div>
{repo && <a className="mt-3 inline-block text-sm underline" href={repo}>Repository</a>}
</div>
)
}