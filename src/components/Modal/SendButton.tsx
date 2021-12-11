import { useSession } from 'next-auth/react'
import {
	addDoc,
	collection,
	serverTimestamp,
	doc,
	updateDoc
} from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import { Dispatch, RefObject, SetStateAction, useState } from 'react'

import { db, storage } from '../../../firebase'
import { useRecoilState } from 'recoil'
import { modalAtom } from '../../recoil/Modal/Atom'

interface ISendButton {
	selectedFile: string
	setSelectedFile: Dispatch<SetStateAction<string>>
	commentRef: RefObject<HTMLTextAreaElement>
}

const SendButton = ({
	selectedFile,
	setSelectedFile,
	commentRef
}: ISendButton) => {
	const { data: session } = useSession()
	const [isModalOpen, setModalOpenClose] = useRecoilState(modalAtom)
	const [loading, setLoading] = useState(false)

	const uploadPost = async () => {
		if (loading) return

		setLoading(true)

		const docRef = await addDoc(collection(db, 'posts'), {
			username: session?.user.username,
			comment: null !== commentRef.current && commentRef.current.value,
			profileImg: session?.user.image,
			timestamp: serverTimestamp()
		})

		const imageRef = ref(storage, `posts/${docRef.id}/image`)

		await uploadString(imageRef, selectedFile, 'data_url').then(
			async snapshot => {
				const downloadURL = await getDownloadURL(imageRef)

				await updateDoc(doc(db, 'posts', docRef.id), {
					image: downloadURL
				})
			}
		)
		setModalOpenClose(false)
		setLoading(false)
		setSelectedFile('')
	}

	return (
		<button
			className='bg-red-600 disabled:bg-gray-300 disabled:hover:cursor-not-allowed rounded-lg px-24 my-1 py-5 text-sm font-bold text-white'
			type='button'
			onClick={() => uploadPost()}
			disabled={!selectedFile}
		>
			{loading ? 'Uploading...' : 'Upload Post'}
		</button>
	)
}

export { SendButton }
