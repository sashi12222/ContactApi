import asyncHandler from "express-async-handler";
/**
 * @api {get} /contact Get contact
 * @apiName GetContact
 * @access Public
 */

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({
      message: "Hello from the server",
    });
  });

/**
 * @api {get} /contact/:id Get contact by id
 * @apiName GetContactById
 *  @access Public
 */
const getContactById=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:`get a contact with id ${req.params.id}`
    })
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
  res.status(200).json({
    message: "create a new contact",
  });
});
/** 
 * @api {put} /contact/:id Update contact
 * @apiName UpdateContact
 * @access Public
 */

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({
      message: `update a contact with id ${req.params.id}`,
    });
  });

/** 
 * @api {delete} /contact/:id Delete contact
 * @apiName DeleteContact
 * @access Public
 */

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({
      message: `delete a contact with id ${req.params.id}`,
    });
  });

export { getContact, createContact, updateContact, deleteContact ,getContactById};
