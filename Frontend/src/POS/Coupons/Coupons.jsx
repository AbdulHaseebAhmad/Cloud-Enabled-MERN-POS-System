import { useState } from "react";

export default function Coupons() {
  const [coupons,setCoupons] = useState([]);
  const handleViewOrder = (openOrder) => {
    console.log(openOrder);
  };

  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-lt-primary-text-color mb-6">
          Coupons
        </h1>
        <div className="flex flex-wrap gap-6">
          {coupons.length > 0 ? coupons?.map((order) => (
            <div
              key={order.orderNumber}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-lt-secondary-bg-color border border-lt-primary-border-color shadow rounded-lg p-4"
            >
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
                    {order.orderNumber}
                  </h2>
                  <p className="text-sm text-lt-secondary-text-color">
                    John Doe
                  </p>
                  <p className="text-sm text-lt-secondary-text-color">
                    Status: Pending
                  </p>
                  <p className="text-sm text-lt-secondary-text-color">
                    Total: ${order.totalPrice}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-lt-primary-action-color rounded-lg hover:opacity-90"
                  onClick={() => {
                    handleViewOrder(order);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          )): <div className="flex flex-col gap-2 justify-center items-center h-[80vh] w-full">
            <h1 className="text-2xl text-gray-500">No Coupons Available </h1>
            <small className="text-lg text-d-primary-action-color">
              Try Again Later
            </small>
          </div>}
        </div>
      </div>
    </div>
  )
}
