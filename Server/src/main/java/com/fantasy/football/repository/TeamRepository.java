package com.fantasy.football.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fantasy.football.domain.entity.Team;


@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
	boolean existsByName(String teamName);

	@Override
	List<Team> findAll();

	Team findByName(String name);

}