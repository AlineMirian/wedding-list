import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);


  > div:nth-child(4) {
    margin-top: 24px;
  }


  h2{
    margin-bottom: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;

    &:focus {
      border-color: ${({ theme }) => theme.COLORS.ORANGE};
      outline: none;
    }
  }
  
  >button {
    width: 100%;
    padding: 14px;
    margin-top: 16px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.ORANGE_DARK};
    }
}
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.ORANGE_DARK};
    }

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`