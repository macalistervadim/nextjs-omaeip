export default async function BlogPost({ params }) { 
    return ( 
        <div> 
            <h1>Пост: {params.slug}</h1> 
            <p>Эта страница сгенерирована автоматически на основе slug.</p> 
        </div> 
    ); 
} 