package com.example.demooo.repository;

import com.example.demooo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface userRepository extends JpaRepository<Users,Long> {
}