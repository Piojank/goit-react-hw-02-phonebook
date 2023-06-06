import React, { Component } from "react";
import s from './App.module.css';

import { Section } from "./Section/Section";
// import { Notification } from "./Notification/Notification";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { Notify } from "notiflix";
import { nanoid } from "nanoid";

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

    handleAddContact = (nameFromForm, numberFromForm) => {
        let isPresent = false;
        const contact = {
            id: nanoid(4),
            name: nameFromForm,
            number: numberFromForm,
        };

        const { contacts } = this.state;

        contacts.forEach(el => {
            if (el.name === contact.name) {
                Notify.alert(`${el.name} is already in contacts!`);
                console.log(`${el.name} is already in contacts.`);
                isPresent = true;
                return;
            }
        });

        if (isPresent) return;

        this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] };
        });
    };

    handleFilter = filter => {
        this.setState({ filter });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    };

    clearContact = id => {
        const { contacts } = this.state;
        const contact = contacts.find(el => el.id === id);
    
        if (contact) {
            const { name, number } = contact;
    
            console.log(`Contact has been deleted! Name: ${name}, Phone number: ${number}.`);
            Notify.warning(`Contact has been deleted! Name: ${name}, Phone number: ${number}.`);
    
            this.setState({
                contacts: contacts.filter(el => el.id !== id),
            });
        }
    };

    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = this.getFilteredContacts();

        return (
            <div className={s.container}>
                <Section title="Phonebook">
                    <ContactForm onSubmit={this.handleAddContact}/>
                </Section>
                <Section title="Contacts">
                    {contacts.length > 1 && <Filter value={filter} onFilterChange={this.handleFilter} /> }
                    {filteredContacts.length > 0 && (
                        <ContactList contacts={filteredContacts} onDelete={this.clearContact}/>
                    )}
                </Section>
            </div>
        );
    };
};