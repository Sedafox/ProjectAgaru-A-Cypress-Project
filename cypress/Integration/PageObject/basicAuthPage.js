class BasicAuthPage{
    constructor(username,password){
        this._username = username
        this._password = password
    }
    get username(){
        return this._username
    }
    get password(){
        return this._password
    }
    login(){
        cy.get('input').contains('Username')
            .type(this._username)
    }
}
export default BasicAuthPage