import { Link } from "react-router-dom";


const HomeCard = ({ data }) => {

    const {ID, Image, Category, Title, CategoryBackground, Card_B_Bg, CategoryTextColor } = data;

    //Codes for showing Home card content
    return (
        <div >
            {/* Cards clicking events manage with dynamic routing */}
            <Link to={`/details/${ID}`}>
                <div className="rounded-md w-fit" style={{ backgroundColor: CategoryBackground }}>
                    <figure><img src={Image[0]} alt="Image..." /></figure>
                    <div className=" p-4" style={{ color: CategoryTextColor }}>
                        <p className="px-4 py-1 rounded-md font-semibold w-fit" style={{ backgroundColor: Card_B_Bg }}>{Category}</p>
                        <h2 className="text-xl font-semibold mt-5">{Title}</h2>

                    </div>
                </div>

            </Link>

        </div>
    );
};

export default HomeCard;