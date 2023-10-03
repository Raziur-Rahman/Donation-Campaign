import { useContext } from "react";
import { SearchContext } from "../../Pages/Home/Home";


const Bannar = () => {

    const [searchValue , setSearchValue] = useContext(SearchContext);

    const handleSearch = () => {
        const searchField = document.getElementById("inputField");
        const inputText = searchField.value;
        if (inputText === '') {
            setSearchValue(searchValue);
        }
        else {
            setSearchValue(inputText);
            searchField.value = ''
        }

    }

    // console.log(searchValue);


    return (
        <div>
            <div className="hero h-[500px] bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/9tP6ZS1/bg-image.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-10 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div>
                            <div className="join">
                                <div>
                                    <input id="inputField" className="input input-bordered join-item md:w-80 text-black font-semibold" placeholder="Search here..." />
                                </div>
                                <div className="indicator">
                                    <button onClick={handleSearch} className="btn join-item bg-[#FF444A] border-none text-white hover:bg-amber-500">Search</button>
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