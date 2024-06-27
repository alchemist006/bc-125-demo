package com.bootcamp.checkr.court.search.service.serviceimpl;

import com.bootcamp.checkr.court.search.dto.CourtSearchDto;
import com.bootcamp.checkr.court.search.entity.CourtSearch;
import com.bootcamp.checkr.court.search.repository.CourtSearchRepo;
import com.bootcamp.checkr.court.search.service.CourtSearchService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CourtSearchesServiceImpl implements CourtSearchService {

    @Autowired
    private CourtSearchRepo courtSearchRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CourtSearchDto> getAllCourtSearches() {
        log.info("Fetching all court searches.");
        List<CourtSearch> courtSearchList = courtSearchRepository.findAll();
        return courtSearchList.stream().map(courtSearch -> this.modelMapper.map(courtSearch,CourtSearchDto.class)).toList();
    }

    @Override
    public List<CourtSearchDto> getAllCourtSearchesByCandidateId(Integer candidateId) {
        log.info("Fetching court searches for Candidate ID: {}", candidateId);
        List<CourtSearch> courtSearchList = courtSearchRepository.findAllByCandidateId(candidateId);
        return courtSearchList.stream().map(courtSearch -> this.modelMapper.map(courtSearch,CourtSearchDto.class)).toList();
    }

}