package com.nvl.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nvl.ecommerce_backend.Model.Cart;
import com.nvl.ecommerce_backend.Model.CartItem;
import com.nvl.ecommerce_backend.Model.Product;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long>{
    
    @Query("Select ci From CartItem ci Where ci.cart = :cart And ci.product = :product And ci.size = :size And ci.userId = :userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("product") Product product, @Param("size") String size, @Param("userId") Long userId);
}
