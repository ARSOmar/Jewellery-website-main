package com.example.demooo.entity;

public class products {
    private String Name;
    private String description;
    private double Price;

    public String getName() {
        return Name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return Price;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        Price = price;
    }

    @Override
    public String toString() {
        return "products{" +
                "Name='" + Name + '\'' +
                ", description='" + description + '\'' +
                ", Price=" + Price +
                '}';
    }

}
