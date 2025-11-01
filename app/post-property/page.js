import PostNewProperty from "@/components/post-property/PostNewProperty"

export const metadata = {
    title: 'Post Property',
    description: 'Post your property to list.'
}

const PostProperty = () => {

    return (
        <main className="post_property_container">
            <PostNewProperty />
        </main>
    )
}

export default PostProperty