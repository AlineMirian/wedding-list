import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  width: 100%;

`

export const GridContainer = styled.div`
  border: 2px solid white;
`

export const AddNewGuestContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 180px;
  width: 100%;

`

export const GridItem = styled.div`
  color: black;
  justify-content: space-between;
  border-radius: 10px;
  display: flex;
  border: 1px solid #f2bd87;
  background-color: #FFF;
  padding: 13px 16px;
`

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const CardTitle = styled.span`
  font-family: Arial, sans-serif;
  font-weight: bold;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2bd87;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`