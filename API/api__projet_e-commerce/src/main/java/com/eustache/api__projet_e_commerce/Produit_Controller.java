/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.eustache.api__projet_e_commerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.persistence.*;
/**
 *
 * @author congo
 */
@Controller
@RequestMapping("/info_produit/produits")
@CrossOrigin(origins = "*")
public class Produit_Controller {
    @Autowired
    private Repository_Produit repository_Prodduit;
    @PostMapping
    public Produit add_produit(@RequestBody Produit produit){
        return repository_Prodduit.save(produit);
    }
    
}
