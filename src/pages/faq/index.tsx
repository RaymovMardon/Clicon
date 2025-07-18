import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './faq.module.scss';
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from 'axios'
import imgCh from "../../../public/images/Check.svg"
import { useState } from 'react';
type FormValues = {
    Subject: string
    Msg: string
    email: string
  }

 function FaqPage (){
    const [modal, setModal]=useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormValues>();
    
      const onSubmit: SubmitHandler<FormValues> = async (data) => {
        
        try {
            const response = await axios.post(
              'https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage',
              {
                chat_id: '-1002628074810',
                text: `email: ${data.email}
        Subject: ${data.Subject}
        Massage (Optional): ${data.Msg}`
              },
              {
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8',
                }
              }
            );
            return response.data;
          } catch (error) {
            console.error('Error sending message:', error);
            return null;
          }finally{
            console.log("success");
            setModal(true);
reset();
          }
      };
  return (
    <>
<section className='custom_container'>
    <div className={styles.faq_wrp}>
        {modal?(<div className={styles.faq_modal}>
          <div><img src={imgCh} alt="ok" /></div>
<p>Your message successfully send!</p>
<button onClick={()=>{setModal(!modal)}}>Ok</button>
        </div>):""}
    <div>
        <h2>Frequently Asked Questions</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="div">Suspendisse ultrices pharetra libero sed interdum.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          
                <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
            <ul>
                <li>&#8901; Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                <li>&#8901; Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                <li>&#8901; Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                <li>&#8901; Quisque ut dolor erat.</li>
            </ul>
            
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="div">Fusce molestie condimentum facilisis.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            
                <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
            <ul>
                <li>&#8901; Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                <li>&#8901; Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                <li>&#8901; Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                <li>&#8901; Quisque ut dolor erat.</li>
            </ul>
            
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="div">Quisque quis nunc quis urna tempor lobortis vel non orci. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            
                <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
            <ul>
                <li>&#8901; Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                <li>&#8901; Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                <li>&#8901; Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                <li>&#8901; Quisque ut dolor erat.</li>
            </ul>
            
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="div">Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            
                <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
            <ul>
                <li>&#8901; Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                <li>&#8901; Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                <li>&#8901; Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                <li>&#8901; Quisque ut dolor erat.</li>
            </ul>
            
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="div">Nulla sed sapien maximus, faucibus massa vitae. </Typography>
        </AccordionSummary>
        <AccordionDetails>
       
            
                <p>Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
            <ul>
                <li>&#8901; Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                <li>&#8901; Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                <li>&#8901; Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                <li>&#8901; Quisque ut dolor erat.</li>
            </ul>
           
       
        </AccordionDetails>
      </Accordion>
    </div>
    <div className={styles.form_faq}>
        <h3>Don’t find your answer, Ask for support.</h3>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mt-4">
    <input
      className="p-1.5 border-2 border-[#fff3b2] w-full"
      type="email"
      placeholder="Email"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Enter a valid email",
        },
      })}
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
    )}
  </div>
  <div className="mb-4">
    <input
      className="p-1.5 border-2 border-[#fff3b2] w-full"
      type="text"
      placeholder="Subject"
      {...register("Subject", { required: "First name is required" })}
    />
    {errors.Subject && (
      <p className="text-red-500 text-sm mt-1">{errors.Subject.message}</p>
    )}
  </div>

  <div className="mb-4">
    <input
      className="p-1.5 border-2 border-[#fff3b2] w-full"
      type="text"
      placeholder="Message (Optional)"
      {...register("Msg", { required: "Last name is required" })}
    />
    {errors.Msg && (
      <p className="text-red-500 text-sm mt-1">{errors.Msg.message}</p>
    )}
  </div>

  

  <input
    className="!bg-[#FA8232]  text-white px-4 py-2 rounded cursor-pointer hover:shadow-[inset_0_0_2px_2px_rgb(255,255,255)]"
    type="submit"
    value="Send message"
  />
</form>
    </div>
    </div>
    </section>
    </>
  )
}

export default FaqPage