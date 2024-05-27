package lecture.spring_boot_mybatis.domain;

import lombok.Getter;
import lombok.Setter;

/*
*   domain 의 필드는 DB의 테이블의 구조(컬럼들)과 동일하게 구성되어야 한다. (== sequelizer model)
* */

@Getter
@Setter
public class User {
    private int id;
    private String name;
    private String nickname;

}
