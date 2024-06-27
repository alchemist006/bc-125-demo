package com.bootcamp.checkr.candidateservice.repository;

import com.bootcamp.checkr.candidateservice.entity.CandidateInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface CandidateInfoRepo extends JpaRepository<CandidateInfo,Integer> {
    Optional<CandidateInfo> findByCandidateId(int candidateId);
}
