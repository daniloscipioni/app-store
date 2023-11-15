export default function Select(info : string) {
    return (
        <select name={info.name} onChange={info.onChange} value={info.value}>
            <option>Selecione um produto</option>
            <option value="3817669355">Bombeta Nike Preta</option>
            <option value="1000688041">Camisa Nike Cinza</option>
            <option value="1902765735">teste preto</option>
        </select>
    )
}