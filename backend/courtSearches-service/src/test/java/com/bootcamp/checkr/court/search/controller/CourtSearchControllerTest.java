package com.bootcamp.checkr.court.search.controller;

import com.bootcamp.checkr.court.search.dto.CourtSearchDto;
import com.bootcamp.checkr.court.search.service.CourtSearchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CourtSearchControllerTest {

    @Mock
    private CourtSearchService courtSearchService;

    private CourtSearchController courtSearchController;

    @BeforeEach
    void setUp() {
        courtSearchService = Mockito.mock(CourtSearchService.class);
        courtSearchController = new CourtSearchController(courtSearchService);
    }

    @Test
    void testGetAllCourtSearches() {
        List<CourtSearchDto> courtSearches = new ArrayList<>();
        when(courtSearchService.getAllCourtSearches()).thenReturn(courtSearches);
        List<CourtSearchDto> result = courtSearchController.getAllCourtSearches();
        assertEquals(courtSearches, result);
    }

    @Test
    void testGetAllCourtSearchesOfCandidateWithNoResults() {
        when(courtSearchService.getAllCourtSearchesByCandidateId(10)).thenReturn(new ArrayList<>());

        ResponseEntity<List<CourtSearchDto>> response = courtSearchController.getAllCourtSearchesOfCandidate(10);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(new ArrayList<>(), response.getBody());
    }

    @Test
    void testGetAllCourtSearchesOfCandidateWithResults() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        List<CourtSearchDto> courtSearches = new ArrayList<>();
        courtSearches.add(new CourtSearchDto(6, "SSN Verification", "clear", dateFormat.parse("2022-02-21T18:30:00.000+00:00"), 1));
        courtSearches.add(new CourtSearchDto(7, "Sexual Offender", "clear", dateFormat.parse("2022-03-12T18:30:00.000+00:00"), 1));
        courtSearches.add(new CourtSearchDto(8, "Global Watchlist", "consider", dateFormat.parse("2022-02-06T18:30:00.000+00:00"), 1));
        courtSearches.add(new CourtSearchDto(9, "Federal Criminal", "clear", dateFormat.parse("2022-02-19T18:30:00.000+00:00"), 1));
        courtSearches.add(new CourtSearchDto(10, "County Criminal", "clear", dateFormat.parse("2022-05-18T18:30:00.000+00:00"), 1));
        when(courtSearchService.getAllCourtSearchesByCandidateId(1)).thenReturn(courtSearches);
        ResponseEntity<List<CourtSearchDto>> response = courtSearchController.getAllCourtSearchesOfCandidate(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(courtSearches, response.getBody());
    }
}
