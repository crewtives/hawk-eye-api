import { RequestHandler } from "express";

/**
 * JSON 404 response
 */
const notFoundError: RequestHandler = (_req, res) => {
  return res.status(404).json({ message: "not found" });
};

export default notFoundError;
