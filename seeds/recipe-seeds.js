const { Recipe } = require("../models");

const recipeData = [
    {
        picture: "chicken.PNG",
        title: "Italian Chicken Cacciatore",
        instructions: "This wonderful, traditionally slow-cooked recipe has been translated into a quick and easy pressure cooker meal. Using the Instant Pot®, you get an intensely flavorful meal made in minutes that will have your family thinking you simmered this all day. Serve over spaghetti noodles, rice, cauliflower rice, or eat as a stew!",
        ingredients: "4 (6 ounce) bone-in chicken thighs, 2 tablespoons olive oil, 3 stalks celery, 1/2 onion, 1 (4 ounce) package sliced fresh mushrooms, 2 cloves garlic, 1 (14 ounce) can stewed tomatoes, 2 teaspoons herbes de Provence, 3/4 cup water, 1 pinch red pepper flakes (optional), 1 pinch ground black pepper to taste (optional)",
        user_id: 3,
    },
    {
        picture: "taquitos.PNG",
        title: "Vegan Air Fryer Taquitos",
        instructions: "Delicious taquitos made with mashed potatoes just like mom used to make. Only now they're vegan and none of the flavors are sacrificed! Serve with sides of non-dairy yogurt, Mexican tomato sauce, guacamole, or your choice of sides.",
        ingredients: "1 large russet potato, 1 teaspoon plant-based butter, 2 tablespoons diced onions, 1 clove garlic, 1/4 cup plant-based butter, 2 tablespoons unsweetened plain almond milk, salt and ground black pepper to taste, 6 corn tortillas, avocado oil cooking spray",
        user_id: 1,
    },
    {
        picture: "lamb.PNG",
        title: "Lamb Souvlaki",
        instructions: "Tender pieces of lamb, marinated in a Greek lemon vinaigrette, threaded on skewers and char-grilled to perfection. I like to serve these with rosemary garlic roasted potatoes, a Greek salad, and pita bread",
        ingredients: "1/3 cup olive oil, 1 1/2 tablespoons freshly squeezed lemon juice, 1 1/2 tablespoons red wine vinegar, 1 1/2 tablespoons chopped fresh oregano, 2 cloves garlic",
        user_id: 2,
    },
    {
        picture: "naan.PNG",
        title: "Two-Ingredient Naan",
        instructions: "While not a true naan bread, this sure works in a pinch",
        ingredients: "1 1/4 cups self-rising flour, or more as needed, 1 cup whole-milk Greek yogurt",
        user_id: 2,
    },
    {
        picture: "greekSalad.PNG",
        title: "My Big Fat Greek Salad",
        instructions: "You can't go wrong with this Greek salad, especially if you remember the only and most important tip: toss it with the vinegar first before adding olive oil. If you don't, it will not taste as good. Which reminds me, giving the amounts here is very difficult, since this really should be made to your tastes, so please use the ingredient list as a very rough outline.",
        ingredients: "2 large English cucumbers, 1 pinch kosher salt, 2 cups cherry tomatoes, 1/4 red onion, 1/2 red bell pepper, 1/2 cup pitted Kalamata olives, 1/2 cup pitted green olives, 2 tablespoons minced fresh oregano, salt and freshly ground black pepper to taste, 1 pinch cayenne pepper, 1/4 cup red wine vinegar, 1/3 cup olive oil, 1 (4 ounce) package feta cheese, 1 teaspoon minced fresh oregano",
        user_id: 3,
    },
    {
        picture: "potatoSoup.PNG",
        title: "Kartoffelsuppe nach Bayrischer Art (Bavarian Potato Soup)",
        instructions: "Packed with vegetables and sausages, this classic Bavarian-style potato soup is more of a main dish than a starter. In Germany the sausage of choice would be Regensburg sausage, a short and stubby parboiled pork sausage. It can be substituted with other boiling sausages made of pork",
         ingredients: "2 links pork sausage, 6 cups hot water, 3 tablespoons vegetable oil, or to taste, 1 teaspoon salt, 4 pounds potatoes, 1 teaspoon freshly ground black pepper, 4 carrots, 1 pinch dried marjoram, 2 onions, 1 pinch sweet paprika, 1 leek, 1 pinch ground nutmeg, 3 cloves garlic, 1 bunch fresh chives, 1 cube vegetable bouillon, 1/4 cup sour cream (optional)",
        user_id: 1,
    },
    {
        picture: "oysterShooter.PNG",
        title: "Japanese Oyster Shooters",
        instructions: "Impress guests with these exotic Japanese oyster shooters. Sweet and salty flavors come together for a taste explosion!",
        ingredients: "1/2 cup mirin (Japanese sweet wine), 12 fresh oysters, 3 tablespoons sake, 6 quail eggs, 2 tablespoons soy sauce, 3/4 teaspoon tobiko (flying fish roe), 1 tablespoon rice wine vinegar, 6 lemon wedges, 1 teaspoon wasabi powder",
        user_id: 4,
    },
    {
        picture: "butterCake.PNG",
        title: "French Butter Cakes (Madeleines)",
        instructions: "Sponge cake cookie--in shell shaped molds",
        ingredients: "2 eggs, 1/2 cup all-purpose flour, 3/4 teaspoon vanilla extract, 1 tablespoon lemon zest, 1/8 teaspoon salt, 1/4 cup butter, 1/3 cup white sugar, 1/3 cup granulated sugar for decoration",
        user_id: 4,
    },
    {
        picture: "Stroopwafels.PNG",
        title: "Stroopwafels with Treacle",
        instructions: "We all love stroopwafels with a cup of coffee or tea - it's a favorite Dutch treat. Try making them at home with this recipe!",
        ingredients: "4 cups all-purpose flour, 1 cup butter, 1 cup molasses or black treacle, 3/4 cup white sugar, 1 1/3 cups soft brown sugar, 1/4 cup lukewarm milk, 1/4 cup butter, 1 egg, 1 teaspoon ground cinnamon, 2 (.25 ounce) packages active dry yeast",
        user_id: 1,
    },
    {
        picture: "bibimbap.PNG",
        title: "Bibimbap (Korean Rice With Mixed Vegetables)",
        instructions: "Along with kimchi, bibimbap takes its place among the favored foods in Korean cuisine. Literally meaning 'mixed rice,' it's a popular meal consisting of white rice topped with vegetables, beef, a whole egg, and gochujang (red chili pepper paste). For those who cannot handle the spiciness (like our children), you can substitute with soy sauce or Sriracha (rooster sauce) in place of it.",
        ingredients: "1 English cucumber, 1 pound thinly-sliced beef top round steak, 1/4 cup gochujang (Korean hot pepper paste), 1 teaspoon olive oil, 1 bunch fresh spinach, 4 large eggs, 1 tablespoon soy sauce, 4 cups cooked white rice, 1 teaspoon olive oil, 4 teaspoons toasted sesame oil, 2 carrots, 1 teaspoon sesame seeds, 1 clove garlic, 2 teaspoons gochujang (Korean hot pepper paste), 1 pinch red pepper flakes",
        user_id: 2,
    },
    {
        picture: "seaBass.PNG",
        title: "Miso and Soy Chilean Sea Bass",
        instructions: "This Sea Bass will melt in your mouth! Delicious, I had this at Blue Water Grill in NYC and it was by far the best sea bass I've ever had in my life. This recipe is as close as I can get to tasting like the restaurants. They served it with bok choy and sticky rice on the side.",
        ingredients: "1/3 cup sake, 1/3 cup mirin (Japanese sweet rice wine), 3 tablespoons soy sauce, 1/4 cup packed brown sugar, 1/3 cup miso paste, 4 (4 ounce) fillets fresh sea bass, 2 tablespoons chopped green onion",
        user_id: 3,
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;