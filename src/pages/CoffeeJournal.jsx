import { useState, useEffect } from 'react';
import { Calendar, Star, Coffee, TrendingUp, Award, Plus, X, Edit2, Trash2 } from 'lucide-react';

function CoffeeJournal({ savedRecipes }) {
  // Load entries from localStorage on initial render (lazy initialization)
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem('pkbrew-journal-entries');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading journal entries:', error);
      return [];
    }
  });
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Form state
  const [formData, setFormData] = useState({
    recipe: '',
    rating: 0,
    notes: '',
    protein: '',
    feeling: 'good'
  });

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pkbrew-journal-entries', JSON.stringify(entries));
  }, [entries]);

  // Format date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Get entries for a specific date
  const getEntriesForDate = (date) => {
    const dateStr = formatDate(date);
    return entries.filter(entry => entry.date === dateStr);
  };

  // Check if date has entries
  const hasEntries = (date) => {
    return getEntriesForDate(date).length > 0;
  };

  // Add or update entry
  const saveEntry = (e) => {
    e.preventDefault();
    
    const entry = {
      id: editingEntry?.id || crypto.randomUUID(),
      date: formatDate(selectedDate),
      ...formData,
      timestamp: Date.now()
    };

    if (editingEntry) {
      // Update existing
      setEntries(entries.map(e => e.id === editingEntry.id ? entry : e));
    } else {
      // Add new
      setEntries([...entries, entry]);
    }

    // Reset form
    setFormData({ recipe: '', rating: 0, notes: '', protein: '', feeling: 'good' });
    setShowEntryForm(false);
    setEditingEntry(null);
  };

  // Delete entry
  const deleteEntry = (id) => {
    if (window.confirm('Delete this journal entry?')) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  // Start editing
  const startEdit = (entry) => {
    setEditingEntry(entry);
    setFormData({
      recipe: entry.recipe,
      rating: entry.rating,
      notes: entry.notes,
      protein: entry.protein,
      feeling: entry.feeling
    });
    setShowEntryForm(true);
  };

  // Calendar generation
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelectedDate = (date) => {
    if (!date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  // Statistics
  const calculateStats = () => {
    if (entries.length === 0) return null;

    const totalEntries = entries.length;
    const avgRating = (entries.reduce((sum, e) => sum + e.rating, 0) / totalEntries).toFixed(1);
    const totalProtein = entries.reduce((sum, e) => sum + (parseFloat(e.protein) || 0), 0).toFixed(1);
    
    // Most made recipe
    const recipeCounts = {};
    entries.forEach(e => {
      if (e.recipe) {
        recipeCounts[e.recipe] = (recipeCounts[e.recipe] || 0) + 1;
      }
    });
    const mostMade = Object.keys(recipeCounts).length > 0
      ? Object.entries(recipeCounts).sort((a, b) => b[1] - a[1])[0]
      : null;

    // Streak calculation
    const sortedDates = [...new Set(entries.map(e => e.date))].sort().reverse();
    let streak = 0;
    
    if (sortedDates.length > 0) {
      let checkDate = new Date();
      for (let i = 0; i < sortedDates.length; i++) {
        const entryDate = formatDate(checkDate);
        if (sortedDates.includes(entryDate)) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    return {
      totalEntries,
      avgRating,
      totalProtein,
      mostMade,
      streak
    };
  };

  const stats = calculateStats();
  const days = getDaysInMonth(currentMonth);
  const dayEntries = getEntriesForDate(selectedDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 glow-text">
          Coffee Journal
        </h1>
        <p className="text-gray-400">
          Track your daily coffee creations, ratings, and protein intake
        </p>
      </div>

      {/* Stats Dashboard */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
            <div className="text-2xl mb-1">📝</div>
            <div className="text-2xl font-bold text-[#00d4ff]">{stats.totalEntries}</div>
            <div className="text-xs text-gray-400">Total Entries</div>
          </div>
          <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-2xl font-bold text-[#00d4ff]">{stats.avgRating}</div>
            <div className="text-xs text-gray-400">Avg Rating</div>
          </div>
          <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-2xl font-bold text-[#00d4ff]">{stats.streak}</div>
            <div className="text-xs text-gray-400">Day Streak</div>
          </div>
          <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-2xl font-bold text-[#00d4ff]">{stats.totalProtein}g</div>
            <div className="text-xs text-gray-400">Total Protein</div>
          </div>
          <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-lg font-bold text-[#00d4ff] truncate">{stats.mostMade ? stats.mostMade[0].split(' ').slice(0, 2).join(' ') : 'N/A'}</div>
            <div className="text-xs text-gray-400">Most Made</div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={previousMonth}
                className="glass-card px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition"
              >
                ←
              </button>
              <h2 className="text-2xl font-bold text-white">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <button
                onClick={nextMonth}
                className="glass-card px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition"
              >
                →
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  disabled={!day}
                  className={`
                    aspect-square rounded-lg p-2 transition relative
                    ${!day ? 'invisible' : ''}
                    ${isToday(day) ? 'ring-2 ring-[#00d4ff]' : ''}
                    ${isSelectedDate(day) ? 'bg-[rgba(0,212,255,0.3)] border-2 border-[#00d4ff]' : 'glass-card hover:bg-[rgba(255,255,255,0.1)]'}
                  `}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium ${isSelectedDate(day) ? 'text-white' : 'text-gray-300'}`}>
                        {day.getDate()}
                      </div>
                      {hasEntries(day) && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                          <div className="flex gap-0.5">
                            {getEntriesForDate(day).slice(0, 3).map((entry, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"
                                style={{ opacity: entry.rating / 5 }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Day Entries */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </h3>
              <button
                onClick={() => {
                  setEditingEntry(null);
                  setFormData({ recipe: '', rating: 0, notes: '', protein: '', feeling: 'good' });
                  setShowEntryForm(true);
                }}
                className="glass-card p-2 rounded-lg hover:bg-[rgba(0,212,255,0.2)] transition"
              >
                <Plus size={20} className="text-[#00d4ff]" />
              </button>
            </div>

            {/* Entry Form */}
            {showEntryForm && (
              <form onSubmit={saveEntry} className="mb-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Recipe/Coffee
                  </label>
                  <select
                    value={formData.recipe}
                    onChange={(e) => setFormData({ ...formData, recipe: e.target.value })}
                    className="w-full px-3 py-2 glass-input rounded-lg"
                    required
                  >
                    <option value="">Select a recipe...</option>
                    <option value="Custom Coffee">Custom Coffee</option>
                    {savedRecipes.map(recipe => (
                      <option key={recipe.id} value={recipe.name}>{recipe.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="transition"
                      >
                        <Star
                          size={24}
                          className={star <= formData.rating ? 'fill-[#00d4ff] text-[#00d4ff]' : 'text-gray-600'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Protein (g)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.protein}
                    onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
                    placeholder="0.5"
                    className="w-full px-3 py-2 glass-input rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you feel?
                  </label>
                  <select
                    value={formData.feeling}
                    onChange={(e) => setFormData({ ...formData, feeling: e.target.value })}
                    className="w-full px-3 py-2 glass-input rounded-lg"
                  >
                    <option value="great">😊 Great</option>
                    <option value="good">🙂 Good</option>
                    <option value="okay">😐 Okay</option>
                    <option value="not-great">😕 Not Great</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="How was it? Any tweaks you made?"
                    rows={3}
                    className="w-full px-3 py-2 glass-input rounded-lg resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 glass-card btn-ripple py-2 rounded-lg font-semibold transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)]"
                  >
                    {editingEntry ? 'Update' : 'Save'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEntryForm(false);
                      setEditingEntry(null);
                      setFormData({ recipe: '', rating: 0, notes: '', protein: '', feeling: 'good' });
                    }}
                    className="glass-card px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Display Entries */}
            {!showEntryForm && (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {dayEntries.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Coffee size={48} className="mx-auto mb-2 opacity-50" />
                    <p>No entries for this day</p>
                    <p className="text-sm mt-1">Click + to add one!</p>
                  </div>
                ) : (
                  dayEntries.map(entry => (
                    <div key={entry.id} className="glass-card p-4 rounded-lg border border-[rgba(255,255,255,0.1)]">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-white">{entry.recipe}</div>
                          <div className="flex items-center gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                size={14}
                                className={star <= entry.rating ? 'fill-[#00d4ff] text-[#00d4ff]' : 'text-gray-600'}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(entry)}
                            className="text-gray-400 hover:text-[#00d4ff] transition"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteEntry(entry.id)}
                            className="text-gray-400 hover:text-red-400 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      {entry.protein && (
                        <div className="text-sm text-[#00d4ff] mb-2">
                          {entry.protein}g protein
                        </div>
                      )}
                      
                      {entry.feeling && (
                        <div className="text-sm text-gray-400 mb-2">
                          Felt: {entry.feeling === 'great' ? '😊 Great' : 
                                entry.feeling === 'good' ? '🙂 Good' : 
                                entry.feeling === 'okay' ? '😐 Okay' : '😕 Not Great'}
                        </div>
                      )}
                      
                      {entry.notes && (
                        <div className="text-sm text-gray-300 mt-2 pt-2 border-t border-[rgba(255,255,255,0.1)]">
                          {entry.notes}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Empty State for New Users */}
      {entries.length === 0 && (
        <div className="glass-card rounded-xl p-12 text-center mt-8">
          <div className="text-6xl mb-4">📔</div>
          <h2 className="text-2xl font-bold text-white mb-2">Start Your Coffee Journal</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Track your daily coffee creations, rate them, and see your favorites over time!
          </p>
          <button
            onClick={() => {
              setSelectedDate(new Date());
              setShowEntryForm(true);
            }}
            className="glass-card btn-ripple px-8 py-3 rounded-lg font-semibold transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)]"
          >
            Add Your First Entry
          </button>
        </div>
      )}
    </div>
  );
}

export default CoffeeJournal;