import { useState} from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LS_KEY = 'contacts';

export default function App () {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [ filter, setFilter ] = useState('');


  const addContact = (name, number) => {
    const checkName = contacts.find(
      contact => contact.name === name
    );
    if (checkName) {
      toast(`${name} is already in contacts`);
      return;
    }
    setContacts(s => [...s, {id: nanoid(), name: name, number: number}]);
    toast(`Contact ${name} added successfully`);
  };
  
  const deleteContact = contactId => {
    setContacts(s => s.filter(contact => contact.id !== contactId));
    toast.error('One contact has been deleted');
  };

  const changeFilter = e => {
    setFilter(s => s = e.target.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
    const totalcontactsCount = contacts.length;
    const visibleContacts = getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <PhoneBook onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={changeFilter}
            totalcontactsCount={totalcontactsCount}
          />

          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
        <ToastContainer autoClose={2500}/>
      </>
    );
  }

