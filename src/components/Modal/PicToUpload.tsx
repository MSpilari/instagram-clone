import Image from 'next/image'
import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'

interface IPicToUpload {
	selectedFile: string
	setSelectedFile: Dispatch<SetStateAction<string>>
	filePickerRef: RefObject<HTMLInputElement>
}

const PicToUpload = ({
	selectedFile,
	setSelectedFile,
	filePickerRef
}: IPicToUpload) => {
	const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader()
		if (e.target.files?.item(0)) {
			reader.readAsDataURL(e.target.files[0])
		}

		reader.onload = readerEvent => {
			setSelectedFile(String(readerEvent.target?.result))
		}
	}

	return (
		<div className='relative flex items-center justify-center h-44 w-11/12 mx-auto my-3'>
			{selectedFile ? (
				<Image
					src={selectedFile}
					alt='Post Image'
					layout='fill'
					objectFit='fill'
					sizes='50vw'
					onClick={() => {
						if (filePickerRef.current) {
							filePickerRef.current.value = ''
							setSelectedFile('')
						}
					}}
				/>
			) : (
				<button
					className='flex flex-col items-center  text-3xl text-red-600'
					onClick={() => filePickerRef.current && filePickerRef.current.click()}
				>
					<BsFillCameraFill />
					<p className='text-sm my-1'>Upload a photo !</p>
				</button>
			)}

			<input
				type='file'
				hidden
				ref={filePickerRef}
				onChange={e => addImageToPost(e)}
			/>
		</div>
	)
}

export { PicToUpload }
