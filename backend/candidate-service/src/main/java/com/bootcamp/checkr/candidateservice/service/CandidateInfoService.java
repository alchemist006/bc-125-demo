package com.bootcamp.checkr.candidateservice.service;

import com.bootcamp.checkr.candidateservice.dto.CandidateInfoDto;

public interface CandidateInfoService {
    CandidateInfoDto getCandidateInfoByCandidateId(int candidateId);
}
