export default function Post({ title, links }) {
    return (
        <div className="text-gray-100 border rounded-lg px-3 py-2 border-gray-100/20 mb-2 hover:bg-gray-50/1 transition-colors">
            <div className="font-bold text-2xl flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                {title}
            </div>
            <ul className="mt-2 text-sm">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" className="font-bold transition-colors text-blue-400 hover:text-blue-500 hover:underline">
                            {link.title}
                        </a> - {link.desc}
                    </li>
                ))}
            </ul>
        </div>
    );
}