# MediMentor AI - Patient Simulator

A voice-based AI patient simulator built with OpenAI's Realtime API for training medical professionals. The system simulates realistic doctor-patient interactions with Indian patients speaking Hinglish (mix of Hindi and English), and provides professional evaluation of the consultation.

## Features

- **Realistic Patient Scenarios**: Multiple patient configurations with authentic symptoms and medical histories
- **Hinglish Conversations**: Patients speak naturally in a mix of Hindi and English
- **Real-time Voice Interaction**: Natural voice conversations using OpenAI's Realtime API
- **Automated Evaluation**: Medical professor agent evaluates doctor performance
- **Multi-Agent Architecture**: Sequential handoff from patient to evaluator

## Setup

This is a Next.js TypeScript application.

1. **Install dependencies**
   ```bash
   npm i
   ```

2. **Add your OpenAI API Key**
   - Create a `.env.local` file in the root directory
   - Add your key: `OPENAI_API_KEY=your_key_here`
   - Get your API key from: https://platform.openai.com/api-keys

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically connect with the patient simulator

## Available Patient Scenarios

All scenarios are defined in `src/app/agentConfigs/patientScenarios.ts`:

### Currently Active
- **Stomach Pain Patient** - 32-year-old male with acute abdominal pain

### Available (Commented Out)
- **Fever Patient** - 35-year-old male with high fever and body aches
- **Chest Pain Patient** - 45-year-old male with chest pain and hypertension
- **Diabetic Patient** - 50-year-old female with uncontrolled Type 2 diabetes
- **Headache Patient** - 28-year-old female software developer with severe migraines

To switch scenarios, uncomment the desired patient in the `agents` array (line 181-186).


## How It Works

1. **Doctor connects** and begins consultation
2. **AI Patient** responds with symptoms in Hinglish
3. **Conversation continues** with realistic back-and-forth
4. **Doctor disconnects** when consultation is complete
5. **Medical Professor** automatically evaluates the interaction
6. **Evaluation provided** with scores and recommendations

## System Architecture

### Agent Configuration
The system uses a multi-agent pattern with automatic handoffs:

- **Patient Agent**: Simulates patient with specific symptoms and background
- **Medical Professor**: Evaluates doctor's performance across multiple criteria

### Key Files
- **`src/app/agentConfigs/patientScenarios.ts`** - Patient scenarios and evaluation agent
- **`src/app/App.tsx`** - Main application with WebRTC connection logic
- **`src/app/lib/realtimeConnection.ts`** - OpenAI Realtime API connection handler
- **`src/app/components/`** - UI components (Transcript, Events, Toolbar)


## Customizing Scenarios

Edit `src/app/agentConfigs/patientScenarios.ts` to:
- Modify existing patient profiles
- Add new patient scenarios
- Adjust evaluation criteria
- Change patient language/accent

Each patient configuration includes:
- Demographics (age, gender, weight, height)
- Vital signs (BP, blood sugar, etc.)
- Current symptoms
- Medical history
- Speech patterns in Hinglish


## UI Controls

- **Connect/Disconnect**: Start or end the consultation
- **Voice Detection**: Automatic voice activity detection (VAD) or Push-to-Talk (PTT)
- **Audio Playback**: Toggle to enable/disable hearing the AI patient
- **Event Logs**: View detailed WebRTC and API events
- **Agent Selector**: Switch between patient and professor views

## Built With

- Next.js 15.1.4
- OpenAI Realtime API
- React 19
- TypeScript
- WebRTC for real-time audio

## Credits

This project is adapted from OpenAI's [Realtime API Multi-Agent Examples](https://github.com/openai/openai-realtime-examples).

---

**Note**: This is an educational tool for medical training. It should not replace actual medical education or practice with real patients.
