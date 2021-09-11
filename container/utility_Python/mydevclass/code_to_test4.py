
def create_table():
    import psycopg2
    conn = psycopg2.connect(
           database="some_database", 
           user="some_user",
           password="some_password")

    print ("connect to postgre")
    cursor = conn.cursor()
    #with conn.cursor() as cursor:
    sql = "DROP TABLE if exists some_table"
    print (sql)
    cursor.execute(sql)
    conn.commit()
    conn.close()
    cursor.close()

# def drop_from_db():
#     table_name = 'some_table'
#     sqlite_db = sqlite3.connect('database.sqlite')
#     sqlite_db.execute("drop table if exists {};".format(table_name))

# def insert_to_db():
# 	table_name = 'some_table'
# 	sqlite_db = sqlite3.connect('database.sqlite')
# 	sql =  '''INSERT INTO some_table(name,begin_date,end_date) VALUES(?,?,?) '''
# 	sqlite_db.execute(sql)

if __name__ == '__main__':
    create_table()
    # drop_from_db()
    # insert_to_db()