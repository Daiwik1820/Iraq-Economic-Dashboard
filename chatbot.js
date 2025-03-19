// Chatbot data and functionality
const chatbotData = {
    greetings: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'assalamu alaikum', 'salam', 'marhaba', 'ahlan', 'welcome'],
    farewells: ['goodbye', 'bye', 'see you', 'thanks', 'thank you', 'shukran', 'ma salama', 'thank you very much', 'thanks a lot', 'appreciate it'],
    keywords: {
        gdp: ['gdp', 'gross domestic product', 'economic growth', 'growth rate', 'economy', 'economic performance', 'gdp per capita', 'economic development', 'economic indicators', 'economic data', 'economic statistics', 'economic trends', 'economic forecast', 'economic outlook'],
        oil: ['oil', 'petroleum', 'opec', 'oil revenue', 'production', 'oil exports', 'oil fields', 'oil prices', 'crude oil', 'oil reserves', 'oil production', 'oil industry', 'oil sector', 'oil market', 'oil infrastructure', 'oil terminals', 'oil pipelines', 'oil refineries', 'oil companies', 'oil contracts', 'oil revenue sharing', 'oil ministry'],
        trade: ['trade', 'exports', 'imports', 'trade balance', 'fdi', 'foreign trade', 'international trade', 'trade partners', 'trade agreements', 'trade policy', 'trade barriers', 'trade deficit', 'trade surplus', 'non-oil exports', 'import substitution', 'export diversification', 'trade routes', 'customs', 'tariffs', 'trade volume', 'bilateral trade', 'regional trade', 'global trade'],
        employment: ['unemployment', 'employment', 'jobs', 'labor force', 'workforce', 'job market', 'labor market', 'job creation', 'employment rate', 'youth unemployment', 'private sector', 'public sector', 'informal sector', 'labor laws', 'minimum wage', 'job opportunities', 'employment policy', 'labor reforms', 'workforce development', 'skills development', 'job training', 'employment programs'],
        social: ['poverty', 'literacy', 'education', 'healthcare', 'social indicators', 'social development', 'quality of life', 'social services', 'public services', 'social welfare', 'social protection', 'income inequality', 'wealth distribution', 'social programs', 'education system', 'health system', 'social infrastructure', 'human development', 'social progress', 'social challenges', 'social reforms'],
        infrastructure: ['infrastructure', 'roads', 'ports', 'energy', 'water', 'electricity', 'transportation', 'construction', 'public works', 'urban development', 'rural infrastructure', 'transport networks', 'energy grid', 'water supply', 'sanitation', 'telecommunications', 'digital infrastructure', 'industrial zones', 'special economic zones', 'infrastructure projects', 'infrastructure investment', 'infrastructure development'],
        financial: ['banking', 'finance', 'investment', 'debt', 'reserves', 'financial sector', 'stock market', 'banks', 'monetary policy', 'fiscal policy', 'interest rates', 'exchange rates', 'currency', 'financial markets', 'financial services', 'financial inclusion', 'financial stability', 'financial reforms', 'banking sector', 'capital markets', 'foreign investment', 'public debt', 'government bonds', 'financial regulations'],
        policy: ['policy', 'reform', 'privatization', 'monetary', 'fiscal', 'economic policy', 'government policy', 'economic reforms', 'structural reforms', 'policy framework', 'policy measures', 'policy implementation', 'policy coordination', 'economic planning', 'development policy', 'industrial policy', 'trade policy', 'investment policy', 'regulatory framework', 'governance', 'transparency', 'corruption', 'public administration'],
        general: ['help', 'what can you do', 'tell me about', 'explain', 'how to', 'where to find', 'information about', 'guide', 'overview', 'summary', 'introduction', 'basics', 'fundamentals', 'key points', 'main aspects', 'important information', 'latest data', 'current situation', 'recent developments', 'trends', 'analysis', 'statistics', 'data', 'figures', 'reports']
    },
    responses: {
        default: "I'm sorry, I don't have enough information to answer that question. Please try rephrasing or ask about specific economic indicators, terms, or data from the dashboard. You can also ask me about Iraq's economy, trade, oil sector, employment, social indicators, or infrastructure. For a list of topics I can help with, try asking 'what can you tell me about?'",
        greeting: "Hello! I'm your Iraq Economic Dashboard assistant. I can help you understand economic terms, data, and trends. I can provide information about:\n- Economic indicators and GDP\n- Oil sector and exports\n- Trade and investment\n- Employment and labor market\n- Social development\n- Infrastructure\n- Financial sector\n- Economic policies\nWhat specific topic would you like to learn more about?",
        farewell: "Thank you for using the Iraq Economic Dashboard. I hope I've been helpful! Feel free to ask more questions anytime. You can also explore the interactive charts and data visualizations on the dashboard for more detailed information.",
        gdp: "Iraq's GDP is heavily influenced by oil production and exports. The country has experienced significant fluctuations in growth rates due to oil price changes and security challenges. Key points:\n- Oil sector contributes over 90% of government revenue\n- GDP growth has been volatile, ranging from -2.4% to 7.2% in recent years\n- Non-oil sectors are growing but remain underdeveloped\n- Per capita GDP is around $5,000 (2023 estimate)\nWould you like specific data about GDP growth, composition, per capita income, or sectoral breakdown?",
        oil: "Oil is central to Iraq's economy, with oil revenues funding approximately 90% of the government budget. Key facts:\n- Fifth-largest proven oil reserves globally (145+ billion barrels)\n- Daily production capacity of over 4.5 million barrels\n- Major oil fields include Rumaila, Kirkuk, and West Qurna\n- Main export terminals at Basra and Khor al-Amaya\n- OPEC member with significant production quota\nWhat specific aspect would you like to know more about? Production, reserves, exports, or infrastructure?",
        trade: "Iraq maintains a positive trade balance primarily due to oil exports. Key points:\n- Oil exports account for over 95% of total exports\n- Main trading partners include China, India, and South Korea\n- Imports focus on food, machinery, and consumer goods\n- Trade agreements with several regional partners\n- Efforts to diversify non-oil exports\nWould you like information about specific trade partners, non-oil exports, import composition, or trade policies?",
        employment: "Iraq faces challenges with high youth unemployment and underemployment. Key facts:\n- Youth unemployment rate around 25%\n- Public sector employs over 40% of workforce\n- Private sector development remains limited\n- Significant informal sector employment\n- Gender gap in labor force participation\nWould you like specific unemployment rates, employment sector data, labor market reforms, or information about specific employment programs?",
        social: "Iraq has made progress in improving social indicators, though challenges remain. Key points:\n- Literacy rate around 85%\n- Poverty rate estimated at 25%\n- Healthcare system undergoing modernization\n- Education system expanding but quality varies\n- Regional disparities in social development\nWould you like specific data about education, healthcare, poverty rates, or other social development indicators?",
        infrastructure: "Iraq's infrastructure requires significant investment. Key areas:\n- Oil infrastructure and export terminals\n- Ports and transportation networks\n- Energy grid and power generation\n- Water and sanitation systems\n- Digital infrastructure\n- Urban development projects\nWhat specific infrastructure aspect interests you? Projects, investment, or development plans?",
        financial: "Iraq's financial sector includes both traditional and Islamic banking. Key points:\n- Banking sector undergoing modernization\n- Significant foreign reserves from oil exports\n- Stock market in Baghdad\n- Growing Islamic finance sector\n- Financial inclusion initiatives\nWould you like specific information about banking, investment, financial policies, or market developments?",
        policy: "Iraq is implementing various economic reforms. Key areas:\n- Anti-corruption measures\n- Business climate improvement\n- Private sector development\n- Public sector reform\n- Investment promotion\nWhat specific policy area would you like to know more about? Reforms, regulations, or specific initiatives?",
        general: "I can help you understand various aspects of Iraq's economy. You can ask me about:\n- Economic indicators and trends\n- Oil sector and exports\n- Trade and investment\n- Employment and labor market\n- Social development\n- Infrastructure\n- Financial sector\n- Economic policies\n\nFor specific data, try asking about:\n- Latest statistics\n- Historical trends\n- Future projections\n- Policy measures\n- Development programs\nWhat specific topic would you like to learn more about?"
    }
};

