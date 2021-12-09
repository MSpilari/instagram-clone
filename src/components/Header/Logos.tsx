import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsInstagram } from 'react-icons/bs'

import Instalogo from '../../assets/Instagram_logo.svg'

const Logos = () => {
	const router = useRouter()

	return (
		<>
			<div
				onClick={() => router.push('/')}
				className='relative hidden h-full w-28 cursor-pointer lg:flex'
			>
				<Image
					src={Instalogo}
					alt='Instagram Logo'
					layout='fill'
					objectFit='contain'
					sizes='50vw'
					priority
				/>
			</div>

			<div
				onClick={() => router.push('/')}
				className='relative h-full w-20 cursor-pointer lg:hidden'
			>
				<BsInstagram className='h-full py-2 w-11/12 my-auto' />
			</div>
		</>
	)
}

export { Logos }
