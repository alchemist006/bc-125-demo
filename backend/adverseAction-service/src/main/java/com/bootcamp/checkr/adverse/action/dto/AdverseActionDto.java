package com.bootcamp.checkr.adverse.action.dto;

import com.bootcamp.checkr.adverse.action.enums.AdverseActionStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActionDto {
    private Integer id;
    private String name;
    private AdverseActionStatus actionStatus;
    private Date preNoticeDate;
    private Date postNoticeDate;
    private Integer candidateId;
}
