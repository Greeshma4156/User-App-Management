import { NavLink } from "react-router"

function Header() {
  return (
    <div className="flex justify-between px-10 items-center bg-green-300 ">
        <img className="rounded-full" width="80px" src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg" alt="" />
        <ul className="flex gap-6 text-2xl">
            <li>
                <NavLink to="home" className={({isActive})=>(isActive ? "bg-blue-400 text-lime-50 rounded-xs p-2 shadow" : "")}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="add-user" className={({isActive})=>(isActive ? "bg-blue-400 text-lime-50 rounded-xs p-2 shadow" : "")}>
                    AddUser
                </NavLink>
            </li>

            <li>
                <NavLink to="users-list" className={({isActive})=>(isActive ? "bg-blue-400 text-lime-50 rounded-xs p-2 shadow" : "")}>
                    UserList
                </NavLink>
            </li>

            <li>
                <NavLink to="user" className={({isActive})=>(isActive ? "bg-blue-400 text-lime-50 rounded-xs p-2 shadow" : "")}>
                    User
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header