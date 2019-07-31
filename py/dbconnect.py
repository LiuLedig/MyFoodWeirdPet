importação pymongo, json


def  getConfig ( configitem ):
    com  open ( ' py / config.json ' , ' r ' ) como f:
        config = json.load (f)
    return config [configitem]


def  dbConnection ( dbcollectionname ):
    dburi = getConfig ( ' dburi ' )
    dbname =  " test "
    client = pymongo.MongoClient (dburi)
    db = client [dbname]
    dbcollection = db [dbcollectionname]
    return dbcollection


def  saveData ( dbcollectionname , data ):
    dbcollection = dbConnection (dbcollectionname)
    id  = dbcollection.insert_one (data) .inserted_id
    return  str ( id )


def  saveData ( dbcollectionname , data ):
    dbcollection = dbConnection (dbcollectionname)
    id  = dbcollection.insert_one (data) .inserted_id
    return  str ( id )