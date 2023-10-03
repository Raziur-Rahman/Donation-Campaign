

const DonationCard = ({ data }) => {

    const { Title, Category, CategoryBackground, Card_B_Bg, CategoryTextColor, Image, DonationAmount} = data;


    return (
        <div>
            <div >
                <div className="card card-side bg-base-100 shadow-xl" style={{ backgroundColor: Card_B_Bg }}>
                    <figure><img className="h-full w-[150px] md:w-fit " src={Image[1]} alt="Movie" /></figure>
                    <div className="card-body px-2">
                        <p ><small className="py-2 px-4 rounded-md" style={{ backgroundColor: CategoryBackground, color: CategoryTextColor }}>{Category}</small></p>
                        <h2 className="card-title">{Title}</h2>
                        <p className="text-lg font-semibold" style={{color:CategoryTextColor}}>{DonationAmount}</p>
                        <div className="card-actions justify-start">
                            <button className="px-4 py-1 font-semibold rounded-md text-white" style={{ backgroundColor: CategoryTextColor, color: 'white' }}>View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;