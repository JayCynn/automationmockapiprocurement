import { Router } from "express";
import { getUserDepartment } from "../controllers/user-dept.controller";

const router = Router();

/**
 * @swagger
 * /edms/UserPODept/MY:
 *   post:
 *     summary: Get user department information
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ipUserID:
 *                 type: string
 *                 example: "requestor1@kube.com"
 *     responses:
 *       200:
 *         description: User departments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           deptcode:
 *                             type: string
 *                             example: "D01"
 *                           deptname:
 *                             type: string
 *                             example: "Ara Damansara Sales"
 *                           depttype:
 *                             type: string
 *                             example: "Sales"
 */
router.post("/edms/UserPODept/MY", getUserDepartment);

export default router;
