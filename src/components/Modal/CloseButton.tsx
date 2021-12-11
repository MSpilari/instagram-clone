import { Dispatch, RefObject, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { modalAtom } from '../../recoil/Modal/Atom'

interface ICloseButton {
	filePickerRef: RefObject<HTMLInputElement>
	setSelectedFile: Dispatch<SetStateAction<string>>
}

const CloseButton = ({ filePickerRef, setSelectedFile }: ICloseButton) => {
	const [isModalOpenClose, setModalOpenClose] = useRecoilState(modalAtom)

	return (
		<button
			className='flex self-end mr-24 text-3xl text-white'
			onClick={() => {
				if (filePickerRef.current) {
					filePickerRef.current.value = ''
					setModalOpenClose(!isModalOpenClose)
					setSelectedFile('')
				}
			}}
		>
			<AiOutlineClose />
		</button>
	)
}

export { CloseButton }
