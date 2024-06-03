package lecture.spring_boot_mybatis.service;


import lecture.spring_boot_mybatis.domain.Nb;
import lecture.spring_boot_mybatis.dto.NbCreateDTO;
import lecture.spring_boot_mybatis.dto.NbDTO;
import lecture.spring_boot_mybatis.mapper.NbMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NbService {
    @Autowired
    private NbMapper nbMapper;
    public List<NbDTO> getNbList() {
        List<Nb> result = nbMapper.retrieveAll();
        List<NbDTO> nbs = new ArrayList<>();

        for(int i = 0; i < result.size(); i++) {
            // Setter 이용한 version
//            NbDTO nbDTO = new NbDTO();
//            nbDTO.setNo(result.get(i).getWriter() + (i+1));
//            nbDTO.setId(result.get(i).getId());
//            nbDTO.setTitle(result.get(i).getTitle());
//            nbDTO.setWriter(result.get(i).getWriter());
//            nbDTO.setRegistered(result.get(i).getRegistered());

            // Builder 패턴 이용한 version
            NbDTO nb = NbDTO.builder()
                    .no(result.get(i).getWriter() + (i+1))
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .build();

            nbs.add(nb); // nbs.add(nbDTO)
        }

        return nbs;
    }

    public List<NbDTO> getNbSearchList(String q) {
        List<Nb> result = nbMapper.search(q);
        List<NbDTO> nbs = new ArrayList<>();

        for(int i = 0; i < result.size(); i++) {
            // Builder 패턴 이용한 version
            NbDTO nb = NbDTO.builder()
                    .no(result.get(i).getWriter() + (i+1))
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .build();
            nbs.add(nb); // nbs.add(nbDTO)
        }
        return nbs;
    }

    public void insertNb(NbCreateDTO nb) {nbMapper.insertNb(nb);}

    public void updateNb(int id, NbCreateDTO nb) {
        Nb updateNb = Nb.builder()
                .id(id)
                .title(nb.getTitle())
                .content(nb.getContent())
                .writer(nb.getWriter())
                .build();
        nbMapper.updateNb(updateNb);
    }

    public void deleteNb(int id) {
        nbMapper.deleteNb(id);
    }
}
