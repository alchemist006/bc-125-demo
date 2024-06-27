package com.bootcamp.checkr.candidateservice.service.serviceimpl;

import com.bootcamp.checkr.candidateservice.dto.CandidateDto;
import com.bootcamp.checkr.candidateservice.entity.Candidate;
import com.bootcamp.checkr.candidateservice.repository.CandidateRepo;
import com.bootcamp.checkr.candidateservice.service.CandidateService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class CandidateServiceImpl implements CandidateService {

    private final CandidateRepo candidateRepo;
    private final ModelMapper modelMapper;

    @Autowired
    public CandidateServiceImpl(CandidateRepo candidateRepo,ModelMapper modelMapper) {
        this.candidateRepo = candidateRepo;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CandidateDto> getAllCandidates() {
        log.info("Fetching all candidates in service.");
        List<Candidate> allCandidates = candidateRepo.findAll();
        return allCandidates.stream().map(candidate -> modelMapper.map(candidate,CandidateDto.class)).toList();
    }

    @Override
    public CandidateDto getCandidateById(int id) {
        log.info("Fetching candidate by ID: {}", id);
        return modelMapper.map(candidateRepo.findById(id),CandidateDto.class);
    }

    @Override
    public CandidateDto updateCandidate(int id, CandidateDto candidateDto) {
        log.info("Updating candidate with ID: {}", id);
        Optional<Candidate> candidateOptional = candidateRepo.findById(id);
        if (candidateOptional.isPresent()) {

            Candidate existingCandidate = candidateOptional.get();
            existingCandidate.setName(candidateDto.getName());
            existingCandidate.setAdjudication(candidateDto.getAdjudication());
            existingCandidate.setLocation(candidateDto.getLocation());
            existingCandidate.setStatus(candidateDto.getStatus());
            existingCandidate.setEventDate((candidateDto.getEventDate()));
            Candidate updatedCandidate = candidateRepo.save(existingCandidate);

            return modelMapper.map(updatedCandidate, CandidateDto.class);
        }
        return null;
    }

}
