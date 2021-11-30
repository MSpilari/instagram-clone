import Image from 'next/image'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiMessageCircle } from 'react-icons/fi'
import { FaRegPaperPlane } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import IGPicExample from '../assets/igPhotoExample.jpg'

const Post = () => {
	return (
		<div className='border-2 m-2 border-gray-300 rounded-sm lg:mr-5'>
			<div className='flex items-center m-3'>
				<div className='relative w-12 h-12 rounded-full overflow-hidden mr-2'>
					<Image
						src='https://github.com/MSpilari.png'
						alt='User Image'
						layout='fill'
						objectFit='contain'
						sizes='50vw'
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<p className='text-sm font-bold lowercase'>MSpilari</p>
					<p className='text-xs font-thin'>Matheus Bernardes Spilari</p>
				</div>
				<button className='ml-auto text-xl'>
					<HiOutlineDotsHorizontal />
				</button>
			</div>
			<div className='relative w-full h-96 '>
				<Image
					src={IGPicExample}
					alt='Post Image'
					layout='fill'
					objectFit='fill'
					sizes='50vw'
				/>
			</div>
			<div className='flex items-center m-2 w-full'>
				<button className='text-3xl m-1 hover:text-gray-400'>
					<AiOutlineHeart />
				</button>
				<button className='text-3xl m-1 hover:text-gray-400'>
					<FiMessageCircle />
				</button>
				<button className='text-3xl m-1 hover:text-gray-400'>
					<FaRegPaperPlane />
				</button>
				<button className='ml-auto mr-2 text-3xl hover:text-gray-400'>
					<BsBookmark />
				</button>
			</div>
		</div>
	)
}

export { Post }
