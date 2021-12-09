import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { db } from '../../../../firebase'

interface IAddNewCommentsPost {
	id: string
}

const AddNewCommentsPost = ({ id }: IAddNewCommentsPost) => {
	const [textAreaComment, setTextAreaComment] = useState('')

	const { data: session } = useSession()

	const sendComment = async (e: FormEvent) => {
		e.preventDefault()

		const commentToSend = textAreaComment

		setTextAreaComment('')

		await addDoc(collection(db, 'posts', id, 'comments'), {
			commentFromOthers: commentToSend,
			username: session?.user.username,
			userImage: session?.user.image,
			timestamp: serverTimestamp()
		})
	}

	return (
		<div className='flex items-center m-2'>
			<form className='flex items-center w-full'>
				<button className='text-2xl mx-2 hover:text-gray-400'>
					<BsEmojiSmile />
				</button>
				<textarea
					className='resize-none w-full mx-1'
					placeholder='Add a comment...'
					value={textAreaComment}
					onChange={e => setTextAreaComment(e.target.value)}
				/>
				<button
					type='submit'
					disabled={!textAreaComment.trim()}
					className='text-sm text-blue-500 font-bold disabled:text-blue-200 disabled:cursor-not-allowed'
					onClick={e => sendComment(e)}
				>
					Publish
				</button>
			</form>
		</div>
	)
}

export { AddNewCommentsPost }
