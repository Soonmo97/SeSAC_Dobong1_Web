-- Active: 1707101284088@@127.0.0.1@3306@sesac
SHOW TABLES;

CREATE Table visitor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);

DROP Table visitor;

DESC visitor

INSERT INTO visitor(name, comment) VALUES ('allie', 'hi~');
INSERT INTO visitor VALUES (null,'홍길동', '홍길동입니다.');

SELECT * FROM visitor

#######[DCL]#######
-- 새로운 user 만들기 1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면

-- 새로운 user만들기 2
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용


desc user;

SELECT * From user;