import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const HomeView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div>
            <h1>Login</h1>
            <input onChange={event => setAuthenticatedUser(event.target.value)} />
            <h1>This is the homeview</h1>
        </div>
    )
}
