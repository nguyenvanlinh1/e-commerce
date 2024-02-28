package com.nvl.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nvl.ecommerce_backend.Model.Category;

public interface CategoryPepository extends JpaRepository<Category, Long>{
    
    public Category findByName(String name);

    @Query("Select c from Category c Where c.name = :name And c.parentCategory.name =:parentCategoryName")
    public Category findByNameAndParant(@Param("name") String name, 
        @Param("parentCategoryName") String parentCategoryName);
}
