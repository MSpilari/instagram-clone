import { AiOutlineSearch } from 'react-icons/ai'

const SearchField = () => {
	return (
		<div className='flex items-center my-auto rounded h-1/2 w-44 border-2 border-gray-300'>
			<div className='mx-1'>
				<AiOutlineSearch className='h-5 w-5 text-gray-400' />
			</div>
			<input className='w-full outline-none' type='text' placeholder='Search' />
		</div>
	)
}

export { SearchField }
