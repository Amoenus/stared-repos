# python 3 
import pandas as pd 

def main():
    frame = pd.DataFrame()
    list_ = []
    for k in csv_list:
        print (k)
        #df = pd.read_csv(k,encoding='UTF8')
        df = pd.read_csv(k)
        list_.append(df)
    frame = pd.concat(list_)
    print (frame)
    return frame 

if __name__ == '__main__':
    main()