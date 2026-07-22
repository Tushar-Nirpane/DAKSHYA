// DAKSHYA Central Data Store

export const DAKSHYA_DATA = {
  stats: [
    { label: "Active Core Members", value: "15", description: "Designers, builders & programmers" },
    { label: "Labs & Workshops Done", value: "12+", description: "100% hands-on sessions" },
    { label: "Students Impacted", value: "500+", description: "Across campuses & departments" },
    { label: "Practical Learning", value: "100%", description: "No dry theory, only active building" }
  ],

  workshops: [
    {
      id: 1,
      title: "Autonomous Robotics Workshop",
      category: "Robotics",
      description: "Learn to design, wire, and program self-navigating rovers using Arduino, ultrasonic sensors, and motor driver boards.",
      takeaways: ["L298N Motor Drivers", "PID Path Planning", "Sensor Integration"],
      date: "Oct 12-14, 2025",
      status: "Past Event",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "IoT & Embedded Systems Lab",
      category: "Electronics",
      description: "Build cloud-connected weather stations and automation systems using ESP32, MQTT protocols, and real-time dashboard interfaces.",
      takeaways: ["ESP32 & MicroPython", "MQTT & HTTP APIs", "Analog Sensor Calibrations"],
      date: "Nov 02, 2025",
      status: "Past Event",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "ROS 2 & SLAM Simulation",
      category: "Robotics",
      description: "Dive deep into Robot Operating System 2. Map environments and implement LiDAR-based SLAM algorithms in Gazebo environments.",
      takeaways: ["ROS2 Nodes & Topics", "LiDAR Pointclouds", "Gazebo Physics Engine"],
      date: "Dec 18, 2025",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "PCB Design & Fabrication",
      category: "Electronics",
      description: "Convert breadboard designs to custom double-sided PCBs using EasyEDA. Master high-speed traces and multi-layer layouts.",
      takeaways: ["Schematic Drawing", "PCB Routing Rules", "Soldering & Reflow"],
      date: "Jan 15, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Full-Stack Web Dev for IoT",
      category: "Computer Science",
      description: "Learn Next.js, WebSockets, and Tailwind CSS to design dashboard controls that stream live telemetry directly from hardware.",
      takeaways: ["WebSockets Protocols", "Tailwind Telemetry Panels", "Vite/Next JS Frameworks"],
      date: "Feb 22, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Computer Vision & Edge AI",
      category: "Computer Science",
      description: "Implement object tracking and real-time classification models on Raspberry Pi 4 using OpenCV and TensorFlow Lite.",
      takeaways: ["OpenCV Pipeline", "YOLO v8 Optimization", "Edge Hardware Accelerators"],
      date: "Mar 08, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
    }
  ],

  media: [
    {
      id: 1,
      type: "photo",
      category: "Robotics Workshops",
      title: "DAKSHYA Workshop Session",
      url: "/gallery/photo-1.jpeg",
      description: "Hands-on robotics hardware prototyping and active team collaboration."
    },
    {
      id: 2,
      type: "photo",
      category: "Lab Sessions",
      title: "Technical Lab Prototyping",
      url: "/gallery/photo-2.jpeg",
      description: "Testing embedded circuitry, microcontrollers, and sensor arrays."
    },
    {
      id: 3,
      type: "photo",
      category: "Event Highlights",
      title: "Club Innovation Showcase",
      url: "/gallery/photo-3.jpeg",
      description: "Demonstrating practical hardware and software projects to participants."
    },
    {
      id: 4,
      type: "photo",
      category: "Robotics Workshops",
      title: "Rover Chassis Assembly",
      url: "/gallery/photo-4.jpeg",
      description: "Assembling robotic actuators, wheel encoders, and power distribution modules."
    },
    {
      id: 5,
      type: "photo",
      category: "Lab Sessions",
      title: "Hardware Integration & Debugging",
      url: "/gallery/photo-5.jpeg",
      description: "Calibrating real-time sensors and configuring low-level firmware."
    },
    {
      id: 6,
      type: "photo",
      category: "Event Highlights",
      title: "DAKSHYA Student Engagement",
      url: "/gallery/photo-6.jpeg",
      description: "Engaging students in interactive STEM and engineering challenges."
    },
    {
      id: 7,
      type: "photo",
      category: "Robotics Workshops",
      title: "Autonomous Path Planning",
      url: "/gallery/photo-7.jpeg",
      description: "Testing navigation algorithms and obstacle avoidance routines."
    },
    {
      id: 8,
      type: "photo",
      category: "Lab Sessions",
      title: "Electronics Bench Calibration",
      url: "/gallery/photo-8.jpeg",
      description: "Measuring signal waveforms and debugging power electronics."
    },
    {
      id: 9,
      type: "photo",
      category: "Event Highlights",
      title: "Technical Team Project Briefing",
      url: "/gallery/photo-9.jpeg",
      description: "Brainstorming solutions and coordinating project deliverables."
    },
    {
      id: 10,
      type: "photo",
      category: "Robotics Workshops",
      title: "Sensor Calibration Routine",
      url: "/gallery/photo-10.jpeg",
      description: "Fine-tuning ultrasonic and infrared distance sensor arrays."
    },
    {
      id: 11,
      type: "photo",
      category: "Lab Sessions",
      title: "Embedded System Diagnostics",
      url: "/gallery/photo-11.jpeg",
      description: "Verifying serial output and telemetry data streams."
    },
    {
      id: 12,
      type: "photo",
      category: "Event Highlights",
      title: "DAKSHYA Interactive Workshop",
      url: "/gallery/photo-12.jpeg",
      description: "Mentoring students during live hands-on coding and assembly sessions."
    },
    {
      id: 13,
      type: "photo",
      category: "Robotics Workshops",
      title: "Robotic Arm Kinematics",
      url: "/gallery/photo-13.jpeg",
      description: "Configuring multi-axis servo controllers and spatial kinematics."
    },
    {
      id: 14,
      type: "photo",
      category: "Lab Sessions",
      title: "Microcontroller Board Soldering",
      url: "/gallery/photo-14.jpeg",
      description: "Soldering headers, custom PCB components, and interconnects."
    },
    {
      id: 15,
      type: "photo",
      category: "Event Highlights",
      title: "DAKSHYA Event Closing Ceremony",
      url: "/gallery/photo-15.jpeg",
      description: "Celebrating team achievements and successful workshop completions."
    }
  ],

  team: [
    {
      name: "TUSHAR NIRPANE",
      role: "President",
      domain: "Leadership",
      image: "/tushar.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/tushar-nirpane-a85aab394/",
        github: "https://github.com/Tushar-Nirpane",
        twitter: "#",
        email: "tusharnirpane07@gmail.com"
      }
    },
    {
      name: "MANSVI PATIL",
      role: "Female Lead",
      domain: "Leadership",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "mansvi@dakshya.club" }
    },
    {
      name: "ADITYA PATIL",
      role: "Male Lead",
      domain: "Leadership",
      image: "/aditya.png",
      social: { email: "patiladitya0160@gmail.com" }
    },
    {
      name: "ANOKHI PATIL",
      role: "Female Co-Lead",
      domain: "Leadership",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "anokhi@dakshya.club" }
    },
    {
      name: "HIMANSHU YERAWAR",
      role: "Male Co-Lead",
      domain: "Leadership",
      image: "/himanshu.jpg",
      social: { linkedin: "#", github: "#", twitter: "#", email: "himanshu@dakshya.club" }
    },
    {
      name: "UZZAM NAIK",
      role: "Technical Lead",
      domain: "Technical",
      image: "/uzzam.jpg",
      social: { linkedin: "#", github: "#", twitter: "#", email: "uzzam@dakshya.club" }
    },
    {
      name: "YASHRAJ BHAGWAT",
      role: "Web Developer",
      domain: "Technical",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "yashraj@dakshya.club" }
    },
    {
      name: "PRACHI PATNE",
      role: "Media Head",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "prachi@dakshya.club" }
    },
    {
      name: "YASH SOLANKE",
      role: "Editor",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "yash.s@dakshya.club" }
    },
    {
      name: "MOIZ SHAIKH",
      role: "Videographer",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "moiz@dakshya.club" }
    },
    {
      name: "ATHARVA PADAMWAR",
      role: "Photographer",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "atharva@dakshya.club" }
    },
    {
      name: "AARYA SHELAR",
      role: "Documentary Lead",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "aarya@dakshya.club" }
    },
    {
      name: "GANESH YERAWAR",
      role: "Documentary Team",
      domain: "Media",
      image: "/ganesh.jpg",
      social: { linkedin: "#", github: "#", twitter: "#", email: "ganesh@dakshya.club" }
    },
    {
      name: "NANDINI SAWANT",
      role: "Documentary Team",
      domain: "Media",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "nandini@dakshya.club" }
    },
    {
      name: "KARTIK MODIWALE",
      role: "Volunteer",
      domain: "Volunteers",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&h=500&q=80",
      social: { linkedin: "#", github: "#", twitter: "#", email: "kartik@dakshya.club" }
    }
  ]
};
