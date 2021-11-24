import Image from 'next/image'

interface IStory {
	avatar: string
	username: string
}

const Story = ({ avatar, username }: IStory) => {
	return (
		<div className='flex flex-col relative h-28 items-center justify-center mx-2 cursor-pointer'>
			<div className='relative h-16 w-16 border-2 border-red-500 rounded-full overflow-hidden'>
				<Image
					src={avatar}
					alt='User Image'
					layout='fill'
					objectFit='contain'
					sizes='50vw'
				/>
			</div>
			<p className='text-sm w-14 truncate lowercase'>{username}</p>
		</div>
	)
}

export { Story }
