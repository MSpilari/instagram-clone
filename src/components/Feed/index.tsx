import {
	collection,
	onSnapshot,
	orderBy,
	query,
	QueryDocumentSnapshot
} from '@firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { Post } from './Post'

const Feed = () => {
	const [posts, setPosts] = useState<QueryDocumentSnapshot[]>([])

	const { data: session } = useSession()

	useEffect(() => {
		return onSnapshot(
			query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
			snapshot => setPosts(snapshot.docs)
		)
	}, [])

	return session ? (
		<section className='flex flex-col col-span-2 col-start-1 lg:w-3/4  lg:row-start-1 lg:ml-auto lg:mt-36 '>
			{posts.map(post => {
				return (
					<Post
						key={post.id}
						id={post.id}
						username={post.data().username}
						userImg={post.data().profileImg}
						img={post.data().image}
						comment={post.data().comment}
					/>
				)
			})}
		</section>
	) : null
}

export { Feed }
