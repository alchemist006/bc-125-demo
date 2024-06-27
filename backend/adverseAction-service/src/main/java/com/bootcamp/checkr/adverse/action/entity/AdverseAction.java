package com.bootcamp.checkr.adverse.action.entity;

import com.bootcamp.checkr.adverse.action.enums.AdverseActionStatus;
import com.bootcamp.checkr.adverse.action.utils.AppConstants;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "adverse_action")
public class AdverseAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = AppConstants.ID)
    private Integer id;

    @Column(name = AppConstants.NAME, nullable = false)
    private String name;

    @Column(name = AppConstants.ACTION_STATUS, nullable = false)
    @Enumerated(EnumType.STRING)
    private AdverseActionStatus actionStatus;

    @Column(name = AppConstants.PRE_NOTICE_DATE, nullable = false)
    private Date preNoticeDate;

    @Column(name = AppConstants.POST_NOTICE_DATE, nullable = false)
    private Date postNoticeDate;

    @CreatedDate
    @Column(name = AppConstants.CREATED_AT)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = AppConstants.UPDATED_AT)
    private LocalDateTime updatedAt;

    @Column(name = AppConstants.CANDIDATE_ID, nullable = false)
    private Integer candidateId;

}
