import React, { useState } from 'react';
import { Container, GridItem, ButtonContainer, AddNewGuestContainer } from './styles'

export function GuestList(props) {
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState('');

  const addGuest = () => {
    if (guestName) {
      setGuests([...guests, { name: guestName, confirmed: false }]);
      setGuestName('');
    }
  };

  const editGuest = (index) => {
    const newName = prompt('Digite o novo nome do convidado:', guests[index].name);
    if (newName) {
      const updatedGuests = [...guests];
      updatedGuests[index].name = newName;
      setGuests(updatedGuests);
    }
  };

  const deleteGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  const toggleConfirmation = (index) => {
    const updatedGuests = [...guests];
    updatedGuests[index].confirmed = !updatedGuests[index].confirmed;
    setGuests(updatedGuests);
  };

  return (
    <Container>
        <AddNewGuestContainer>
          <input 
            type="text" 
            value={guestName} 
            onChange={(e) => setGuestName(e.target.value)} 
            placeholder="Nome do convidado"
          />
          <button onClick={addGuest}>Cadastrar Convidado</button>
        </AddNewGuestContainer>
        
        {guests.map((guest, index) => (
          <GridItem index={index} background={index % 2 == 0 ? "#f2eded": "#e3dada"}>
            <p>{guest.name} {guest.confirmed ? '(Confirmado)' : ''}</p>
            <ButtonContainer>
              <button onClick={() => editGuest(index)}>Editar</button>
              <button onClick={() => deleteGuest(index)}>Excluir</button>
              <button onClick={() => toggleConfirmation(index)}>
                {guest.confirmed ? 'Cancelar Presença' : 'Confirmar Presença'}
              </button>
            </ButtonContainer>
          </GridItem>
        ))}
    </Container>
  )
}
    
