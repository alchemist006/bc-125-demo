package com.bootcamp.checkr.candidateservice.dto;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateInfoDto {
    private int id;
    private int candidateId;
    private String email;
    private Date dob;
    private String phoneNumber;
    private String zipcode;
    private String socialSecurity;
    private String driverLicense;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String packageType;
    private Date reportCreatedAt;
    private Date reportCompletionDate;
    private Date turnaroundTime;

}
