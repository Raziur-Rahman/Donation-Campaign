import { Link } from "react-router-dom";


const HomeCard = ({ data }) => {

    const {ID, Image, Category, Title, CategoryBackground, Card_B_Bg, CategoryTextColor } = data;


    return (
        <div >
            <Link to={`/details/${ID}`}>
                <div className="rounded-md w-fit" style={{ backgroundColor: CategoryBackground }}>
                    <figure><img src={Image[0]} alt="Image..." /></figure>
                    <div className=" p-4" style={{ color: CategoryTextColor }}>
                        <a className="px-4 py-1 rounded-md font-semibold" style={{ backgroundColor: Card_B_Bg }}>{Category}</a>
                        <h2 className="text-xl font-semibold mt-5">{Title}</h2>

                    </div>
                </div>

            </Link>

        </div>
    );
};

export default HomeCard;