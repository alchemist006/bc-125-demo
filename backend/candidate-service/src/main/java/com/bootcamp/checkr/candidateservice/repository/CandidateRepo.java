package com.bootcamp.checkr.candidateservice.repository;

import com.bootcamp.checkr.candidateservice.entity.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepo extends JpaRepository<Candidate,Integer> {

}
