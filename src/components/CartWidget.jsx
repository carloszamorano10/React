const CartWidget = () => {

    return ( <>
            <div className="mx-auto p-3">
              <a href="#" className="position-relative">
                 <img src="../carrito.svg" alt="carrito" style={{width: 30}}/>
                 <span id="num_cart" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
               </a>
            </div>
    </> );
}
 
export default CartWidget;