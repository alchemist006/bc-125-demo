package com.bootcamp.checkr.court.search.repository;

import com.bootcamp.checkr.court.search.entity.CourtSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CourtSearchRepo extends JpaRepository<CourtSearch,Integer> {
    List<CourtSearch> findAllByCandidateId(Integer candidateId);
}