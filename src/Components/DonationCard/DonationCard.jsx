

const DonationCard = () => {
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={"https://i.ibb.co/mCwtNfv/Rectangle-4287-1.png"} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-start">
                            <button className="px-4 py-1 font-semibold rounded-md text-white" style={{backgroundColor: 'red'}}>Details</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DonationCard;