package com.bootcamp.checkr.adverse.action.utils;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;

class AppConstantsTests {

    @Test
    void testPrivateConstructor()
            throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Constructor<AppConstants> constructor = AppConstants.class.getDeclaredConstructor();
        assertTrue(Modifier.isPrivate(constructor.getModifiers()));
    }

    @Test
    void testBaseUrl() {
        assertThat(AppConstants.BASE_URL).isEqualTo("/api/v1/adverse-actions");
    }

    @Test
    void testId() {
        assertThat(AppConstants.ID).isEqualTo("id");
    }

    @Test
    void testName() {
        assertThat(AppConstants.NAME).isEqualTo("name");
    }

    @Test
    void testStatus() {
        assertThat(AppConstants.ACTION_STATUS).isEqualTo("actionStatus");
    }

    @Test
    void testPreNoticeDate() {
        assertThat(AppConstants.PRE_NOTICE_DATE).isEqualTo("preNoticeDate");
    }

    @Test
    void testPostNoticeDate() {
        assertThat(AppConstants.POST_NOTICE_DATE).isEqualTo("postNoticeDate");
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