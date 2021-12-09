import Image from 'next/image'

interface ISuggestion {
	avatar: string
	username: string
}

const Suggestion = ({ avatar, username }: ISuggestion) => {
	return (
		<div className='flex items-center my-1'>
			<div className='flex items-center relative w-11 h-11 rounded-full overflow-hidden mr-3'>
				<Image
					src={avatar}
					alt='User Image'
					layout='fill'
					objectFit='contain'
					sizes='50vw'
				/>
			</div>
			<div className='flex flex-col justify-center '>
				<p className='text-sm w-28 truncate lowercase font-bold'>{username}</p>
				<p className='text-xs text-gray-400'>Suggestions for you</p>
			</div>
			<button className='text-blue-500 text-sm font-semibold ml-auto'>
				Follow
			</button>
		</div>
	)
}

export { Suggestion }
