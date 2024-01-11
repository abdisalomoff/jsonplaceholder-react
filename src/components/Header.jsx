import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between py-2">
            <Link className="text-decoration-none text-dark fs-2" to={"/"}>JSON Placeholder</Link>
            <ul className="d-flex m-0 gap-5 ">
                <li>
                    <Link className="text-decoration-none text-dark" to={"/"}>Information</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-dark" to={"/todos"}>Add Contact</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-dark" to={"/crud"}>Add Todo</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header