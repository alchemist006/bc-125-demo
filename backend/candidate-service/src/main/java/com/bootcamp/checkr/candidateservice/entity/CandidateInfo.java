package com.bootcamp.checkr.candidateservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "candidate_info")
public class CandidateInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "candidate_id")
    private int candidateId;

    @Column
    private String email;

    @Column
    private Date dob;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column
    private String zipcode;

    @Column(name = "social_security")
    private String socialSecurity;

    @Column(name = "driver_license")
    private String driverLicense;

    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Column(name = "package")
    private String packageType;

    @Column(name = "report_created_at")
    private Date reportCreatedAt;

    @Column(name = "report_completion_date")
    private Date reportCompletionDate;

    @Column(name = "turn_around_time")
    private Date turnaroundTime;

}
