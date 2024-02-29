package com.example.demooo.storge;

import com.example.demooo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;


public interface jewelryRepository extends JpaRepository<Users,Long> {
}
