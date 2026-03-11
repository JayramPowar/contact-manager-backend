import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';

//* get all contacts
export const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);    
});

//Create new contact
export const createContact =asyncHandler(async (req, res) => {
    console.log(req.body); 
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Contact created"});    
});

export const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get contact of id " + req.params.id});
});

export const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Update contact of id " + req.params.id});
});

export const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Delete contact of id " + req.params.id});
});

