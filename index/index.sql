CREATE TABLE usuario (
  telefono varchar(20) PRIMARY KEY,
  email varchar(50) NOT NULL UNIQUE,
  nombre varchar(50) NOT NULL,
  direccion varchar(100)
);

CREATE TABLE producto (
  id_producto int(11) PRIMARY KEY,
  nombre varchar(50) NOT NULL,
  descripcion varchar(100),
  marca varchar(50),
  estado varchar(20),
  stock int(11) NOT NULL,
  tipo varchar(20) NOT NULL
);

CREATE TABLE pedido (
  id_pedido int(11) PRIMARY KEY,
  precio decimal(10,2) NOT NULL,
  fecha date NOT NULL ,
  id_producto int(11) NOT NULL,
  cantidad int(11) NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

CREATE TABLE compra (
  id_compra int(11) PRIMARY KEY AUTO_INCREMENT,
  telefono_cliente varchar(20) NOT NULL,
  email_cliente varchar(50) NOT NULL,
  tarjeta_credito varchar(16) NOT NULL,
  fecha_vencimiento varchar(5) NOT NULL,
  codigo_seguridad varchar(4) NOT NULL,
  total_compra decimal(10,2) NOT NULL,
  fecha_compra date NOT NULL  
);

CREATE TABLE factura (
  id_factura int(11) PRIMARY KEY,
  telefono_cliente varchar(20) NOT NULL,
  id_pedido int(11) NOT NULL,
  FOREIGN KEY (telefono_cliente) REFERENCES usuario(telefono),
  FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido)
);