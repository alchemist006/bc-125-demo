package com.bootcamp.checkr.candidateservice.entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import com.bootcamp.checkr.candidateservice.enums.AdjudicationType;
import com.bootcamp.checkr.candidateservice.enums.Status;
import jakarta.persistence.*;


import java.util.Date;

@Entity
@Table(name = "candidate")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Candidate {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AdjudicationType adjudication;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private Date eventDate;

}
