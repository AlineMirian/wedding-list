import React, { useState } from 'react';
import { Container } from './styles'

export function Guestlist({ Guestlist, addGuest, editGuest, deleteGuest, toggleConfirmation, ...rest }) {
  return (
    <Container>    
    
    const GuestList = () {
      const [guests, setGuests] = useState([]);
      const [guestName, setGuestName] = useState('');

      const addGuest = () {
        if (guestName) {
          setGuests([...guests, { name: guestName, confirmed: false }]);
          setGuestName('');
        }
      };

      const editGuest = (index) {
        const newName = prompt('Digite o novo nome do convidado:', guests[index].name);
        if (newName) {
          const updatedGuests = [...guests];
          updatedGuests[index].name = newName;
          setGuests(updatedGuests);
        }
      };

      const deleteGuest = (index) {
        const updatedGuests = guests.filter((_, i) => i !== index);
        setGuests(updatedGuests);
      };

      const toggleConfirmation = (index) {
        const updatedGuests = [...guests];
        updatedGuests[index].confirmed = !updatedGuests[index].confirmed;
        setGuests(updatedGuests);
      };

      return (
        <div className="grid-container">
          <div className="grid-item">
            <input 
              type="text" 
              value={guestName} 
              onChange={(e) => setGuestName(e.target.value)} 
              placeholder="Nome do convidado"
            />
            <button onClick={addGuest}>Cadastrar Convidado</button>
          </div>
          {guests.map((guest, index) => (
            <div key={index} className="grid-item">
              <p>{guest.name} {guest.confirmed ? '(Confirmado)' : ''}</p>
              <button onClick={() => editGuest(index)}>Editar</button>
              <button onClick={() => deleteGuest(index)}>Excluir</button>
              <button onClick={() => toggleConfirmation(index)}>
                {guest.confirmed ? 'Cancelar Presença' : 'Confirmar Presença'}
              </button>
            </div>
          ))}
        </div>
      );
    };
    </Container>
  )
}
    
