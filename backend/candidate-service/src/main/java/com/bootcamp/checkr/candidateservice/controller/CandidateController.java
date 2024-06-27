package com.bootcamp.checkr.candidateservice.controller;


import com.bootcamp.checkr.candidateservice.dto.CandidateDto;
import com.bootcamp.checkr.candidateservice.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

import com.bootcamp.checkr.candidateservice.utils.AppContants;

@RestController
@RequestMapping(AppContants.BASE_URL)
@Slf4j
public class CandidateController {

    private final CandidateService candidateService;

    @Autowired
    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping
    public ResponseEntity<List<CandidateDto>> getAllCandidates() {
        log.info("Fetching all candidates.");
        List<CandidateDto> candidates = candidateService.getAllCandidates();
        return ResponseEntity.ok(candidates);
    }

    @GetMapping(AppContants.CANDIDATE_ID)
    public ResponseEntity<CandidateDto> getCandidateById(@PathVariable int id) {
        log.info("Fetching candidate by ID: {}", id);
        CandidateDto candidate = candidateService.getCandidateById(id);
        if (candidate != null) {
            return ResponseEntity.ok(candidate);
        } else {
            log.warn("Candidate with ID {} not found.", id);
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(AppContants.CANDIDATE_ID)
    public ResponseEntity<CandidateDto> updateCandidate(@PathVariable int id, @RequestBody CandidateDto candidateDto) {
        log.info("Updating candidate with ID: {}", id);
        CandidateDto updatedCandidate = candidateService.updateCandidate(id, candidateDto);
        if (updatedCandidate != null) {
            return ResponseEntity.ok(updatedCandidate);
        } else {
            log.warn("Candidate with ID {} not found for update.", id);
            return ResponseEntity.notFound().build();
        }
    }
}
