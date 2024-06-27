package com.bootcamp.checkr.court.search.utils;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class AppConstantsTests {

    @Test
    void testCandidateIdUrl() {
        assertThat(AppConstants.CANDIDATE_ID_URL).isEqualTo("/candidates/{candidateId}");
    }

    @Test
    void testBaseUrl() {
        assertThat(AppConstants.BASE_URL).isEqualTo("/api/v1/court-searches");
    }

    @Test
    void testCourtSearch() {
        assertThat(AppConstants.COURT_SEARCH_TABLE).isEqualTo("court_search");
    }

    @Test
    void testId() {
        assertThat(AppConstants.ID).isEqualTo("id");
    }

    @Test
    void testSearch() {
        assertThat(AppConstants.SEARCH).isEqualTo("search");
    }

    @Test
    void testStatus() {
        assertThat(AppConstants.STATUS).isEqualTo("status");
    }

    @Test
    void testEventDate() {
        assertThat(AppConstants.EVENT_DATE).isEqualTo("event_date");
    }

    @Test
    void testCreatedAt() {
        assertThat(AppConstants.CREATED_AT).isEqualTo("created_at");
    }

    @Test
    void testUpdatedAt() {
        assertThat(AppConstants.UPDATED_AT).isEqualTo("updated_at");
    }

    @Test
    void testCandidateId() {
        assertThat(AppConstants.CANDIDATE_ID).isEqualTo("candidate_id");
    }

}
