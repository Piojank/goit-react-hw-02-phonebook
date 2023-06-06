import { Component } from 'react';
import s from './ContactForm.module.css';
// import PropTypes from 'prop-types';
// import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INITIAL_STATE = {
    name: "",
    phone: "",
};

export class ContactForm extends Component {
    state = {
        ...INITIAL_STATE,
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { name, phone } = this.state;
        
        console.log(`New contact has been added! Name: ${name}, Phone number: ${phone}.`);
        Notify.info(`New contact has been added! Name: ${name}, Phone number: ${phone}.`);

        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input 
                        type="name" 
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </label>
                <label>
                    Phone number
                    <input 
                        type="phone" 
                        name="phone"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    />
                </label>

                <button type="submit" className={s.button} >
                    Add contact
                </button>
            </form>
        );
    };
};