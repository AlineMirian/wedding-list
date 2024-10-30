.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px; 
    padding: 16px;
  }
  
  .grid-item {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: 1px solid 
    border-radius: 8px; 
    padding: 20px; 
    text-align: center; 
  }
  