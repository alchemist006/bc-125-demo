package com.bootcamp.checkr.candidateservice.service.serviceimpl;

import com.bootcamp.checkr.candidateservice.dto.CandidateInfoDto;
import com.bootcamp.checkr.candidateservice.entity.CandidateInfo;
import com.bootcamp.checkr.candidateservice.repository.CandidateInfoRepo;
import com.bootcamp.checkr.candidateservice.service.CandidateInfoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import java.util.Optional;


@Service
@Slf4j
public class CandidateInfoServiceImpl implements CandidateInfoService {

    private final CandidateInfoRepo candidateInfoRepo;
    private final ModelMapper modelMapper;

    @Autowired
    public CandidateInfoServiceImpl(CandidateInfoRepo candidateInfoRepo, ModelMapper modelMapper) {
        this.candidateInfoRepo = candidateInfoRepo;
        this.modelMapper = modelMapper;
    }


    @Override
    public CandidateInfoDto getCandidateInfoByCandidateId(int candidateId) {
        log.info("Fetching candidate info by candidate ID: {}", candidateId);
        Optional<CandidateInfo> candidateInfo = candidateInfoRepo.findByCandidateId(candidateId);
        return modelMapper.map(candidateInfo, CandidateInfoDto.class);
    }
}

