import {
	collection,
	doc,
	onSnapshot,
	QueryDocumentSnapshot,
	setDoc,
	deleteDoc
} from '@firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { db } from '../../../../firebase'

interface IInteractionsPost {
	id: string
}

const InteractionsPost = ({ id }: IInteractionsPost) => {
	const [likes, setLikes] = useState<QueryDocumentSnapshot[]>([])
	const [hasLiked, setHasLiked] = useState(false)
	const { data: session } = useSession()

	const likePost = async () => {
		session &&
			(hasLiked
				? await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
				: await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
						username: session?.user.username
				  }))
	}

	useEffect(
		() =>
			onSnapshot(collection(db, 'posts', id, 'likes'), snapshot =>
				setLikes(snapshot.docs)
			),
		[id]
	)

	useEffect(
		() =>
			setHasLiked(likes.findIndex(like => like.id === session?.user.uid) != -1),
		[likes, session?.user.uid]
	)
	return (
		<>
			<div className='flex items-center m-2 w-full'>
				{hasLiked ? (
					<button
						onClick={() => likePost()}
						className='text-2xl m-1 text-red-500 hover:text-red-400'
					>
						<AiFillHeart />
					</button>
				) : (
					<button
						onClick={() => likePost()}
						className='text-2xl m-1 hover:text-gray-400'
					>
						<AiOutlineHeart />
					</button>
				)}
				<button className='text-2xl m-1 hover:text-gray-400'>
					<FiMessageCircle />
				</button>
				<button className='text-xl m-1 hover:text-gray-400'>
					<FaRegPaperPlane />
				</button>
				<button className='ml-auto mr-4 text-xl hover:text-gray-400'>
					<BsBookmark />
				</button>
			</div>
			{likes.length > 0 && (
				<p className='m-2 text-xs font-semibold'>
					<span className='text-sm font-bold'>{likes.length}</span>{' '}
					{likes.length > 1 ? 'Likes' : 'Like'}
				</p>
			)}
		</>
	)
}

export { InteractionsPost }
