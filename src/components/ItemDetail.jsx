import Counter from "./Counter";

const ItemDetail = ({item}) => {

    const handleAdd = ()=>{
      console.log('agregado al carrito')
    }  

    return ( <>

     <div className="card d-flex w-25 shadow p-3 mb-5 bg-body-tertiary rounded">
        <img src={item.imagen} alt="Imagen del Producto" />
          <div className="card-body">
            <p className="card-text">{item.nombre}</p>
            <p className="card-text">${item.precio}</p>
            <Counter stock={item.stock} initial={0} onAdd={handleAdd}/>
        </div>
     </div>

    </> );
}
 
export default ItemDetail;