package com.fantasy.football.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fantasy.football.domain.entity.League;

@Repository
public interface LeagueRepository extends JpaRepository<League, Long> {
	boolean existsByName(String name);

	@Override
	List<League> findAll();

	League findByName(String name);
}
