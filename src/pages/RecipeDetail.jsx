import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Clock, TrendingUp } from 'lucide-react';

// Complete recipe database with all 30 recipes
const getRecipeById = (id) => {
  const recipes = [
    // Recipe 1
    {
      id: 1,
      name: 'Vanilla Almond Latte',
      protein: 0.5,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Hot',
      image: '☕',
      description: 'Smooth and creamy latte with vanilla and almond milk',
      servings: 1,
      ingredients: [
        { name: 'Almond milk (unsweetened)', amount: '1 cup', protein: 0.4 },
        { name: 'Decaf coffee or coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Vanilla extract', amount: '1/2 tsp', protein: 0 },
        { name: 'Stevia or sugar', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Heat almond milk in a small saucepan or microwave until warm (not boiling)',
        'Brew your decaf coffee or prepare coffee substitute',
        'Add vanilla extract and sweetener to the warm milk and stir',
        'Pour coffee into a mug',
        'Slowly add the vanilla almond milk mixture',
        'Optionally, froth the milk before adding for extra creaminess',
        'Enjoy immediately!'
      ],
      tips: [
        'For a stronger vanilla flavor, use vanilla bean paste instead of extract',
        'Try using flavored stevia for additional taste variations',
        'Can be served over ice for an iced version'
      ]
    },
    // Recipe 2
    {
      id: 2,
      name: 'Cinnamon Oat Milk Macchiato',
      protein: 0.8,
      prepTime: 7,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🫖',
      description: 'Layered macchiato with warming cinnamon spice',
      servings: 1,
      ingredients: [
        { name: 'Oat milk (low protein brand)', amount: '3/4 cup', protein: 0.7 },
        { name: 'Espresso substitute', amount: '1 shot', protein: 0 },
        { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
        { name: 'Honey or agave', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Heat oat milk until steaming',
        'Add cinnamon and sweetener to milk, whisk well',
        'Froth the spiced milk until foamy',
        'Prepare your espresso substitute',
        'Pour frothed milk into a glass',
        'Carefully pour espresso through the foam to create layers',
        'Dust with extra cinnamon on top'
      ],
      tips: [
        'Use a milk frother for best results',
        'Pour espresso slowly for distinct layers',
        'Experiment with nutmeg or cardamom for variety'
      ]
    },
    // Recipe 3
    {
      id: 3,
      name: 'Maple Pecan Latte',
      protein: 0.7,
      prepTime: 8,
      difficulty: 'Easy',
      type: 'Hot',
      image: '🍁',
      description: 'Sweet maple flavor with hint of pecan',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Decaf coffee', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free maple syrup', amount: '1 tbsp', protein: 0 },
        { name: 'Pecan extract', amount: '1/4 tsp', protein: 0 },
      ],
      instructions: [
        'Brew your decaf coffee',
        'Heat almond milk until warm',
        'Stir in maple syrup and pecan extract',
        'Froth the flavored milk',
        'Pour coffee into mug',
        'Add frothed milk mixture',
        'Top with a sprinkle of cinnamon or nutmeg'
      ],
      tips: [
        'Real maple syrup can be used if preferred (check protein content)',
        'Toast and crush one pecan for garnish (adds about 0.3g protein)',
        'This is perfect for fall mornings!'
      ]
    },
    // Recipe 4
    {
      id: 4,
      name: 'Hazelnut Dream',
      protein: 0.4,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Hot',
      image: '🌰',
      description: 'Classic hazelnut flavored coffee',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Hazelnut extract', amount: '1/2 tsp', protein: 0 },
        { name: 'Stevia', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Prepare your coffee substitute',
        'Heat coconut milk until warm',
        'Add hazelnut extract and stevia to milk',
        'Stir or froth the milk',
        'Pour coffee into your favorite mug',
        'Add flavored milk',
        'Enjoy the nutty aroma and flavor!'
      ],
      tips: [
        'Use pure hazelnut extract, not hazelnut syrup with added ingredients',
        'Coconut milk adds a subtle tropical note that complements hazelnut',
        'Great as an iced version too!'
      ]
    },
    // Recipe 5
    {
      id: 5,
      name: 'Pumpkin Spice Latte',
      protein: 0.6,
      prepTime: 10,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🎃',
      description: 'Fall favorite with pumpkin and warm spices',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Pumpkin puree', amount: '2 tbsp', protein: 0.1 },
        { name: 'Pumpkin pie spice', amount: '1/2 tsp', protein: 0 },
        { name: 'Vanilla extract', amount: '1/4 tsp', protein: 0 },
        { name: 'Sugar', amount: '1 tbsp', protein: 0 },
      ],
      instructions: [
        'In a small saucepan, combine almond milk, pumpkin puree, pumpkin pie spice, and sugar',
        'Heat over medium, whisking until smooth and steaming',
        'Add vanilla extract and whisk again',
        'Brew your coffee substitute',
        'Pour coffee into a mug',
        'Add the pumpkin spice milk mixture',
        'Top with whipped coconut cream and extra pumpkin pie spice if desired'
      ],
      tips: [
        'Use canned pumpkin puree, not pumpkin pie filling',
        'Make your own pumpkin pie spice: cinnamon, ginger, nutmeg, cloves',
        'This freezes well for iced versions!'
      ]
    },
    // Recipe 6
    {
      id: 6,
      name: 'Coconut Cream Latte',
      protein: 0.3,
      prepTime: 6,
      difficulty: 'Easy',
      type: 'Hot',
      image: '🥥',
      description: 'Rich and creamy tropical coconut latte',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Coconut cream', amount: '1 tbsp', protein: 0.1 },
        { name: 'Vanilla extract', amount: '1/4 tsp', protein: 0 },
      ],
      instructions: [
        'Heat coconut milk until steaming',
        'Add coconut cream and vanilla extract',
        'Whisk or froth until well combined and foamy',
        'Brew your coffee substitute',
        'Pour coffee into mug',
        'Add the coconut cream mixture',
        'Optionally top with toasted coconut flakes'
      ],
      tips: [
        'Use full-fat coconut milk for richest flavor',
        'Coconut cream is the thick part from a can of coconut milk',
        'Add a drop of almond extract for an Almond Joy vibe'
      ]
    },
    // Recipe 7
    {
      id: 7,
      name: 'Salted Caramel Macchiato',
      protein: 0.5,
      prepTime: 8,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🧂',
      description: 'Sweet and salty caramel perfection',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '3/4 cup', protein: 0.4 },
        { name: 'Espresso substitute', amount: '1 shot', protein: 0 },
        { name: 'Sugar-free caramel syrup', amount: '2 tbsp', protein: 0 },
        { name: 'Sea salt', amount: 'pinch', protein: 0 },
      ],
      instructions: [
        'Heat and froth almond milk',
        'Add 1 tbsp caramel syrup to milk and stir',
        'Pour frothed caramel milk into a glass',
        'Prepare espresso substitute',
        'Pour espresso through the foam to create layers',
        'Drizzle remaining caramel on top',
        'Sprinkle with a tiny pinch of sea salt'
      ],
      tips: [
        'The salt enhances the caramel flavor - dont skip it!',
        'Use coarse sea salt for best texture',
        'Can be made iced by using cold milk and ice'
      ]
    },
    // Recipe 8
    {
      id: 8,
      name: 'White Chocolate Mocha',
      protein: 0.4,
      prepTime: 7,
      difficulty: 'Easy',
      type: 'Hot',
      image: '🤍',
      description: 'Sweet white chocolate with coffee',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'White chocolate syrup (SF)', amount: '2 tbsp', protein: 0.1 },
        { name: 'Vanilla extract', amount: '1/4 tsp', protein: 0 },
      ],
      instructions: [
        'Heat coconut milk with white chocolate syrup, stirring until dissolved',
        'Add vanilla extract',
        'Froth the white chocolate milk',
        'Brew coffee substitute',
        'Pour coffee into mug',
        'Add white chocolate milk mixture',
        'Top with whipped coconut cream and white chocolate shavings if desired'
      ],
      tips: [
        'Make sure white chocolate syrup is sugar-free and low protein',
        'Add a drop of peppermint extract for a winter twist',
        'Delicious iced as well!'
      ]
    },
    // Recipe 9
    {
      id: 9,
      name: 'Gingerbread Latte',
      protein: 0.5,
      prepTime: 9,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🍪',
      description: 'Festive gingerbread spice latte',
      servings: 1,
      ingredients: [
        { name: 'Oat milk', amount: '1 cup', protein: 0.5 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Molasses', amount: '1 tsp', protein: 0 },
        { name: 'Ginger', amount: '1/4 tsp', protein: 0 },
        { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
        { name: 'Nutmeg', amount: 'pinch', protein: 0 },
      ],
      instructions: [
        'In a saucepan, combine oat milk with all spices and molasses',
        'Heat while whisking until well combined and steaming',
        'Froth the spiced milk',
        'Brew your coffee substitute',
        'Pour coffee into a mug',
        'Add the gingerbread spiced milk',
        'Top with whipped cream and a gingerbread cookie if desired'
      ],
      tips: [
        'Adjust spices to your preference',
        'Can substitute honey for molasses for lighter flavor',
        'Perfect for the holiday season!'
      ]
    },
    // Recipe 10
    {
      id: 10,
      name: 'Lavender Honey Latte',
      protein: 0.4,
      prepTime: 8,
      difficulty: 'Medium',
      type: 'Hot',
      image: '💜',
      description: 'Calming lavender with sweet honey',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Dried lavender', amount: '1/4 tsp', protein: 0 },
        { name: 'Honey', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Heat almond milk with dried lavender for 3-4 minutes',
        'Strain out lavender buds',
        'Add honey and stir until dissolved',
        'Froth the lavender-honey milk',
        'Brew coffee substitute',
        'Pour coffee into mug',
        'Add lavender milk mixture',
        'Garnish with a lavender sprig if available'
      ],
      tips: [
        'Use culinary-grade dried lavender only',
        'Dont overdo the lavender - it can taste soapy',
        'Beautiful and relaxing before bed (if using decaf)'
      ]
    },
    // Recipe 11
    {
      id: 11,
      name: 'Iced Caramel Coconut Coffee',
      protein: 0.3,
      prepTime: 10,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🧊',
      description: 'Refreshing iced coffee with caramel and coconut',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free caramel syrup', amount: '2 tbsp', protein: 0 },
        { name: 'Ice cubes', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Fill a tall glass with ice cubes',
        'Pour coconut milk over the ice',
        'Add cold brew coffee substitute',
        'Drizzle in caramel syrup',
        'Stir gently to combine',
        'Garnish with extra caramel drizzle if desired',
        'Serve immediately with a straw'
      ],
      tips: [
        'Make your own cold brew substitute the night before for best flavor',
        'Use light coconut milk for fewer calories',
        'Add a pinch of sea salt for a salted caramel flavor'
      ]
    },
    // Recipe 12
    {
      id: 12,
      name: 'Vanilla Sweet Cream Cold Brew',
      protein: 0.6,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🥛',
      description: 'Smooth cold brew with vanilla sweet cream',
      servings: 1,
      ingredients: [
        { name: 'Cold brew substitute', amount: '3/4 cup', protein: 0 },
        { name: 'Coconut cream', amount: '1/4 cup', protein: 0.2 },
        { name: 'Almond milk', amount: '1/4 cup', protein: 0.2 },
        { name: 'Vanilla extract', amount: '1/2 tsp', protein: 0 },
        { name: 'Sugar', amount: '1 tsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Make sweet cream: whisk together coconut cream, almond milk, vanilla, and sugar',
        'Fill glass with ice',
        'Pour cold brew over ice',
        'Slowly pour sweet cream over the back of a spoon to create layers',
        'Stir before drinking or enjoy the layers',
        'Serve with a straw'
      ],
      tips: [
        'Dont stir immediately - the layers look beautiful!',
        'Sweet cream can be made ahead and refrigerated',
        'Use vanilla bean paste for extra flavor'
      ]
    },
    // Recipe 13
    {
      id: 13,
      name: 'Iced Mint Mojito Coffee',
      protein: 0.3,
      prepTime: 7,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🌿',
      description: 'Refreshing mint and lime iced coffee',
      servings: 1,
      ingredients: [
        { name: 'Cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Coconut milk', amount: '3/4 cup', protein: 0.2 },
        { name: 'Fresh mint leaves', amount: '5-6', protein: 0 },
        { name: 'Lime juice', amount: '1 tbsp', protein: 0 },
        { name: 'Simple syrup', amount: '1 tbsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Muddle mint leaves with lime juice and simple syrup in bottom of glass',
        'Fill glass with ice',
        'Pour cold brew over ice',
        'Top with coconut milk',
        'Stir gently',
        'Garnish with mint sprig and lime wedge',
        'Serve with straw'
      ],
      tips: [
        'Slap the mint leaves before muddling to release oils',
        'Adjust lime to taste - some like it tangier',
        'Perfect summer refreshment!'
      ]
    },
    // Recipe 14
    {
      id: 14,
      name: 'Brown Sugar Cinnamon Iced Coffee',
      protein: 0.5,
      prepTime: 6,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🍬',
      description: 'Sweet brown sugar with cinnamon over ice',
      servings: 1,
      ingredients: [
        { name: 'Oat milk', amount: '1 cup', protein: 0.5 },
        { name: 'Cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Brown sugar', amount: '1 tbsp', protein: 0 },
        { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'In a small bowl, mix brown sugar with cinnamon',
        'Add 1 tbsp warm water and stir to make a syrup',
        'Fill glass with ice',
        'Add brown sugar syrup to bottom of glass',
        'Pour in cold brew',
        'Top with oat milk',
        'Stir and enjoy!'
      ],
      tips: [
        'Make a larger batch of brown sugar cinnamon syrup to keep on hand',
        'Looks beautiful with the layers before stirring',
        'Similar to popular coffee shop drinks!'
      ]
    },
    // Recipe 15
    {
      id: 15,
      name: 'Iced Almond Joy Coffee',
      protein: 0.6,
      prepTime: 8,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🍫',
      description: 'Chocolate, coconut, and almond flavors',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '3/4 cup', protein: 0.4 },
        { name: 'Coconut milk', amount: '1/4 cup', protein: 0.1 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free chocolate syrup', amount: '1 tbsp', protein: 0.1 },
        { name: 'Coconut extract', amount: '1/4 tsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Mix almond milk and coconut milk together',
        'Add chocolate syrup and coconut extract, stir well',
        'Fill glass with ice',
        'Pour cold coffee over ice',
        'Add flavored milk mixture',
        'Stir to combine',
        'Top with whipped coconut cream and chocolate drizzle if desired'
      ],
      tips: [
        'Toast some coconut flakes for garnish',
        'Use dark chocolate syrup for richer flavor',
        'Tastes just like the candy bar!'
      ]
    },
    // Recipe 16
    {
      id: 16,
      name: 'Peach Iced Coffee',
      protein: 0.4,
      prepTime: 6,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🍑',
      description: 'Fruity peach with smooth iced coffee',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Peach syrup', amount: '2 tbsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Fill glass with ice',
        'Add peach syrup to bottom',
        'Pour cold brew over ice',
        'Top with almond milk',
        'Stir gently',
        'Garnish with a peach slice if available',
        'Enjoy this fruity coffee!'
      ],
      tips: [
        'Fresh peach puree works great instead of syrup',
        'Frozen peaches can be blended in for a frappé version',
        'Perfect for summer!'
      ]
    },
    // Recipe 17
    {
      id: 17,
      name: 'Raspberry Vanilla Iced Coffee',
      protein: 0.4,
      prepTime: 7,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🫐',
      description: 'Tart raspberry with sweet vanilla',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Raspberry syrup', amount: '2 tbsp', protein: 0 },
        { name: 'Vanilla extract', amount: '1/4 tsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Mix raspberry syrup with vanilla extract',
        'Fill glass with ice',
        'Add raspberry-vanilla mixture to bottom',
        'Pour cold coffee over ice',
        'Top with coconut milk',
        'Stir and enjoy',
        'Garnish with fresh raspberries'
      ],
      tips: [
        'Muddle fresh raspberries for natural flavor',
        'Add a splash of lime juice for extra zing',
        'Beautiful pink color!'
      ]
    },
    // Recipe 18
    {
      id: 18,
      name: 'Coconut Macadamia Iced Coffee',
      protein: 0.3,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🏝️',
      description: 'Tropical island vibes in a cup',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Macadamia nut syrup', amount: '1 tbsp', protein: 0.1 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Fill glass with ice',
        'Add macadamia syrup',
        'Pour cold brew over ice',
        'Top with coconut milk',
        'Stir well',
        'Garnish with toasted coconut flakes',
        'Close your eyes and imagine the beach!'
      ],
      tips: [
        'Add a drop of vanilla for extra depth',
        'Toast coconut flakes for amazing aroma',
        'Transport yourself to paradise!'
      ]
    },
    // Recipe 19
    {
      id: 19,
      name: 'Mocha Coconut Frappé',
      protein: 0.6,
      prepTime: 10,
      difficulty: 'Medium',
      type: 'Blended',
      image: '🥤',
      description: 'Chocolate and coconut blended frozen drink',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Cocoa powder', amount: '1 tsp', protein: 0.3 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
        { name: 'Sugar', amount: '2 tsp', protein: 0 },
      ],
      instructions: [
        'Add all ingredients to a blender',
        'Blend on high until smooth and creamy',
        'Check consistency - add more ice if too thin',
        'Pour into a tall glass',
        'Top with coconut whipped cream if desired',
        'Drizzle with chocolate syrup (PKU-safe)',
        'Enjoy with a straw or spoon'
      ],
      tips: [
        'Freeze coffee substitute in ice cube trays for extra coffee flavor',
        'Use dark cocoa powder for richer chocolate taste',
        'Blend in a frozen banana for creamier texture (adds minimal protein)'
      ]
    },
    // Recipe 20
    {
      id: 20,
      name: 'Vanilla Bean Frappé',
      protein: 0.5,
      prepTime: 8,
      difficulty: 'Easy',
      type: 'Blended',
      image: '🍦',
      description: 'Creamy vanilla bean blended coffee',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Vanilla extract', amount: '1 tsp', protein: 0 },
        { name: 'Sugar', amount: '2 tbsp', protein: 0 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
      ],
      instructions: [
        'Combine all ingredients in blender',
        'Blend on high until smooth',
        'Add more ice if needed for thickness',
        'Pour into glass',
        'Top with whipped cream',
        'Sprinkle with vanilla bean specks or cinnamon',
        'Serve immediately'
      ],
      tips: [
        'Use vanilla bean paste for authentic vanilla specks',
        'Add a scoop of vanilla coconut ice cream for extra richness',
        'Classic and delicious!'
      ]
    },
    // Recipe 21
    {
      id: 21,
      name: 'Caramel Ribbon Crunch Frappé',
      protein: 0.4,
      prepTime: 12,
      difficulty: 'Medium',
      type: 'Blended',
      image: '🍮',
      description: 'Decadent caramel blended with crunch topping',
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free caramel syrup', amount: '3 tbsp', protein: 0 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
      ],
      instructions: [
        'Add coconut milk, coffee, 2 tbsp caramel, and ice to blender',
        'Blend until smooth',
        'Drizzle remaining caramel inside glass',
        'Pour blended mixture into glass',
        'Top with whipped cream',
        'Drizzle more caramel on top',
        'Add crunchy topping if available (check protein)'
      ],
      tips: [
        'Make caramel sauce extra thick for best drizzle',
        'Rice crisps can add crunch (check labels)',
        'Indulgent and delicious!'
      ]
    },
    // Recipe 22
    {
      id: 22,
      name: 'Mint Chocolate Chip Frappé',
      protein: 0.7,
      prepTime: 10,
      difficulty: 'Medium',
      type: 'Blended',
      image: '🍃',
      description: 'Refreshing mint with chocolate chips',
      servings: 1,
      ingredients: [
        { name: 'Oat milk', amount: '1 cup', protein: 0.5 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Peppermint extract', amount: '1/4 tsp', protein: 0 },
        { name: 'Mini chocolate chips (measured)', amount: '1 tbsp', protein: 0.2 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
      ],
      instructions: [
        'Blend oat milk, coffee, peppermint extract, and ice until smooth',
        'Add chocolate chips and pulse a few times to break them up',
        'Pour into glass',
        'Top with whipped cream',
        'Sprinkle more mini chocolate chips on top',
        'Serve with straw and spoon'
      ],
      tips: [
        'Start with less peppermint - its strong!',
        'Use sugar-free chocolate chips if available',
        'Tastes like mint ice cream!'
      ]
    },
    // Recipe 23
    {
      id: 23,
      name: 'Strawberry Coffee Smoothie',
      protein: 0.5,
      prepTime: 8,
      difficulty: 'Easy',
      type: 'Blended',
      image: '🍓',
      description: 'Fruity strawberry blended with coffee',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Frozen strawberries', amount: '1/2 cup', protein: 0.1 },
        { name: 'Sugar', amount: '1 tbsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Add all ingredients to blender',
        'Blend on high until smooth and creamy',
        'Add more strawberries for thicker texture',
        'Pour into glass',
        'Garnish with fresh strawberry slice',
        'Enjoy this fruity twist on coffee!'
      ],
      tips: [
        'Frozen berries work better than fresh for thickness',
        'Add vanilla extract for extra flavor',
        'Great for breakfast!'
      ]
    },
    // Recipe 24
    {
      id: 24,
      name: 'Peanut Butter Cup Frappé',
      protein: 0.9,
      prepTime: 10,
      difficulty: 'Medium',
      type: 'Blended',
      image: '🥜',
      description: 'Rich PB flavor with chocolate (watch portions!)',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'PB2 powder (measured)', amount: '1 tbsp', protein: 0.4 },
        { name: 'Cocoa powder', amount: '1/2 tsp', protein: 0.1 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
      ],
      instructions: [
        'Add all ingredients to blender',
        'Blend on high until smooth',
        'Check consistency - add ice if needed',
        'Pour into glass',
        'Top with whipped cream',
        'Drizzle with chocolate and a tiny bit of PB',
        'Note: Higher protein, enjoy occasionally'
      ],
      tips: [
        'PB2 powder is lower protein than regular peanut butter',
        'This is a treat - save for special occasions',
        'So delicious but watch the portions!'
      ]
    },
    // Recipe 25
    {
      id: 25,
      name: 'Vietnamese Iced Coffee',
      protein: 0.3,
      prepTime: 8,
      difficulty: 'Easy',
      type: 'Iced',
      image: '🇻🇳',
      description: 'Strong coffee with sweetened coconut cream',
      servings: 1,
      ingredients: [
        { name: 'Strong cold brew substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Coconut condensed milk (SF)', amount: '3 tbsp', protein: 0.2 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Add coconut condensed milk to bottom of glass',
        'Fill glass with ice',
        'Slowly pour strong cold brew over ice',
        'Dont stir yet - admire the layers!',
        'When ready to drink, stir well',
        'Enjoy this Vietnamese-inspired treat'
      ],
      tips: [
        'Use very strong coffee for authentic flavor',
        'The layers are beautiful - take a photo first!',
        'Traditionally served very sweet and strong'
      ]
    },
    // Recipe 26
    {
      id: 26,
      name: 'Spanish Latte',
      protein: 0.6,
      prepTime: 10,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🇪🇸',
      description: 'Sweetened condensed milk Spanish-style latte',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '3/4 cup', protein: 0.4 },
        { name: 'Espresso substitute', amount: '2 shots', protein: 0 },
        { name: 'Sweetened condensed coconut milk', amount: '2 tbsp', protein: 0.2 },
      ],
      instructions: [
        'Heat almond milk until steaming',
        'Add sweetened condensed coconut milk and stir until dissolved',
        'Froth the sweetened milk',
        'Prepare double shot of espresso',
        'Pour espresso into a mug',
        'Add frothed milk mixture',
        'The condensed milk creates beautiful sweetness!'
      ],
      tips: [
        'Adjust condensed milk to your sweetness preference',
        'Can be served iced as well',
        'Popular in Spain and Latin America'
      ]
    },
    // Recipe 27
    {
      id: 27,
      name: 'Affogato Style',
      protein: 0.3,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Hot',
      image: '🍨',
      description: 'Espresso poured over coconut ice cream',
      servings: 1,
      ingredients: [
        { name: 'Espresso substitute', amount: '2 shots', protein: 0 },
        { name: 'Coconut ice cream (low protein)', amount: '1 scoop', protein: 0.3 },
      ],
      instructions: [
        'Place a scoop of coconut ice cream in a bowl or glass',
        'Prepare a double shot of hot espresso',
        'Immediately pour hot espresso over the ice cream',
        'Watch it melt and mix',
        'Eat with a spoon quickly!',
        'Italian perfection in minutes'
      ],
      tips: [
        'Use high-quality coconut ice cream',
        'The contrast of hot and cold is magical',
        'Classic Italian dessert-coffee combo'
      ]
    },
    // Recipe 28
    {
      id: 28,
      name: 'Dalgona Whipped Coffee',
      protein: 0.4,
      prepTime: 15,
      difficulty: 'Hard',
      type: 'Iced',
      image: '☁️',
      description: 'Trendy whipped coffee over milk',
      servings: 1,
      ingredients: [
        { name: 'Instant coffee substitute', amount: '2 tbsp', protein: 0 },
        { name: 'Sugar', amount: '2 tbsp', protein: 0 },
        { name: 'Hot water', amount: '2 tbsp', protein: 0 },
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'In a bowl, combine instant coffee, sugar, and hot water',
        'Whip with hand mixer or whisk vigorously for 3-5 minutes',
        'Whip until thick, fluffy, and light in color (stiff peaks)',
        'Fill glass with ice and almond milk',
        'Spoon whipped coffee on top',
        'Take a photo - its Instagram-worthy!',
        'Stir before drinking to combine'
      ],
      tips: [
        'This takes patience - keep whisking!',
        'Electric mixer makes it much easier',
        'The viral TikTok coffee!'
      ]
    },
    // Recipe 29
    {
      id: 29,
      name: 'Matcha Coffee Fusion',
      protein: 0.6,
      prepTime: 7,
      difficulty: 'Medium',
      type: 'Iced',
      image: '🍵',
      description: 'Green tea matcha meets coffee',
      servings: 1,
      ingredients: [
        { name: 'Oat milk', amount: '1 cup', protein: 0.5 },
        { name: 'Cold coffee substitute', amount: '1/4 cup', protein: 0 },
        { name: 'Matcha powder', amount: '1 tsp', protein: 0.1 },
        { name: 'Sugar', amount: '1 tbsp', protein: 0 },
        { name: 'Ice', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Whisk matcha powder with 2 tbsp hot water until smooth',
        'Add sugar and stir until dissolved',
        'Fill glass with ice',
        'Add oat milk',
        'Pour matcha mixture over milk',
        'Top with cold coffee',
        'Stir gently and enjoy this unique fusion!'
      ],
      tips: [
        'Use ceremonial grade matcha for best flavor',
        'Creates beautiful green layers',
        'Energizing combo of coffee and tea!'
      ]
    },
    // Recipe 30
    {
      id: 30,
      name: 'Chai Coffee Latte',
      protein: 0.5,
      prepTime: 12,
      difficulty: 'Medium',
      type: 'Hot',
      image: '🧉',
      description: 'Spiced chai tea blended with coffee',
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Coffee substitute', amount: '1/4 cup', protein: 0 },
        { name: 'Chai tea concentrate', amount: '1/4 cup', protein: 0.1 },
        { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
      ],
      instructions: [
        'Heat almond milk until steaming',
        'Brew coffee substitute',
        'Heat chai concentrate separately',
        'Combine coffee and chai in a mug',
        'Add extra cinnamon',
        'Froth almond milk',
        'Pour milk over coffee-chai mixture',
        'Enjoy this spiced fusion!'
      ],
      tips: [
        'Use concentrated chai tea for stronger flavor',
        'Adjust coffee-to-chai ratio to your taste',
        'Perfect for chai and coffee lovers!'
      ]
    },
  ];
  
  return recipes.find(r => r.id === parseInt(id));
};

