import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div >
            <nav className=" md:px-10 lg:px-32 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center ">
                    <div className="flex-1">
                        <Link to={'/'}><img src={'https://i.ibb.co/N9M0kxJ/Logo.png'} alt="" /></Link>
                    </div>
                    <div className="flex gap-5 my-4 ">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-500 underline font-bold" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active text-blue-500 underline font-bold" : ""
                            }
                        >
                            Donation
                        </NavLink>
                        <NavLink
                            to="/statistic"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-blue-500 underline font-bold active" : ""
                            }
                        >
                            Statistics
                        </NavLink>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navber;