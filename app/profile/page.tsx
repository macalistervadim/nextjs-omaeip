import Image from "next/image"

export default function ProfilePage({ params }) {
    return (
        <>
            <p>Имя: {params.name}</p>
            <h1>Возраст: {params.age}</h1>
            <Image width={400} height={400} alt="123" src="/image/123.jpg" />
        </>
    )
}