version: '3'
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    volumes:
      - ./data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  
  web:
    build: .
    command: npm start
    volumes:
      - .:/code
    ports:
      - "3000:3000"
    depends_on:
      - db
