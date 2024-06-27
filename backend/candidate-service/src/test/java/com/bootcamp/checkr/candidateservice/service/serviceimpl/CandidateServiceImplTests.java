package com.bootcamp.checkr.candidateservice.service.serviceimpl;

import com.bootcamp.checkr.candidateservice.dto.CandidateDto;
import com.bootcamp.checkr.candidateservice.entity.Candidate;
import com.bootcamp.checkr.candidateservice.enums.AdjudicationType;
import com.bootcamp.checkr.candidateservice.enums.Status;
import com.bootcamp.checkr.candidateservice.repository.CandidateRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class CandidateServiceImplTests {

    @InjectMocks
    private CandidateServiceImpl candidateService;

    @Mock
    private CandidateRepo candidateRepo;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllCandidates() {
        List<Candidate> candidateEntities = Arrays.asList(new Candidate(), new Candidate());
        when(candidateRepo.findAll()).thenReturn(candidateEntities);
        when(modelMapper.map(any(), eq(CandidateDto.class))).thenReturn(new CandidateDto());

        List<CandidateDto> result = candidateService.getAllCandidates();

        verify(candidateRepo).findAll();
        verify(modelMapper, times(candidateEntities.size())).map(any(), eq(CandidateDto.class));
        assertEquals(candidateEntities.size(), result.size());
    }

    @Test
    void testGetCandidateByIdNotFound() {
        int candidateId = 10;
        when(candidateRepo.findById(candidateId)).thenReturn(Optional.empty());
        CandidateDto result = candidateService.getCandidateById(candidateId);
        verify(candidateRepo).findById(candidateId);
        Assertions.assertNull(result);
    }
    @Test
    void testGetCandidateByIdFound() {
        int candidateId = 1;
        Candidate candidateEntity = new Candidate();
        Optional<Candidate> candidateOptional = Optional.of(candidateEntity);

        when(modelMapper.map(candidateEntity, CandidateDto.class)).thenReturn(new CandidateDto());

        when(candidateRepo.findById(candidateId)).thenReturn(candidateOptional);

        CandidateDto result = candidateService.getCandidateById(candidateId);

        verify(candidateRepo).findById(candidateId);

        Assertions.assertNull(result);
    }

    @Test
    void testUpdateCandidate() {
        int candidateId = 1;
        CandidateDto candidateDto = new CandidateDto();
        Candidate candidateEntity = new Candidate();
        Optional<Candidate> candidateOptional = Optional.of(candidateEntity);

        when(candidateRepo.findById(candidateId)).thenReturn(candidateOptional);

        when(candidateRepo.save(candidateEntity)).thenReturn(candidateEntity);

        when(modelMapper.map(candidateEntity, CandidateDto.class)).thenReturn(new CandidateDto());

        Optional<CandidateDto> result = Optional.ofNullable(candidateService.updateCandidate(candidateId, candidateDto));

        verify(candidateRepo).findById(candidateId);

        assertEquals(modelMapper.map(candidateEntity,CandidateDto.class), result.orElse(null));
    }
    @Test
     void testUpdateCandidate_CandidateNotFound() throws ParseException {
        int id = 10;
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        CandidateDto candidateDto = new CandidateDto(1, "John Doe", AdjudicationType.ENGAGE, Status.CLEAR, "Location", dateFormat.parse("2023-10-15T18:30:00.000+00:00"));

        when(candidateRepo.findById(id)).thenReturn(Optional.empty());

        CandidateDto result = candidateService.updateCandidate(id, candidateDto);

        Assertions.assertNull(result);
    }

}
