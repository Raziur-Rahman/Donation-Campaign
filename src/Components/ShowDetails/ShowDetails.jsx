
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ShowDetails = () => {
    const [donationPosts, setDonationPosts] = useState([]);

    const DonationId = useParams();
    const data = useLoaderData();

    useEffect(() => {

        const donationPost = data.find((items) => items.ID === DonationId.ID);
        setDonationPosts(donationPost);
        
    }, [DonationId.ID, data])

    const { ID, Description, Title, CategoryTextColor, DonationAmount } = donationPosts;

    const handleClick = () => {
        const addDonationData = []

        const donations = JSON.parse(localStorage.getItem('Donation'));

        if (!donations) {
            addDonationData.push(donationPosts);
            localStorage.setItem('Donation', JSON.stringify(addDonationData))
            alert("Thanks For Your Donation");

        }
        else {

            const isExists = donations.find(item => item.ID === ID)
            if (isExists) {
                alert("already Donated... thank you...")
            }
            else {
                addDonationData.push(...donations, donationPosts)
                localStorage.setItem('Donation', JSON.stringify(addDonationData))
                alert("Thanks For Your Donation");

            }
        }
        // console.log(clickeData);
    }

    return (
        <div className=" p-3 lg:px-32">
            <div className="h-[500px] rounded-md" style={{ backgroundImage: 'url(https://i.ibb.co/rMFvKF6/Rectangle-4288.png)' }}>

                <div className="items-baseline">
                    <div className="hero justify-items-start" >
                        <div className="hero-overlay rounded-b-md bg-opacity-60"></div>
                        <div className="hero-content">
                            <div className="max-w-md py-8 justify-start">
                                <button onClick={handleClick} className="px-4 py-2 text-xl rounded-md text-white font-medium" style={{ backgroundColor: CategoryTextColor }}>Donate {DonationAmount}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <h1 className="my-6 text-5xl font-bold text-black" >{Title}</h1>
                <p className="text-xl">{Description}</p>
            </div>

        </div>

    );
};

export default ShowDetails;