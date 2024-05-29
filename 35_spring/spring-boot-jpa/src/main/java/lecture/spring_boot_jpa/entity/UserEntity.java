package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity // 해당 클래스가 Entity 임을 명시
// 기본 생성자를 필요로 함.
@Table(name = "user") // user 라는 테이블과 해당 클래스를 매핑
@Getter
@Setter
@Builder // 전체 필드를 받는 생성자를 필요로 함.
@NoArgsConstructor
@AllArgsConstructor
// Entity 와 Builder 를 동시에 사용하게 될 경우, 해당 어노테이션이 필요로 하는 생성자들을 명시
public class UserEntity {
    @Id // PK primary ket 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 옵션
    private int id;

    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @Column(name = "nickname", nullable = false, length = 20)
    private String nickname;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL) // user 테이블 매핑, cascade 옵션 지정
    @JsonManagedReference
    private List<TodoEntity> todos; // 일 대 다 니까 List
}
