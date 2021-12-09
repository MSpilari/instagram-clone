import { Logos } from './Logos'
import { SearchField } from './SearchField'
import { NavigationButtons } from './NavigationButtons'
const Header = () => {
	return (
		<header className='h-16 w-full border-b-2 border-gray-200 bg-white z-20 sticky top-0'>
			<div className='h-full w-full flex items-center justify-between lg:w-9/12 lg:mx-auto'>
				<Logos />
				<SearchField />
				<NavigationButtons />
			</div>
		</header>
	)
}

export { Header }
