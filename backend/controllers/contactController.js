

//* get all contacts
export const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});    
};

//*Create new contact
export const createContact = (req, res) => {
    console.log(req.body); 
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Contact created"});    
};

export const getContact = (req, res) => {
    res.status(200).json({message: "Get contact of id " + req.params.id});
};

export const updateContact = (req, res) => {
    res.status(200).json({message: "Update contact of id " + req.params.id});
};

export const deleteContact = (req, res) => {
    res.status(200).json({message: "Delete contact of id " + req.params.id});
};

