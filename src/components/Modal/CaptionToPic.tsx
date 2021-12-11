import { RefObject } from 'react'

interface ICaptionToPic {
	commentRef: RefObject<HTMLTextAreaElement>
}

const CaptionToPic = ({ commentRef }: ICaptionToPic) => {
	return (
		<div className='flex flex-col w-full items-center my-2'>
			<textarea
				className='w-11/12 resize-none mx-1 px-2 placeholder-black'
				placeholder='Please, enter a comment...'
				ref={commentRef}
			/>
		</div>
	)
}

export { CaptionToPic }
