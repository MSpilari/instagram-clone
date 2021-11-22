import Instalogo from '../assets/Instagram_logo.svg'
import Image from 'next/image'

const Header = () => {
	return (
		<div className='flex h-12 w-full items-center border-b-2 border-gray-200'>
			{/* Instagram Logo */}

			<Image src={Instalogo} alt='Instagram Logo' className='h-full' />

			{/* Caixa de pesquisa */}

			{/* Icones Links */}
		</div>
	)
}

export { Header }
