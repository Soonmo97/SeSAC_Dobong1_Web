package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

/*
* DTO 는 domain 과 달리 유동적으로 필요에 따라 필드(컬러)를 추가하거나 제외하여 사용한다.
* 실질적으로 서비스에서 사용되어 리턴시켜줄 클래스라고 보면 될 것 같다.
* ex) 보안을 위해 password 를 제외한 응답을 할 때
* */
@Getter
@Setter
public class UserDTO {
    private int id;
    private String name;
    private String nickname;
    private int no;
}
