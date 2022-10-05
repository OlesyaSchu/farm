import {Controller, Delete, Get, Middleware, Post, Put} from '@overnightjs/core'
import {Request, Response} from 'express'
import validateOperator from '../middleware/validateOperator'
import Farm from '../services/workers/farm'

@Controller('api/workers')
export class WorkersController {
  @Put(':address/:status')
  @Middleware(validateOperator)
  public changeStatus(req: Request, res: Response): any {
    const status = +req.params.status
    const {address} = req.params
    const {operator} = req.meta
    if ([0, 1].indexOf(status) === -1) {
      return res.status(400)
    }
    const worker = Farm.changeWorkerStatus(
      operator.id,
      address,
      status as 0 | 1
    )
    return res.status(200).json(worker)
  }

  @Get()
  private getAll(req: Request, res: Response): void {
    res.status(200).json(Farm.getWorkers())
  }
}
