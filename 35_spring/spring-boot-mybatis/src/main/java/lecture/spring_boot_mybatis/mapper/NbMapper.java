package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.Nb;
import lecture.spring_boot_mybatis.dto.NbCreateDTO;
import lecture.spring_boot_mybatis.dto.NbDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NbMapper {
    List<Nb> retrieveAll();

    void insertNb(NbCreateDTO nb);

    void updateNb(Nb nb);

    void deleteNb(int id);
}
