// Helper function to calculate position from date
function getPositionFromDate(dateStr) {
  const startDate = new Date('2019-01-01');  // Extended to 2019
  const endDate = new Date('2024-12-31');    // Extended through 2024
  const date = new Date(dateStr);
  
  // Calculate total time span in days
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  
  // Calculate days from start
  const diffDays = (date - startDate) / (1000 * 60 * 60 * 24);
  
  // Convert to 0-100 scale
  return Math.round((diffDays / totalDays) * 100);
}

const rawTimelineData = [
  {
    event: "GPT-2", 
    time: "2019-02-14",
    developer: "OpenAI",
    description: "The precursor to GPT-3 with 1.5B parameters, initially released with caution due to concerns about misuse. Demonstrated strong text generation capabilities while being significantly smaller than later models.",
    parameterCount: "1.5B",
    layers: "48",
    attentionHeads: "25",
    hiddenSize: "1600",
    vocabSize: "50K",
    contextWindow: "1024",
    trainingTokens: "40B",
    trainingSteps: "100K",
    flops: "1.5E22",
    memoryFootprint: "3.2GB",
    energyConsumption: "27 MWh",
    inferenceLatency: "500ms",
    throughput: "18 tokens/s",
    inputCost: "N/A",
    outputCost: "N/A"
  },
  {
    event: "GPT-3", 
    time: "2020-06-11",
    developer: "OpenAI",
    description: "The original GPT-3 model introduced a breakthrough in scale with 175B parameters. It demonstrated remarkable zero-shot and few-shot learning capabilities across various tasks, setting new standards for language models.",
    parameterCount: "175B",
    layers: "96",
    attentionHeads: "96",
    hiddenSize: "12288",
    vocabSize: "50K",
    contextWindow: "2048",
    trainingTokens: "300B",
    trainingSteps: "300K",
    flops: "3.14E23",
    memoryFootprint: "350GB",
    energyConsumption: "1,287 MWh",
    inferenceLatency: "250ms",
    throughput: "40 tokens/s",
    inputCost: "$0.0015/1K tokens",
    outputCost: "$0.002/1K tokens"
  },
  // Added new event for OpenAI Reasoning Models: InstructGPT
  {
    event: "InstructGPT", 
    time: "2021-07-01",
    developer: "OpenAI",
    description: "A model fine-tuned with human feedback, enhancing reasoning and instruction-following capabilities. InstructGPT improved upon GPT-3 by aligning its outputs closer to user instructions, paving the way for more interactive AI experiences.",
    parameterCount: "175B",
    layers: "96",
    attentionHeads: "96",
    hiddenSize: "12288",
    vocabSize: "50K",
    contextWindow: "2048",
    trainingTokens: "300B",
    trainingSteps: "300K",
    flops: "3.14E23",
    memoryFootprint: "350GB",
    energyConsumption: "1,287 MWh",
    inferenceLatency: "250ms",
    throughput: "40 tokens/s",
    inputCost: "$0.0015/1K tokens",
    outputCost: "$0.002/1K tokens"
  },
  {
    event: "GPT-3.5", 
    time: "2022-11-30",
    developer: "OpenAI",
    description: "GPT-3.5 introduced significant improvements in instruction-following and safety. This model series included ChatGPT and text-davinci-003, showing enhanced ability to engage in dialogue and follow complex instructions.",
    parameterCount: "175B",
    layers: "96",
    attentionHeads: "96",
    hiddenSize: "12288",
    vocabSize: "50K",
    contextWindow: "4096",
    trainingTokens: "570B",
    trainingSteps: "800K",
    flops: "6.4E24",
    memoryFootprint: "350GB",
    energyConsumption: "1,764 MWh",
    inferenceLatency: "200ms",
    throughput: "45 tokens/s",
    inputCost: "$0.0015/1K tokens",
    outputCost: "$0.002/1K tokens"
  },
  {
    event: "GPT-3.5 Turbo", 
    time: "2023-03-01",
    developer: "OpenAI",
    description: "Optimized version of GPT-3.5 specifically fine-tuned for chat applications. Features improved efficiency and lower operational costs while maintaining strong performance characteristics.",
    parameterCount: "175B",
    layers: "96",
    attentionHeads: "96",
    hiddenSize: "12288",
    vocabSize: "50K",
    contextWindow: "4096",
    trainingTokens: "570B",
    trainingSteps: "800K",
    flops: "6.4E24",
    memoryFootprint: "350GB",
    energyConsumption: "1,500 MWh",
    inferenceLatency: "180ms",
    throughput: "50 tokens/s",
    inputCost: "$0.0010/1K tokens",
    outputCost: "$0.0020/1K tokens"
  },
  {
    event: "GPT-4", 
    time: "2023-03-14",
    developer: "OpenAI",
    description: "GPT-4 marked a major advancement in reasoning and task performance, significantly outperforming previous models across various benchmarks. It introduced multimodal capabilities and showed more reliable instruction-following.",
    parameterCount: "~1.76T (estimated)",
    layers: "120+",
    attentionHeads: "128+",
    hiddenSize: "14336+",
    vocabSize: "100K+",
    contextWindow: "8192",
    trainingTokens: "1T+",
    trainingSteps: "1.5M+",
    flops: "1.2E25",
    memoryFootprint: "1TB+",
    energyConsumption: "2,653 MWh",
    inferenceLatency: "180ms",
    throughput: "50 tokens/s",
    inputCost: "$0.03/1K tokens",
    outputCost: "$0.06/1K tokens"
  },
  {
    event: "GPT-4 Turbo", 
    time: "2023-11-06",
    developer: "OpenAI",
    description: "GPT-4 Turbo introduced a larger 128K context window, more current knowledge (up to April 2023), and improved performance at a lower cost. It features enhanced JSON mode and better function calling capabilities.",
    parameterCount: "~1.76T (estimated)",
    layers: "120+",
    attentionHeads: "128+",
    hiddenSize: "14336+",
    vocabSize: "100K+",
    contextWindow: "128000",
    trainingTokens: "1.5T+",
    trainingSteps: "2M+",
    flops: "1.5E25",
    memoryFootprint: "1TB+",
    energyConsumption: "3,100 MWh",
    inferenceLatency: "160ms",
    throughput: "60 tokens/s",
    inputCost: "$0.01/1K tokens",
    outputCost: "$0.03/1K tokens"
  },
  {
    event: "GPT-4o", 
    time: "2024-05-13",
    developer: "OpenAI",
    description: "Omnimodal version of GPT-4 with enhanced vision and audio capabilities. Features faster response times and improved multilingual support while maintaining GPT-4 level reasoning.",
    parameterCount: "~1.8T (estimated)",
    layers: "120+",
    attentionHeads: "128+",
    hiddenSize: "14336+",
    vocabSize: "100K+",
    contextWindow: "128000",
    trainingTokens: "2T+",
    trainingSteps: "2.5M+",
    flops: "1.8E25",
    memoryFootprint: "1.2TB+",
    energyConsumption: "3,500 MWh",
    inferenceLatency: "120ms",
    throughput: "80 tokens/s",
    inputCost: "$0.005/1K tokens",
    outputCost: "$0.015/1K tokens"
  },
  // New 2024 entries
  {
    event: "GPT-4o mini",
    time: "2024-07-01",
    developer: "OpenAI",
    description: "Compact version of GPT-4o designed as a cost-efficient replacement for GPT-3.5 Turbo. Maintains core capabilities while optimizing for lower operational costs and faster inference times.",
    parameterCount: "~350B (estimated)",
    layers: "64",
    attentionHeads: "64",
    hiddenSize: "8192",
    vocabSize: "100K+",
    contextWindow: "128000",
    trainingTokens: "1.2T+",
    inputCost: "$0.0005/1K tokens",
    outputCost: "$0.0015/1K tokens"
  },
  {
    event: "o1 Preview",
    time: "2024-09-15",
    developer: "OpenAI",
    description: "First 'reasoning' models featuring chain-of-thought processing. The o1 series shows improved performance on complex STEM tasks through deliberate reasoning steps before final answers.",
    parameterCount: "o1: ~2T, o1-mini: ~400B",
    contextWindow: "256000",
    trainingTokens: "3T+",
    inferenceLatency: "o1: 2s, o1-mini: 800ms"
  },
  {
    event: "o1",
    time: "2024-12-01",
    developer: "OpenAI",
    description: "Final release of reasoning-optimized o1 model alongside new premium service offering. ChatGPT Pro includes priority access to o1 pro mode for compute-intensive tasks.",
    subscriptionPrice: "$200/month",
    features: ["Advanced agent capabilities", "Multi-hour task support", "Enterprise-grade security"]
  },
  {
    event: "Sora",
    time: "2024-12-25",
    developer: "OpenAI",
    description: "Advanced text-to-video model released during '12 Days of OpenAI' event. Capable of generating high-quality, minute-long videos from text prompts.",
    resolution: "1080p",
    videoLength: "60 seconds",
    frameConsistency: "Temporal coherence technology"
  },
  // 2025 Entries
  {
    event: "Operator",
    time: "2025-01-10",
    developer: "OpenAI",
    description: "AI agent system with web autonomy and o3-mini integration. Operator handles complex workflows while o3-mini powers free tier reasoning capabilities.",
    features: ["Form automation", "E-commerce integration", "Real-time web interaction"]
  },
];

export const timelineData = rawTimelineData.map(d => ({
  ...d,
  position: getPositionFromDate(d.time)
}));