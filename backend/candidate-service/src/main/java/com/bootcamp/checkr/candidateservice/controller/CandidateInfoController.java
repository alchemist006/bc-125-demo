package com.bootcamp.checkr.candidateservice.controller;

import com.bootcamp.checkr.candidateservice.dto.CandidateInfoDto;
import com.bootcamp.checkr.candidateservice.service.CandidateInfoService;
import com.bootcamp.checkr.candidateservice.utils.AppContants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(AppContants.BASE_URL)
@Slf4j
public class CandidateInfoController {

    private final CandidateInfoService candidateInfoService;

    @Autowired
    public CandidateInfoController(CandidateInfoService candidateInfoService) {
        this.candidateInfoService = candidateInfoService;
    }

    @GetMapping(AppContants.CANDIDATE_INFO)
    public ResponseEntity<CandidateInfoDto> getCandidateInfoByCandidateId(@PathVariable int candidateId) {
        log.info("Fetching candidate info for Candidate ID: {}", candidateId);
        CandidateInfoDto candidateInfo = candidateInfoService.getCandidateInfoByCandidateId(candidateId);
        if (candidateInfo != null) {
            return ResponseEntity.ok(candidateInfo);
        }else{
            log.warn("Candidate info not found for Candidate ID: {}", candidateId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
