import unittest
import pytest
import sys
sys.path.append(".")
sys.path.append("./mydevclass")
from mydevclass import (code_to_test, code_to_test2, code_to_test3, code_to_test4,
                        script_to_test_1)
import mock
# import psycopg2

# # mock db connection
# @pytest.fixture(scope='session')
# def db_connection():
#     """
#     :return: psycopg2 connection class
#     """
#     db_settings = {
#         'database'        : 'app',
#         'user'            : 'app',
#         'host'            : 'app',
#         'port'            : 'app',
#         'password'        : 'app',
#         'application_name': 'app',
#     }
#     dbc = psycopg2.connect(**db_settings)
#     dbc.autocommit = True
#     return dbc

class Test_CodeToTest_1(unittest.TestCase):

    def SetUp(self):
        print ("Unit test SetUp...")

    @mock.patch('code_to_test.sqlite3.connect')
    def test_database_drop_table_call1(self, mock_sqlite3_connect):
        sqlite_execute_mock = mock.Mock()
        mock_sqlite3_connect.return_value = sqlite_execute_mock
        # test main
        code_to_test.main()
        call = 'drop table if exists some_table;'
        sqlite_execute_mock.execute.assert_called_with(call)

    def TearDown(self):
        print ("Unit test TearDown...")

class Test_CodeToTest_2(unittest.TestCase):
    @mock.patch('code_to_test2.sqlite3.connect')
    def test_database_drop_table_call2(self, mock_sqlite3_connect):
        sqlite_execute_mock = mock.Mock()
        mock_sqlite3_connect.return_value = sqlite_execute_mock
        # test main 
        code_to_test2.main()
        call = 'select * from some_table;'
        sqlite_execute_mock.execute.assert_called_with(call)

class Test_CodeToTest_3(unittest.TestCase):
    @mock.patch('code_to_test3.sqlite3.connect')
    def test_database_drop_table_call3(self, mock_sqlite3_connect):
        sqlite_execute_mock = mock.Mock()
        mock_sqlite3_connect.return_value = sqlite_execute_mock

        # test select_from_db 
        code_to_test3.select_from_db()
        call = 'select * from some_table;'
        sqlite_execute_mock.execute.assert_called_with(call)

        # test drop_from_db
        code_to_test3.drop_from_db()
        call = 'drop table if exists some_table;'
        sqlite_execute_mock.execute.assert_called_with(call)

        # test insert_to_db
        code_to_test3.insert_to_db()
        call = '''INSERT INTO some_table(name,begin_date,end_date) VALUES(?,?,?) '''
        sqlite_execute_mock.execute.assert_called_with(call)

class Test_script_to_test_1(unittest.TestCase):
    def test_add_func_equal(self):
        input_ = 5 
        expected = 10
        output = script_to_test_1.add_func(input_)
        self.assertEqual(expected, output)

    def test_add_func_non_equal(self):
        input_ = 5 
        expected = 100
        output = script_to_test_1.add_func(input_)
        self.assertNotEqual(expected, output)

    def test_add_func_input_type_error(self):
        input_ = "abc"
        output = script_to_test_1.add_func(input_)
        self.assertEqual(False, output)

# class Test_CodeToTest_4_(unittest.TestCase):
#     @mock.patch('code_to_test4.psycopg2.connect')
#     def test_database_drop_table_call4(self, mock_postgre_connect):
#         postgre_execute_mock = mock.Mock()
#         mock_postgre_connect.return_value = postgre_execute_mock
#         # test main
#         code_to_test4.create_table()
#         call = "DROP TABLE if exists some_table"
#         postgre_execute_mock.execute.assert_called_with(call)


if __name__ == '__main__':
    pytest.main([__file__])
