package com.bootcamp.checkr.adverse.action.controller;

import com.bootcamp.checkr.adverse.action.dto.AdverseActionDto;
import com.bootcamp.checkr.adverse.action.service.AdverseActionService;
import com.bootcamp.checkr.adverse.action.utils.AppConstants;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

@WebMvcTest(AdverseActionController.class)
class AdverseActionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdverseActionService adverseActionService;

    @Test
    void testGetAllAdverseActions() throws Exception {
       List<AdverseActionDto> expected=new ArrayList<>(List.of(new AdverseActionDto(),new AdverseActionDto()));
       Mockito.when(adverseActionService.getAllAdverseActions()).thenReturn(expected);

       mockMvc.perform(MockMvcRequestBuilders.get(AppConstants.BASE_URL))
               .andExpect(MockMvcResultMatchers.status().isOk())
               .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(expected.size())));

       Mockito.verify(adverseActionService,Mockito.times(1)).getAllAdverseActions();
    }
}