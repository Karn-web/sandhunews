import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length === 0) return null

  return (
    <nav className="max-w-7xl mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-sandhu-muted hover:text-sandhu-red transition-colors">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const displayName = name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

          return (
            <li key={name} className="flex items-center gap-2">
              <span className="text-sandhu-muted/50">/</span>
              {isLast ? (
                <span className="text-white font-medium">{displayName}</span>
              ) : (
                <Link to={routeTo} className="text-sandhu-muted hover:text-sandhu-red transition-colors">
                  {displayName}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}