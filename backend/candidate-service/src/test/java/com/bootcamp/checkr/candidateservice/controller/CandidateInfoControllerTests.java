package com.bootcamp.checkr.candidateservice.controller;

import com.bootcamp.checkr.candidateservice.dto.CandidateInfoDto;
import com.bootcamp.checkr.candidateservice.service.CandidateInfoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@SpringBootTest
class CandidateInfoControllerTests {

    @InjectMocks
    private CandidateInfoController candidateInfoController;

    @Mock
    private CandidateInfoService candidateInfoService;

    private CandidateInfoDto sampleCandidateInfo;

    @BeforeEach
    public void setUp() {
        sampleCandidateInfo = new CandidateInfoDto(
                1, 1, "john.doe@example.com", new Date(), "123-456-7890", "12345",
                "SSN123456", "DL123456", LocalDateTime.now(), LocalDateTime.now(),
                "Package A", new Date(), new Date(), new Date()
        );
    }

    @Test
    void testGetCandidateInfoByCandidateId() {
        when(candidateInfoService.getCandidateInfoByCandidateId(1)).thenReturn(sampleCandidateInfo);
        ResponseEntity<CandidateInfoDto> response = candidateInfoController.getCandidateInfoByCandidateId(1);
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(sampleCandidateInfo, response.getBody());
    }

    @Test
    void testGetCandidateInfoByCandidateIdNotFound() {
        when(candidateInfoService.getCandidateInfoByCandidateId(99)).thenReturn(null);
        ResponseEntity<CandidateInfoDto> response = candidateInfoController.getCandidateInfoByCandidateId(99);
        assertNotNull(response);
        assertEquals(NOT_FOUND, response.getStatusCode());
    }


}
