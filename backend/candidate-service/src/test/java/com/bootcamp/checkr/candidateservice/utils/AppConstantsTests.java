package com.bootcamp.checkr.candidateservice.utils;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AppConstantsTests {

    @Test
    void testBaseUrlConstant() {
        assertEquals("/api/v1/candidates", AppContants.BASE_URL);
    }

    @Test
    void testCandidateIdConstant() {
        assertEquals("/{id}", AppContants.CANDIDATE_ID);
    }

    @Test
    void testCandidateInfoConstant() {
        assertEquals("/{candidateId}/candidate-info", AppContants.CANDIDATE_INFO);
    }
}
