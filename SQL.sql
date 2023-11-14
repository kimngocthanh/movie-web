create database knt_movie;
use knt_movie;
create table roles(
id int primary key auto_increment,
name varchar(255),
flag_deleted bit(1)
);

create table account_user(
id int primary key auto_increment,
user_name varchar(255),
passwork varchar(255),
flag_deleted bit(1)
);

create table user_role (
id int primary key auto_increment,
id_role int ,
id_user int ,
foreign key (id_role) references roles(id),
foreign key (id_user) references account_user(id)
);

create table customer(
id int primary key auto_increment,
name varchar(255),
dob varchar(255),
phone varchar(255),
id_account int,
foreign key (id_account) references account_user(id)
);

create table movie(
id int primary key auto_increment,
name varchar(255),
date varchar(255),
director varchar(255),
performer varchar(255),
describes varchar(255),
img longtext,
image longtext,
price double,
trailer varchar(255)
);

create table orders(
id int primary key auto_increment,
datetime varchar(255),
flag_deleted bit(1),
id_account int,
foreign key (id_account) references account_user(id)
);

create table order_detail (
id int primary key auto_increment,
price double,
id_order int,
id_movie int,
is_flag bit(1),
foreign key (id_order) references orders(id),
foreign key (id_movie) references movie(id)
);

create table video (
id int primary key auto_increment,
url varchar(255),
id_movie int,
foreign key (id_movie) references movie(id)
);

create table comments (
id int primary key auto_increment,
comment_text varchar(255),
date varchar(255),
id_user int ,
id_video int,
foreign key (id_user) references account_user(id),
foreign key (id_video) references video(id) 
);

create table type_movie (
id int primary key auto_increment,
name varchar(255),
id_movie int,
foreign key (id_movie) references movie(id)
);

create table cart_detail (
id int primary key auto_increment,
id_movie int,
id_user int,
foreign key (id_movie) references movie(id),
foreign key (id_user) references account_user(id)
);