// Add chat history functionality
function saveChatHistory() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const messages = Array.from(messagesContainer.children).map(msg => ({
        text: msg.textContent,
        sender: msg.classList.contains('user') ? 'user' : 'bot'
    }));
    
    localStorage.setItem('chatHistory', JSON.stringify(messages));
}

function loadChatHistory() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
        const messages = JSON.parse(savedHistory);
        messages.forEach(msg => {
            addMessage(msg.text, msg.sender);
        });
    } else {
        // Add welcome message if no history exists
        addMessage("Hello! I'm your Iraq Economic Dashboard assistant. I can help you understand economic terms, data, and trends. What would you like to know?", 'bot');
    }
}

// Update addMessage function to save history
function addMessage(message, sender) {
    console.log('Adding message:', message, 'from:', sender);
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) {
        console.error('Messages container not found');
        return;
    }
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    saveChatHistory();
}

function createChatbot() {
    console.log('Creating chatbot...');
    const chatbotHTML = `
        <div class="chatbot-container minimized">
            <div class="chatbot-header">
                <h3>Economic Dashboard Assistant</h3>
                <div class="chatbot-controls">
                    <button class="chatbot-export" onclick="exportChat()" title="Export Chat">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="chatbot-clear" onclick="clearChat()" title="Clear Chat">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="chatbot-toggle" onclick="toggleChatbot()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbotMessages">
                <!-- Messages will be loaded here -->
            </div>
            <div class="chatbot-input">
                <input type="text" id="userInput" placeholder="Ask a question about Iraq's economy..." onkeypress="handleKeyPress(event)">
                <button onclick="sendMessage()" title="Send Message">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
        <div class="chatbot-icon" onclick="toggleChatbot()">
            <i class="fas fa-comments"></i>
            <span class="notification-badge">1</span>
        </div>
    `;

    const chatbotContainer = document.createElement('div');
    chatbotContainer.innerHTML = chatbotHTML;
    document.body.appendChild(chatbotContainer);
    loadChatHistory();
    console.log('Chatbot created successfully');
}

