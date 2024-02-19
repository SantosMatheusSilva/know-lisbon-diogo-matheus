import { Link } from 'react-router-dom'

export default function ErrorPage () {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2><Link to='/'>Go Home</Link></h2>
        </div>
    )
}