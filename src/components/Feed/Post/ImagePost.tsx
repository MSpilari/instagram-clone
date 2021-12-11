import Image from 'next/image'
import { Loading } from '../../UI/Loading'

interface IImagePost {
	img: string
}

const ImagePost = ({ img }: IImagePost) => {
	return (
		<div className='relative flex items-center justify-center w-full h-96'>
			{img ? (
				<Image
					src={img}
					alt='Post Image'
					layout='fill'
					objectFit='fill'
					sizes='50vw'
					priority
				/>
			) : (
				<Loading />
			)}
		</div>
	)
}

export { ImagePost }
