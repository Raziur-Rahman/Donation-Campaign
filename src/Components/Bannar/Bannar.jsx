

const Bannar = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/9rJn6b2/Doctors.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-10 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div>
                            <div className="join">
                                <div>
                                    <input className="input input-bordered join-item md:w-80" placeholder="Search here..." />
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

export default Bannar;