import PropTypes from "prop-types";
import { deleteProduct } from "../../Redux/Product/ProductActions";
import { useDispatch } from "react-redux";
//import EditSupplierDetails from "../EditSupplierDetails/EditSupplierDetails";

export default function ViewProductsTable({
  products,

}) {
  
  const dispatch = useDispatch();

  const deleteProductHandle = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <div className="overflow-x-auto bg-lt-secondary-bg-color p-4 rounded-lg shadow-md border border-lt-primary-border-color">
      {products.length > 0 ? (<table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
              Product
            </th>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
              Category
            </th>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
              SKU
            </th>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
              Price
            </th>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
             Stock
            </th>
            <th className="px-4 py-2 text-left text-d-secondary-bg-color text-sm md:text-base text-center">
              Supplier
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 && products.map((product, index) => (
            <tr key={index} className="text-center text-sm md:text-base">
              <td className="px-4 py-2 truncate"><a href="product-detail">{product['Product Name']}</a></td>
              <td className="px-4 py-2 truncate">{product.Category}</td>
              <td className="px-4 py-2 truncate">{product.SKU}</td>
              <td className="px-4 py-2 truncate">{product.Price}</td>
              <td className="px-4 py-2 truncate">{product.Stock}</td>
              <td className="px-4 py-2 truncate">{product.Supplier}</td>
              <td className="px-4 py-2 flex justify-center space-x-2">
                <button
                  className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-1 px-2 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
                  onClick={null}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </button>
                <button onClick={()=>{deleteProductHandle(product._id)}} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>) : (
        <div className="text-center text-lg text-lt-secondary-text-color dark:text-d-secondary-text-color">
          No Products Found
        </div>
      )}
    </div>
  );
}

ViewProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};
