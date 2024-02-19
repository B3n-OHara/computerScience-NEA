export default function Page({ params }: {params: { title: string } }) {
    return(
        <div>
            My Post: {params.title}
        </div>
    )
}