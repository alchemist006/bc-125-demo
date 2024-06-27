package com.bootcamp.checkr.adverse.action.repository;

import com.bootcamp.checkr.adverse.action.entity.AdverseAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdverseActionRepository extends JpaRepository<AdverseAction, Integer> {

}
