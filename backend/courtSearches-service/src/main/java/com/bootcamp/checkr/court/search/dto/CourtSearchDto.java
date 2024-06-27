package com.bootcamp.checkr.court.search.dto;

import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourtSearchDto {
    private Integer id;
    private String search;
    private String status;
    private Date eventDate;
    private Integer candidateId;
}
