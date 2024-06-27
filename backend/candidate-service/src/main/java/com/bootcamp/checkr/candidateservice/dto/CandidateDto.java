package com.bootcamp.checkr.candidateservice.dto;

import com.bootcamp.checkr.candidateservice.enums.AdjudicationType;
import com.bootcamp.checkr.candidateservice.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CandidateDto {
    private int id;
    private String name;
    private AdjudicationType adjudication;
    private Status status;
    private String location;
    private Date eventDate;
}