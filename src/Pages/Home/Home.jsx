// import { Link, NavLink } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import Bannar from "../../Components/Bannar/Bannar";
import HomeCard from "../../Components/HomeCard/HomeCard";


const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Bannar></Bannar>
            <div className="px-4 md:px-10 lg:px-5 xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center my-10">
                {
                    data.map(data => <HomeCard key={data.ID} data={data}></HomeCard>)
                }

            </div>

        </div>
    );
};

export default Home;