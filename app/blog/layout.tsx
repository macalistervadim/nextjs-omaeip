export default function BlogLayout({ children }) { 
    return ( 
      <section style={{ border: "2px solid red", padding: "15px" }}> 
        <h2>Добро пожаловать в мой блог</h2> 
        {children} 
      </section> 
    ); 
  } 