import React, { useState } from "react";
import { User, MapPin, GraduationCap, CheckCircle, AlertCircle, Upload, FileText, Users, Calendar, Shield } from "lucide-react";

const programmes = [
  { id: 1, name: "3-Month Skills Development", fee: 2500, duration: "3 months", targetGroup: "Youth and Women aged 18-35" },
  { id: 2, name: "4-Month Skills Development", fee: 3500, duration: "4 months", targetGroup: "Youth aged 18-35" },
  { id: 3, name: "First Aid Training (SETA-accredited)", fee: 1500, duration: "2 weeks", targetGroup: "All ages" },
  { id: 4, name: "Economic Empowerment Skills", fee: 2000, duration: "6 weeks", targetGroup: "Adults 18+" },
  { id: 5, name: "Tech & IT Graduate Programme", fee: 5000, duration: "6 months", targetGroup: "Graduates with IT qualifications" },
];

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    alternatePhone: '',
    
    // Address Information
    streetAddress: '',
    suburb: '',
    city: '',
    province: '',
    postalCode: '',
    
    // Educational Background
    highestQualification: '',
    institutionName: '',
    yearCompleted: '',
    currentlyStudying: false,
    
    // Employment Information
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    monthlyIncome: '',
    
    // Programme Selection
    selectedProgramme: '',
    startDate: '',
    motivation: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    
    // Documents
    documents: {},
    
    // Payment Information
    paymentMethod: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFileUpload = (documentType, file) => {
    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
      setErrors(prev => ({
        ...prev,
        [documentType]: 'File size must be less than 5MB'
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [documentType]: file
      }
    }));
    
    // Clear error when file is uploaded
    if (errors[documentType]) {
      setErrors(prev => ({
        ...prev,
        [documentType]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
switch (step) {
  case 1: // Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.idNumber.trim()) newErrors.idNumber = 'ID number is required';
    if (formData.idNumber && !/^\d{13}$/.test(formData.idNumber)) newErrors.idNumber = 'ID number must be 13 digits';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Phone number must be 10 digits';
    break;
    
  case 2: // Address Information
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'Province is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (formData.postalCode && !/^\d{4}$/.test(formData.postalCode)) newErrors.postalCode = 'Postal code must be 4 digits';
    break;
    
  case 3: // Educational & Employment
    if (!formData.highestQualification.trim()) newErrors.highestQualification = 'Highest qualification is required';
    if (!formData.employmentStatus.trim()) newErrors.employmentStatus = 'Employment status is required';
    if (formData.highestQualification !== 'No formal qualification' && !formData.institutionName.trim()) {
      newErrors.institutionName = 'Institution name is required';
    }
    break;
    
  case 4: // Programme Selection
    if (!formData.selectedProgramme) newErrors.selectedProgramme = 'Please select a programme';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';
    if (formData.motivation && formData.motivation.length < 50) newErrors.motivation = 'Motivation must be at least 50 characters';
    break;
    
  case 5: // Emergency Contact
    if (!formData.emergencyContactName.trim()) newErrors.emergencyContactName = 'Emergency contact name is required';
    if (!formData.emergencyContactPhone.trim()) newErrors.emergencyContactPhone = 'Emergency contact phone is required';
    if (!formData.emergencyContactRelation.trim()) newErrors.emergencyContactRelation = 'Relationship is required';
    break;
    
  case 6: // Documents & Payment
    if (!formData.documents.idCopy) newErrors.idCopy = 'ID copy is required';
    if (!formData.documents.qualificationCertificate && formData.highestQualification !== 'No formal qualification') {
      newErrors.qualificationCertificate = 'Qualification certificate is required';
    }
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms and conditions';
    break;
    
  default:
    break;
}

setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(6)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      setCurrentStep(7); // Success step
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedProgramme = () => {
    return programmes.find(p => p.id.toString() === formData.selectedProgramme);
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
      <div 
        className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${(currentStep / 7) * 100}%` }}
      ></div>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="flex justify-between items-center mb-8">
      {[1, 2, 3, 4, 5, 6, 7].map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step < currentStep ? 'bg-green-500 text-white' :
            step === currentStep ? 'bg-orange-500 text-white' :
            'bg-gray-200 text-gray-500'
          }`}>
            {step < currentStep ? <CheckCircle size={20} /> : step}
          </div>
          <span className="text-xs mt-1 text-gray-600">
            {step === 1 ? 'Personal' :
             step === 2 ? 'Address' :
             step === 3 ? 'Education' :
             step === 4 ? 'Programme' :
             step === 5 ? 'Emergency' :
             step === 6 ? 'Payment' : 'Complete'}
          </span>
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <User className="mr-3" size={28} />
              Personal Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.lastName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ID Number *</label>
                <input
                  type="text"
                  maxLength="13"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.idNumber ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter your 13-digit ID number"
                />
                {errors.idNumber && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.idNumber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                  placeholder="0123456789"
                  maxLength="10"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alternate Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.alternatePhone}
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value.replace(/\D/g, ''))}
                  placeholder="0123456789"
                  maxLength="10"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <MapPin className="mr-3" size={28} />
              Address Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  placeholder="123 Main Street"
                />
                {errors.streetAddress && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.streetAddress}</p>}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Suburb</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    value={formData.suburb}
                    onChange={(e) => handleInputChange('suburb', e.target.value)}
                    placeholder="Suburb name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="City name"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.city}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Province *</label>
                  <select
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.province ? 'border-red-500' : 'border-gray-300'}`}
                    value={formData.province}
                    onChange={(e) => handleInputChange('province', e.target.value)}
                  >
                    <option value="">Select Province</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="Northern Cape">Northern Cape</option>
                    <option value="North West">North West</option>
                    <option value="Western Cape">Western Cape</option>
                  </select>
                  {errors.province && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.province}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                  <input
                    type="text"
                    maxLength="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value.replace(/\D/g, ''))}
                    placeholder="1234"
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.postalCode}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <GraduationCap className="mr-3" size={28} />
              Education & Employment
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Highest Qualification *</label>
                <select
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.highestQualification ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.highestQualification}
                  onChange={(e) => handleInputChange('highestQualification', e.target.value)}
                >
                  <option value="">Select Highest Qualification</option>
                  <option value="No formal qualification">No formal qualification</option>
                  <option value="Primary education">Primary education</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 12/Matric">Grade 12/Matric</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's degree">Bachelor's degree</option>
                  <option value="Honours degree">Honours degree</option>
                  <option value="Master's degree">Master's degree</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
                {errors.highestQualification && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.highestQualification}</p>}
              </div>
              
              {formData.highestQualification && formData.highestQualification !== 'No formal qualification' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name *</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.institutionName ? 'border-red-500' : 'border-gray-300'}`}
                      value={formData.institutionName}
                      onChange={(e) => handleInputChange('institutionName', e.target.value)}
                      placeholder="Name of institution"
                    />
                    {errors.institutionName && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.institutionName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year Completed</label>
                    <input
                      type="number"
                      min="1950"
                      max="2025"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      value={formData.yearCompleted}
                      onChange={(e) => handleInputChange('yearCompleted', e.target.value)}
                      placeholder="2023"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="currentlyStudying"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  checked={formData.currentlyStudying}
                  onChange={(e) => handleInputChange('currentlyStudying', e.target.checked)}
                />
                <label htmlFor="currentlyStudying" className="ml-2 block text-sm text-gray-700">
                  I am currently studying
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status *</label>
                <select
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.employmentStatus ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.employmentStatus}
                  onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                >
                  <option value="">Select Employment Status</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Part-time employed">Part-time employed</option>
                  <option value="Full-time employed">Full-time employed</option>
                  <option value="Student">Student</option>
                  <option value="Retired">Retired</option>
                </select>
                {errors.employmentStatus && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.employmentStatus}</p>}
              </div>
              
              {(formData.employmentStatus === 'Part-time employed' || formData.employmentStatus === 'Full-time employed' || formData.employmentStatus === 'Self-employed') && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employer/Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      value={formData.employer}
                      onChange={(e) => handleInputChange('employer', e.target.value)}
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      placeholder="Your job title"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (Optional)</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.monthlyIncome}
                  onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                >
                  <option value="">Select income range</option>
                  <option value="R0 - R1,000">R0 - R1,000</option>
                  <option value="R1,001 - R3,000">R1,001 - R3,000</option>
                  <option value="R3,001 - R5,000">R3,001 - R5,000</option>
                  <option value="R5,001 - R10,000">R5,001 - R10,000</option>
                  <option value="R10,001 - R20,000">R10,001 - R20,000</option>
                  <option value="R20,000+">R20,000+</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <Calendar className="mr-3" size={28} />
              Programme Selection
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Select Programme *</label>
                <div className="grid md:grid-cols-1 gap-4">
                  {programmes.map((programme) => (
                    <div
                      key={programme.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        formData.selectedProgramme === programme.id.toString()
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200'
                      }`}
                      onClick={() => handleInputChange('selectedProgramme', programme.id.toString())}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">{programme.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">Duration: {programme.duration}</p>
                          <p className="text-sm text-gray-600">Target Group: {programme.targetGroup}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-orange-600">R{programme.fee.toLocaleString()}</p>
                          <div className={`w-5 h-5 rounded-full border-2 mt-2 ${
                            formData.selectedProgramme === programme.id.toString()
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {formData.selectedProgramme === programme.id.toString() && (
                              <CheckCircle size={16} className="text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.selectedProgramme && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.selectedProgramme}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date *</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.startDate ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
                {errors.startDate && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.startDate}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivation for Joining (minimum 50 characters) *</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none ${errors.motivation ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Please explain why you want to join this programme and how it will benefit your career goals..."
                />
                <div className="flex justify-between mt-1">
                  {errors.motivation && <p className="text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" />{errors.motivation}</p>}
                  <span className="text-sm text-gray-500 ml-auto">{formData.motivation.length}/50</span>
                </div>
              </div>
              
              {getSelectedProgramme() && (
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-800 mb-2">Programme Summary</h3>
                  <div className="text-sm text-orange-700 space-y-1">
                    <p><strong>Programme:</strong> {getSelectedProgramme().name}</p>
                    <p><strong>Duration:</strong> {getSelectedProgramme().duration}</p>
                    <p><strong>Fee:</strong> R{getSelectedProgramme().fee.toLocaleString()}</p>
                    <p><strong>Target Group:</strong> {getSelectedProgramme().targetGroup}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <Users className="mr-3" size={28} />
              Emergency Contact
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name *</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.emergencyContactName ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                  placeholder="Full name of emergency contact"
                />
                {errors.emergencyContactName && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.emergencyContactName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone *</label>
                <input
                  type="tel"
                  maxLength="10"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.emergencyContactPhone ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.emergencyContactPhone}
                  onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value.replace(/\D/g, ''))}
                  placeholder="0123456789"
                />
                {errors.emergencyContactPhone && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.emergencyContactPhone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship to You *</label>
                <select
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${errors.emergencyContactRelation ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.emergencyContactRelation}
                  onChange={(e) => handleInputChange('emergencyContactRelation', e.target.value)}
                >
                  <option value="">Select Relationship</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Partner">Partner</option>
                  <option value="Child">Child</option>
                  <option value="Friend">Friend</option>
                  <option value="Relative">Relative</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Other">Other</option>
                </select>
                {errors.emergencyContactRelation && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.emergencyContactRelation}</p>}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Shield className="text-blue-600 mr-2 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Privacy Notice</h3>
                    <p className="text-sm text-blue-700">
                      Your emergency contact information will only be used in case of emergencies during your programme participation. 
                      This information is stored securely and will not be shared with third parties without your consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
              <FileText className="mr-3" size={28} />
              Documents & Payment
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Documents</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ID Copy *</label>
                    <div className="flex items-center space-x-3">
                      <label className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${errors.idCopy ? 'border-red-400' : 'border-gray-300'}`}>
                        <Upload className="mr-2" size={20} />
                        <span className="text-sm">
                          {formData.documents.idCopy ? formData.documents.idCopy.name : 'Upload ID Copy (PDF, JPG, PNG - Max 5MB)'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('idCopy', e.target.files[0])}
                        />
                      </label>
                      {formData.documents.idCopy && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                    </div>
                    {errors.idCopy && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.idCopy}</p>}
                  </div>
                  
                  {formData.highestQualification !== 'No formal qualification' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qualification Certificate *</label>
                      <div className="flex items-center space-x-3">
                        <label className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${errors.qualificationCertificate ? 'border-red-400' : 'border-gray-300'}`}>
                          <Upload className="mr-2" size={20} />
                          <span className="text-sm">
                            {formData.documents.qualificationCertificate ? formData.documents.qualificationCertificate.name : 'Upload Qualification Certificate (PDF, JPG, PNG - Max 5MB)'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileUpload('qualificationCertificate', e.target.files[0])}
                          />
                        </label>
                        {formData.documents.qualificationCertificate && (
                          <CheckCircle className="text-green-500" size={20} />
                        )}
                      </div>
                      {errors.qualificationCertificate && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.qualificationCertificate}</p>}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Address (Optional)</label>
                    <div className="flex items-center space-x-3">
                      <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer transition-all hover:bg-gray-50">
                        <Upload className="mr-2" size={20} />
                        <span className="text-sm">
                          {formData.documents.proofOfAddress ? formData.documents.proofOfAddress.name : 'Upload Proof of Address (PDF, JPG, PNG - Max 5MB)'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('proofOfAddress', e.target.files[0])}
                        />
                      </label>
                      {formData.documents.proofOfAddress && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
                
                {getSelectedProgramme() && (
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-orange-800">Programme Fee:</span>
                      <span className="text-xl font-bold text-orange-600">R{getSelectedProgramme().fee.toLocaleString()}</span>
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method *</label>
                  <div className="space-y-3">
                    {[
                      { id: 'bank-transfer', name: 'Bank Transfer', desc: 'Transfer funds directly to our bank account' },
                      { id: 'card-payment', name: 'Card Payment', desc: 'Pay with credit or debit card' },
                      { id: 'installments', name: 'Payment Plan', desc: 'Split payment into installments' },
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.paymentMethod === method.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('paymentMethod', method.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            formData.paymentMethod === method.id
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {formData.paymentMethod === method.id && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{method.name}</p>
                            <p className="text-sm text-gray-600">{method.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.paymentMethod}</p>}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    className={`h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1 ${errors.agreedToTerms ? 'border-red-500' : ''}`}
                    checked={formData.agreedToTerms}
                    onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-700 leading-relaxed">
                    I agree to the <button type="button" className="text-orange-600 hover:underline bg-transparent border-none p-0 cursor-pointer">Terms and Conditions</button> and 
<button type="button" className="text-orange-600 hover:underline ml-1 bg-transparent border-none p-0 cursor-pointer">Privacy Policy</button>. I understand that:
                    <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-gray-600">
                      <li>Registration fees are non-refundable once the programme starts</li>
                      <li>I must attend a minimum of 80% of classes to receive certification</li>
                      <li>My personal information will be used for programme administration</li>
                      <li>I may be contacted for programme updates and feedback</li>
                    </ul>
                  </label>
                </div>
                {errors.agreedToTerms && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={16} className="mr-1" />{errors.agreedToTerms}</p>}
              </div>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h2>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for registering with us. Your application has been submitted successfully.
              </p>
            </div>
            
            {getSelectedProgramme() && (
              <div className="bg-gray-50 p-6 rounded-lg text-left max-w-md mx-auto">
                <h3 className="font-semibold text-gray-800 mb-3">Registration Summary</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Programme:</strong> {getSelectedProgramme().name}</p>
                  <p><strong>Start Date:</strong> {new Date(formData.startDate).toLocaleDateString()}</p>
                  <p><strong>Fee:</strong> R{getSelectedProgramme().fee.toLocaleString()}</p>
                  <p><strong>Payment Method:</strong> {
                    formData.paymentMethod === 'bank-transfer' ? 'Bank Transfer' :
                    formData.paymentMethod === 'card-payment' ? 'Card Payment' : 'Payment Plan'
                  }</p>
                </div>
              </div>
            )}
            
            <div className="space-y-3">
              <p className="text-gray-700">
                You will receive a confirmation email with payment instructions and next steps within 24 hours.
              </p>
              
              {formData.paymentMethod === 'bank-transfer' && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Bank Transfer Details</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>Bank:</strong> First National Bank</p>
                    <p><strong>Account Name:</strong> Community Skills Development</p>
                    <p><strong>Account Number:</strong> 123456789</p>
                    <p><strong>Branch Code:</strong> 250655</p>
                    <p><strong>Reference:</strong> {formData.firstName}{formData.lastName}_{formData.idNumber.slice(-4)}</p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-medium"
                  onClick={() => window.print()}
                >
                  Print Summary
                </button>
                <button
                  className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-all font-medium"
                  onClick={() => {
                    setCurrentStep(1);
                    setFormData({
                      firstName: '', lastName: '', idNumber: '', dateOfBirth: '', gender: '', email: '', phone: '', alternatePhone: '',
                      streetAddress: '', suburb: '', city: '', province: '', postalCode: '',
                      highestQualification: '', institutionName: '', yearCompleted: '', currentlyStudying: false,
                      employmentStatus: '', employer: '', jobTitle: '', monthlyIncome: '',
                      selectedProgramme: '', startDate: '', motivation: '',
                      emergencyContactName: '', emergencyContactPhone: '', emergencyContactRelation: '',
                      documents: {}, paymentMethod: '', agreedToTerms: false,
                    });
                    setErrors({});
                  }}
                >
                  New Registration
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Student Registration</h1>
            <p className="text-gray-600">Complete your registration to join our skills development programmes</p>
          </div>
          
          {/* Progress Indicators */}
          {currentStep < 7 && (
            <>
              {renderProgressBar()}
              {renderStepIndicator()}
            </>
          )}
          
          {/* Step Content */}
          <div className="mb-8">
            {renderStepContent()}
          </div>
          
          {/* Navigation Buttons */}
          {currentStep < 7 && (
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                Previous
              </button>
              
              <div className="text-sm text-gray-500">
                Step {currentStep} of 6
              </div>
              
              {currentStep === 6 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Registration'
                  )}
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-medium shadow-md hover:shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          )}
          
          {errors.submit && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 flex items-center">
                <AlertCircle size={16} className="mr-2" />
                {errors.submit}
              </p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Need help? Contact us at <a href="mailto:info@skillsdevelopment.org" className="text-orange-600 hover:underline">info@skillsdevelopment.org</a> or call 011 123 4567</p>
        </div>
      </div>
    </div>

  );
};

export default Registration;