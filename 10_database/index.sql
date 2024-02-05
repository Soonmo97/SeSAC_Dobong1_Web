-- --------------- 데이터베이스 관련 명령어

-- DB 목록 확인
SHOW DATABASES;


-- DATABASE 삭제
DROP DATABASE sesac;

DROP DATABASE mydatabase;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
/*
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4 는 utf8보다 더 많은 지원(이모지 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
*/
create database dobong DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- 이 데이터 베이스를 사용하겠다!(use 명령어, 데이터 베이스 사용 선언)
USE sesac;

--  --------------- 테이블 관련 명령어
-- 1. 테이블 생성
/*
create table products(
      속성1 값형식 제약조건,
      속성2 값형식 제약조건
);
*/

--  제약 조건
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키(중복 허용 x, null값 허용 x)
-- DEFAULT: 기본값
-- UNIQUE: 중복허용 x, null값 허용
create table products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  model_number VARCHAR(15) NOT NULL,
  series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show tables;

-- products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조 확인)
desc products;

-- 테이블 삭제
drop table products;

-- 테이블(데이터만) 삭제
TRUNCATE TABLE products; 

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가(ADD)
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정(MODIFY)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제(DROP)
ALTER Table products DROP new_column;


-- -------------------DML
-- Data Manipulation Language (데이터 조작어)
-- user TABLE(
-- id: int not null AUTO_INCREMENT PRIMARY KEY, 
-- name: VARCHAR(10) not null,
-- age: int not null,
-- address: varachar(100))

create table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

show tables;
desc user;

-- CREATE(데이터 추가) >> INSERT INTO
-- 1. 데이터 추가
-- INSERT INTO 테이블이름 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이한이', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('이지은', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('윤세희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('박수진', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('박찬희', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지수', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('최솔희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('한소희', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('권희수', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('김민지', 22, '서울특별시 중구');

SELECT * FROM user;  -- 테이블 전체 조회

-- 2. 데이터 수정
-- UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 WHERE 어떤 데이터를;
UPDATE user SET name='김민지' WHERE id=1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 WHERE 삭제 조건;
DELETE FROM user WHERE id=1; -- WHERE 이후 조건에 따른 데이터 삭제
DELETE FROM user; -- 전체 데이터 삭제

-- 이씨인 사람 지우기 >> 전체 데이터 조회
DELETE FROM user WHERE name LIKE '이%';
SELECT * FROM user;

TRUNCATE TABLE user; -- 전체 데이터 삭제

-- 4. 데이터 조회(READ) select ~ from ~
-- * : 전체
SELECT * FROM user; -- user 테이브레서 전체 컬럼 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT name, age FROM user; -- 이름과 나이 컬럼 조회

-- WHERE 절로 조건 적용
SELECT * FROM user WHERE age >= 25;
SELECT * FROM user WHERE id = 3;
SELECT name FROM user WHERE id = 3;
SELECT id, age FROM user WHERE name = '이지은';

-- order by: 데이터 정렬
-- desc: 내림차순
-- asc: 오름차순(default)
SELECT * FROM user ORDER BY age DESC;

SELECT * FROM user WHERE id > 6 ORDER BY age;

-- LIKE: 문자열 패턴 조회(WHERE와 함꼐 쓰임)
-- '서울로 시작하는 주소 찾기'
SELECT * FROM user WHERE address LIKE '서울%';

-- 이름의 마지막 글자가 '희'인 사람
SELECT * FROM user WHERE name LIKE '__희';

-- 주소에 광역시가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%';

-- 이름에 희가 들어가는 사람 이름컬럼만 조회, age 기준 내림차순 정렬
SELECT * FROM user WHERE name LIKE '%희%' ORDER BY age DESC;

-- LIMIT: 데이터의 개수 제한
SELECT * FROM user LIMIT 3;

SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;

-- BETWEEN A AND B: A와 B의 사이값 조회(A, B는 포함) -> A<= 값 <=B
SELECT * FROM user WHERE age BETWEEN 25 and 30;
-- IN(리스트) : 리스트의 요소와 일치하면 참
SELECT * FROM user WHERE age IN(20, 21, 22, 23);

-- IS NULL / IS NOT NULL
INSERT INTO user (name, age) VALUES('서현승', 28);

SELECT * FROM user WHERE address IS NULL;
SELECT name, address FROM user WHERE address IS NOT NULL;

-- 논리 연산자: AND, OR, NOT
-- 주소가 NULL이 아니면서 age가 25보다 큰 전체 속성 검색
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;
SELECT * FROM user WHERE address IS NOT NULL OR age > 25;

-- 이씨 이면서 나이가 22살인 사람 (이름 속성만 출력)
SELECT name FROM user WHERE name LIKE '이%' AND age = 22;
-- DISTINCT (중복 튜플 제거)
SELECT DISTINCT age FROM user;

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
SELECT id, name FROM user WHERE birthday LIKE '1990%';
SELECT * FROM user WHERE birthday LIKE '%06%' ORDER BY birthday;
SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '1970%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';