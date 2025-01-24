import { useSelector } from "react-redux"

export default function CheckoutScreen() {

  const openOrders = useSelector((state) => state.currentCart.openOrders);

  return (
    <div className="bg-lt-primary-bg-color min-h-screen p-6">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl font-semibold text-lt-primary-text-color mb-6">
      Open Orders
    </h1>
    <div className="flex flex-wrap gap-6">
      {openOrders?.map((order) => (
        <div key={order.orderNumber} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-lt-secondary-bg-color border border-lt-primary-border-color shadow rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxjiT7cqvyFdzqMyEfTh9TslbaFyIyDckdQ&s"
              alt="Order Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-medium text-lt-primary-text-color">
              Order #12345
            </h2>
            <p className="text-sm text-lt-secondary-text-color">John Doe</p>
            <p className="text-sm text-lt-secondary-text-color">Status: Pending</p>
            <p className="text-sm text-lt-secondary-text-color">Total: $120.00</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button className="px-4 py-2 text-sm font-medium text-white bg-lt-primary-action-color rounded-lg hover:opacity-90">
            View
          </button>
        </div>
      </div>))}
    </div>
  </div>
</div>

  )
}
