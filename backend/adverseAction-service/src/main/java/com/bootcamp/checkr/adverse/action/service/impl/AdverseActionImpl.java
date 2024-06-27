package com.bootcamp.checkr.adverse.action.service.impl;

import com.bootcamp.checkr.adverse.action.service.AdverseActionService;
import com.bootcamp.checkr.adverse.action.dto.AdverseActionDto;
import com.bootcamp.checkr.adverse.action.entity.AdverseAction;
import com.bootcamp.checkr.adverse.action.exceptions.EntityNotFoundException;
import com.bootcamp.checkr.adverse.action.repository.AdverseActionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Service
@Slf4j
public class AdverseActionImpl implements AdverseActionService {
    @Autowired
    private AdverseActionRepository adverseActionRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<AdverseActionDto> getAllAdverseActions() {
        try {
            log.error("trying  to fetch the  all adverseActions");
            List<AdverseAction> list = adverseActionRepository.findAll();
            return list.stream()
                    .map(adverseAction -> modelMapper.map(adverseAction, AdverseActionDto.class))
                    .toList();
        } catch (Exception e) {
            log.error("unable to fetch the adverseActions");
            throw new EntityNotFoundException("An error occurred while fetching all the adverse-actions");
        }

    }
}
