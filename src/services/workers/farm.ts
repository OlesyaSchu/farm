import Worker from './worker'

interface IWorkersList {
  [address: string]: Worker
}

export default class Farm {
  private static workers: IWorkersList = {}

  public static createWorker(role: number, operatorId: number, address: string): Worker {
    const worker = new Worker(role, operatorId, address)
    Farm.workers[worker.address] = worker
    return worker
  }

  public static changeWorkerStatus(
    operatorId: number,
    address: string,
    status: 0 | 1
  ): Worker {
    const worker = Farm.workers[address]
    if (!worker) {
      throw new Error(`Worker ${address} not found`)
    }
    if (worker.operatorId !== operatorId) {
      throw new Error(`Worker ${address}: wrong operatorId`)
    }
    worker.changeStatus(status)
    return worker
  }

  static getWorkers(): Worker[] {
    return Object.values(Farm.workers)
  }
}

Farm.createWorker(1, 1, 'a') 
Farm.createWorker(0, 2, 'b') 
Farm.createWorker(0, 1, 'c') 
