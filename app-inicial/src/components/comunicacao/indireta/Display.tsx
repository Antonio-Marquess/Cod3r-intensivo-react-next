interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className={`
            flex justify-center items-center flex-1
            text-5xl font-black rounded-md p-5
            bg-zinc-600
        `}>
            {props.valor}
        </div>
    )
}