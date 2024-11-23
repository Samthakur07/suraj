
// const Services = () => {
//   return (
//     <>

{/* <div className="">
    
    <div className="flex justify-around pt-14 text-blue-800 font-bold text-2xl  flex-wrap  gap-8 p-4 overflow-hidden  bg-black">
        <h1> OUR SERVICES</h1>
    </div>
    
    <div className="flex justify-around pt-4 pb-10 font-bold text-4xl text-green-500 bg-black">
        <h1>Services Built Specifically <span className="flex justify-around">For Your
             Business</span> </h1>
    </div> */}

{/* <div className="flex-wrap justify-around ">
    
    <div className=" ml-16 max-w-sm mx-auto bg-black shadow-md rounded-lg p-6 text-center hover:bg-white justify-start align-center mb-10 h-auto">
      <div className="text-blue-600 text-5xl mb-4">
        
        <i className="fas fa-code">{"</>"}</i>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Black Grapes Asociate</h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultrices tincidunt.
      </p>
      <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition mb-10">
        Read More
      </button>
    </div>

*/}
{/* 
<div className="flex flex-wrap justify-center gap-8 p-4 overflow-hidden  bg-black">
  {Array(6).fill(0).map((_, index) => (
    <div
      key={index}
      className="max-w-sm w-full sm:w-auto bg-white shadow-md rounded-lg p-6 text-center hover:bg-black transition-all ease-in-out duration-300"
    >
      <div className="text-blue-600 text-5xl mb-10">
        <i className="fas fa-code">{"</>"}</i>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">
        Black Grapes Associate
      </h2>
      <p className="text-gray-400 mb-4">
        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.
        Aliquam dolor eget urna ultrices tincidunt.
      </p>
      <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
        Read More
      </button>
    </div>

    


  ))}
</div> */}
// import { CgMenuRound } from "react-icons/cg";



// const cardData = [
//   {
//     id: 1,
//     title: "Black Grapes Associate",
//     description: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.",
//     icon: <CgMenuRound/> ,
//   },
//   {
//     id: 2,
//     title: "Black Grapes Softech",
//     description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
//     icon: "fas fa",
//   },
//   {
//     id: 3,
//     title: "Black Grapes Real Estate",
//     description: "Curabitur nec nisl a purus blandit viverra.",
//     icon: "fas f",
//   },
//   {
//     id: 4,
//     title: "Black Grapes valers & Engineers",
//     description: "Praesent consectetur arcu eget nisi tincidunt, vitae suscipit lectus tincidunt.",
//     icon: "fas f",
//   },
//   {
//     id: 5,
//     title: "Black Grapes Insurance Surveyors & Loss Assessors Pvt. Ltd.",
//     description: "Donec id justo vel mauris aliquet dignissim.",
//     icon: "fas ",
//   },

// ];

// const Services = () => {
//   return (

//     <>


// <div className="">

//     <div className="flex justify-around pt-14 text-blue-800 font-bold text-2xl  flex-wrap  gap-8 p-4 overflow-hidden  bg-black">
//         <h1> OUR SERVICES</h1>
//     </div>

//     <div className="flex justify-around pt-4 pb-10 font-bold text-4xl text-green-500 bg-black">
//         <h1>Services Built Specifically <span className="flex justify-around">For Your
//              Business</span> </h1>
//     </div>

//     <div className="flex flex-wrap justify-center gap-8 p-4 overflow-hidden bg-black">
//       {cardData.map((card) => (
//         <div
//           key={card.id} 
//           className="max-w-sm w-full sm:w-auto bg-white shadow-md rounded-lg p-6 text-center hover:bg-black transition-all ease-in-out duration-300"
//         >
//           <div className="text-blue-600 text-5xl mb-10">
//             <i className="flex justify-around">{card.icon}</i>
//           </div>
//           <h2 className="flex justify-around text-xl font-semibold mb-2 text-blue-700">
//             {card.title}
//           </h2>
//           <p className="text-gray-400 mb-4">
//             {card.description}
//           </p>
//           <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
//             Read More
//           </button>
//         </div>
//       ))}
//     </div>




//     </div>  



//     </>
//   )
// }

// export default Services



import React from "react";
import { CgMenuRound } from "react-icons/cg";

const cardData = [
    {
        id: 1,
        title: "Black Grapes Associate",
        description: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.",
        icon: <CgMenuRound />,
    },
    {
        id: 2,
        title: "Black Grapes Softech",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        icon: <CgMenuRound />, // Replace with appropriate icon
    },
    {
        id: 3,
        title: "Black Grapes Real Estate",
        description: "Curabitur nec nisl a purus blandit viverra.",
        icon: <CgMenuRound />, // Replace with appropriate icon
    },
    {
        id: 4,
        title: "Black Grapes Valers & Engineers",
        description: "Praesent consectetur arcu eget nisi tincidunt, vitae suscipit lectus tincidunt.",
        icon: <CgMenuRound />, // Replace with appropriate icon
    },
    {
        id: 5,
        title: "Black Grapes Insurance Surveyors & Loss Assessors Pvt. Ltd.",
        description: "Donec id justo vel mauris aliquet dignissim.",
        icon: <CgMenuRound />, // Replace with appropriate icon
    },
];

const Services = () => {
    return (
        <>
            <div>
                <div className="flex justify-around pt-14 text-blue-800 font-bold text-2xl flex-wrap gap-8 p-4 overflow-hidden bg-white">
                    <h1>OUR SERVICES</h1>
                </div>

                <div className="flex justify-around pt-4 pb-10 font-bold text-4xl text-green-500 bg-white">
                    <h1>
                        Services Built Specifically
                        <span className="flex justify-around">For Your Business</span>
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-8 p-4 overflow-hidden bg-white">
                    {cardData.map((card) => (
                        <div             
                            key={card.id}
                            className="max-w-sm w-full sm:w-auto bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:bg-black hover:-translate-y-2"
                        >
                            <div className="flex justify-around text-blue-600 text-5xl mb-10">
                                {card.icon}
                            </div>
                            <h2 className="flex justify-around text-xl font-semibold mb-8 text-blue-700">
                                {card.title}
                            </h2>
                            <p className="text-gray-400 mb-8">
                                {card.description}
                            </p>
                            <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition mb-8">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
