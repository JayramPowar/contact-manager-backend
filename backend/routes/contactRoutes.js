import express from "express";
import {getContacts, createContact, getContact, updateContact, deleteContact} from "../controllers/contactController.js";
import validateTokenHandler from "../middlewares/validateTokenHandler.js";

const routes = express.Router();

//? middleware to validate token for all the routes in this file
routes.use(validateTokenHandler)

routes.route("/").get(getContacts);
routes.route("/").post(createContact);

routes.route("/:id").get(getContact);
routes.route("/:id").put(updateContact);
routes.route("/:id").delete(deleteContact);


export default routes;
