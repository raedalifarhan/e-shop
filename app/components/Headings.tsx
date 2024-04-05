
interface Props {
    title: string
    center?: boolean
}

const Headings = ({ title, center }: Props) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
    )
}

export default Headings