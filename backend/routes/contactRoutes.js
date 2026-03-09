import express from "express";
const routes = express.Router();
import {getContacts, createContact, getContact, updateContact, deleteContact} from "../controllers/contactController.js";

routes.route("/").get(getContacts);

routes.route("/").post(createContact);

routes.route("/:id").get(getContact);

routes.route("/:id").put(updateContact);

routes.route("/:id").delete(deleteContact);


export default routes;
