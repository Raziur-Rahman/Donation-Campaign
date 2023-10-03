import { useEffect } from "react";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { useState } from "react";

const Donation = () => {
    const [cards, setCards] = useState([])
    const [noFounds, setNoFounds] = useState(false);
    const [btnState, setBtnState] = useState(true);


    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('Donation'));
        if (donations) {
            setCards(donations);
        }
        else {
            setNoFounds('No Data Found')
            setBtnState(!btnState)
        }
    }, [btnState])

    return (
        <div className="my-10">
            {
                noFounds ? <p className="h-[70vh] flex justify-center items-center text-xl">{noFounds}</p> :
                    <div>
                        {btnState && cards.length > 4 ? <div className="flex flex-col justify-center items-center">
                            <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 lg:px-8 xl:px-32 w-full">
                                {
                                    cards.slice(0, 4).map(item => <DonationCard key={item.ID} data={item} ></DonationCard>)
                                }
                            </div>
                            <button onClick={() => setBtnState(!btnState)} className={`${btnState ? "px-4 py-2 my-5 font-semibold text-white bg-[#009444] rounded-md w-fit" : "hidden"}`}>Show All</button>

                        </div> :
                            <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 lg:px-8 xl:px-32" >
                                {
                                    cards.map(item => <DonationCard key={item.ID} data={item} ></DonationCard>)
                                }
                            </div>
                        }

                    </div>

            }
        </div>
    );
};

export default Donation;