import Image from 'next/image'

interface IImagePost {
	img: string
}

const ImagePost = ({ img }: IImagePost) => {
	return (
		<div className='relative w-full h-96'>
			<Image
				src={img}
				alt='Post Image'
				layout='fill'
				objectFit='fill'
				sizes='50vw'
				priority
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUVlWuBwABygDs9mVt4AAAAABJRU5ErkJggg=='
				placeholder='blur'
			/>
		</div>
	)
}

export { ImagePost }
