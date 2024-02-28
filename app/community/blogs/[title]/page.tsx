//dynamically render blog post
//params set the value of the [title] dynamic route path
export default function Page({ params }: {params: { title: string } }) {
    //render the post's title
    return(
        <div>
            My Post: {params.title}
        </div>
    )
}