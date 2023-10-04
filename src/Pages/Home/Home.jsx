// import { Link, NavLink } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import Bannar from "../../Components/Bannar/Bannar";
import HomeCard from "../../Components/HomeCard/HomeCard";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext('');


const Home = () => {

    const [searchValue, setSearchValue] = useState('');
    const [showData, setShowData] = useState([]);
    const [found, setFound] =useState(true);

    const data = useLoaderData();

    useEffect(()=>{
        if(searchValue === ""){
            setShowData(data);

        }
        else{
            const temp = data.filter(item => item.Category === searchValue);
            if(temp.length > 0){
                setShowData(temp);
                setFound(true)

            }
            else{
                setFound(false);
            }
            
        }
    },[searchValue,data])


    // console.log(searchValue);

    return (
        <div>
            <SearchContext.Provider value={[searchValue, setSearchValue]}>
                <Bannar></Bannar>
                <div >
                    {
                        found ? <div className="px-4 md:px-10 lg:px-5 xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center my-10">{
                            showData.map(data => <HomeCard key={data.ID} data={data}></HomeCard>)
                        }</div>
                        : <p className="text-4xl flex justify-center items-center font-semibold h-[20vh]">Opps! No data found for this Category...</p>
                    }

                </div>
            </SearchContext.Provider>


        </div>
    );
};

export default Home;