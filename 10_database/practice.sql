-- 실습 1 ~ 5     1~3 명령어, 테이블 구조    4 명령어, 데이터  5 명령어만 제출
-- 실습 1 
use dobong;
CREATE TABLE member (
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age INT,
  gender VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2) DEFAULT 'x'
);

DESC member

-- 실습 2
ALTER Table member ADD interest VARCHAR(100);

ALTER Table member DROP age;
DESC member

-- 실습 3
CREATE Table user (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '', -- ENUM('', '', ..) 데이터 셋 제시 
  birthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0
);

DESC USER

-- 실습 4
INSERT INTO user VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES ('power', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

-- 실습 5
SELECT * FROM user ORDER BY birthday; 
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC; 
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;
SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';
-- select >> from >> where >> group by >> having >> order by >> limit