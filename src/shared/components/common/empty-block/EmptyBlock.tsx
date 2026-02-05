interface Props {
	text?: string
}
const ErrorEmpty = ({ text = 'Нет продуктов' }: Props) => {
	return <div className='text-xl'>{text}</div>
}

export default ErrorEmpty
