import React, { useState } from 'react'
import style1 from './Form.module.css'
import FormDetails from './FormDetails';

const Form = () => {

    let [state1,setstate1] = useState(false);
    let [state2,setstate2] = useState(true);
    // let [ellorfree , seterrorfree] =useState(false);

    let [empdata, setEmpData] = useState({name:"", cityname:"", state:"", pincode:"",state12:"",pan:"",
        gst:"",bname:"",bcityname:"",bstate:"",bpincode:"",butcode:"",sname:"",scityname:"",sstate:"",spincode:""
        ,sutcode:"",splacedelivery:"" , oorderno:"",oorderdate:"",Iinvoiceno:"",IinvoiceDetails:"",Iinvoicedate:"",
        Iunitprice:"",Iquantity:"",Idiscount:"",Inetamount:"",rinvoiceno:"",duedate:"" ,Itaxrate:"",Idescription:""
    })
    let regexp = /[a-zA-Z]/g;

  
let changing = ({target:{name, value}})=>{
  setEmpData({...empdata, [name]:value})

}

    let changeing1 =()=>{
        setstate1(!state1)
        setstate2(!state2)
        

        let username = document.getElementById('name');
        let cityname = document.getElementById("cityname");
        let state = document.getElementById("state");
        let pincode = document.getElementById("pincode");
        let utcode = document.getElementById("utcode");
        let panno = document.getElementById("panno");
        let gst = document.getElementById("gst");


    
        let s1 = document.getElementById('s1');
       
      
        let regex = /[a-zA-Z]/g;
        let reguser = regex.test(username.value)
        let regexcityname = /[a-zA-z]/g;
        let regcityname = regexcityname.test(cityname.value)
        let regexstate = /[a-zA-z]/g;
        let regstate = regexstate.test(state.value)
        let regexpincode = /[0-9]/g;
        let regpincode = regexpincode.test(pincode.value)
        let regexutcode = /[0-9]/g;
        let regutcode = regexutcode.test(utcode.value)
        let regexpanno = /[0-9a-zA-Z]/g;
        let regpanno = regexpanno.test(panno.value)
        let regexgst = /[0-9a-zA-Z]/g;
        let reggst = regexgst.test(gst.value)
      
      //  let userlength =  username.value.length > 4 && username.value.length <10
      
        if(username.value == '' || cityname.value == "" || state.value == "" || pincode.value == "" || utcode.value == "" ||panno.value =="" || gst.value == ""){
            s1.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
               
          
        }
        else if(!reguser || !regcityname || !regstate || !regpanno || !regexpincode || !regexgst || !regexutcode){
             s1.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
           
        }
        else{
          setstate1(true);
          setstate2(false);
        
        }

        let bname = document.getElementById('bname');
        let bcityname = document.getElementById("bcityname");
        let bstate = document.getElementById("bstate");
        let bpincode = document.getElementById("bpincode");
        let butcode = document.getElementById("butcode");



    
        let s2 = document.getElementById('s2');
       
      
        let bregex = /[a-zA-Z]/g;
        let breguser = bregex.test(bname.value)
        let bregexcityname = /[a-zA-z]/g;
        let bregcityname = bregexcityname.test(bcityname.value)
        let bregexstate = /[a-zA-z]/g;
        let bregstate = bregexstate.test(bstate.value)
        let bregexpincode = /[0-9]/g;
        let bregpincode = bregexpincode.test(bpincode.value)
        let bregexutcode = /[0-9]/g;
        let bregutcode = bregexutcode.test(butcode.value)
      
      
        if(bname.value == '' || bcityname.value == "" || bstate.value == "" ||  butcode.value == ""  || bpincode == ""){
            s2.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
          
        }
        else if(!breguser || !bregcityname || !bregstate  || !bregexpincode  || !bregexutcode){
             s2.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
        }
        else{
          setstate1(true);
          setstate2(false);
          

        }
    

        let ssname = document.getElementById('ysname');
        let sscityname = document.getElementById("yscityname");
        let ssstate = document.getElementById("ysstate");
        let sspincode = document.getElementById("yspincode");
        let ssutcode = document.getElementById("ysutcode");
        let ssplaceofdelivery = document.getElementById("ysplaceofdelivery");
  
        let s3 = document.getElementById('s3');
       
        let sregex = /[a-zA-Z]/g;
        let sreguser = sregex.test(ssname.value)
        let sregexcityname = /[a-zA-z]/g;
        let sregcityname = sregexcityname.test(sscityname.value)
        let sregexstate = /[a-zA-z]/g;
        let sregstate = sregexstate.test(ssstate.value)
        let sregexpincode = /[0-9]/g;
        let sregpincode = sregexpincode.test(sspincode.value)
        let sregexutcode = /[0-9]/g;
        let sregutcode = sregexutcode.test(ssutcode.value)
        let sregexplaceofdelivery = /[A-Za-z0-9]/g;
        let sregplaceofdelivery = sregexplaceofdelivery.test(ssplaceofdelivery.value)
      
      
        if(ssname.value == "" || sscityname.value == "" || ssstate.value == "" || sspincode.value == "" || ssutcode.value == "" || ssplaceofdelivery.value =="" ){
            s3.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
          
        }
        else if(!sreguser || !sregcityname || !sregstate || !sregexpincode || !sregplaceofdelivery || !sregexutcode){
             s3.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
           
        }
        else{
          setstate1(true);
          setstate2(false);
             
             
        }

        let oorderno = document.getElementById('oorderno');
        let oorderdate = document.getElementById("oorderdate");

        let s4 = document.getElementById('s4');
       
        let oregexorderno = /[0-9]/g;
        let oregorderno = oregexorderno.test(oorderno.value)
        let oregexorderdate = /[0-9]/g;
        let oregorderdate = oregexorderdate.test(oorderdate.value)
       
      
      
      
        if(oorderno.value == "" ||oorderdate.value =="" ){
            s4.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
          
        }
        else if(!oregexorderno || !oregexorderdate){
             s4.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
           
        }
        else{
          setstate1(true);
          setstate2(false);
            

        }


        let Iinvoiceno = document.getElementById('invoiceno');
        // let Iinvoicedetails = document.getElementById("invoicedetails");
        let Iinvoicedate = document.getElementById("invoicedate");
        


    
        let s5 = document.getElementById('s5');
       
      
       
        let regexinvoiceno = /[0-9]/g;
        let reginvoiceno = regexinvoiceno.test(Iinvoiceno.value)
        // let regexinvoicedetails = /[a-zA-Z]/g;
        // let reginvoicedetails = regexinvoicedetails.test(Iinvoicedetails.value)
        let regexinvoicedate = /[0-9]/g;
        let reginvoicedate = regexinvoicedate.test(Iinvoicedate.value)
      
      //  let userlength =  username.value.length > 4 && username.value.length <10
      
        if(Iinvoiceno.value == '' || Iinvoicedetails.value == "" || Iinvoicedate.value == "" ){
            s5.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
          
        }
        else if(!reginvoicedate || !reginvoicedetails || !reginvoiceno ){
             s5.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
           
        }
        else{
          setstate1(true);
          setstate2(false);
            

        }


        let Idescription = document.getElementById('ddescription');
        let Iunitprice = document.getElementById("dunitprice");
        let Iquantity = document.getElementById("dquantity");
        let Idiscount = document.getElementById("ddiscount");
        let Inetamount = document.getElementById("dnetamount");
        let Itaxrate = document.getElementById("dtaxrate");
        

        let s6 = document.getElementById('s6');
       
      
        let regexdescription = /[a-zA-Z]/g;
        let regdescription = regexdescription.test(Idescription.value)
        let regexunitprice = /[0-9]/g;
        let regunitprice = regexunitprice.test(Iunitprice.value)
        let regexqunatity = /[0-9]/g;
        let regquantity = regexqunatity.test(Iquantity.value)
        let regexdiscount = /[0-9]/g;
        let regdiscount = regexdiscount.test(Idiscount.value)
        let regexnetamount = /[0-9]/g;
        let regnetamount = regexnetamount.test(Inetamount.value)
        let regextaxrate = /[0-9]/g;
        let regtaxrate = regextaxrate.test(Itaxrate.value)
      
      
        if( Idescription.value == "" || Iunitprice.value == "" || Iquantity.value == "" || Idiscount.value == "" || Inetamount.value == "" || Itaxrate.value == "" ){
            s6.innerHTML = "All details are mandatory to fill";
           
            setstate1(false);
            setstate2(true);
          
        }
        else if(!regdescription || !regunitprice || !regquantity || !regdiscount || !regnetamount || !regtaxrate ){
             s6.innerHTML ="invalid input check once all fields"
             setstate1(false);
            setstate2(true);
           
        }
        else{
          setstate1(true);
          setstate2(false);
        //   seterrorfree(true)

        }


    }

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

  return (
    <>
    {state2 && 

    <div className={style1.form}>

        <div className={style1.header}>
            <div className={style1.left}>
                <h6>current Date  :  {day}/{month}/{year}</h6>
                
                <h6>Due Date : <input type="date" onChange={changing} name='duedate' value={empdata.duedate}  /></h6>
            </div>
            <div className={style1.right}>
                Invoice Nunber : <input type="number" onChange={changing} name='rinvoiceno' value={empdata.rinvoiceno} />
            </div>

        </div>

          <div className={style1.sellerDetails}>
          <h3>Seller Details</h3>
               <form action="" className={style1.form1}>
               <span id='s1' style={{color:"red"}}></span>
                   <input type="text" placeholder='Name' name='name' onChange={changing} value={empdata.name} id='name' />
                   <input type="text" placeholder='City name' name='cityname' onChange={changing} id='cityname'/>
                   <input type="text" placeholder='State' name='state' onChange={changing} id='state'/>
                   <input type="number" placeholder='Pincode' name='pincode' onChange={changing} id='pincode' />
                   <input type="number" placeholder='ut code' name='state12' onChange={changing} id='utcode'/>
                   <input type="text" placeholder='Pan No' name='pan' onChange={changing} id='panno' />
                   <input type="text" placeholder='GST Registration No' name='gst' onChange={changing} id='gst'/>
               </form>
          </div>

{/* // billing details */}
          <div className={style1.sellerDetails}>
          <h3>Billing Details</h3>
               <form action="" className={style1.form1}>
               <span id='s2' style={{color:"red"}}></span>

                   <input type="text" placeholder='Name' name='bname' onChange={changing} id='bname'/>
                   <input type="text" placeholder='City name' name='bcityname' onChange={changing} id='bcityname'/>
                   <input type="text" placeholder='State' name='bstate' onChange={changing} id='bstate' />
                   <input type="number" placeholder='Pincode' name='bpincode' onChange={changing} id='bpincode'/>
                   <input type="number" placeholder=' UT Code' name='butcode' onChange={changing} id='butcode'/>
                   {/* <input type="text" placeholder='Pan No' />
                   <input type="text" placeholder='GST Registration No' /> */}
               </form>
          </div>

{/* Shippind details */}

<div className={style1.sellerDetails}>
          <h3>Shopping Details</h3>
               <form action="" className={style1.form1}>
               <span id='s3' style={{color:"red"}}></span>

                   <input type="text" placeholder='Name' name='sname' onChange={changing} id='ysname' />
                   <input type="text" placeholder='City name' name='scityname' onChange={changing} id='yscityname' />
                   <input type="text" placeholder='State' name='sstate' onChange={changing} id='ysstate' />
                   <input type="number" placeholder='Pincode' name='spincode' onChange={changing} id='yspincode'/>
                   <input type="number" placeholder='UT Code' name='sutcode' onChange={changing} id='ysutcode' />
                   <input type="text" placeholder='Place of delivery' name='splacedelivery' onChange={changing} id='ysplaceofdelivery' />
                   {/* <input type="number" placeholder='GST Registration No' /> */}
               </form>
          </div>

{/* order details */}

<div className={style1.sellerDetails}>
          <h3>Order Details</h3>
               <form action="" className={style1.form2}>
               <span id='s4' style={{color:"red"}}></span>

                   <input type="number" placeholder='Order No' name='ooderno' onChange={changing} id='oorderno' />
                   <input type="date" placeholder='Order Date' name='oorderdate' onChange={changing} id='oorderdate'/>
                   {/* <input type="text" placeholder='State' />
                   <input type="number" placeholder='Pincode' />
                   <input type="number" placeholder='State/UT Code' />
                   <input type="text" placeholder='Place of delivery' /> */}
                   {/* <input type="number" placeholder='GST Registration No' /> */}
               </form>
          </div>

        <div className={style1.sellerDetails}>
          <h3>Invoice Details</h3>
               <form action="" className={style1.form2}>

               <span id='s5' style={{color:"red"}}></span>

                   <input type="number" placeholder='Invoice No' name='Iinvoiceno' onChange={changing}  id='invoiceno' />
                   {/* <input type="number" placeholder='Invoice Details' name='IinvoiceDetails' onChange={changing}  id='invoicedetails' /> */}
                   <input type="date" placeholder='Invoice Date' name='Iinvoicedate' onChange={changing} id='invoicedate' />

               </form>
          </div>

          <div className={style1.sellerDetails}>
          <h3>Item Details</h3>
               <form action="" className={style1.form1}>

               <span id='s6' style={{color:"red"}}></span>

                   <textarea type="text" placeholder='Description' name='Idescription' onChange={changing} id='ddescription' style={{width:"330px",height:"35px"}}/>
                   <input type="number" placeholder='Unit Price' name='Iunitprice' onChange={changing} id='dunitprice'/>
                   <input type="number" placeholder='Quantity' name='Iquantity' onChange={changing} id='dquantity'/>
                   <input type="number" placeholder='Discount' name='Idiscount' onChange={changing} id='ddiscount' />
                   <input type="number" placeholder='*netamount' name='Inetamount' onChange={changing} id='dnetamount'/>
                   <input type="number" placeholder='Taxrate' name='Itaxrate' onChange={changing} id='dtaxrate'/>
               </form>
          </div>

          <div className={style1.ssellerDetails}>
          <h3>Invoice Details</h3>
             <div className={style1.form1}>
                <h6>Net Amount : {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount} </h6>
                <h6>Tax Type : {empdata.scityname == empdata.splacedelivery ? '9%' :'18%'} </h6>
                <h6>Tax Amount : {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount * empdata.Itaxrate}</h6>
                <h6>Total Amount : {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount} +  {empdata.Iquantity * empdata.Iquantity - empdata.Idiscount * empdata.Itaxrate} </h6>
                {/* <h6>total row </h6> */}
                {/* <h6>amount in words</h6> */}
             </div>
          </div>

          <div className={style1.sellerDetailss}>
            <h4 style={{margin:"0px"}}>seller name : Qtalk Pvt Ltd</h4>
            <img src="https://t4.ftcdn.net/jpg/06/94/53/87/240_F_694538769_JxPmIPHCWBjK8nvK1RG7lIy46c1z3RrW.jpg" alt="" style={{width:"200px" , height:"80px" ,border:"2px solid red",margin:"0px"}} />
            <h5 style={{margin:"0px"}}>Authorized Signature</h5>
          </div>
<div className={style1.buttn}>
    <button className={style1.btn} onClick={changeing1 }>Generate Invoice</button>
       
</div>


    </div>


   
                   }


    {state1 && <FormDetails  empdate = {empdata} />}


    </>
  )
}

export default Form