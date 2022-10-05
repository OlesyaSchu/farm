import {NextFunction, Request, Response} from "express";
import Operators from "../models/Operators";

export default function validateOperator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const key = req.headers.authorization.slice(7);
  const operator = Operators.findByKey(key);
  if (!operator) { return res.status(401); }
  if (!req.meta) { req.meta = {operator}; }
  next()
}
