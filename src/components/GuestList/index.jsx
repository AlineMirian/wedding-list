import React, { useState } from 'react';
import { Container, GridItem, ButtonContainer, AddNewGuestContainer, CardsWrapper, CardTitle } from './styles'
import * as S from './styles'
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'


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
          <S.Button onClick={addGuest}>Cadastrar Convidado</S.Button>
        </AddNewGuestContainer>
        

        <CardsWrapper>
          {guests.map((guest, index) => (
            <GridItem index={index} background={index % 2 == 0 ? "#f2eded": "#e3dada"}>
              <CardTitle>{guest.name} {guest.confirmed ? '(Confirmado)' : ''}</CardTitle>
              <ButtonContainer>
                <FaEdit onClick={() => editGuest(index)} style={{ cursor: 'pointer', marginRight: '8px', color: '#f2bd87' }} />
                <FaTrash onClick={() => deleteGuest(index)} style={{ cursor: 'pointer', marginRight: '8px', color: '#f2bd87' }} />
                {guest.confirmed ? (
                  <FaTimesCircle onClick={() => toggleConfirmation(index)} style={{ cursor: 'pointer', color: '#f2bd87' }} />
                ) : (
                  <FaCheckCircle onClick={() => toggleConfirmation(index)} style={{ cursor: 'pointer', color: '#f2bd87' }} />
                )}
            </ButtonContainer>
            </GridItem>
          ))}
        </CardsWrapper>
    </Container>
  )
}
    
