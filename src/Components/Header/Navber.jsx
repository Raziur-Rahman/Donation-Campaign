import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <nav className="px-32 py-2">
                <div className="flex items-center ">
                    <div className="flex-1">
                        <Link to={'/'}><img src={'https://i.ibb.co/N9M0kxJ/Logo.png'} alt="" /></Link>
                    </div>
                    <div className="flex gap-5 ">
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
            <div className="hero " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div >
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div>
                            <div className="join">
                                <div>
                                    <div>
                                        <input className="input input-bordered join-item md:w-80" placeholder="Search here..." />
                                    </div>
                                </div>
                                <div className="indicator">
                                    <button className="btn join-item bg-[#FF444A] border-none text-white hover:bg-amber-500">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;