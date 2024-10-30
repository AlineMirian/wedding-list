import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
`

export const GridContainer = styled.div`
  border: 2px solid white;
`

export const AddNewGuestContainer = styled.div`
  padding: 16px 0px;
`

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;

  button {
    margin: 0px 4px;
  }
`

export const GridItem = styled.div`
  color: black;
  justify-content: space-between;
  display: flex;
  background-color: ${props => props.background};
  padding: 0px 16px;
`