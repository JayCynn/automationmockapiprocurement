import { Router } from "express";
import {
  uploadSubmissionFile,
  validateFileContent,
  concatStrings,
  getDateTime,
} from "../controllers/file.controller";

const router = Router();

/**
 * @swagger
 * /api/util/kubeops/submission/v2/uploadSubmissionFileBase64:
 *   post:
 *     summary: Upload a file with base64 encoding
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *                 example: "Procu.Gdms"
 *               clientSecret:
 *                 type: string
 *                 example: "Procu.Gdms"
 *               baseUrl:
 *                 type: string
 *                 example: "https://qa3.kube365.com/submission/"
 *               formId:
 *                 type: string
 *                 example: "FORM123"
 *               submissionRefNo:
 *                 type: string
 *                 example: "REF123"
 *               fileUploads:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     fieldCode:
 *                       type: string
 *                       example: "FIELD1"
 *                     formFiles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           shortFileName:
 *                             type: string
 *                             example: "test"
 *                           fullFileName:
 *                             type: string
 *                             example: "test.pdf"
 *                           base64FileData:
 *                             type: string
 *                             example: "base64string"
 *                           fileExtension:
 *                             type: string
 *                             example: "application/pdf"
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     statusId:
 *                       type: string
 *                       example: "200"
 *                     responseData:
 *                       type: string
 *                       example: "True"
 *                     success:
 *                       type: string
 *                       example: "True"
 */
router.post(
  "/api/util/kubeops/submission/v2/uploadSubmissionFileBase64",
  uploadSubmissionFile
);

/**
 * @swagger
 * /procu-utils/validate-file-content:
 *   post:
 *     summary: Validate if file content is empty
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               base64FileData:
 *                 type: string
 *                 example: "base64string"
 *     responses:
 *       200:
 *         description: File content validated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     validateIsFileEmptyResponse:
 *                       type: string
 *                       example: "False"
 */
router.post("/procu-utils/validate-file-content", validateFileContent);

/**
 * @swagger
 * /procu-utils/concat-strings:
 *   post:
 *     summary: Concatenate strings to create filename
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               VendorName:
 *                 type: string
 *                 example: "Kota Stationers"
 *               PONo:
 *                 type: string
 *                 example: "415562"
 *               IsAmended:
 *                 type: string
 *                 example: "false"
 *     responses:
 *       200:
 *         description: Strings concatenated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     concatResponse:
 *                       type: string
 *                       example: "Kota Stationers-415562.pdf"
 */
router.post("/procu-utils/concat-strings", concatStrings);

/**
 * @swagger
 * /procu-utils/getDateTime:
 *   post:
 *     summary: Get formatted date and time
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               format:
 *                 type: string
 *                 example: "DD MMM YYYY HH:mm:ss"
 *     responses:
 *       200:
 *         description: DateTime retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     dateTime:
 *                       type: string
 *                       example: "14 Mar 2025 11:00:22"
 */
router.post("/procu-utils/getDateTime", getDateTime);

export default router;
