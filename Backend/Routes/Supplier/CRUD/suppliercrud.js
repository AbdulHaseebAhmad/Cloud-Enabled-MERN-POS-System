import { Router } from "express";
import verifyJWT from "../../../Middlewares/TokenSigningMiddleWare.js";
import SupplierSchema from "../../../Schemas/Supplier/SupplierSchema.js";

const supplierCrudRouter = Router();

supplierCrudRouter.post("/api/supplier/createsupplier", verifyJWT, async (req, res) => {
  const supplierDetails = req.body;
  try {
    await SupplierSchema.create(supplierDetails);
    res.status(200).json({ message: "Supplier Created Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

supplierCrudRouter.get(
  "/api/supplier/getsuppliers",
  verifyJWT,
  async (req, res) => {
    try {
      const suppliers = await SupplierSchema.find();
      res.status(200).json(suppliers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

supplierCrudRouter.put(
  "/api/supplier/updatesupplier",
  verifyJWT,
  async (req, res) => {
    const { _id, supplierDetails } = req.body;

    try {
      const updateSupplier = await SupplierSchema.findByIdAndUpdate(
        { _id: _id },
        supplierDetails
      );
      res.status(200).json({ message: "Supplier Updated Successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

supplierCrudRouter.delete("/api/supplier/deleteSupplier/:id", verifyJWT, async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        await SupplierSchema.findByIdAndDelete(id);
        res.status(200).json({ message: "Supplier Deleted Successfully", id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });


export default supplierCrudRouter;
