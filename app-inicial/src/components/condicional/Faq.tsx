import Pergunta from "./Pergunta";
import { useState } from "react";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }
        return (
            <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
                <Pergunta
                    indice={0}
                    aberta={ativo === 0}
                    texto="O que é um loop?"
                    resposta="Repetição de instruções em um código" 
                    alternarVisibilidade={alternarVisibilidade}
                />
                <Pergunta 
                    indice={1}
                    aberta={ativo === 1}
                    texto="O que é um array?" 
                    resposta="Coleção de elementos do mesmo tipo." 
                    alternarVisibilidade={alternarVisibilidade}
                />
                <Pergunta 
                    indice={2}
                    aberta={ativo === 2}
                    texto="O que é uma API?"
                    resposta="Interface para interação entre sistemas." 
                    alternarVisibilidade={alternarVisibilidade}
                />
                <Pergunta
                    indice={3}
                    aberta={ativo === 3}
                    texto="O que é uma variável?" 
                    resposta="Local de armazenamento para dados manipulados."
                    alternarVisibilidade={alternarVisibilidade}
                />
            </div>
        );
    
}   