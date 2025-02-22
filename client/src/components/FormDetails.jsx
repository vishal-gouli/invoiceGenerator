import React, { useRef } from 'react'
import style5 from './FormDetails.module.css'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormDetails = (props) => {
  // console.log(props.empdate.Idiscount)

  const form = useRef();

  const pdfRef = useRef();

  const downloadPDF =()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth , pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) /2;
      const imgY = 30;
      pdf.addImage(imgData , 'PNG' , imgX , imgY , imgWidth * ratio , imgHeight * ratio);
      pdf.save('invoice.pdf')
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1a6uvpw', 'template_3xy996o', form.current, {
        publicKey: 'MJEbGvwN1b7YliUsZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
 

  return (
    <>
   <div className={style5.formdetail} ref={pdfRef}>

<div className={style5.headers}>
            <div className={style5.left}>
               current Date  :  {day}/{month}/{year} <br />
               Due date : {props.empdate.duedate} <br />
            </div>

            <div>
                 <h3 style={{margin:"0px"}}>Invoice</h3>
            </div>

            <div className={style5.right}>
                Invoice Nunber : {props.empdate.rinvoiceno}
            </div>

        </div>

      

    <div className={style5.sdetail1}>

    <h4>seller details</h4> 
           <div className={style5.sdetail2}>
            name  :  {props.empdate.name} <br />
            adress       : 
             city  :  {props.empdate.cityname} , <br /> state  :  {props.empdate.state}  , <br /> pincode  :  {props.empdate.spincode} <br />
                             
             panNO  : {props.empdate.pan} <br />
             {/* GstRegNO  : {props.empdate.gst} */}
           </div>

    </div>


    <div className={style5.sdetail1}>

    <h4>Billing details</h4> 
           <div className={style5.sdetail2}>
            name  :  {props.empdate.bname} <br />
            adress       : 
             city  :  {props.empdate.bcityname} , <br /> state  :  {props.empdate.bstate}  , <br /> UT code  :  {props.empdate.butcode} <br />
                            
           </div>

    </div>

    <div className={style5.sdetail1}>

    <h4>Shopping details</h4> 
           <div className={style5.sdetail2}>
            name  :  {props.empdate.sname} <br />
            adress       : 
             city  :  {props.empdate.scityname} , <br /> state  :  {props.empdate.sstate}  , <br /> pincode  :  {props.empdate.spincode} <br />
                             
             Place of Delicery  : {props.empdate.splacedelivery} <br />
             
           </div>

</div>

           <div className={style5.sdetail1}>

            <h4>Order details</h4> 
       <div className={style5.sdetail2}>
       Order No  :  {props.empdate.oorderno} <br />
       Order Date  :  {props.empdate.oorderdate}
       </div>
    </div>


    <div className={style5.sdetail1}>

    <h4>Invoice details</h4> 
           <div className={style5.sdetail2}>
            Invoice No  :  {props.empdate.Iinvoiceno} <br />
            Invoice Date  : {props.empdate.Iinvoicedate} 
           </div>

    </div>


    <div className={style5.sdetail1}>

    <h4>Item details</h4> 
           <div className={style5.sdetail2}>
            Description  :  {props.empdate.Idescription} <br />
            Unit Price  : {props.empdate.Iunitprice}   <br />
            Quantity  : {props.empdate.Iquantity} <br />
            Net Amount  : {props.empdate.Inetamount} <br />
             Tax Rate  : {props.empdate.Itaxrate}  
           </div>
           </div>


           <div className={style5.sdetail1}>

    <h4>seller details</h4> 
           <div className={style5.sdetail2}>
              

           Net Amount : {props.empdate.Iquantity * props.empdate.Iquantity - props.empdate.Idiscount}  <br />
            {/* {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount} */}
            
                Tax Type :{props.empdate.scityname == props.empdate.splacedelivery ? '9%' :'18%'}  <br />
                   {/* {empdata.scityname == empdata.splacedelivery ? '9%' :'18%'}  */}
                  
                Tax Amount :  {props.empdate.Iquantity * props.empdate.Iquantity - props.empdate.Idiscount * props.empdate.Itaxrate}  <br />
                  {/* {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount * empdata.Itaxrate} */}
                Total Amount : {props.empdate.Iquantity * props.empdate.Iquantity - props.empdate.Idiscount} +  {props.empdate.Iquantity * props.empdate.Iquantity - props.empdate.Idiscount * props.empdate.Itaxrate}
                  {/* {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount} +  {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount * empdata.Itaxrate}  */}

    </div>

    </div>


    <div className={style5.sdetail1}>


       <div className={style5.sdetail2}>
        
        Seller Name : Qtalk Pvt Ltd  <br />
        <img src="https://t4.ftcdn.net/jpg/06/94/53/87/240_F_694538769_JxPmIPHCWBjK8nvK1RG7lIy46c1z3RrW.jpg" alt="" style={{width:"200px" , height:"80px" ,border:"2px solid red",margin:"0px"}} />
        Authorized Signature

       </div>
       </div>
 


</div>

<div className={style5.buttn}>
    <button className={style5.btn} onClick={downloadPDF} >Download Pdf</button> <br />
    <form onSubmit={sendEmail} ref={form}>

      {/* <input type="email" name="email" id="email" placeholder='Enter Email'/> */}

    <button className={style5.btn} type='submit' >Send Email</button>

    </form>
</div>

</>

  )
}

export default FormDetails