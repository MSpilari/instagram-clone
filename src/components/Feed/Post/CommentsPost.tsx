import { useEffect, useState } from 'react'
import {
	collection,
	onSnapshot,
	orderBy,
	query,
	QueryDocumentSnapshot
} from 'firebase/firestore'
import Image from 'next/image'

import { db } from '../../../../firebase'

interface ICommentsPost {
	id: string
}

const CommentsPost = ({ id }: ICommentsPost) => {
	const [allComments, setAllComments] = useState<QueryDocumentSnapshot[]>([])

	useEffect(() => {
		onSnapshot(
			query(
				collection(db, 'posts', id, 'comments'),
				orderBy('timestamp', 'desc')
			),
			snapshot => setAllComments(snapshot.docs)
		)
	}, [id])

	return allComments.length > 0 ? (
		<div className='flex flex-col w-full my-4 h-10 overflow-y-scroll'>
			{allComments.map(singleComment => {
				return (
					<div key={singleComment.id} className='flex items-center my-1'>
						<div className='relative w-5 h-5 mx-1 rounded-full overflow-hidden'>
							<Image
								src={singleComment.data().userImage}
								alt='User Image'
								layout='fill'
								objectFit='contain'
								sizes='50vw'
							/>
						</div>
						<p className='text-xs font-bold mr-1'>
							{singleComment.data().username}
						</p>
						<p className='text-sm'>{singleComment.data().commentFromOthers}</p>
					</div>
				)
			})}
		</div>
	) : null
}

export { CommentsPost }
