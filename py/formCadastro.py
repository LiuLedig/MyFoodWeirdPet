import pymongo
from py.dbconnect import  *
from bson.json_util importação lixeiras
from urllib.parse import unquote
importar datetime


dbcollectionname = "Formulario "

def  listCadastro ():
    dbcollection = dbConnection (dbcollectionname)
    cursor = dbcollection.find (). sort ( " timestamp " , - 1 ) .limit ( 10 )
    return dumps (cursor)


def  saveCadastro ( pedido ):
    data = { " contato " : unquote (request.args.get ( " contato " )),
            " message " : unquote (request.args.get ( " message " )),
            " userid " : request.args.get ( " userid " ),
            " latitude " : request.args.get ( " latitude " ),
            " longitude " : request.args.get ( " longitude " ),
            " timestamp " : datetime.datetime.utcnow ()}
    return saveData (dbcollectionname, data)