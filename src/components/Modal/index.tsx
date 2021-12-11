import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { modalAtom } from '../../recoil/Modal/Atom'
import { CaptionToPic } from './CaptionToPic'
import { CloseButton } from './CloseButton'
import { PicToUpload } from './PicToUpload'
import { SendButton } from './SendButton'

const Modal = () => {
	const isModalOpenClose = useRecoilValue(modalAtom)
	const [selectedFile, setSelectedFile] = useState('')

	const filePickerRef = useRef<HTMLInputElement>(null)
	const commentRef = useRef<HTMLTextAreaElement>(null)

	return isModalOpenClose ? (
		<div className='fixed top-0 z-30 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-60'>
			<CloseButton
				filePickerRef={filePickerRef}
				setSelectedFile={setSelectedFile}
			/>

			<div className='bg-white w-96 h-96 flex flex-col items-center rounded-lg'>
				<PicToUpload
					filePickerRef={filePickerRef}
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
				/>

				<CaptionToPic commentRef={commentRef} />

				<SendButton
					commentRef={commentRef}
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
				/>
			</div>
		</div>
	) : null
}

export { Modal }
