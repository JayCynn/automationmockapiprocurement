import { Router } from "express";
import { createOrder } from "../controllers/order.controller";

const router = Router();

/**
 * @swagger
 * /gdms/OrderCreation/MY/{company}:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: company
 *         required: true
 *         schema:
 *           type: string
 *         description: Company identifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderCreation:
 *                 type: object
 *                 properties:
 *                   tpUserID:
 *                     type: string
 *                     example: "user123"
 *                   tporderStatus:
 *                     type: string
 *                     example: "CREATE"
 *                   tporderNo:
 *                     type: string
 *                     example: "ORD001"
 *                   tporderDept:
 *                     type: string
 *                     example: "IT"
 *                   tpvendorNo:
 *                     type: string
 *                     example: "V001"
 *                   tpvendorName:
 *                     type: string
 *                     example: "Kota Stationers"
 *                   pONumber:
 *                     type: string
 *                     example: ""
 *                   pONoStatus:
 *                     type: string
 *                     example: ""
 *                   pOPdf:
 *                     type: string
 *                     example: ""
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     orderCreationResponse:
 *                       type: object
 *                       properties:
 *                         result:
 *                           type: string
 *                           example: "Success"
 *                         pONumber:
 *                           type: string
 *                           example: "415562"
 *                         pONoStatus:
 *                           type: string
 *                           example: "Raised"
 *                         pOPdf:
 *                           type: string
 *                           example: "Kota Stationers-415562.pdf"
 *                         opResp:
 *                           type: string
 *                           example: "PO created successfully in GDMS"
 *                         opRespCode:
 *                           type: string
 *                           example: "200"
 *                         opIsSuccess:
 *                           type: string
 *                           example: "True"
 */
router.post("/gdms/OrderCreation/MY/:company", createOrder);

export default router;
