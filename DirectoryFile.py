import os

path = "C:\\Users\\최원석\\Desktop\\wetube\\views"
file_list = os.listdir(path)
print(f"디렉토리안에 리스트: {file_list} \n")

file_list_pug = [file for file in file_list if file.endswith(".pug")]

print(f"pug확장자로 sort한 리스트: {file_list_pug}")

for fileList in file_list_pug:
    c_filePath = f"C:\\Users\\최원석\\Desktop\\wetube\\views\\{fileList}"
    appendData = "extends layouts/main"
    f = open(c_filePath,"w")
    f.write(appendData)
    f.close()
    
