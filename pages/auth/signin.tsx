import { getProviders, SessionProviderProps, signIn } from 'next-auth/react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { BsHeartFill } from 'react-icons/bs'
import { Header } from '../../src/components/Header'
import InstagramLogo from '../../src/assets/Instagram_logo.svg'
import MSpilariLogo from '../../src/assets/LogoYB.svg'

interface GetProvidersResponse {
	[provider: string]: SessionProviderProps
}

const SignIn = ({ providers }: GetProvidersResponse) => {
	return (
		<main className='relative h-screen flex flex-col items-center'>
			<Header />
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
			<p className='text-sm my-2'>
				This is not a <strong className='text-red-600 text-lg'>REAL APP</strong>
				, is built for educational purposes
			</p>
			{Object.values(providers).map(provider => (
				<div className='my-4' key={provider.name}>
					<button
						className='flex items-center text-sm border-2 border-blue-400 bg-blue-400 rounded-md text-white font-bold py-2 px-3 hover:opacity-80'
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
					>
						<FcGoogle className='text-3xl mr-2' />
						Sign in with {provider.name}
					</button>
				</div>
			))}
			<footer className='flex absolute bottom-0 '>
				<p className='flex items-center text-sm font-bold'>
					Builded with <BsHeartFill className='text-lg mx-1 text-red-600' /> by
					<a
						className='w-32 ml-1'
						href='https://github.com/MSpilari'
						target='_blank'
						rel='noreferrer'
					>
						<Image src={MSpilariLogo} alt='MSpilari Logo' sizes='50vw' />
					</a>
				</p>
			</footer>
		</main>
	)
}

//Server Side Rendering...
export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers
		}
	}
}

export default SignIn
