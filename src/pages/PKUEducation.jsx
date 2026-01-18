import { BookOpen, Users, Coffee, AlertCircle, Heart, Brain, Utensils, ShoppingBag } from 'lucide-react';

function PKUEducation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Hero Section */}
      <div className="glass-card rounded-xl p-8 mb-8 text-center relative overflow-hidden">
        <div className="shimmer absolute inset-0 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-6xl mb-4 filter drop-shadow-[0_4px_20px_rgba(0,212,255,0.5)]">📚</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            PKU Education Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about PKU and creating safe, delicious coffee drinks
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
          <div className="text-3xl mb-2">🧬</div>
          <div className="text-2xl font-bold text-[#00d4ff]">1 in 10,000</div>
          <div className="text-sm text-gray-400">Babies born with PKU</div>
        </div>
        <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
          <div className="text-3xl mb-2">🍽️</div>
          <div className="text-2xl font-bold text-[#00d4ff]">10-20g</div>
          <div className="text-sm text-gray-400">Typical daily protein limit</div>
        </div>
        <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
          <div className="text-3xl mb-2">⚠️</div>
          <div className="text-2xl font-bold text-[#00d4ff]">Phe</div>
          <div className="text-sm text-gray-400">Phenylalanine - amino acid to avoid</div>
        </div>
        <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
          <div className="text-3xl mb-2">💪</div>
          <div className="text-2xl font-bold text-[#00d4ff]">Manageable</div>
          <div className="text-sm text-gray-400">With proper diet & care</div>
        </div>
      </div>

      {/* What is PKU Section */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="text-[#00d4ff]" size={32} />
          <h2 className="text-3xl font-bold text-white">What is PKU?</h2>
        </div>
        
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            <strong className="text-white">Phenylketonuria (PKU)</strong> is a rare genetic disorder that affects how the body processes protein. 
            People with PKU cannot properly break down an amino acid called <strong className="text-[#00d4ff]">phenylalanine (Phe)</strong>, 
            which is found in most protein-containing foods.
          </p>
          
          <div className="glass-card p-6 rounded-lg border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)]">
            <h3 className="text-xl font-bold text-white mb-3">How PKU Works:</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-[#00d4ff]">1.</span>
                <span>Most people have an enzyme (PAH) that breaks down phenylalanine</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00d4ff]">2.</span>
                <span>People with PKU lack this enzyme or have reduced enzyme activity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00d4ff]">3.</span>
                <span>Phenylalanine builds up in the blood and can damage the brain</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00d4ff]">4.</span>
                <span>A low-protein diet keeps Phe levels safe</span>
              </li>
            </ul>
          </div>

          <p className="text-lg">
            <strong className="text-white">Good news:</strong> With early diagnosis (through newborn screening) and proper dietary management, 
            people with PKU can live completely normal, healthy lives!
          </p>
        </div>
      </div>

      {/* Diet Management Section */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Utensils className="text-[#a78bfa]" size={32} />
          <h2 className="text-3xl font-bold text-white">Managing Your PKU Diet</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Foods to Avoid */}
          <div className="glass-card p-6 rounded-lg border border-[rgba(255,107,107,0.3)]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🚫</span> High Protein Foods to Avoid
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Meat, poultry, and fish</li>
              <li>• Regular dairy products (milk, cheese, yogurt)</li>
              <li>• Eggs</li>
              <li>• Beans, lentils, and legumes</li>
              <li>• Nuts and seeds</li>
              <li>• Regular bread and pasta</li>
              <li>• Soy products</li>
              <li>• Aspartame (NutraSweet)</li>
            </ul>
          </div>

          {/* Foods You Can Enjoy */}
          <div className="glass-card p-6 rounded-lg border border-[rgba(0,212,255,0.3)]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span> Safe Foods You Can Enjoy
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Most fruits and vegetables</li>
              <li>• Low-protein milk alternatives (measured)</li>
              <li>• Special low-protein products</li>
              <li>• Rice and certain grains (measured)</li>
              <li>• Oils and fats</li>
              <li>• Sugar and most sweeteners</li>
              <li>• Coffee and tea</li>
              <li>• Many condiments and spices</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 glass-card p-6 rounded-lg border border-[rgba(123,47,247,0.3)] bg-[rgba(123,47,247,0.05)]">
          <h3 className="text-xl font-bold text-white mb-3">⚖️ The Balance:</h3>
          <p className="text-gray-300">
            Everyone with PKU has a different tolerance level. Your doctor or dietitian will help you determine your specific 
            daily protein limit. Most adults can have 10-20 grams of protein per day, but this varies by individual. 
            Regular blood tests help monitor your phenylalanine levels.
          </p>
        </div>
      </div>

      {/* Coffee-Specific Tips */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="text-[#00d4ff]" size={32} />
          <h2 className="text-3xl font-bold text-white">PKU-Safe Coffee Tips</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">☕ Coffee Basics</h3>
            <div className="space-y-3 text-gray-300">
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Black Coffee = 0g protein</div>
                <div className="text-sm">Plain coffee and espresso contain virtually no protein!</div>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Watch the Milk</div>
                <div className="text-sm">The protein comes from milk - measure carefully and choose low-protein options</div>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Flavors are Usually Safe</div>
                <div className="text-sm">Most syrups, extracts, and spices have zero protein</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">🥛 Milk Alternative Guide</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                <span>Coconut Milk</span>
                <span className="text-[#00d4ff] font-semibold">0.2g / cup</span>
              </div>
              <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                <span>Rice Milk</span>
                <span className="text-[#00d4ff] font-semibold">0.3g / cup</span>
              </div>
              <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                <span>Almond Milk</span>
                <span className="text-yellow-400 font-semibold">0.4g / cup</span>
              </div>
              <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                <span>Oat Milk</span>
                <span className="text-orange-400 font-semibold">0.5-0.7g / cup</span>
              </div>
              <div className="text-sm mt-3 text-gray-400">
                💡 Always check labels - protein content varies by brand
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="glass-card p-4 rounded-lg border border-[rgba(0,212,255,0.3)]">
            <div className="text-3xl mb-2">📏</div>
            <h4 className="font-bold text-white mb-2">Measure Everything</h4>
            <p className="text-sm text-gray-300">Use measuring cups for milk - don't estimate!</p>
          </div>
          <div className="glass-card p-4 rounded-lg border border-[rgba(0,212,255,0.3)]">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="font-bold text-white mb-2">Track Your Intake</h4>
            <p className="text-sm text-gray-300">Keep a log of protein consumed throughout the day</p>
          </div>
          <div className="glass-card p-4 rounded-lg border border-[rgba(0,212,255,0.3)]">
            <div className="text-3xl mb-2">🔄</div>
            <h4 className="font-bold text-white mb-2">Rotate Options</h4>
            <p className="text-sm text-gray-300">Try different milk alternatives to find your favorites</p>
          </div>
        </div>
      </div>

      {/* Shopping Tips */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="text-[#a78bfa]" size={32} />
          <h2 className="text-3xl font-bold text-white">Shopping for PKU-Safe Ingredients</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-3">🏷️ Reading Labels Like a Pro</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Look for:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Protein content per serving</li>
                  <li>• Serving size (critical!)</li>
                  <li>• "Contains Phenylalanine" warnings</li>
                  <li>• Aspartame in ingredients</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Pro Tips:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Compare brands - protein varies</li>
                  <li>• Unsweetened usually has less protein</li>
                  <li>• "Light" versions may differ</li>
                  <li>• Take photos of safe products</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-3">🛒 Recommended Brands for Coffee</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p><strong className="text-white">Milk Alternatives:</strong> Silk (Coconut), Pacific Foods (Rice), Califia Farms (Almond - unsweetened)</p>
              <p><strong className="text-white">Syrups:</strong> Torani Sugar-Free, Jordan's Skinny Syrups, Monin</p>
              <p><strong className="text-white">Coffee:</strong> Any regular coffee or decaf (all zero protein)</p>
              <p><strong className="text-white">Sweeteners:</strong> Stevia, Monk Fruit, regular sugar (all zero protein)</p>
              <p className="text-xs text-gray-400 mt-3">
                ⚠️ Always verify current labels - formulations can change
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Living with PKU */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="text-[#00d4ff]" size={32} />
          <h2 className="text-3xl font-bold text-white">Living Well with PKU</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">💪 Daily Success Tips</h3>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Plan Ahead</div>
                <p className="text-sm text-gray-300">Prep ingredients and plan your drinks for the week</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Stay Consistent</div>
                <p className="text-sm text-gray-300">Regular blood tests and consistent diet management are key</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Get Creative</div>
                <p className="text-sm text-gray-300">Experiment with flavors - there's so much you CAN have!</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="font-semibold text-white mb-1">Build a Support Network</div>
                <p className="text-sm text-gray-300">Connect with other PKU families and communities</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">🎯 Common Challenges & Solutions</h3>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-lg border-l-4 border-[#00d4ff]">
                <div className="font-semibold text-white mb-1">Challenge: Dining Out</div>
                <p className="text-sm text-gray-300">Solution: Call ahead, ask about ingredients, bring your own milk alternative</p>
              </div>
              <div className="glass-card p-4 rounded-lg border-l-4 border-[#00d4ff]">
                <div className="font-semibold text-white mb-1">Challenge: Social Events</div>
                <p className="text-sm text-gray-300">Solution: Bring your own safe drinks, educate friends about PKU</p>
              </div>
              <div className="glass-card p-4 rounded-lg border-l-4 border-[#00d4ff]">
                <div className="font-semibold text-white mb-1">Challenge: Finding Variety</div>
                <p className="text-sm text-gray-300">Solution: Use PKBrew to discover new recipes and flavor combinations!</p>
              </div>
              <div className="glass-card p-4 rounded-lg border-l-4 border-[#00d4ff]">
                <div className="font-semibold text-white mb-1">Challenge: Travel</div>
                <p className="text-sm text-gray-300">Solution: Pack portable ingredients, research restaurants ahead, carry safe snacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Family & Friends */}
      <div className="glass-card rounded-xl p-6 md:p-8 mb-8" style={{background: 'rgba(123, 47, 247, 0.05)'}}>
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-[#a78bfa]" size={32} />
          <h2 className="text-3xl font-bold text-white">For Family & Friends</h2>
        </div>

        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            Supporting someone with PKU? Here's how you can help:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-lg">
              <h3 className="font-bold text-white mb-3">✅ Do:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Learn about PKU and their specific needs</li>
                <li>• Ask questions and show genuine interest</li>
                <li>• Keep separate cutting boards/utensils if needed</li>
                <li>• Offer to help read labels when shopping</li>
                <li>• Celebrate their dietary wins and creativity</li>
                <li>• Stock PKU-safe options at your home</li>
              </ul>
            </div>
            <div className="glass-card p-5 rounded-lg">
              <h3 className="font-bold text-white mb-3">❌ Don't:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Pressure them to "just try a bite"</li>
                <li>• Make them feel different or excluded</li>
                <li>• Assume you know what they can/can't have</li>
                <li>• Use their food without asking</li>
                <li>• Make comments about their diet being "hard"</li>
                <li>• Forget to check labels on shared foods</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-5 rounded-lg border border-[rgba(123,47,247,0.3)] mt-4">
            <p className="text-white font-semibold mb-2">💜 Remember:</p>
            <p className="text-sm">
              People with PKU are managing a serious medical condition through diet. It's not a choice, preference, or "picky eating." 
              Your understanding and support make a huge difference!
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="glass-card rounded-xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-[#00d4ff]" size={32} />
          <h2 className="text-3xl font-bold text-white">Additional Resources</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card glass-card-hover p-5 rounded-lg">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-white mb-2">Medical Organizations</h3>
            <p className="text-sm text-gray-300 mb-3">
              National PKU Alliance, PKU Organization of Illinois, and other regional groups
            </p>
            <div className="text-xs text-gray-500">
              Consult your healthcare provider for recommendations
            </div>
          </div>

          <div className="glass-card glass-card-hover p-5 rounded-lg">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-white mb-2">Apps & Tools</h3>
            <p className="text-sm text-gray-300 mb-3">
              PKBrew (you're here!), protein calculators, food tracking apps
            </p>
            <div className="text-xs text-gray-500">
              Digital tools make tracking easier
            </div>
          </div>

          <div className="glass-card glass-card-hover p-5 rounded-lg">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-bold text-white mb-2">Community</h3>
            <p className="text-sm text-gray-300 mb-3">
              Online forums, social media groups, local PKU meetups
            </p>
            <div className="text-xs text-gray-500">
              Connect with others who understand
            </div>
          </div>
        </div>

        <div className="mt-6 glass-card p-6 rounded-lg border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-[#00d4ff] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-white mb-2">Important Disclaimer</h3>
              <p className="text-sm text-gray-300">
                This information is for educational purposes only and is not a substitute for professional medical advice. 
                Always consult with your doctor, dietitian, or PKU specialist before making changes to your diet. 
                Protein needs and tolerances vary by individual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card rounded-xl p-8 text-center mt-8 relative overflow-hidden">
        <div className="shimmer absolute inset-0 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing Coffee?</h2>
          <p className="text-gray-300 mb-6">
            Now that you know the basics, explore our 30 PKU-safe recipes or build your own custom creation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/recipes"
              className="glass-card btn-ripple px-8 py-4 rounded-lg font-semibold text-lg transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)]"
            >
              Browse Recipes
            </a>
            <a
              href="/build"
              className="glass-card btn-ripple px-8 py-4 rounded-lg font-semibold text-lg transition border-2 border-[rgba(123,47,247,0.4)] text-[#a78bfa] hover:border-[rgba(123,47,247,0.8)] hover:shadow-[0_6px_25px_rgba(123,47,247,0.5)]"
            >
              Build Your Own
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PKUEducation;