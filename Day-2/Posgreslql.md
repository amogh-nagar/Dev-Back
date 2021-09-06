## HOW TO START POSTGRESQL SERVER IN WSL :

Installation :

```
> sudo apt update
> sudo apt install postgresql postgresql-contrib
> psql --version
```

Server start :

```
> sudo service postgresql status
> sudo service postgresql start //!important
> sudo service postgresql stop
```

To run PostgreSQL with psql shell :

```
> sudo -u postgres psql
```

## PostgreSQL Commands :

> To exit the shell

```
\q
```

> To create new user

```sql
CREATE USER <User1> WITH PASSWORD '123456';
```

> To create new database

```sql
CREATE DATABASE <test>;
```

> grant access of database to other user

```sql
GRANT ALL PRIVILAGES ON DATABASE <test> to <User1>;
```

> grant specific access of db to other user
>
> OPERATION = {UPDATE,SELECT,INSERT,DELETE}

```sql
GRANT <OPERATION> PRIVILEGES ON DATABASE <test> to <User1>;
```

> Delete database

```sql
DROP DATABASE <test>;
```

> connect to database

```sql
\c <test>
```

> create table

```sql
CREATE TABLE <stud>(
roll_no INT NOT NULL,
name CHAR[50] NOT NULL,
address TEXT
);
```

> display the list of tables (relations)

```sql
\d
```

> display fields info of specific table

```sql
\d <stud>
```

> delete table

```sql
DROP TABLE IF EXISTS <stud>;
```

## Visualization :

- Database (Drive)
  - Tables (Files)
  - Schemas (Folders)
    - Tables (Files)

<br>
> creating schema

```sql
create schema myschema;
```

> creating table inside schema

```sql
create table myschema.company(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25),
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);
```

> delete the schema + all tables inside it

```sql
DROP SCHEMA myschema CASCADE;
```

> Insert values in table

```sql
INSERT INTO DEPARTMENT (ID,DEPT,EMP_ID)
VALUES (1,'CSE',87),(2,'IT',21),(3,'EN',60);
```

> some example of queries

```sql
SELECT (15 + 6) AS ADDITION ;                         /* Prints sum of 15 and 6 in column addition */
SELECT COUNT(*) AS "RECORDS" FROM COMPANY;
SELECT CURRENT_TIMESTAMP;                             /* Prints current time */
select * from COMPANY;
SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;
SELECT * FROM COMPANY WHERE NAME LIKE 'Pa%';
SELECT * FROM COMPANY WHERE SALARY::text LIKE '200%';         /* Prints all rows in which slary starts with
                                                                 200 and convert salary column type to text */

SELECT * FROM COMPANY WHERE AGE IN ( 25, 27 );
SELECT * FROM COMPANY WHERE AGE NOT IN ( 25, 27 );
SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27;
```

> update queries

```sql
UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;
UPDATE COMPANY SET ADDRESS = 'Texas', SALARY=20000;
```

> delete row from table

```sql
DELETE FROM COMPANY WHERE ID = 2;
```

## Primary keys & Foreign keys :

```sql
CREATE TABLE customers(
   customer_id INT GENERATED ALWAYS AS IDENTITY,
   customer_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(customer_id)
);

CREATE TABLE contacts(
   contact_id INT GENERATED ALWAYS AS IDENTITY,
   customer_id INT,
   contact_name VARCHAR(255) NOT NULL,
   phone VARCHAR(15),
   email VARCHAR(100),
   PRIMARY KEY(contact_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(customer_id)
	  REFERENCES customers(customer_id)
	  ON DELETE CASCADE                /*ON DELETE CASCADE also deletes the reference
                                        data present in the other table*/
);
```