import React, { Component } from "react";
import s from './App.module.css';

import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    render() {
        // const { contacts, filter } = this.state;

        return (
            <div className={s.container}>
                <Section title="Phonebook">
                    <ContactForm onSubmit={this.addContact}/>
                </Section>
                <Section title="Contacts">
                    <Notification message="Your phonebook is empty, please add contact" />  
                </Section>
            </div>
        );
    };
};