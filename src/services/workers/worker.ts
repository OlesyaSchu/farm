const MIN_BALANCE = 100000

export default class Worker {
  // 0 - свободен, 1 - отключен вручную,
  // 2 - отключен из-за баланса ниже нормы, 3 - занят задачей
  public status: 0 | 1 | 2 | 3 = 0
  public role: number
  public operatorId: number
  public address: string
  private privateKey: string
  private tasks: any

  constructor(role: number, operatorId: number, address: string) {
    this.role = role
    this.operatorId = operatorId
    this.address = address
  }

  public changeStatus(status: 0 | 1) {
    this.status = status
  }

  public getBalance() {
    const balance = 1 // just example
    // call address balance with ethers
    if (balance < MIN_BALANCE) {
      this.status = 2
    }
    return balance
  }
}
