require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.static(path.join(__dirname, './build')));

// Helper function to parse HTML and extract terms/definitions
function parseHTMLContent() {
  const htmlContent = fs.readFileSync(path.join(__dirname, './build/AWSCPforNameDef.html'), 'utf-8');
  const terms = [];
  
  // Extract terms using regex
  const regex = /<span class="c1">([^<]+)<\/span><span class="c2">([^<]+)<\/span>/g;
  let match;
  
  while ((match = regex.exec(htmlContent)) !== null) {
    const name = match[1].trim();
    const definition = match[2].trim().replace(/^:\s*/, ''); // Remove leading colon if present
    
    // Get category by looking for the nearest preceding h2 element
    const precedingContent = htmlContent.substring(0, match.index);
    const categoryMatch = precedingContent.match(/<h2[^>]*><span[^>]*>([^<]+)<\/span><\/h2>/);
    const category = categoryMatch ? categoryMatch[1].trim() : 'Uncategorized';
    
    terms.push({ name, definition, category });
  }
  
  return terms;
}

app.get('/api/random-questions', async (req, res) => {
  const count = parseInt(req.query.count) || 8;
  try {
    const allTerms = parseHTMLContent();
    const questions = [];
    const seenTerms = new Set();
    
    while (questions.length < count) {
      // Get random term
      const randomIndex = Math.floor(Math.random() * allTerms.length);
      const term = allTerms[randomIndex];
      
      if (seenTerms.has(term.name)) {
        continue;
      }
      seenTerms.add(term.name);
      
      // Get other terms from same category for choices
      const categoryTerms = allTerms
        .filter(t => t.category === term.category && t.name !== term.name)
        .map(t => t.name);
      
      // Get 3 random choices from same category
      const choices = [];
      while (choices.length < 3 && categoryTerms.length > 0) {
        const choiceIndex = Math.floor(Math.random() * categoryTerms.length);
        choices.push(categoryTerms[choiceIndex]);
        categoryTerms.splice(choiceIndex, 1);
      }
      
      // Add correct answer and shuffle
      choices.push(term.name);
      const shuffledChoices = choices.sort(() => Math.random() - 0.5);
      
      questions.push({
        id: randomIndex, // Using index as ID since we don't have DB IDs anymore
        question: term.definition,
        correctAnswer: term.name,
        choices: shuffledChoices,
      });
    }
    
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }
  
  function generateQuestions() {
    const questionsData = JSON.parse(fs.readFileSync(path.join(__dirname, './build', 'questions.json'), 'utf-8'));//change public to ./build
    const selectedQuestions = [];
    const seenIds = new Set();
    // Select 7 unique questions
    while (selectedQuestions.length < 7) {
        const randomIndex = Math.floor(Math.random() * questionsData.length);
        const question = questionsData[randomIndex]; 
        if (seenIds.has(question.question)){
          continue;
        }
        seenIds.add(question.question);
        //store the original answer before shuffling
        const correctAnswerIndex = question.answer;
        original_answer = question.choices[correctAnswerIndex];//answer id of the original question
        
        shuffleArray(question.choices);
        // Find the new index of the correct answer after shuffle
        question.answer = question.choices.indexOf(original_answer);
        
        selectedQuestions.push(question);
    }
  
    return selectedQuestions;
  }

app.get('/api/questions', (req, res) => {
  const questions = generateQuestions();
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});