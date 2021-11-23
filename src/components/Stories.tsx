import Image from 'next/image'

const Stories = () => {
	return (
		<section className='flex col-span-2 border-2 border-gray-200 my-2'>
			<div className='flex flex-col relative h-28 items-center justify-center'>
				<div className='relative h-16 w-16 border-2  border-red-500 rounded-full overflow-hidden'>
					<Image
						src='https://github.com/MSpilari.png'
						alt='User Image'
						layout='fill'
						objectFit='contain'
					/>
				</div>
				<p>MSpilari</p>
			</div>
		</section>
	)
}

export { Stories }
