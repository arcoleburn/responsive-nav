import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
  //colors

  --primary: #B81830;
  --darkText: #181818;
  --lightText: #404040;
  --lightestText: #666666;
  --borders: #d0d0d0;
  --background: #f4f4f4;
  --inStock: #095B1F;
  --lowStock: #b5520a;

  @media all and (min-width: 768px){
    .mobile{
    display: none;
  }
}
  @media all and (max-width: 768px){
    .desktop{
      display: none;
    }
  }


}

body{

  .h1-banner{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 33px;
    
    @media all and (min-width: 768px){ 
      font-size: 51px;
    }

  }
  .h2-headline{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: var(--darkText);

    @media all and (min-width: 768px){ 
      font-size: 42px;
    }
  }
  .h3-headline{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--darkText);

    @media all and (min-width: 768px){ 
      font-size: 28px;
    }
  }
  .h4-headline{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--darkText);

    @media all and (min-width: 768px){ 
      font-size: 24px;
    }
  }

  .large-paragraph{
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: var(--lightText);
    
    @media all and (min-width: 768px){ 
      font-size: 18px;
    }
  }

  .small-paragraph{
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--lightText);
    
    @media all and (min-width: 768px){ 
      font-size: 16px;
    }
  }
button{
  padding: 18px 36px;
  border-radius: 4px;
  font-family:'Noto Sans', sans-serif;
  font-weight: bold;
}
    .primary{
      background-color: var(--primary);
      color: white;
      border: none;
    }
  
    .secondary{
      background-color: var(--darkText);
      color: white;
      border: none;
    }
    .tertiary{
      background-color: white;
      color: var(--darkText);
      border: 3px solid var(--darkText)
    }
  

  a{
    font-family: 'Noto Sans', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: var(--primary);

    @media all and (min-width: 768px){ 
      font-size: 16px;
    }
  }
}

`;
