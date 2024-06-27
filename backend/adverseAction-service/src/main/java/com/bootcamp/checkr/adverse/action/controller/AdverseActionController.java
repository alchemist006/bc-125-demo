package com.bootcamp.checkr.adverse.action.controller;

import com.bootcamp.checkr.adverse.action.dto.AdverseActionDto;
import com.bootcamp.checkr.adverse.action.service.AdverseActionService;
import com.bootcamp.checkr.adverse.action.utils.AppConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@RestController
@RequestMapping(AppConstants.BASE_URL)
@Slf4j
public class AdverseActionController {
    @Autowired
    private AdverseActionService adverseActionService;

    @GetMapping
    public ResponseEntity<List<AdverseActionDto>> getAllAdverseActions() {
        log.info("inside getAllAdverseActions() method of controller");
        return ResponseEntity.ok(adverseActionService.getAllAdverseActions());
    }
}
