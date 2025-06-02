import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    enum: ['Early', 'Middle', 'Late'],
    required: true
  },
  caregiverContact: {
    name: String,
    phone: String,
    email: String,
    relationship: String
  },
  medications: [{
    name: String,
    dosage: String,
    frequency: String,
    startDate: Date
  }],
  cognitiveAssessments: [{
    date: Date,
    score: Number,
    type: String,
    notes: String
  }],
  dailyActivities: [{
    date: Date,
    activity: String,
    completion: Boolean,
    assistance: Boolean,
    notes: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Patient', patientSchema);