-- Chèn dữ liệu cho bảng movie
INSERT INTO movie (name, date, director, performer, describes, img, image, price, trailer)
VALUES
('Inception', '2010', 'Christopher Nolan', 'Leonardo DiCaprio', 'A thief enters the subconscious of his targets.', 'link_to_image_1.jpg', 'link_to_image_2.jpg', 9.99, 'https://www.youtube.com/watch?v=8hP9D6kZseM'),
('The Shawshank Redemption', '1994', 'Frank Darabont', 'Tim Robbins, Morgan Freeman', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'link_to_image_3.jpg', 'link_to_image_4.jpg', 7.99, 'https://www.youtube.com/watch?v=6hB3S9bIaco'),
('Pulp Fiction', '1994', 'Quentin Tarantino', 'John Travolta, Samuel L. Jackson', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'link_to_image_5.jpg', 'link_to_image_6.jpg', 8.99, 'https://www.youtube.com/watch?v=s7EdQ4FqbhY'),
('Avatar', '2009', 'James Cameron', 'Sam Worthington, Zoe Saldana', 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'link_to_image_7.jpg', 'link_to_image_8.jpg', 10.99, 'https://www.youtube.com/watch?v=5PSNL1qE6VY'),
('The Godfather', '1972', 'Francis Ford Coppola', 'Marlon Brando, Al Pacino', 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'link_to_image_9.jpg', 'link_to_image_10.jpg', 7.99, 'https://www.youtube.com/watch?v=sY1S34973zA'),
('The Dark Knight', '2008', 'Christopher Nolan', 'Christian Bale, Heath Ledger', 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'link_to_image_11.jpg', 'link_to_image_12.jpg', 9.99, 'https://www.youtube.com/watch?v=kmJLafPd0M8'),
('Interstellar', '2014', 'Christopher Nolan', 'Matthew McConaughey, Anne Hathaway', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', 'link_to_image_13.jpg', 'link_to_image_14.jpg', 8.49, 'https://www.youtube.com/watch?v=2LqzF5WauAw'),
('Forrest Gump', '1994', 'Robert Zemeckis', 'Tom Hanks, Robin Wright', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 'link_to_image_15.jpg', 'link_to_image_16.jpg', 7.49, 'https://www.youtube.com/watch?v=uPIEn0M8su0'),
('The Matrix', '1999', 'The Wachowskis', 'Keanu Reeves, Laurence Fishburne', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'link_to_image_17.jpg', 'link_to_image_18.jpg', 6.99, 'https://www.youtube.com/watch?v=vKQi3bBA1y8'),
('The Lord of the Rings: The Fellowship of the Ring', '2001', 'Peter Jackson', 'Elijah Wood, Ian McKellen', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 'link_to_image_19.jpg', 'link_to_image_20.jpg', 8.99, 'https://www.youtube.com/watch?v=V75dMMIW2B4')
;

-- Chèn thêm 10 dòng dữ liệu cho bảng movie
INSERT INTO movie (name, date, director, performer, describes, img, image, price, trailer)
VALUES
('The Avengers', '2012', 'Joss Whedon', 'Robert Downey Jr., Chris Evans', 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.', 'link_to_image_21.jpg', 'link_to_image_22.jpg', 9.49, 'https://www.youtube.com/watch?v=eOrNdBpGMv8'),
('Forrest Gump', '1994', 'Robert Zemeckis', 'Tom Hanks, Robin Wright', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 'link_to_image_23.jpg', 'link_to_image_24.jpg', 7.49, 'https://www.youtube.com/watch?v=uPIEn0M8su0'),
('The Matrix', '1999', 'The Wachowskis', 'Keanu Reeves, Laurence Fishburne', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'link_to_image_25.jpg', 'link_to_image_26.jpg', 6.99, 'https://www.youtube.com/watch?v=vKQi3bBA1y8'),
('The Lord of the Rings: The Two Towers', '2002', 'Peter Jackson', 'Elijah Wood, Ian McKellen', 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 'link_to_image_27.jpg', 'link_to_image_28.jpg', 8.99, 'https://www.youtube.com/watch?v=2TaygQgGMRo'),
('The Dark Knight Rises', '2012', 'Christopher Nolan', 'Christian Bale, Tom Hardy', 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.', 'link_to_image_29.jpg', 'link_to_image_30.jpg', 9.49, 'https://www.youtube.com/watch?v=GokKUqLcvD8'),
('Gladiator', '2000', 'Ridley Scott', 'Russell Crowe, Joaquin Phoenix', 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 'link_to_image_31.jpg', 'link_to_image_32.jpg', 7.99, 'https://www.youtube.com/watch?v=ol67qo3WhJk'),
('The Green Mile', '1999', 'Frank Darabont', 'Tom Hanks, Michael Clarke Duncan', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 'link_to_image_33.jpg', 'link_to_image_34.jpg', 7.49, 'https://www.youtube.com/watch?v=ctRK-4Vt7dA'),
('Schindler\'s List', '1993', 'Steven Spielberg', 'Liam Neeson, Ralph Fiennes', 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.', 'link_to_image_35.jpg', 'link_to_image_36.jpg', 8.99, 'https://www.youtube.com/watch?v=JdRGC-w9syA'),
('The Dark Knight', '2008', 'Christopher Nolan', 'Christian Bale, Heath Ledger', 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'link_to_image_37.jpg', 'link_to_image_38.jpg', 9.99, 'https://www.youtube.com/watch?v=kmJLafPd0M8'),
('Inglourious Basterds', '2009', 'Quentin Tarantino', 'Brad Pitt, Christoph Waltz', 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.', 'link_to_image_39.jpg', 'link_to_image_40.jpg', 7.99, 'https://www.youtube.com/watch?v=KnrRy6kSFF0');

-- Chèn thêm 10 dòng dữ liệu cho bảng movie
INSERT INTO movie (name, date, director, performer, describes, img, image, price, trailer)
VALUES
('Fight Club', '1999', 'David Fincher', 'Edward Norton, Brad Pitt', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', 'link_to_image_41.jpg', 'link_to_image_42.jpg', 6.99, 'https://www.youtube.com/watch?v=SUXWAEX2jlg'),
('Forrest Gump', '1994', 'Robert Zemeckis', 'Tom Hanks, Robin Wright', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 'link_to_image_43.jpg', 'link_to_image_44.jpg', 7.49, 'https://www.youtube.com/watch?v=uPIEn0M8su0'),
('Schindler\'s List', '1993', 'Steven Spielberg', 'Liam Neeson, Ralph Fiennes', 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.', 'link_to_image_45.jpg', 'link_to_image_46.jpg', 8.99, 'https://www.youtube.com/watch?v=JdRGC-w9syA'),
('Inglourious Basterds', '2009', 'Quentin Tarantino', 'Brad Pitt, Christoph Waltz', 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.', 'link_to_image_47.jpg', 'link_to_image_48.jpg', 7.99, 'https://www.youtube.com/watch?v=KnrRy6kSFF0'),
('The Lord of the Rings: The Return of the King', '2003', 'Peter Jackson', 'Elijah Wood, Ian McKellen', 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 'link_to_image_49.jpg', 'link_to_image_50.jpg', 8.99, 'https://www.youtube.com/watch?v=r5X4bR6N9N8'),
('Forrest Gump', '1994', 'Robert Zemeckis', 'Tom Hanks, Robin Wright', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 'link_to_image_51.jpg', 'link_to_image_52.jpg', 7.49, 'https://www.youtube.com/watch?v=uPIEn0M8su0'),
('The Matrix', '1999', 'The Wachowskis', 'Keanu Reeves, Laurence Fishburne', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'link_to_image_53.jpg', 'link_to_image_54.jpg', 6.99, 'https://www.youtube.com/watch?v=vKQi3bBA1y8'),
('Gladiator', '2000', 'Ridley Scott', 'Russell Crowe, Joaquin Phoenix', 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 'link_to_image_55.jpg', 'link_to_image_56.jpg', 7.99, 'https://www.youtube.com/watch?v=ol67qo3WhJk'),
('The Green Mile', '1999', 'Frank Darabont', 'Tom Hanks, Michael Clarke Duncan', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 'link_to_image_57.jpg', 'link_to_image_58.jpg', 7.49, 'https://www.youtube.com/watch?v=ctRK-4Vt7dA'),
('Django Unchained', '2012', 'Quentin Tarantino', 'Jamie Foxx, Christoph Waltz', 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.', 'link_to_image_59.jpg', 'link_to_image_60.jpg', 8.49, 'https://www.youtube.com/watch?v=eUdM9vrCbow');

DELIMITER //

CREATE PROCEDURE insert_acc(IN password VARCHAR(255), IN user_name VARCHAR(255), in role_id int)
BEGIN
    DECLARE id INT;
    INSERT INTO account_user (flag_deleted, `password`, user_name)
    VALUES (0, password, user_name);
    
    SELECT au.id INTO id FROM account_user au WHERE au.user_name LIKE user_name LIMIT 1;
    
    INSERT INTO user_role (account_id, role_id)
    VALUES (id,1);
    
END;

//

DELIMITER ;



call insert_acc("123","kimthanh13",1);
select * from account_user a where a.user_name like "kimthanh12";

select * from movie m
join type_movie tm on m.id_type = tm.id;

select v.url from movie m 
join video v on m.id = v.id_movie
where m.id = 1;

select * from movie m where m.id_type =1 ;

select m.name, m.price, m.image from order_detail od
join movie m on od.id_movie = m.id
join orders o on o.id = od.id_order
join account_user au on au.id = o.id_user
where au.user_name like "abc" ;

select m.name, m.image, m.price from cart_detail cd
join movie m on cd.id_movie = m.id
join account_user au on cd.id_user = au.id
where au.user_name like "thanh" ; 

insert into cart_detail(id_user, id_movie)
values(1,2);

Delimiter //

create PROCEDURE create_oders(price double,id_movie int, id_user int,datenow varchar(255))
begin
 DECLARE id_order INT;
 insert into orders(datetime,flag_deleted,id_user)
 values(datenow,0,id_user);
 
 select max(id) into id_order from orders where id_user = id_user;

insert into order_detail(is_flag, price,id_movie,id_order)
values(0,price,id_movie,id_order);

end;
// 
Delimiter ;
SELECT MAX(id)   FROM orders;

call create_oders(1,3,13,"12/12/2023");

select * from order_detail od 
join orders o on od.id_order = o.id
where o.id_user = 13 and od.id_movie = 1
limit 1;



