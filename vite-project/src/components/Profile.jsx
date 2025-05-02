import React, { useEffect, useState } from 'react';
import { db, storage } from './authentication/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User, MapPin, Briefcase, Link, Globe, Award, Edit2, Phone, Github } from 'lucide-react';

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [isEditing, setIsEditing] = useState({
    about: false,
    fullName: false,
    role: false,
    city: false,
    country: false,
    phone: false,
    portfolioUrl: false,
    githubProfile: false,
    programmingLanguage: false,
    skillLevel: false,
    yearsOfExperience: false
  });

  // Function to handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    try {
      const storageRef = ref(storage, `profiles/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'users', user.uid), { profileLogo: url });
      setProfileImage(url);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsUploading(false);
  };

  // Function to handle editing state
  const handleEditToggle = (field) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    setEditValue(userData?.[field] || '');
  };

  // Function to save edited values
  const handleSave = async (field, value) => {
    try {
      const updateValue = value || editValue;
      await updateDoc(doc(db, 'users', user.uid), {
        [field]: updateValue
      });
      setUserData(prev => ({
        ...prev,
        [field]: updateValue
      }));
      setIsEditing(prev => ({
        ...prev,
        [field]: false
      }));
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };

  // EditableField component
  const EditableField = ({ value, isEditing, onEdit, onSave, type = "text" }) => {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    return isEditing ? (
      <div className="flex items-center gap-2">
        <input
          type={type}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          className="bg-white/10 rounded-lg px-3 py-1 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={() => onSave(localValue)}
          className="px-3 py-1 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-all duration-300"
        >
          Save
        </button>
      </div>
    ) : (
      <div className="flex items-center gap-2">
        <span>{value}</span>
        <button
          onClick={onEdit}
          className="p-1 hover:bg-white/10 rounded-full transition-all duration-300"
        >
          <Edit2 className="w-4 h-4 text-purple-400" />
        </button>
      </div>
    );
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.uid) return;
      try {
        const docSnap = await getDoc(doc(db, 'users', user.uid));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          if (data.profileLogo) {
            const url = await getDownloadURL(ref(storage, data.profileLogo));
            setProfileImage(url);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false);
    };
    fetchUserData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full ring-4 ring-orange-400 ring-offset-4 ring-offset-orange-900 overflow-hidden shadow-xl">
                    {isUploading ? (
                      <div className="w-full h-full bg-orange-800 animate-pulse" />
                    ) : (
                      <img
                        src={profileImage || '/default-avatar.png'}
                        alt={userData?.fullName}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 bg-orange-500 p-3 rounded-full cursor-pointer shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                    <Edit2 className="w-4 h-4 text-white" />
                  </label>
                </div>

                <div className="mt-6 text-center">
                  <EditableField
                    value={userData?.fullName}
                    isEditing={isEditing.fullName}
                    onEdit={() => handleEditToggle('fullName')}
                    onSave={(value) => handleSave('fullName', value)}
                  />
                 
                </div>

                <div className="flex items-center mt-3 text-orange-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <EditableField
                    value={`${userData?.city || ''}, ${userData?.country || ''}`}
                    isEditing={isEditing.location}
                    onEdit={() => handleEditToggle('location')}
                    onSave={(value) => {
                      const [city, country] = value.split(',').map(v => v.trim());
                      handleSave('city', city);
                      handleSave('country', country);
                    }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-orange-400">{userData?.skillsAttempted || 0}</div>
                  <div className="text-sm text-orange-200 font-medium">Skills Verified</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-orange-400">{userData?.badgesEarned || 0}</div>
                  <div className="text-sm text-orange-200 font-medium">Badges Earned</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-orange-200 border-b border-orange-700/50 pb-2">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-orange-300 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <User className="w-5 h-5 mr-3 text-orange-400" />
                    <span className="font-medium">{userData?.email}</span>
                  </div>
                  <div className="flex items-center text-orange-300 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Phone className="w-5 h-5 mr-3 text-orange-400" />
                    <EditableField
                      value={userData?.phone}
                      isEditing={isEditing.phone}
                      onEdit={() => handleEditToggle('phone')}
                      onSave={(value) => handleSave('phone', value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Professional Profile */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent mb-8">
                Professional Profile
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Skills Section */}
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-orange-400 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-orange-400" />
                    Skills & Expertise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-orange-300">Primary Language</span>
                      <EditableField
                        value={userData?.programmingLanguage}
                        isEditing={isEditing.programmingLanguage}
                        onEdit={() => handleEditToggle('programmingLanguage')}
                        onSave={(value) => handleSave('programmingLanguage', value)}
                      />
                      
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-orange-300">Skill Level</span>
                      <EditableField
                        value={userData?.skillLevel}
                        isEditing={isEditing.skillLevel}
                        onEdit={() => handleEditToggle('skillLevel')}
                        onSave={(value) => handleSave('skillLevel', value)}
                      />
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-orange-300">Experience</span>
                      <EditableField
                        value={`${userData?.yearsOfExperience || 0} years`}
                        isEditing={isEditing.yearsOfExperience}
                        onEdit={() => handleEditToggle('yearsOfExperience')}
                        onSave={(value) => handleSave('yearsOfExperience', value.replace(' years', ''))}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-orange-400 mb-6 flex items-center">
                    <Link className="w-6 h-6 mr-3 text-orange-400" />
                    Professional Links
                  </h3>
                  
                  {/* Portfolio Link */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-orange-300 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                        <span>Portfolio Website</span>
                      </div>
                      <EditableField
                        value={userData?.portfolioUrl}
                        isEditing={isEditing.portfolioUrl}
                        onEdit={() => handleEditToggle('portfolioUrl')}
                        onSave={(value) => handleSave('portfolioUrl', value)}
                      />
                    </div>
                    {userData?.portfolioUrl && !isEditing.portfolioUrl && (
                      <a 
                        href={userData.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-11 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        Visit Portfolio →
                      </a>
                    )}
                  </div>

                  {/* GitHub Link */}
                  <div>
                    <div className="flex items-center justify-between text-orange-300 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                      <div className="flex items-center">
{/* Continuing from the Github section */}
<Github className="w-5 h-5 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                        <span>GitHub Profile</span>
                      </div>
                      <EditableField
                        value={userData?.githubProfile}
                        isEditing={isEditing.githubProfile}
                        onEdit={() => handleEditToggle('githubProfile')}
                        onSave={(value) => handleSave('githubProfile', value)}
                      />
                    </div>
                    {userData?.githubProfile && !isEditing.githubProfile && (
                      <a 
                        href={userData.githubProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-11 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        View GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Timeline */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent mb-8">
                Profile Timeline
              </h2>
              <div className="relative">
                <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"></div>
                <div className="space-y-6">
                  <div className="flex items-center relative">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 z-10">
                      <div className="w-4 h-4 bg-orange-700 rounded-full"></div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-lg border border-white/10 flex-grow transform hover:scale-[1.02] transition-all duration-300">
                      <span className="text-orange-200">
                        Joined on {userData?.createdAt?.toDate ? new Date(userData.createdAt.toDate()).toLocaleDateString() : 'Date not available'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;