package com.nvl.ecommerce_backend.service;

import org.springframework.stereotype.Service;

import com.nvl.ecommerce_backend.Model.Cart;
import com.nvl.ecommerce_backend.Model.CartItem;
import com.nvl.ecommerce_backend.Model.Product;
import com.nvl.ecommerce_backend.Model.User;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.repository.CartRepository;
import com.nvl.ecommerce_backend.request.AddItemRequest;

@Service
public class CartServiceImpl implements CartService{

    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;


    
    public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemService,
            ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }

    @Override
    public Cart createCart(User user) {
        
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getProductId());
        
        CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userId);

        if(isPresent == null){
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setCart(cart);
            cartItem.setQuantity(req.getQuantity());
            cartItem.setUserId(userId);

            int price = req.getQuantity()*product.getDiscountedPrice();
            cartItem.setPrice(price);
            cartItem.setSize(req.getSize());

            CartItem createdCartItem = cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
        }

        return "Item Add To Cart";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;


        for(CartItem cartItem : cart.getCartItems()){
            totalPrice = totalPrice + cartItem.getPrice();
            totalDiscountedPrice = totalDiscountedPrice + cartItem.getDiscountedPrice();
            totalItem = totalItem + cartItem.getQuantity();
        }

        cart.setTotalPrice(totalPrice);
        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalItem(totalItem);
        cart.setDiscounte(totalPrice-totalDiscountedPrice);
        return cartRepository.save(cart);
    }
    
}
