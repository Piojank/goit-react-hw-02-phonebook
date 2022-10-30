import React from "react";
import { Contacts } from "../Contacts/Contacts";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div>
            <ul className="list">
                <Contacts contacts={contacts} deleteContact={deleteContact} />
            </ul>
        </div>
    );
};