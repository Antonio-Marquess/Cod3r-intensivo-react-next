interface BotoesProps {
    inc: (valor: number) => void
    dec: (valor: number) => void
}

export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex justify-between pt-2 gap-2">
        
           <button className="botao flex-1" onClick={() => props.dec(3)}>
               -3 
           </button>
           <button className="botao flex-1" onClick={() => props.inc(9)}>
               +9 
           </button>
        </div>
    )
}