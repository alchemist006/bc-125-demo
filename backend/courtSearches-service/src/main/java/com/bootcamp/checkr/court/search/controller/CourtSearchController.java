package com.bootcamp.checkr.court.search.controller;

import com.bootcamp.checkr.court.search.dto.CourtSearchDto;
import com.bootcamp.checkr.court.search.utils.AppConstants;
import com.bootcamp.checkr.court.search.service.CourtSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;
import java.util.List;


@RestController
@RequestMapping(AppConstants.BASE_URL)
@Slf4j
public class CourtSearchController {

    private final CourtSearchService courtSearchService;

    @Autowired
    CourtSearchController(CourtSearchService courtSearchService) {
        this.courtSearchService = courtSearchService;
    }

    @GetMapping
    public List<CourtSearchDto> getAllCourtSearches(){
        log.info("Fetching all court searches.");
        return courtSearchService.getAllCourtSearches();
    }

    @GetMapping(AppConstants.CANDIDATE_ID_URL)
    public ResponseEntity<List<CourtSearchDto>> getAllCourtSearchesOfCandidate(@PathVariable Integer candidateId){
        log.info("Fetching court searches for Candidate ID: {}", candidateId);
        List<CourtSearchDto> courtSearches = courtSearchService.getAllCourtSearchesByCandidateId(candidateId);
        if (courtSearches.isEmpty()){
            log.warn("No court searches found for Candidate ID: {}", candidateId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(courtSearches);
        }
        return ResponseEntity.ok(courtSearches);
    }
}