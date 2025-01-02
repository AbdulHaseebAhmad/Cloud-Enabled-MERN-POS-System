import {Router} from 'express';
import verifyJWT from '../../../Middlewares/TokenSigningMiddleWare.js';
import SupplierSchema from '../../../Schemas/Supplier/SupplierSchema.js';

const supplierCrudRouter = Router();

supplierCrudRouter.post('/api/supplier/create', verifyJWT, async (req, res) => {
    const supplierDetails = req.body;
    try{
        await SupplierSchema.create(supplierDetails);
        res.status(200).json({message:"Supplier Created Successfully"});}
        catch(err){
            res.status(500).json({message:err.message});}
});

export default supplierCrudRouter;