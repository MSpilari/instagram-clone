import Image from 'next/image'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

interface IHeaderPost {
	userImg: string
	username: string
}

const HeaderPost = ({ userImg, username }: IHeaderPost) => {
	return (
		<div className='flex items-center m-3'>
			<div className='relative w-12 h-12 rounded-full overflow-hidden mr-2'>
				<Image
					src={userImg}
					alt='User Image'
					layout='fill'
					objectFit='contain'
					sizes='50vw'
				/>
			</div>
			<div className='flex flex-col justify-center'>
				<p className='text-sm font-bold lowercase'>{username}</p>
				<p className='text-xs font-thin'>{username}</p>
			</div>
			<button className='ml-auto text-xl'>
				<HiOutlineDotsHorizontal />
			</button>
		</div>
	)
}

export { HeaderPost }
