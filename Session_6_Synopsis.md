# Session 6 Synopsis: IoT + AI — Smart Cities & Edge Intelligence

## Overview
In this final capstone session, we bridge the gap between the physical and digital worlds. Participants will connect **AirOwl**, a custom ESP32-based smart air quality monitor, to their local AI PC. By utilizing the **Model Context Protocol (MCP)**, we transform raw sensor data into actionable intelligence, enabling the AI to "feel" and reason about its environment in real-time.

## Key Technologies
- **Hardware:** AirOwl (ESP32 Microcontroller, PM2.5 & Environmental Sensors)
- **Protocol:** MCP (Model Context Protocol) for standardized device-to-AI communication
- **Compute:** Local AI PC (NPU/GPU) for private, edge-based inference

## The Mission: "AirOwl Smart Monitor"
Participants act as Smart City Engineers deploying an air quality monitoring system for a local school.
1.  **Connect:** Interface the AirOwl device via USB/WiFi to the AI PC.
2.  **Bridge:** Launch a local Python MCP server to expose sensor readings (PM2.5, Temp, Humidity) as "tools" to the AI.
3.  **Analyze:** Ask the AI Agent complex questions like *"The PM2.5 level is 145. Is it safe for children to play outside?"*
4.  **reason:** Witness the AI Agent fetch real-time data, cross-reference it with health standards, and generate a safety report—all locally, without sending private sensor data to the cloud.

## Learning Outcomes
- Understanding the **Edge AI** architecture: processing data where it is generated.
- Practical experience with **ESP32** microcontrollers and sensor integration.
- Building custom **MCP Servers** to extend an AI's capabilities beyond text and images.
- Real-world application of AI in **environmental monitoring** and public health.
