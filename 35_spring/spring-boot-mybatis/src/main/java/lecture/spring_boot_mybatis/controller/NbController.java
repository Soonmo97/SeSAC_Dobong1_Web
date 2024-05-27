package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.DefaultResDTO;
import lecture.spring_boot_mybatis.dto.NbCreateDTO;
import lecture.spring_boot_mybatis.dto.NbDTO;
import lecture.spring_boot_mybatis.service.NbService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/nb")
@Slf4j
public class NbController {

    @Autowired
    private NbService nbService;
    @GetMapping("")
    public String getNb(
            Model model
    ) {
        List<NbDTO> nbs = nbService.getNbList();
        model.addAttribute("nbs", nbs);
        return "nb";
    }

    @PostMapping("")
    @ResponseBody
    public DefaultResDTO insertNb(
            @RequestBody NbCreateDTO nb
            ) {
//        Map<String, Boolean> result = new HashMap<>();
        boolean result = false;
        String errMsg = null;
        try {
            nbService.insertNb(nb);
            result = true;
//            result.put("result", true);
        } catch (Exception e) {
            errMsg = e.getMessage();
            log.error("insert board err {}", e.getMessage());
//            result.put("result", false);
        }

        return DefaultResDTO.builder()
                .result(result)
                .errMsg(errMsg)
                .build();
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public DefaultResDTO updateNb(
            @PathVariable int id,
            @RequestBody NbCreateDTO nb
    ) {
        DefaultResDTO res = new DefaultResDTO();
        try {
            nbService.updateNb(id, nb);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setErrMsg(e.getMessage());
        }

        return res;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public DefaultResDTO deleteNb(@PathVariable int id) {
        DefaultResDTO res = new DefaultResDTO();
        try {
            nbService.deleteNb(id);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setErrMsg(e.getMessage());
        }
        return res;
    }
}
