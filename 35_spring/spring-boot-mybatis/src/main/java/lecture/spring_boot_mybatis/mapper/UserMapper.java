package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // Spring 에게 해당 interface 가 매퍼 역할을 하는 interface 임을 알림.
public interface UserMapper {
    List<User> retrieveAll(); // 메소드명(retrieveAll)이 XML 파일의 id 와 같아야 함

    // ver1. xml 과 매핑
    // void insertUser(UserCreateDTO user);

    // ver2. 여기서 sql 작성
    @Insert("INSERT INTO user(name, nickname) VALUES (#{name}, #{nickname})")
    void insertUser(UserCreateDTO user);

    void updateUser(User user);

//    @Delete("DELETE FROM user WHERE id=#{id}")
    void deleteUser(int id);
}
