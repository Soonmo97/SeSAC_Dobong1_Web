package lecture.springbootthymeleaf.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserVO {
    private String name;
    private String gender;
    private String year;
    private String month;
    private String day;
    private String interest;

}
