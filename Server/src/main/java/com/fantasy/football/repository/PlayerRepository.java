package com.fantasy.football.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fantasy.football.domain.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
	boolean existsByName(String playereName);

	@Override
	List<Player> findAll();

	Player findByName(String name);

}
