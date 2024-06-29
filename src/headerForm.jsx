import { useState } from "react";

import Headercontent from "./Headercontent";
import Notif from "./Notif";
import Contact from "./Contact";


const HeaderForm = () => {
    const [formContact,setFormContact]=useState({
        name:"",
        email:"",
        number:"",
        country:'IR'
    });
    const [contacts,setContacts]=useState([]);
    const [sub,setSub]=useState(false);
    const FormHandler=(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setFormContact({...formContact,[name]:value});
    }
    const AddHandler=()=>{
     if (formContact.email&&formContact.name&&formContact.number) {
        setContacts([...contacts,formContact]);
     }else{
        setSub(i=>!i);
        setTimeout(() => {
        setSub(i=>!i);      
        }, 1000);
     }  
        setFormContact({
            name:"",
            email:"",
            number:"",
            country:'IR'
        });
        
    }
    return (
        <>
<div className="relative h-[500px] bg-blue-700 rounded-b-xl">
    <div className="flex flex-col gap-4 justify-center  w-full h-full px-3 md:px-0">
    <Headercontent/>
  {/*  */}
  <div className="p-8">
    <div className="flex gap-4">
      <input type="Name" value={formContact.name} onChange={FormHandler} name="name" className="mt-1 block w-1/2  rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-gray-900  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" />
      <input type="email" value={formContact.email} onChange={FormHandler} name="email" className="mt-1 block w-1/2  rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-gray-900 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" />
    </div>
    <div className="my-6 flex gap-4">
      <input type="number" value={formContact.number} onChange={FormHandler} placeholder="Enter Number" name='number' className="block w-1/2  rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-gray-900 font-semibold text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"/>
      <select name="country" value={formContact.country} onChange={FormHandler} id="select" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
        <option value="CA"  className="font-semibold text-slate-300">Canada</option>
        <option  value="IR" className="font-semibold text-slate-300">Iran</option>
        <option  value="GE" className="font-semibold text-slate-300">Germany</option>
      </select>
    </div>
    <div className="text-center">
      <button  onClick={AddHandler} className="cursor-pointer bg-white rounded-lg text-black px-8 py-5 text-sm font-semibold ">Add Contact</button>
    </div>
  </div>
        </div>
        </div>
   
        <div className=" flex p-4 m-10 mx-0 gap-3  items-center justify-center  ">
{ formContact.email&&formContact.name&&formContact.number?
""
:
sub&&<Notif/>
}
   </div>
    {/* table */}
    <div className="text-gray-900 bg-gray-200 rounded-2xl ">
    <div className="p-4 flex">
        <h1 className="text-3xl">Contacts</h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left  p-2 px-3">Name</th>
                    <th className="text-left  p-2 px-3">Email</th>
                    <th className="text-left  p-2 px-3">Number</th>
                    <th className="text-left  p-2 px-3">country</th>
                    <th className="text-left p-2 px-3"></th>
                    <th></th>
                </tr>              
             {contacts.length?
             contacts.map(i=><Contact key={i.number} data={i} setContacts={setContacts} contacts={contacts}/>)
             :
             <div className="text-center p-2">
                Contacts is Empty
             </div>
            }
            </tbody>
        </table>

    </div>
</div> 
</>
    );
}

export default HeaderForm;