function RecipeDetail({ savedRecipes, setSavedRecipes, setShoppingList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Recipe not found</h2>
        <button
          onClick={() => navigate('/recipes')}
          className="text-[#00d4ff] hover:text-[#7b2ff7] transition"
        >
          ← Back to recipes
        </button>
      </div>
    );
  }

  const isSaved = savedRecipes.some(r => r.id === recipe.id);

  const toggleSave = () => {
    if (isSaved) {
      setSavedRecipes(savedRecipes.filter(r => r.id !== recipe.id));
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  const addToShoppingList = () => {
    setShoppingList(prev => {
      const newItems = recipe.ingredients.map(ing => ({
        ...ing,
        recipeId: recipe.id,
        recipeName: recipe.name,
        checked: false
      }));
      return [...prev, ...newItems];
    });
    alert('Ingredients added to shopping list!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/recipes')}
        className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] mb-4 transition"
      >
        <ArrowLeft size={20} />
        <span>Back to recipes</span>
      </button>

      {/* Recipe Header */}
      <div className="glass-card rounded-xl overflow-hidden mb-6">
        <div 
          className="h-48 md:h-64 flex items-center justify-center border-b border-[rgba(255,255,255,0.1)]"
          style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,247,0.15)'}}
        >
          <span className="text-9xl filter drop-shadow-[0_4px_20px_rgba(0,212,255,0.5)]">{recipe.image}</span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-bold glow-text">
              {recipe.name}
            </h1>
            <button
              onClick={toggleSave}
              className="p-2"
            >
              <Heart
                size={28}
                className={isSaved ? 'fill-[#00d4ff] text-[#00d4ff]' : 'text-gray-500'}
              />
            </button>
          </div>

          <p className="text-gray-400 mb-4">{recipe.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-[rgba(0,212,255,0.3)]">
              <TrendingUp className="text-[#00d4ff]" size={20} />
              <span className="font-semibold text-[#00d4ff]">{recipe.protein}g protein</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-[rgba(123,47,247,0.3)]">
              <Clock className="text-[#a78bfa]" size={20} />
              <span className="font-semibold text-[#a78bfa]">{recipe.prepTime} minutes</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)]">
              <span className="font-semibold text-white">{recipe.difficulty}</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)]">
              <span className="font-semibold text-white">{recipe.servings} serving</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            onClick={addToShoppingList}
            className="w-full glass-card btn-ripple py-3 rounded-lg font-semibold transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Shopping List
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Ingredients</h2>
        <ul className="space-y-3">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.1)]">
              <div>
                <span className="text-white">{ingredient.name}</span>
                <span className="text-gray-500 ml-2">({ingredient.amount})</span>
              </div>
              <span className="text-sm text-[#00d4ff] font-medium">
                {ingredient.protein}g protein
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex justify-between items-center font-bold">
            <span className="text-white">Total Protein:</span>
            <span className="text-[#00d4ff] text-lg">{recipe.protein}g</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Instructions</h2>
        <ol className="space-y-3">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[rgba(0,212,255,0.2)] text-[#00d4ff] rounded-full flex items-center justify-center font-semibold border border-[rgba(0,212,255,0.5)]">
                {index + 1}
              </span>
              <span className="text-gray-300 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Tips */}
      {recipe.tips && recipe.tips.length > 0 && (
        <div className="glass-card rounded-xl p-6" style={{background: 'rgba(123, 47, 247, 0.05)'}}>
          <h2 className="text-2xl font-bold text-white mb-4">💡 Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="text-gray-300 flex gap-2">
                <span className="text-[#a78bfa]">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;