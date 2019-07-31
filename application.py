from flask import flask, request, redirect 
from py.formCadastro import  *
from py.authentication import  *


aplicativo = Flask ( __name__ )


@ application.route ( ' / ' )
def  main ():
    return render_template ( ' index.html ' )


@ application.route ( ' / saveNewUser ' , métodos = [ ' POST ' ])
def  saveNewUser ():
    return saveUser (pedido)


@ application.route ( ' / listForm ' , métodos = [ ' POST ' ])
def  listForm ():
    autenticar()
    return listCadastro ()


@ application.route ( ' / saveForm ' , métodos = [ ' POST ' ])
def  saveForm ():
    autenticar()
    devolver saveCadastro (pedido)



def  authenticate ():
    login = request.args.get ( " login " )
    userid = request.args.get ( " userid " )
    token = request.args.get ( " token " )
    se login ==  ' fb ' :
        return verifyFbToken (token, userid)
    elif login ==  ' gl ' :
        return verifyGlToken (token, userid)


if  __name__  ==  " __main__ " :
	application.run ( debug = True )
    