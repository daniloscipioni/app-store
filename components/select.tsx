import ProductType from '../types';

export default function Select(info: string, products : ProductType) {

    return (
        <>
        {typeof(info.products)}
            {<select name={info.name} onChange={info.onChange} value={info.value}>
                <option>Selecione um produto</option>
 
            </select>}

            
        </>
    )
}