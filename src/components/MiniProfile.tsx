import Image from 'next/image'

const MiniProfile = () => {
	return (
		<aside className='flex flex-col justify-center'>
			<div className='flex items-center'>
				<div className='flex items-center justify-center relative w-16 h-16 rounded-full overflow-hidden mr-2'>
					<Image
						src='https://github.com/MSpilari.png'
						alt='User Image'
						objectFit='contain'
						layout='fill'
						sizes='50ww'
					/>
				</div>
				<div className='flex flex-col justify-center mr-2'>
					<p className='text-xs font-bold'>m.spilari</p>
					<p className='text-gray-400 text-sm'>Matheus Bernardes Spilari</p>
				</div>
				<button className='text-blue-500 font-semibold text-sm'>Edit</button>
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center'>
					<p>Suggestions for you</p>
					<button>See all</button>
				</div>
			</div>
		</aside>
	)
}

export { MiniProfile }
