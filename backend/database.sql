create TABLE category(
    id SERIAL PRIMARY KEY,
    type varchar(255),
    description varchar(255),
    image varchar(255)
);

create TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category INTEGER,
    razmer INTEGER,
    price INTEGER,
    FOREIGN KEY (category) REFERENCES category(id),
    FOREIGN KEY (razmer) REFERENCES razmers(id)
);

create TABLE razmers(
    id SERIAL PRIMARY KEY,
    razmer varchar(255)
);
create TABLE customer(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    phone varchar(255),
    registration_date date
);


create TABLE salesperson(
    id SERIAL PRIMARY KEY,
    fio varchar(255),
    phone varchar(255),
    email varchar(255),
    hire_date date,
    birthday date,
    pasport varchar(255),
    photo varchar(255)
);
create TABLE zakaz(
    id SERIAL PRIMARY KEY,
    customer INTEGER,
    salesperson INTEGER,
    registration_day date,
    FOREIGN KEY (customer) REFERENCES customer(id),
    FOREIGN KEY (salesperson) REFERENCES salesperson(id)
);
create TABLE zakazano(
    id SERIAL PRIMARY KEY,
    id_zakaz INTEGER ,
    id_product INTEGER,
    count INTEGER,
    totalprice INTEGER,
    sale INTEGER,
    FOREIGN KEY (id_zakaz) REFERENCES zakaz(id) ON DELETE CASCADE,
    FOREIGN KEY (id_product) REFERENCES product(id)
);