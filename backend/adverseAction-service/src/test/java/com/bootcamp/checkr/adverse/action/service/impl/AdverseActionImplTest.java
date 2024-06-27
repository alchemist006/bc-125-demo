
package com.bootcamp.checkr.adverse.action.service.impl;

import com.bootcamp.checkr.adverse.action.dto.AdverseActionDto;
import com.bootcamp.checkr.adverse.action.entity.AdverseAction;
import com.bootcamp.checkr.adverse.action.enums.AdverseActionStatus;
import com.bootcamp.checkr.adverse.action.exceptions.EntityNotFoundException;
import com.bootcamp.checkr.adverse.action.repository.AdverseActionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class AdverseActionImplTest {

    @InjectMocks
    private AdverseActionImpl adverseActionImpl;

    @Mock
    private AdverseActionRepository actionRepository;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllAdverseActions() {
        AdverseAction adverseAction = new AdverseAction();
        adverseAction.setId(1);
        adverseAction.setName("Adverse Action 1");
        adverseAction.setActionStatus(AdverseActionStatus.CLEAR);
        adverseAction.setPreNoticeDate(new Date());
        adverseAction.setPostNoticeDate(new Date());
        adverseAction.setCreatedAt(LocalDateTime.now());
        adverseAction.setUpdatedAt(LocalDateTime.now());
        adverseAction.setCandidateId(1);

        Mockito.when(actionRepository.findAll()).thenReturn(List.of(adverseAction));
        List<AdverseActionDto> result = adverseActionImpl.getAllAdverseActions();
        assertNotNull(result);
        assertEquals(1, result.size());

    }

    @Test
    void testExceptionIsThrown() {
        Mockito.when(actionRepository.findAll()).thenThrow(new RuntimeException("An error occurred while fetching all the adverse-actions"));

        assertThrows(EntityNotFoundException.class, () -> {
            adverseActionImpl.getAllAdverseActions();
        });
    }
}