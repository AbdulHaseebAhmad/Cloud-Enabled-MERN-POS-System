import PropTypes from 'prop-types'
export default function ProductTable({cartItems}) {
  return (
    <main className="w-7/12">
          
          <div
            id="cart"
            className=" flex gap-6 space-y-0 pt-4 justify-center flex-wrap"
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-[200px]  p-4 bg-white rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded mb-2 object-cover w-full"
                />
                <div className="text-center">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm">SKU: {item.sku}</p>
                  <p className="text-sm">Quantity: {item.qty}</p>
                  <p className="font-bold">${item.qty * item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

  )
}


ProductTable.propTypes = {
    cartItems: PropTypes.array
    }