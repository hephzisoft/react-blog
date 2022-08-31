
import { link } from 'react-router-dom'
const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav">
            <form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    value={search}
                    placeholder="Search Post"
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
