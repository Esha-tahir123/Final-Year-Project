import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, MessageCircle, ThumbsUp, Clock, Search, X, PlusCircle, Code, Users, Award } from 'lucide-react';
import { auth, db } from "./authentication/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const CommunityHub = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('qa');
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  // Fetch current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Fetch questions and chat messages from Firestore
  useEffect(() => {
    const fetchQuestions = () => {
      const q = query(collection(db, "questions"), orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        const questionsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(questionsData);
      });
    };

    const fetchChatMessages = () => {
      const q = query(collection(db, "chat"), orderBy("createdAt", "asc"));
      onSnapshot(q, (snapshot) => {
        const messagesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChatMessages(messagesData);
      });
    };

    fetchQuestions();
    fetchChatMessages();
    setLoading(false);
  }, []);

  const handlePostQuestion = async () => {
    if (!user) {
      alert("Please log in to post a question.");
      return;
    }

    try {
      await addDoc(collection(db, "questions"), {
        title: newQuestion,
        author: user.email,
        createdAt: new Date(),
        likes: 0,
        comments: []
      });
      setNewQuestion("");
      setShowQuestionModal(false);
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!user || !newMessage.trim()) {
      return;
    }

    try {
      await addDoc(collection(db, "chat"), {
        author: user.email,
        message: newMessage,
        createdAt: new Date(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const tabVariants = {
    inactive: { color: "#6b7280", borderColor: "transparent" },
    active: { 
      color: "#f97316", 
      borderColor: "#f97316",
      transition: { duration: 0.3 }
    }
  };

  const statsItems = [
    { icon: <MessageCircle />, value: questions.length, label: "Questions" },
    { icon: <Users />, value: chatMessages.length, label: "Messages" },
    { icon: <Award />, value: "24/7", label: "Support" }
  ];

  return (
    <div id="community" className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto pt-12 lg:pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Connect with our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              developer community
            </span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Share knowledge, ask questions, and collaborate with peers in our 
            vibrant developer community platform.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {statsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center hover:border-orange-700 transition-all duration-300 shadow-sm hover:shadow-orange-900/20"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-800 flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
              <p className="text-neutral-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-neutral-800 mb-8">
          <div className="flex max-w-md mx-auto">
            <motion.button
              animate={activeTab === 'qa' ? "active" : "inactive"}
              variants={tabVariants}
              onClick={() => setActiveTab('qa')}
              className="flex-1 py-4 text-lg font-medium flex items-center justify-center border-b-2"
            >
              <MessageCircle className="mr-2 w-5 h-5" /> Q&A Forum
            </motion.button>
            <motion.button
              animate={activeTab === 'chat' ? "active" : "inactive"}
              variants={tabVariants}
              onClick={() => setActiveTab('chat')}
              className="flex-1 py-4 text-lg font-medium flex items-center justify-center border-b-2"
            >
              <MessageSquare className="mr-2 w-5 h-5" /> Live Chat
            </motion.button>
          </div>
        </div>

        {/* Q&A Forum Section */}
        {activeTab === 'qa' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 mb-20"
          >
            {/* Search and Ask Question Row */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Create Question Button */}
              <motion.button 
                onClick={() => setShowQuestionModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-6 rounded-lg flex items-center justify-center shadow-md shadow-orange-900/20"
              >
                <PlusCircle className="mr-2 w-5 h-5" /> Ask a Question
              </motion.button>
            </div>

            {/* Questions List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {loading ? (
                <div className="flex justify-center py-24">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-neutral-800 border-t-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-neutral-800 border-b-orange-800 rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>
              ) : filteredQuestions.length === 0 ? (
                <motion.div 
                  variants={itemVariants}
                  className="text-center py-16 bg-neutral-900 border border-neutral-800 rounded-lg"
                >
                  <MessageCircle className="mx-auto h-16 w-16 text-neutral-700 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">No questions yet</h3>
                  <p className="text-neutral-400 mb-6">Be the first to ask a question!</p>
                  <motion.button 
                    onClick={() => setShowQuestionModal(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-8 rounded-lg inline-flex items-center shadow-md shadow-orange-900/20"
                  >
                    <PlusCircle className="mr-2 w-4 h-4" /> Ask a Question
                  </motion.button>
                </motion.div>
              ) : (
                filteredQuestions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    variants={itemVariants}
                    className="border border-neutral-800 rounded-lg p-5 bg-neutral-900 hover:border-orange-700 transition-all duration-300 hover:shadow-md hover:shadow-orange-900/10"
                  >
                    <h3 className="text-xl font-medium text-white">{question.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-neutral-400 mt-3">
                      <span>{question.author}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{question.createdAt.toDate().toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm mt-4">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-neutral-400 hover:text-orange-500 transition-all duration-300"
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span>{question.likes || 0}</span>
                      </motion.button>
                      <div className="flex items-center gap-1 text-neutral-400">
                        <MessageSquare className="w-5 h-5" />
                        <span>{question.comments?.length || 0} comments</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Live Chat Section */}
        {activeTab === 'chat' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border border-neutral-800 rounded-lg bg-neutral-900 overflow-hidden shadow-lg shadow-orange-900/10 mb-20"
          >
            <div className="p-5 bg-neutral-900 border-b border-neutral-800">
              <h2 className="text-xl font-bold">Live Chat</h2>
              <p className="text-neutral-400 text-sm">Connect with the community in real-time</p>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-black">
              {chatMessages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="h-16 w-16 text-neutral-700 mb-3" />
                    <h3 className="text-xl font-bold mb-2">No messages yet</h3>
                    <p className="text-neutral-400 mb-4">Be the first to send a message!</p>
                  </motion.div>
                </div>
              ) : (
                chatMessages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className={`flex flex-col ${
                      msg.author === user?.email ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div className={`rounded-lg p-3 max-w-[80%] ${
                      msg.author === user?.email 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white'
                      : 'bg-neutral-800 text-white'
                    }`}>
                      <div className="font-medium text-sm">{msg.author}</div>
                      <div className="mt-1">{msg.message}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {msg.createdAt.toDate().toLocaleTimeString()}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            
            <div className="p-4 border-t border-neutral-800 bg-neutral-900">
              {user ? (
                <div className="flex gap-2">
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <motion.button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              ) : (
                <div className="text-center py-4 bg-neutral-800 rounded-lg border border-neutral-700">
                  <p className="text-neutral-300 mb-3">You need to be logged in to send messages</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Sign In
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Question Modal */}
      {showQuestionModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-neutral-900 rounded-lg shadow-xl w-full max-w-md border border-neutral-800 overflow-hidden"
          >
            <div className="flex justify-between items-center p-5 border-b border-neutral-800 bg-black">
              <h3 className="text-xl font-bold text-white">Ask a Question</h3>
              <motion.button 
                onClick={() => setShowQuestionModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-5">
              <label className="block text-sm font-medium text-neutral-300 mb-2">Your Question</label>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="What do you want to ask the community?"
                className="w-full bg-black border border-neutral-800 rounded-lg p-3 h-32 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all duration-300"
              />
              <div className="mt-6 flex gap-3 justify-end">
                <motion.button 
                  onClick={() => setShowQuestionModal(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-300 hover:bg-neutral-800 transition-all duration-300"
                >
                  Cancel
                </motion.button>
                <motion.button 
                  onClick={handlePostQuestion}
                  disabled={!newQuestion.trim()}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-5 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-orange-900/20"
                >
                  Post Question
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CommunityHub;