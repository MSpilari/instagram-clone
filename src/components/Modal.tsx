import { useRecoilState } from 'recoil'
import Image from 'next/image'
import { modalAtom } from '../recoil/Modal/Atom'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillCameraFill } from 'react-icons/bs'

const Modal = () => {
	const [isModalOpenClose, setModalOpenClose] = useRecoilState(modalAtom)
	return (
		isModalOpenClose && (
			<div className='fixed top-0 z-30 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-60'>
				<button
					className='flex self-end mr-24 text-3xl text-white'
					onClick={() => setModalOpenClose(!isModalOpenClose)}
				>
					<AiOutlineClose />
				</button>
				<div className='bg-white w-96 h-96 flex flex-col items-center rounded-lg'>
					<div className='relative flex items-center justify-center h-44 w-11/12 mx-auto my-3'>
						<button className='text-3xl text-red-600'>
							<BsFillCameraFill />
						</button>
						{/* <Image
							src={}
							alt='Post Image'
							layout='fill'
							objectFit='fill'
							sizes='50vw'
						/> */}
					</div>
					<div className='flex flex-col w-full items-center my-2'>
						<p className='text-sm my-2'>Upload a photo</p>
						<textarea
							className='w-11/12 resize-none mx-1 px-2 placeholder-black'
							placeholder='Please, enter a comment...'
						/>
					</div>
					<button className='bg-red-600 rounded-lg px-24 my-1 py-5 text-sm font-bold text-white'>
						Upload Post
					</button>
				</div>
			</div>
		)
	)
}

export { Modal }
