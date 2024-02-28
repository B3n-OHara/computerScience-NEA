//dynamically render discussions
//params set the value of the [title] dynamic route path
export default function Page({ params }: {params: { title: string } }) {
    //render discussion's title
    return(
        <div>
            My Post: {params.title}
        </div>
    )
}