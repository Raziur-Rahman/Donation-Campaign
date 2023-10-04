
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


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
            swal("Good job!", "Thank you for such amazing work!", "success");

        }
        else {

            const isExists = donations.find(item => item.ID === ID)
            if (isExists) {
                swal("Opps!", "Already Donated!", "error");
            }
            else {
                addDonationData.push(...donations, donationPosts)
                localStorage.setItem('Donation', JSON.stringify(addDonationData))
                swal("Good job!", "Thank you for such an amazing work keep it up!", "success");

            }
        }
        // console.log(clickeData);
    }

    return (
        <div className=" p-3 lg:px-8 xl:px-32">

            <div className="relative rounded-md">
                <img className="h-[500px] lg:h-fit w-screen" src={'https://i.ibb.co/rMFvKF6/Rectangle-4288.png'} alt="" />

                <div className="absolute bottom-0 min-w-full  bg-blend-darken bg-slate-800  bg-opacity-60 rounded-b-md">
                    <button onClick={handleClick} className="px-4 py-2 text-xl rounded-md text-white font-medium my-10 mx-10" style={{ backgroundColor: CategoryTextColor }}>Donate {DonationAmount}</button>
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