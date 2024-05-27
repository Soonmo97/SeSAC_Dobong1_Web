package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NbCreateDTO {
    private String title;
    private String content;
    private String writer;
}
