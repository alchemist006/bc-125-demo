package com.bootcamp.checkr.candidateservice.service;

import com.bootcamp.checkr.candidateservice.dto.CandidateDto;
import java.util.List;

public interface CandidateService {
    List<CandidateDto> getAllCandidates();

    CandidateDto getCandidateById(int id);

    CandidateDto updateCandidate(int id, CandidateDto candidateDto);

}
