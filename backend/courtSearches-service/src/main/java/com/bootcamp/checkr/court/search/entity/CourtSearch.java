package com.bootcamp.checkr.court.search.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import lombok.Setter;
import lombok.Getter;
import java.time.LocalDateTime;
import java.util.Date;

import com.bootcamp.checkr.court.search.utils.AppConstants;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = AppConstants.COURT_SEARCH_TABLE)
@Getter
@Setter
public class CourtSearch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = AppConstants.ID)
    private Integer id;

    @Column(name = AppConstants.SEARCH,nullable = false)
    private String search;

    @Column(name = AppConstants.STATUS,nullable = false)
    private String status;

    @Column(name = AppConstants.EVENT_DATE,nullable = false)
    private Date eventDate;

    @Column(name = AppConstants.CREATED_AT)
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = AppConstants.UPDATED_AT)
    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Column(name=AppConstants.CANDIDATE_ID,nullable = false)
    private Integer candidateId;
}
