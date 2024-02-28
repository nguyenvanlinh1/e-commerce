package com.nvl.ecommerce_backend.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nvl.ecommerce_backend.Model.Category;
import com.nvl.ecommerce_backend.Model.Product;
import com.nvl.ecommerce_backend.exception.ProductException;
import com.nvl.ecommerce_backend.repository.CategoryPepository;
import com.nvl.ecommerce_backend.repository.ProductRepository;
import com.nvl.ecommerce_backend.request.CreateProductRequest;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepository productRepository;
    private CategoryPepository categoryPepository;


    public ProductServiceImpl(ProductRepository productRepository,
            CategoryPepository categoryPepository) {
        this.productRepository = productRepository;
        this.categoryPepository = categoryPepository;
    }

    @Override
    public Product createProduct(CreateProductRequest req) {
        
        Category topLevel = categoryPepository.findByName(req.getTopLavelCategory());
        if(topLevel == null){
            Category topLavelCategory = new Category();
            topLavelCategory.setName((req.getTopLavelCategory()));
            topLavelCategory.setLevel(1);
            topLevel = categoryPepository.save(topLavelCategory);
        }

        Category secondLevel = categoryPepository.findByNameAndParant(req.getSecondLavelCategory(), topLevel.getName());
        if(secondLevel == null){
            Category secondLavelCategory = new Category();
            secondLavelCategory.setName((req.getSecondLavelCategory()));
            secondLavelCategory.setParentCategory(topLevel);
            secondLavelCategory.setLevel(2);
            secondLevel = categoryPepository.save(secondLavelCategory);
        }


        Category thirdLevel = categoryPepository.findByNameAndParant(req.getThirdLavelCategory(), secondLevel.getName());
        if(thirdLevel == null){
            Category thirdLavelCategory = new Category();
            thirdLavelCategory.setName((req.getThirdLavelCategory()));
            thirdLavelCategory.setParentCategory(secondLevel);
            thirdLavelCategory.setLevel(3);
            thirdLevel = categoryPepository.save(thirdLavelCategory);
        }

        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPersent(req.getDiscountPersent());
        product.setImageUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setSizes(req.getSize());
        product.setQuantity(req.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        return productRepository.save(product);
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        
        Product product = findProductById(productId);

        product.getSizes().clear();
        productRepository.delete(product);
        return "Product deleted Successfully";
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {
        
        Product product = findProductById(productId);
        if(req.getQuantity() != 0){
            product.setQuantity(req.getQuantity());
        }

        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {

        Optional<Product> opt = productRepository.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new ProductException("Product not found with id -" + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
            Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List <Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
        if(!colors.isEmpty()){
            products = products.stream().filter(p -> colors.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor()))).collect(Collectors.toList());
        }

        if(stock != null){
            if(stock.equals("in_stock")){
                products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
            }
            else if(stock.equals("out_of_stock")){
                products = products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
            }
        }

        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
        List<Product> pageContent = products.subList(startIndex, endIndex);

        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());

        return filteredProducts;
    }

    @Override
    public Page<Product> findAllProducts(Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Product> products =  productRepository.findAll();
        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
        List<Product> pageContent = products.subList(startIndex, endIndex);

        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
        return filteredProducts;
    }
    
}
