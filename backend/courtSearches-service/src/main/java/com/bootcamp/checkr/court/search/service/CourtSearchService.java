package com.bootcamp.checkr.court.search.service;

import com.bootcamp.checkr.court.search.dto.CourtSearchDto;

import java.util.List;

public interface CourtSearchService {
    List<CourtSearchDto> getAllCourtSearches();
    List<CourtSearchDto> getAllCourtSearchesByCandidateId(Integer candidateId);
}