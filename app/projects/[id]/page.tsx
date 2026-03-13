export default function ProjectPage({ params }) {
    return (
        <>
            <p>Project ID: {params.id}</p>
            <p>Description: This is project number {params.id}</p>
        </>
    )
}