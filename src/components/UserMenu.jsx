import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/userSlise"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login)
    return <div>{login}
    <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
}