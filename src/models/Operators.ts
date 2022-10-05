export interface IOperator {
  id: number
  key: string
  chainid: number
}

export default class Operators {
  public static list: IOperator[] = [
    {
      id: 1,
      key: 'abc',
      chainid: 1,
    },
    {
      id: 2,
      key: 'def',
      chainid: 1,
    },
  ]

  public static findByKey(key: string): IOperator {
    return Operators.list.find((operator) => operator.key === key)
  }
}
