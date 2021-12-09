interface ICaptionPost {
	username: string
	comment: string
}

const CaptionPost = ({ username, comment }: ICaptionPost) => {
	return (
		<div className='flex items-center mx-1'>
			<p className='text-sm font-bold mx-2'>{username}</p>
			<p className='text-sm font-semibold'>{comment}</p>
		</div>
	)
}

export { CaptionPost }
