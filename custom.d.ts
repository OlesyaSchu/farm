declare namespace Express {
  export interface Request {
    meta?: {
      operator?: {
        id: number
        key: string
        chainid: number
      }
    }
  }
}
