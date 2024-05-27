package lecture.spring_boot_mybatis.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Builder
public class Nb {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
}
