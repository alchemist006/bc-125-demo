package com.bootcamp.checkr.court.search.service.serviceimpl;

import com.bootcamp.checkr.court.search.controller.CourtSearchController;
import com.bootcamp.checkr.court.search.dto.CourtSearchDto;
import com.bootcamp.checkr.court.search.entity.CourtSearch;
import com.bootcamp.checkr.court.search.repository.CourtSearchRepo;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@SpringBootTest
class CourtSearchesServiceImplTest {

    @InjectMocks
    private CourtSearchesServiceImpl courtSearchesService;

    @Mock
    private CourtSearchRepo courtSearchRepository;

    @Mock
    private ModelMapper modelMapper;

    @Test
    void testGetAllCourtSearches() {
        List<CourtSearch> courtSearchList = new ArrayList<>();
        when(courtSearchRepository.findAll()).thenReturn(courtSearchList);

        List<CourtSearchDto> courtSearchDtos = new ArrayList<>();
        when(modelMapper.map(Mockito.any(CourtSearch.class), eq(CourtSearchDto.class))).thenReturn(new CourtSearchDto());

        List<CourtSearchDto> result = courtSearchesService.getAllCourtSearches();
        assertEquals(courtSearchDtos, result);
    }

    @Test
    void testGetAllCourtSearchesByCandidateId() {
        int candidateId = 1;
        List<CourtSearch> courtSearchList = new ArrayList<>();
        when(courtSearchRepository.findAllByCandidateId(candidateId)).thenReturn(courtSearchList);

        List<CourtSearchDto> courtSearchDtos = new ArrayList<>();
        when(modelMapper.map(Mockito.any(CourtSearch.class), eq(CourtSearchDto.class)))
                .thenReturn(new CourtSearchDto());

        List<CourtSearchDto> result = courtSearchesService.getAllCourtSearchesByCandidateId(candidateId);
        assertEquals(courtSearchDtos, result);
    }
}
