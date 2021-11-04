import React, { useState} from "react";
import emailjs  from "emailjs-com";
import { useForm } from "react-hook-form";


const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: {errors} } = useForm();

        const serviceID = "service_ID2";
        const templateID = "template_ID2";
        const userID = "user_pO994PcFyW5Sbz6CRIxQw";

        const onSubmit = (data, reset) => {
            sendEmail(
                serviceID,
                templateID,
                   {
                       name: data.name,
                       phone: data.phone,
                       email: data.email,
                       subject: data.subject,
                       description: data.description,
                   },
                   userID
                )
                reset.target.reset();
        }

        const sendEmail = (serviceID, templateID, variables, userID) => {
        
    
            emailjs.send(serviceID, templateID, variables, userID)
              .then(() => {
                  setSuccessMessage("Message was send Successfully!");
              }) .catch(err => console.error(`Something went wrong ${err}`));
             
          }


    return (
        <div id="contact" className="contacts" >
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill up the form below to get in touch</p>
            </div>
        
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6 col-xs-12"> 
                    {/*name input*/}
                    <input
                    type="text"
                        className="form-control"
                        placeholder="Name"
                        {...register("name", {
                            required: "Please enter your Name",
                            maxLength: {
                              value: 20,
                              message:
                                "Please enter a name with fewer than 20 characters"
                                }
                            })
                        }

                    />
                    <div className="line"></div>
                    {errors.name && (
                  <span className="error-message">{errors.name.message} </span>
                )}
                      {/*phone input*/}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        {...register("phone", {
                            required: "Please enter your Phone number",
                            
                                
                            })
                        }
                    />
                    <div className="line"></div>
                    {errors.phone && (
                  <span className="error-message">{errors.phone.message} </span>
                )}
                        {/*email input*/}
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        {...register("email", {
                            required: "Please enter your Email Address",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid Email"
                            }
                            })
                        }

                    />
                    <div className="line"></div>
                    {errors.email && (
                  <span className="error-message">{errors.email.message} </span>
                )}
                        {/*Subject input*/}
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Please enter a Subject",
                            maxLength: {
                              value: 10,
                              message:
                                "Please enter a Subject of your message"
                                }
                            })
                        }

                    />
                    <div className="line"></div>
                    {errors.subject && (
                  <span className="error-message">{errors.subject.message} </span>
                )}
                    
                </div>
                        <div className="col-md-6 col-xs-12">
                                 {/*Description*/}
                            <textarea
                             type="text"
                             className="form-control"
                             placeholder="Write your message here"
                             {...register("description", {
                                required: "Please enter you message",
                                maxLength: {
                                  value: 500,
                                  message:
                                    "Message empty!"
                                    }
                                })
                            }
                            ></textarea>
                            <div className="line"></div>
                            {errors.description && (
                  <span className="error-message">{errors.description.message} </span>
                )}
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
            </div>
            </form>
        </div>
       
        </div>
    )
}

export default Contacts
