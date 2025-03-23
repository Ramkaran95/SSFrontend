// import React ,{useState} from 'react'
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { FaRupeeSign } from 'react-icons/fa';
// import { useLocation } from 'react-router-dom';
// import { ToastContainer ,toast } from "react-toastify";
// function BookService() {
//     const location = useLocation();
//     const urlI = "http://localhost:5252/";
//     const userId =   localStorage.getItem("userId");
//    const date = new Date();
//    const [paymentMethod,setPayment]= useState("");
//     const bdata = location?.state?.bdata;
//     const handlePaymentChange = (e) => setPayment(e.target.value);

//     const handleBook= async (e)=>{
//         e.preventDefault();
//         const data={
//             bookingId: 0,
//   userId: bdata.uid,
//   providerId: bdata.pid,
//   serviceName: bdata.name,
//   servicePrice: bdata.price,
//   serviceImage: bdata.image,
//   providerNote: "",
//   completionDate: "",
//   bookingDate: date.toISOString(),
//   bookingStatus: "Booked",
//   modeOfPayment: paymentMethod,
//   paymentId: ""

//         }

//         const api="http://localhost:5252/api/Booking";
//         try {
//         const response = await axios.post(api, data, {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           toast.success(
//             `Book successfully: -${
//               JSON.stringify(response.data, null, 2) || "!"
//             }  `,
//             {
           
//             }
//           );
//         }
//         catch(error) {
//             console.log("The error:", JSON.stringify(error.response?.data, null, 2));
            
             
//             toast.error(
//                 `Registration Response: ${ 
//                   error.response?.data?.status || "Something went wrong!"
//                 }  -${
//                   error.response?.data.title || "User already exist with same username or email..!"
//                 } - ${"Check: "+
//                   Object.keys(error.response?.data.errors || {}).join(", ")
//                 } `,
//                 {
                  
//                 }
//               );

//         }



//     }
//   return (
//     <>  
//     <div>BookService{bdata.image}{bdata.price}{bdata.name}{bdata.pid} </div>
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100">
//     <Card className="p-3 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
//       {/* Service Details */}
//       <Row className="mb-3">
//         <Col xs={4} className="d-flex justify-content-center align-items-start">
//         <div >
//                         <img src={urlI + bdata.image} alt="serviceImage" className="img-fluid " />
//                     </div>  </Col>
//         <Col xs={8}>
//           <p className="small text-muted">
//            {bdata.name}  </p>
//         </Col>
//       </Row>

//       {/* Price Section */}
//       <div className="text-center border rounded p-2 fw-bold"><FaRupeeSign />{bdata.price}</div>

//       {/* Payment Method */}
//       <div className="mt-3">
//         <h6 className="fw-bold">Payment Method</h6>
//         <Card className="p-2">
//           <Form>
//           <Form.Check type="radio" onChange={handlePaymentChange} value="COD" checked={paymentMethod === "COD"} label="Cash on delivery" name="payment" className="mb-2" />
// <Form.Check type="radio" onChange={handlePaymentChange} value="Online" checked={paymentMethod === "Online"} label="Online Payment" name="payment" />
//  </Form>
//         </Card>
//       </div>

//       {/* Additional Info */}
//       <p className="text-muted small mt-2">
//         * Provider can charge for extra work/customization which is not mention above.
//         <br />
//         * For more details, contact the provider.
//       </p>

//       {/* Proceed Button */}
//       <Button  onClick={handleBook} variant="primary" className="w-100 mt-2">Proceed</Button>
//     </Card>
//   </Container></>
//     )
// }

// export default BookService


import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRupeeSign } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../Spinner";
import axios from 'axios';

function BookService() {
    const location = useLocation();
    const urlI = "http://localhost:5252/";
    const date = new Date();
    const [paymentMethod, setPayment] = useState("COD");
    const bdata = location?.state?.bdata;
    const [handleSpinnerState ,setSpinnerState]=useState(false);
    

    const handlePaymentChange = (e) => setPayment(e.target.value);

    const handleBook = async (e) => {
        e.preventDefault();
        const data = {
            bookingId: 0,
            userId: bdata.uid,
            providerId: bdata.pid,
            serviceName: bdata.name,
            servicePrice: bdata.price,
            serviceImage: bdata.image,
            providerNote: "",
            completionDate: "",
            bookingDate: date.toISOString(),
            bookingStatus: "Booked",
            modeOfPayment: paymentMethod,
            paymentId: ""
        };

        const api = "http://localhost:5252/api/Booking";
        setSpinnerState(true);
        try {
            const response = await axios.post(api, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success(`Booking successful: ${JSON.stringify(response.data, null, 2)}`);
        } catch (error) {
            
            toast.error(
                `Booking Failed: ${error.response?.data?.status || "Something went wrong!"} - ` +
                `${error.response?.data?.title || "Check the details and try again."} - ` +
                `Issues: ${Object.keys(error.response?.data?.errors || {}).join(", ")}`
            );
        }
        finally{

            setSpinnerState(false);


        }
    };

    return (
        <>  
         <Spinner visible={handleSpinnerState}/>
            <Container fluid className="d-flex justify-content-center align-items-center vh-100">
                <Card className="p-3 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                    {/* Service Details */}
                    <Row className="mb-3">
                        <Col xs={4} className="d-flex justify-content-center align-items-start">
                            <div>
                                <img src={urlI + bdata.image} alt="serviceImage" className="img-fluid" />
                            </div>
                        </Col>
                        <Col xs={8}>
                            <p className="small text-muted">{bdata.name}</p>
                        </Col>
                    </Row>

                    {/* Price Section */}
                    <div className="text-center border rounded p-2 fw-bold">
                        <FaRupeeSign /> {bdata.price}
                    </div>

                    {/* Payment Method */}
                    <div className="mt-3">
                        <h6 className="fw-bold">Payment Method</h6>
                        <Card className="p-2">
                            <Form>
                                <Form.Check 
                                    type="radio" 
                                    onChange={handlePaymentChange} 
                                    value="COD" 
                                    checked={paymentMethod === "COD"} 
                                    label="Cash on delivery" 
                                    name="payment" 
                                    className="mb-2" 
                                />
                                 {/* <Form.Check 
                                    type="radio" 
                                    onChange={handlePaymentChange} 
                                    value="Online" 
                                    checked={paymentMethod === "Online"} 
                                    label="Online Payment" 
                                    name="payment" 
                                />*/}
                            </Form> 
                        </Card>
                    </div>

                    {/* Additional Info */}
                    <p className="text-muted small mt-2">
                        * Provider can charge for extra work/customization which is not mentioned above.
                        <br />
                        * For more details, contact the provider.
                    </p>

                    {/* Proceed Button */}
                    <Button onClick={handleBook} variant="primary" className="w-100 mt-2">
                        Proceed
                    </Button>
                </Card>
            </Container>
        </>
    );
}

export default BookService;
