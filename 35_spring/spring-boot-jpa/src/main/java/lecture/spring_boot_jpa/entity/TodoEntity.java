package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "todo")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false)
    @Builder.Default
    private boolean done = false;

    @ManyToOne // 다 대 일 (자식)
    @JoinColumn(name = "userId", nullable = false) // 컬럼 지정
    @JsonBackReference // User 와 TODO 사이의 순환참조를 발생하는 것을 방지
    private UserEntity user;
}
