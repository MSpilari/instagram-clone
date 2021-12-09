import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import {
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlineMenu,
	AiOutlinePlusCircle
} from 'react-icons/ai'
import { FaRegPaperPlane } from 'react-icons/fa'

import { modalAtom } from '../../recoil/Modal/Atom'

const NavigationButtons = () => {
	const { data: session } = useSession()

	const [isModalOpenClose, setModalOpenClose] = useRecoilState(modalAtom)

	const router = useRouter()

	return session ? (
		<>
			<nav className='h-full w-52 hidden items-center justify-around lg:flex '>
				<div className='iconsDiv'>
					<AiOutlineHome
						onClick={() => router.push('/')}
						className='headerLinks'
					/>
				</div>
				<div className='iconsDiv'>
					<span className='iconWarning'>3</span>
					<FaRegPaperPlane className='headerLinks' />
				</div>
				<div className='iconsDiv'>
					<AiOutlinePlusCircle
						onClick={() => setModalOpenClose(!isModalOpenClose)}
						className='headerLinks'
					/>
				</div>
				<div className='iconsDiv'>
					<AiOutlineCompass className='headerLinks' />
				</div>
				<div className='iconsDiv'>
					<AiOutlineHeart className='headerLinks' />
				</div>
				<div className='relative h-10 w-10 rounded-full overflow-hidden'>
					<Image
						onClick={() => signOut()}
						className='cursor-pointer hover:opacity-80'
						src={session.user?.image || ''}
						alt='User Image'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</nav>

			<div className='h-full w-30 flex items-center justify-center mr-2 lg:hidden'>
				<AiOutlineMenu className='h-6 w-full cursor-pointer' />
			</div>
		</>
	) : (
		<div>
			<button
				className='border-2 border-blue-400 py-2 px-3 mr-2 bg-blue-400 text-white font-bold text-sm rounded-md hover:bg-blue-500 hover:border-blue-500'
				onClick={() => signIn()}
			>
				Sign In
			</button>
		</div>
	)
}

export { NavigationButtons }
