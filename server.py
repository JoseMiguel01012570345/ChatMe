import socket

def send_data(ip_address, port, data):
    #Crear un socket del tipo TCP
    server_socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    server_address = (ip_address, 8080)
    server_socket.bind(server_address)
    
    while True:
        server_socket.listen(2)

        #Aceptar la conexión entrante
        client_socket, client_address = server_socket.accept()
        
        #Recibir datos del cliente
        data = client_socket.recv(1024).decode()
        
        message=myMessage()
    
        if client_address==pear1:
           print() #send to pear2
        
        if client_address==pear2:
           print()  #send to pear1

