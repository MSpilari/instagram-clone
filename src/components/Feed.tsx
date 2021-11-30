import { Post } from './Post'

const Feed = () => {
	return (
		<section className='flex flex-col col-span-2 col-start-1 lg:w-3/4  lg:row-start-1 lg:ml-auto lg:mt-36 '>
			<Post />
			<Post />
			<Post />
		</section>
	)
}

export { Feed }