function toggleChatbot() {
    console.log('Toggling chatbot...');
    const container = document.querySelector('.chatbot-container');
    const icon = document.querySelector('.chatbot-icon');
    if (!container || !icon) {
        console.error('Chatbot elements not found');
        return;
    }
    container.classList.toggle('minimized');
    icon.style.display = container.classList.contains('minimized') ? 'flex' : 'none';
    // Remove notification badge when opening
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.style.display = 'none';
    }
    console.log('Chatbot toggled successfully');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return typingDiv;
}

function removeTypingIndicator(typingDiv) {
    if (typingDiv) {
        typingDiv.remove();
    }
}

function sendMessage() {
    console.log('Sending message...');
    const input = document.getElementById('userInput');
    if (!input) {
        console.error('User input not found');
        return;
    }
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        const typingDiv = showTypingIndicator();
        
        // Simulate typing delay based on message length
        const delay = Math.min(message.length * 50, 2000);
        
        setTimeout(() => {
            removeTypingIndicator(typingDiv);
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, delay);
    }
}

function generateResponse(message) {
    console.log('Generating response for:', message);
    message = message.toLowerCase();

    // Check for greetings
    if (chatbotData.greetings.some(greeting => message.includes(greeting))) {
        return chatbotData.responses.greeting;
    }

    // Check for farewells
    if (chatbotData.farewells.some(farewell => message.includes(farewell))) {
        return chatbotData.responses.farewell;
    }

    // Check for general help queries
    if (chatbotData.keywords.general.some(keyword => message.includes(keyword))) {
        return chatbotData.responses.general;
    }

    // Check for keywords and return appropriate response
    for (const [category, keywords] of Object.entries(chatbotData.keywords)) {
        if (keywords.some(keyword => message.includes(keyword))) {
            return chatbotData.responses[category];
        }
    }

    // Default response if no keywords match
    return chatbotData.responses.default;
}

// Add export chat functionality
function exportChat() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const messages = Array.from(messagesContainer.children).map(msg => ({
        text: msg.textContent,
        sender: msg.classList.contains('user') ? 'User' : 'Assistant',
        timestamp: new Date().toLocaleString()
    }));
    
    const chatText = messages.map(msg => 
        `[${msg.timestamp}] ${msg.sender}: ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-history-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Add clear chat functionality
function clearChat() {
    if (confirm('Are you sure you want to clear the chat history?')) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
            localStorage.removeItem('chatHistory');
            addMessage("Hello! I'm your Iraq Economic Dashboard assistant. I can help you understand economic terms, data, and trends. What would you like to know?", 'bot');
        }
    }
}

// Initialize chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded, initializing chatbot...');
    createChatbot();
}); 