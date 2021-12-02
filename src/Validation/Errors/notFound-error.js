export class NotFound extends Error {
  constructor() {
    super('Item não encontrado') 
    this.name = 'NotFound'
  }
}