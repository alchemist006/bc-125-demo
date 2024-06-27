package com.bootcamp.checkr.candidateservice.controller;

import com.bootcamp.checkr.candidateservice.dto.CandidateDto;
import com.bootcamp.checkr.candidateservice.enums.AdjudicationType;
import com.bootcamp.checkr.candidateservice.enums.Status;
import com.bootcamp.checkr.candidateservice.service.CandidateService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@SpringBootTest
class CandidateControllerTests {

    @InjectMocks
    private CandidateController candidateController;

    @Mock
    private CandidateService candidateService;

    private CandidateDto sampleCandidate;

    @BeforeEach
    public void setUp() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        sampleCandidate = new CandidateDto(1, "John Doe", AdjudicationType.ENGAGE , Status.CLEAR, "Location", dateFormat.parse("2023-10-15T18:30:00.000+00:00"));
    }


    @Test
    void testGetAllCandidates() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        List<CandidateDto> candidates = Arrays.asList(sampleCandidate, new CandidateDto(2, "Alice Smith", AdjudicationType.ENGAGE, Status.CLEAR, "Location", dateFormat.parse("2023-10-15T18:30:00.000+00:00")));
        when(candidateService.getAllCandidates()).thenReturn(candidates);
        ResponseEntity<List<CandidateDto> > response = candidateController.getAllCandidates();
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(candidates, response.getBody());
    }

    @Test
    void testGetCandidateById() {
        when(candidateService.getCandidateById(1)).thenReturn(sampleCandidate);
        ResponseEntity<CandidateDto> response = candidateController.getCandidateById(1);
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(sampleCandidate, response.getBody());
    }

    @Test
    void testGetCandidateByIdNotFound() {
        when(candidateService.getCandidateById(99)).thenReturn(null);
        ResponseEntity<CandidateDto> response = candidateController.getCandidateById(99);
        assertNotNull(response);
        assertEquals(NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testUpdateCandidate() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        CandidateDto updatedCandidate = new CandidateDto(1, "John Doe", AdjudicationType.ENGAGE, Status.CLEAR, "Location", dateFormat.parse("2023-10-15T18:30:00.000+00:00"));
        when(candidateService.updateCandidate(1, updatedCandidate)).thenReturn(updatedCandidate);
        ResponseEntity<CandidateDto> response = candidateController.updateCandidate(1, updatedCandidate);
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedCandidate, response.getBody());
    }

    @Test
    void testUpdateCandidateNotFound() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        CandidateDto updatedCandidate = new CandidateDto(1, "John Doe", AdjudicationType.ENGAGE, Status.CLEAR, "Location", dateFormat.parse("2023-10-15T18:30:00.000+00:00"));
        when(candidateService.updateCandidate(99, updatedCandidate)).thenReturn(null);
        ResponseEntity<CandidateDto> response = candidateController.updateCandidate(99, updatedCandidate);
        assertNotNull(response);
        assertEquals(NOT_FOUND, response.getStatusCode());
    }
}
