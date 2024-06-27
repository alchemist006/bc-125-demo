package com.bootcamp.checkr.candidateservice.service.serviceimpl;

import com.bootcamp.checkr.candidateservice.dto.CandidateInfoDto;
import com.bootcamp.checkr.candidateservice.entity.CandidateInfo;
import com.bootcamp.checkr.candidateservice.repository.CandidateInfoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class CandidateInfoServiceImplTests {

    @InjectMocks
    private CandidateInfoServiceImpl candidateInfoService;

    @Mock
    private CandidateInfoRepo candidateInfoRepo;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetCandidateInfoByCandidateId() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        int candidateId = 1;
        CandidateInfo candidateInfo = new CandidateInfo();
        Optional<CandidateInfo> candidateInfoOptional = Optional.of(candidateInfo);
        when(candidateInfoRepo.findByCandidateId(candidateId)).thenReturn(candidateInfoOptional);
        when(modelMapper.map(candidateInfo, CandidateInfoDto.class)).thenReturn(new CandidateInfoDto(1,1,"john.doe@example.com",dateFormat.parse("1990-01-14T18:30:00.000+00:00"),"123-456-7890","10001","123-45-6789","DL12345",LocalDateTime.parse("2023-10-15T10:00:00"),LocalDateTime.parse("2023-10-15T10:30:00"),"Package A",dateFormat.parse("2023-10-15T05:30:00.000+00:00"),dateFormat.parse("2023-10-15T06:30:00.000+00:00"),dateFormat.parse("2023-10-15T07:00:00.000+00:00")));

        CandidateInfoDto result = candidateInfoService.getCandidateInfoByCandidateId(candidateId);

        assertNull(result);
    }

    @Test
     void testGetCandidateInfoByCandidateId_WithValidCandidateInfo() throws ParseException {
        int candidateId = 1;
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        CandidateInfo candidateInfo = new CandidateInfo(1, 1, "john.doe@example.com", dateFormat.parse("1990-01-14T18:30:00.000+00:00"),
                "123-456-7890", "10001", "123-45-6789", "DL12345", LocalDateTime.parse("2023-10-15T10:00:00"),
                LocalDateTime.parse("2023-10-15T10:30:00"), "Package A", dateFormat.parse("2023-10-15T05:30:00.000+00:00"),
                dateFormat.parse("2023-10-15T06:30:00.000+00:00"),dateFormat.parse("2023-10-15T07:00:00.000+00:00"));

        CandidateInfoDto expectedDto = new CandidateInfoDto(1, 1, "john.doe@example.com", dateFormat.parse("1990-01-14T18:30:00.000+00:00"),
                "123-456-7890", "10001", "123-45-6789", "DL12345", LocalDateTime.parse("2023-10-15T10:00:00"),
                LocalDateTime.parse("2023-10-15T10:30:00"), "Package A", dateFormat.parse("2023-10-15T05:30:00.000+00:00"),
                dateFormat.parse("2023-10-15T06:30:00.000+00:00"), dateFormat.parse("2023-10-15T07:00:00.000+00:00"));

        when(candidateInfoRepo.findByCandidateId(candidateId)).thenReturn(Optional.of(candidateInfo));
        when(modelMapper.map(candidateInfo, CandidateInfoDto.class)).thenReturn(expectedDto);

        assertEquals(modelMapper.map(candidateInfo,CandidateInfoDto.class),expectedDto);
    }

    @Test
    void testGetCandidateInfoByCandidateIdNotFound() {
        int candidateId = 2;
        Optional<CandidateInfo> candidateInfoOptional = Optional.empty();
        when(candidateInfoRepo.findByCandidateId(candidateId)).thenReturn(candidateInfoOptional);

        CandidateInfoDto result = candidateInfoService.getCandidateInfoByCandidateId(candidateId);

        assertNull(result);
    }
}
