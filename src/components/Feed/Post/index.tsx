import { AddNewCommentsPost } from './AddNewCommentsPost'
import { CaptionPost } from './CaptionPost'
import { CommentsPost } from './CommentsPost'
import { HeaderPost } from './HeaderPost'
import { ImagePost } from './ImagePost'
import { InteractionsPost } from './InteractionsPost'

interface IPost {
	id: string
	username: string
	userImg: string
	img: string
	comment: string
}

const Post = ({ id, username, userImg, img, comment }: IPost) => {
	return (
		<div className='border-2 m-2  border-gray-300 rounded-sm max-w-3xl lg:mr-5 xl:w-11/12 xl:mx-auto '>
			<HeaderPost userImg={userImg} username={username} />

			<ImagePost img={img} />

			<InteractionsPost id={id} />

			<CaptionPost username={username} comment={comment} />

			<CommentsPost id={id} />

			<AddNewCommentsPost id={id} />
		</div>
	)
}

export { Post }
