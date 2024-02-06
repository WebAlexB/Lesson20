class Recipe {
    constructor(name, list_ingredients, description_preparation, hour_preparation) {
        this.name = name;
        this.list_ingredients = list_ingredients;
        this.description_preparation = description_preparation;
        this.hour_preparation = hour_preparation;
    }

    isValid() {
        return !!(this.name && this.list_ingredients && this.description_preparation && this.hour_preparation);
    }
}

class RecipeBook {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        if (recipe instanceof Recipe && recipe.isValid()) {
            this.recipes.push(recipe);
        }
    }

    findRecipesByTime(time) {
        return this.recipes.filter(recipe => recipe.hour_preparation <= time);
    }

    findRecipesByIngredients(ingredients) {
        return this.recipes.filter(recipe => ingredients.every(ingredient => recipe.list_ingredients.includes(ingredient)));
    }
}




function displayRecipes(recipeNames, message) {
    console.log(`${message}: ${recipeNames.join(', ')}!`);
}

function resultRecipe() {
    const recipeBook = new RecipeBook();

    const recipes = [
        new Recipe("Pasta Carbonara", ["pasta", "bacon", "egg", "parmesan cheese", "black pepper"], "Cook pasta, fry bacon, mix with eggs, cheese, and pepper", 30),
        new Recipe("Beef Stew", ["beef", "onion", "carrot", "potato", "tomato", "garlic", "beef broth"], "Brown beef, sauté onion and garlic, add vegetables and broth, simmer", 60),
        new Recipe("Chocolate Cake", ["flour", "sugar", "cocoa powder", "butter", "egg", "milk", "vanilla extract"], "Mix dry ingredients, beat wet ingredients, combine and bake", 120),
        new Recipe("Salad", ["lettuce", "tomato", "cucumber", "olive oil"], "Chop all vegetables, mix with olive oil", 15),
        new Recipe("Chicken Soup", ["chicken", "onion", "celery", "garlic", "thyme", "bay leaf", "chicken broth"], "Simmer all ingredients in broth until chicken is cooked", 45),
        new Recipe("Potato Pancakes", ["potato", "flour", "egg", "onion", "salt", "pepper"], "Grate potato and onion, mix with flour, egg, salt and pepper, fry until golden brown", 25),
        new Recipe("Carrot Cake", ["flour", "sugar", "carrot", "walnut", "oil", "egg", "baking powder", "cinnamon"], "Grate carrot, mix with dry ingredients, add oil, eggs and nuts, bake", 50),
        new Recipe("Invalid Recipe", [], "", 0)
    ];
    recipes.forEach(recipe => recipeBook.addRecipe(recipe));

    const recipesByTime = recipeBook.findRecipesByTime(60);
    const recipeNamesByTime = recipesByTime.map(recipe => recipe.name);
    displayRecipes(recipeNamesByTime, "Recipes with preparation time less than or equal to 60 minutes");

    const recipesByIngredients = recipeBook.findRecipesByIngredients(["potato", "carrot"]);
    const recipeNamesByIngredients = recipesByIngredients.map(recipe => recipe.name);
    displayRecipes(recipeNamesByIngredients, "Recipes containing potatoes and carrots");
}

resultRecipe();

