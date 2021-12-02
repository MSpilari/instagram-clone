import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {
	AiOutlineSearch,
	AiOutlineHome,
	AiOutlinePlusCircle,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineMenu
} from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa'
import Instalogo from '../assets/Instagram_logo.svg'

const Header = () => {
	const { data: session } = useSession()

	return (
		<header className='h-16 w-full border-b-2 border-gray-200 bg-white z-20 sticky top-0'>
			<div className='h-full w-full flex items-center justify-between lg:w-9/12 lg:mx-auto'>
				<div className='relative hidden h-full w-28 lg:flex'>
					<Image
						src={Instalogo}
						alt='Instagram Logo'
						layout='fill'
						objectFit='contain'
						sizes='50vw'
						priority
					/>
				</div>

				<div className='relative h-full w-20 lg:hidden'>
					<BsInstagram className='h-full py-2 w-11/12 my-auto' />
				</div>

				<div className='flex items-center my-auto rounded h-1/2 w-44 border-2 border-gray-300'>
					<div className='mx-1'>
						<AiOutlineSearch className='h-5 w-5 text-gray-400' />
					</div>
					<input
						className='w-full outline-none'
						type='text'
						placeholder='Search'
					/>
				</div>

				<nav className='h-full w-52 hidden items-center justify-around lg:flex '>
					<div className='iconsDiv'>
						<AiOutlineHome className='headerLinks' />
					</div>
					<div className='iconsDiv'>
						<span className='iconWarning'>3</span>
						<FaRegPaperPlane className='headerLinks' />
					</div>
					<div className='iconsDiv'>
						<AiOutlinePlusCircle className='headerLinks' />
					</div>
					<div className='iconsDiv'>
						<AiOutlineCompass className='headerLinks' />
					</div>
					<div className='iconsDiv'>
						<AiOutlineHeart className='headerLinks' />
					</div>
					<div className='relative h-10 w-10 rounded-full overflow-hidden'>
						<Image
							src='https://github.com/MSpilari.png'
							alt='User Image'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</nav>

				<div className='h-full w-30 flex items-center justify-center mr-2 lg:hidden'>
					<AiOutlineMenu className='h-6 w-full cursor-pointer' />
				</div>
			</div>
		</header>
	)
}

export { Header }
