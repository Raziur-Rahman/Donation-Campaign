import { useEffect } from "react";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { useState } from "react";

const Donation = () => {
    const [cards, setCards] = useState([])
    const [noFounds, setNoFounds] = useState(false);
    const [btnState, setBtnState] = useState(true);


    // Geting data from Local Storage
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

    // Codes for Conditional rendaring of donation page here 
    return (
        <div className="my-10">
            {
                // Render bassed on Local Storage data 
                noFounds ? <p className="h-[70vh] flex justify-center items-center text-4xl font-semibold">{noFounds}</p> :
                    <div>
                        {/* Rander Bassed On 'Show All' button State and Data lenght */}

                        {btnState && cards.length > 4 ? <div className="flex flex-col justify-center items-center">
                            {/* Cards are showen here */}
                            <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 lg:px-8 xl:px-32 w-full">
                                {
                                    cards.slice(0, 4).map(item => <DonationCard key={item.ID} data={item} ></DonationCard>)
                                }
                            </div>
                            {/* Showing button bassed on btn State */}
                            <button onClick={() => setBtnState(!btnState)} className={`${btnState ? "px-4 py-2 my-5 font-semibold text-white bg-[#009444] rounded-md w-fit" : "hidden"}`}>Show All</button>

                        </div>
                            // Showing cards if less then or equal "4" cards
                            : <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 lg:px-8 xl:px-32" >
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