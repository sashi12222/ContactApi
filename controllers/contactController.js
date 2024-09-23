import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js"

/**
 * @api {get} /contact Get contact
 * @apiName GetContact
 * @access Public
 */

const getContact = asyncHandler(async(req, res) => {
  const contacts= await Contact.find();
    res.status(200).json(contacts);
  });

/**
 * @api {get} /contact/:id Get contact by id
 * @apiName GetContactById
 *  @access Public
 */
const getContactById=asyncHandler(async(req,res)=>{
  const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})
/**
    * @api {post} /contact Create contact
    * @apiName CreateContact
    * @access Public
  
  */
const createContact =asyncHandler(async(req, res) => {
    console.log("The request body is",req.body)
    const {name,email,phone}=req.body;
    if(!name|| !email|| !phone){
        res.status(400); 
        throw new Error("All fields are required");
         
    }
    const contact= await Contact.create({
      name,
      email,
      phone
    });
  res.status(201).json(contact);
});
/** 
 * @api {put} /contact/:id Update contact
 * @apiName UpdateContact
 * @access Public
 */

const updateContact = asyncHandler(async(req, res) => {
   const contact= await Contact.findById(req.params.id);
   if(!contact){
       res.status(404);
       throw new Error("Contact");
    }
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{
      new:true
    })
    res.status(200).json(updatedContact);
  });

/** 
 * @api {delete} /contact/:id Delete contact
 * @apiName DeleteContact
 * @access Public
 */

const deleteContact = asyncHandler(async(req, res) => {
   const contact =await Contact.findById(req.params.id);
   if(!contact){
       res.status(404);
       throw new Error("Contact not found");
    }
    const deleteContact=await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteContact);
  });

export { getContact, createContact, updateContact, deleteContact ,getContactById};
