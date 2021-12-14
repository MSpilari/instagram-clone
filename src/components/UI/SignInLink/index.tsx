import Link from 'next/link'
import Image from 'next/image'
import InstagramLogo from '../../../assets/Instagram_logo.svg'

const SignInLink = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<div className='relative w-96 h-40 mt-11'>
				<Image
					src={InstagramLogo}
					alt='Instagram Logo'
					sizes='50vw'
					layout='fill'
					objectFit='contain'
					priority
				/>
			</div>
			<p className='text-lg my-2'>
				Sorry, you are not logged in our application. Please, sign in to see
				your friends !!
			</p>
			<Link passHref href='/auth/signin'>
				<button
					className='bg-blue-500 border-2 border-blue-500 px-8 py-4 rounded-lg text-lg 
						text-white font-bold hover:bg-blue-400 hover:border-blue-400 my-4'
				>
					Sign In
				</button>
			</Link>
		</div>
	)
}

export { SignInLink }
