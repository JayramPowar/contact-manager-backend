import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//* get all contacts
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  if (!contacts) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  res.status(200).json(contacts);
});

// Create new contact
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  
  res.status(201).json(contact);
});


export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  //? Check if the logged-in user is the owner of the contact
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not authorized");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.status(200).json(updatedContact);
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  //? Check ownership BEFORE deleting
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not authorized");
  }

  await Contact.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Contact deleted successfully" });
});
