import Image from 'next/image'

const Feed = () => {
	return (
		<section className='flex flex-col col-span-2 col-start-1 row-start-1 w-3/4 ml-auto'>
			<div className=' border-2 border-gray-300 rounded-sm'>
				<div>
					<div className='relative w-12 h-12 rounded-full overflow-hidden'>
						<Image
							src='https://github.com/MSpilari.png'
							alt='User Image'
							layout='fill'
							objectFit='contain'
							sizes='50vw'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export { Feed }
