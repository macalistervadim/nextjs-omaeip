import Link from "next/link"; 
 
export default function Navigation() { 
  return ( 
    <nav > 
      <Link href={`/`}>Домой</Link> 
      <Link href={`/about`}>О нас</Link> 
      <Link href={`/contact`}>Контакты</Link> 
      <Link href={`/profile`}>Профиль</Link>
      <Link href={`/gallery`}>Галерея</Link>
    </nav> 
  ); 
} 