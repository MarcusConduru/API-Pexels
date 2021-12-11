export class UserInvalidErrors extends Error {
  constructor() {
    super('Usuário inválido') 
    this.name = 'UserInvalidErrors'
 }
}