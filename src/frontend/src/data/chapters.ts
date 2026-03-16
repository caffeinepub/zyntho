export interface Topic {
  title: string;
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Customer Service Basics",
    description:
      "Foundations of customer service, key metrics, and SLA management.",
    topics: [
      {
        title: "What is customer service and why it matters",
        explanation:
          "Customer service is the support and assistance provided to customers before, during, and after they purchase or use a product or service. It is the direct bridge between a company and its users. Good customer service builds trust, retains customers, and protects the company's reputation. Poor service, on the other hand, leads to churn, negative reviews, and revenue loss. In IT and support roles, customer service is not just about solving technical problems — it is about making the customer feel heard, valued, and confident that their issue will be resolved efficiently.",
      },
      {
        title: "Types of customers: internal vs external",
        explanation:
          "Customers are not always external users who pay for a product. In IT support, you will encounter two types. External customers are clients, end-users, or the public who use your company's products or services. Internal customers are employees within your own organisation who depend on IT systems to do their work — for example, the HR team raising a ticket with IT. Understanding the difference helps you adjust your communication style, priority levels, and resolution approach. Internal customers often have faster SLA expectations since downtime directly impacts business operations.",
      },
      {
        title:
          "The customer service cycle: contact, understand, resolve, follow-up",
        explanation:
          "Every support interaction follows a standard cycle. Contact is when the customer reaches out through phone, email, chat, or a ticketing portal. Understand is the critical phase where you actively listen, ask clarifying questions, and confirm what the issue actually is — not just what the customer says it is. Resolve is where you apply your knowledge, tools, and resources to fix the problem. Follow-up ensures the customer is satisfied, the ticket is properly closed, and there is no recurring issue. Skipping any step in this cycle typically leads to poor CSAT scores and reopened tickets.",
      },
      {
        title: "First Call Resolution (FCR) and why it's important",
        explanation:
          "First Call Resolution (FCR) means resolving a customer's issue completely during the very first interaction, without the need for a callback or follow-up ticket. FCR is one of the most important KPIs in customer service and IT support. A high FCR rate indicates that agents are skilled, well-trained, and empowered to resolve issues independently. It directly improves customer satisfaction because users do not want to repeat their problem multiple times. For the business, a high FCR lowers operational costs by reducing repeat contacts and improving agent efficiency. Most support teams aim for an FCR rate above 70-80%.",
      },
      {
        title: "Key metrics: CSAT, NPS, AHT (Average Handle Time)",
        explanation:
          "Three metrics dominate customer service reporting. CSAT (Customer Satisfaction Score) is collected through post-interaction surveys asking customers to rate their experience, usually on a scale of 1 to 5. NPS (Net Promoter Score) measures how likely a customer is to recommend your service to others, scored from 0 to 10. AHT (Average Handle Time) is the average total time an agent spends on a call or ticket, including hold time and after-call work. Monitoring these three together gives a full picture of both customer experience quality and operational efficiency. A good agent balances all three.",
      },
      {
        title: "Setting customer expectations and managing SLAs",
        explanation:
          "A Service Level Agreement (SLA) is a formal commitment between a service provider and a customer that defines expected response and resolution times. For example, a P2 (high priority) ticket might have an SLA of 4 hours response and 8 hours resolution. Setting expectations means communicating clearly and honestly — if an issue will take 24 hours to resolve, tell the customer upfront rather than letting them wait in silence. Proactive updates and realistic timelines prevent frustration and build trust. Breaching SLAs repeatedly can result in financial penalties and damaged client relationships.",
      },
      {
        title: "Escalation process: when and how to escalate",
        explanation:
          "Escalation is the process of passing an unresolved or complex issue to a higher-level team or specialist when the current agent cannot resolve it within their skill level or authority. You should escalate when you have exhausted your troubleshooting steps, the issue requires specialist access (such as database or network team), or the SLA is at risk of being breached. How you escalate matters as much as when. Always provide the next team with a detailed handover note — the issue description, steps already taken, customer details, and urgency level. Poor escalation handovers waste time and frustrate customers further.",
      },
    ],
  },
  {
    id: 2,
    title: "Communication & Presentation Skills",
    description:
      "Verbal communication, active listening, email writing, and presentation delivery.",
    topics: [
      {
        title: "Verbal communication: tone, pace, clarity",
        explanation:
          "Verbal communication in support roles is more than just what you say — it is how you say it. Tone refers to the emotional quality in your voice; a warm, professional tone reassures customers while a flat or aggressive tone can escalate a situation. Pace is how fast or slow you speak; speaking too fast causes confusion, while speaking too slowly can frustrate callers. Clarity means using simple, direct language that the customer can easily understand. In IT support, you must simplify technical concepts without being condescending. Combining the right tone, pace, and clarity creates a professional impression that builds customer confidence immediately.",
      },
      {
        title: "Active listening techniques",
        explanation:
          "Active listening is the deliberate practice of fully concentrating on what the customer is saying rather than simply waiting for your turn to speak. It involves giving verbal acknowledgements such as 'I understand' or 'I can see why that would be frustrating', paraphrasing what the customer said to confirm understanding, and avoiding interruptions. In IT support, active listening prevents misdiagnosis — many tickets are reopened because the agent solved the wrong problem. Techniques include summarising the issue back to the customer, asking open-ended questions, and taking brief notes. Active listening is consistently rated as the number one soft skill in support job descriptions.",
      },
      {
        title: "Structuring your message: opening, body, close",
        explanation:
          "Whether you are on a call or sending an email, every professional message should follow a clear three-part structure. The opening sets context and greets the customer — introduce yourself and the purpose. The body is the core content — the information, steps, or resolution. The close summarises the next actions and invites questions. For example, on a support call: opening is your greeting and ticket acknowledgement, body is your troubleshooting steps and explanation, close is confirming the fix and asking if there is anything else. A structured message is easier for the customer to follow and reduces the chance of important details being missed.",
      },
      {
        title:
          "Email writing: subject line, greeting, concise body, professional sign-off",
        explanation:
          "Professional email writing is a core skill in any IT or customer support role. A strong subject line is specific and actionable — for example 'Resolution Update: Ticket #4521 - VPN Access Issue' tells the reader exactly what to expect. The greeting should address the customer by name when possible. The body should be concise, broken into short paragraphs, and free of jargon. Use bullet points for steps or lists. The sign-off should include your name, role, and contact details. Avoid one-word replies, vague language, and informal abbreviations. A well-written email creates a paper trail and reflects the professionalism of your team.",
      },
      {
        title:
          "Presentation basics: know your audience, clear slides, confident delivery",
        explanation:
          "In support and IT roles, you will sometimes need to present updates, solutions, or reports to managers, clients, or teams. The first rule is to know your audience — a technical team wants data and specifics, while a management audience wants business impact and summaries. Clear slides follow the one-idea-per-slide rule, use minimal text, and rely on visuals where possible. Confident delivery comes from preparation and practice — knowing your content removes the need to read from slides. Speak at a measured pace, maintain eye contact, and pause deliberately to let key points land. Confidence is built through repetition, not just talent.",
      },
      {
        title: "Avoiding jargon when speaking to non-technical users",
        explanation:
          "One of the most common mistakes in IT support is using technical language with customers who have no technical background. Terms like 'DNS propagation', 'BIOS reset', or 'registry key' mean nothing to an average user and can make them feel intimidated or dismissed. The skill is translating technical actions into plain language. Instead of 'I need to flush your DNS cache', say 'I need to clear some temporary network data on your computer.' This does not mean dumbing down — it means communicating with respect and clarity. Customers who understand what you are doing trust you more and cooperate better during troubleshooting.",
      },
      {
        title: "Feedback and questioning techniques",
        explanation:
          "Asking the right questions is the fastest path to diagnosing and resolving an issue. Open-ended questions gather broad information — for example 'Can you describe what happens when you try to log in?' Closed questions confirm specific facts — 'Does the error appear before or after you enter your password?' Probing questions go deeper — 'When did this first start happening?' On the feedback side, giving constructive feedback to a teammate or receiving it professionally is equally important. In IT environments, teams hold regular retrospectives and knowledge-sharing sessions. Being able to give clear feedback and ask precise diagnostic questions are skills that separate good support agents from great ones.",
      },
    ],
  },
  {
    id: 3,
    title: "Voice & Accent Training",
    description:
      "Clear pronunciation, neutral accent tips, and building confidence on calls.",
    topics: [
      {
        title: "Importance of clear pronunciation in support roles",
        explanation:
          "In phone and voice-based support, your voice is your only tool. Clear pronunciation ensures that customers understand your instructions correctly the first time, reducing the need for repetition. Mispronouncing a technical term or company name can reduce your credibility and cause confusion, especially on important calls. In global IT support, where agents regularly speak with customers across different countries, neutral and clear pronunciation bridges language and cultural gaps. Clear pronunciation is not about erasing your accent — it is about speaking with enough clarity that your message is understood accurately by the widest possible audience, regardless of their background.",
      },
      {
        title: "Neutral accent tips: slow down, enunciate, avoid filler words",
        explanation:
          "A neutral accent does not mean eliminating your mother tongue influence — it means reducing speech habits that create misunderstanding. Slowing down is the single most effective technique; most people speak significantly faster when nervous. Enunciation means clearly forming each syllable, particularly at the ends of words which are most commonly dropped. Filler words such as 'umm', 'like', 'you know', and 'basically' fill silence but reduce perceived professionalism. Replace fillers with a brief, deliberate pause. Record yourself during practice calls to identify problem patterns. Over time, consistent practice builds a natural, clear speaking style that works well in both voice support and interviews.",
      },
      {
        title:
          "Commonly mispronounced tech words (server, query, cache, SQL, GUI)",
        explanation:
          "Mispronouncing standard technology terms is a common issue for new IT professionals and can affect credibility. 'Cache' is pronounced 'cash' — not 'cash-ay'. 'SQL' is correctly said as 'sequel' in most professional environments. 'GUI' is pronounced 'gooey'. 'Query' is 'kweer-ee' — not 'kwery'. 'Server' is clear enough but often rushed as 'surver'. 'Router' is said as 'row-ter' in American English and 'root-er' in British English — be consistent. 'Virtual' is not 'vurchual'. Learning correct pronunciation of 20 to 30 core IT terms will make you sound confident and prepared in both customer interactions and technical interviews.",
      },
      {
        title: "Breathing and speaking from the diaphragm",
        explanation:
          "Breathing technique has a direct effect on voice quality and confidence during calls. Shallow chest breathing leads to a thin, high-pitched, or shaky voice — especially common when nervous. Diaphragmatic breathing (breathing from the belly, not the chest) produces a deeper, more resonant and controlled voice. To practice, place one hand on your stomach; when you breathe in, your stomach should expand, not your chest. This type of breathing also helps regulate anxiety and keeps your pace steady during long calls. Support agents who speak from the diaphragm sound more authoritative, calm, and professional — qualities that reassure customers during stressful support situations.",
      },
      {
        title: "Warm-up exercises for voice clarity",
        explanation:
          "Professional voice users — including support agents, presenters, and trainers — warm up their voice before speaking, just as athletes warm up their body before exercise. Simple warm-ups include humming gently for 30 seconds to loosen vocal cords, tongue twisters like 'red lorry yellow lorry' repeated quickly to improve articulation, and jaw stretches to reduce tension. Reading a paragraph aloud before starting your shift helps activate your speech muscles. Lip trills (making a 'brr' sound with your lips) loosen mouth muscles. These exercises take 3 to 5 minutes and noticeably improve the clarity, energy, and confidence of your voice throughout the working day.",
      },
      {
        title: "Handling calls with background noise",
        explanation:
          "Background noise is one of the most common complaints customers have about support calls. The first rule is prevention — use a quality headset with noise cancellation, and work in the quietest space available. If unexpected noise occurs during a call, acknowledge it professionally: 'I apologise for the noise in the background, let me move somewhere quieter.' Use the mute button when you are listening and not speaking. If the customer has significant background noise, politely ask them to move to a quieter space: 'I'm having a little difficulty hearing you clearly — would you be able to step somewhere quieter?' Managing noise professionally maintains call quality and customer confidence.",
      },
      {
        title: "Building confidence on calls",
        explanation:
          "Call confidence is not a personality trait — it is a skill that develops through preparation and repetition. The biggest source of confidence on support calls is product and process knowledge; when you know your material well, you do not hesitate. Practical preparation includes role-playing common scenarios with colleagues, listening back to recorded calls for self-review, and keeping a quick-reference cheat sheet for common issues and scripts. Speak with deliberate energy — energy on the phone is calming and professional, not loud. Smile while you speak; it genuinely changes your tone. Every call you handle, including the difficult ones, builds the confidence you carry into the next.",
      },
    ],
  },
  {
    id: 4,
    title: "Customer Handling & Empathy",
    description:
      "Empathy vs sympathy, the LEAP model, and de-escalation techniques.",
    topics: [
      {
        title: "What is empathy vs sympathy in support contexts",
        explanation:
          "Empathy and sympathy are often confused but are fundamentally different in customer support. Sympathy is feeling sorry for someone from a distance — 'That sounds terrible, I'm sorry to hear that.' Empathy is stepping into the customer's shoes and acknowledging their specific experience — 'I can completely understand how disruptive it must be to lose access to your system right before a meeting.' Empathy is significantly more effective in support because it makes the customer feel genuinely heard rather than just acknowledged. It reduces the emotional temperature of the interaction and creates a collaborative tone. Practising empathetic responses in your daily language is a skill that improves measurably over time.",
      },
      {
        title: "The LEAP model: Listen, Empathize, Apologize, Problem-solve",
        explanation:
          "The LEAP model is a structured approach to handling difficult customer interactions. Listen means giving the customer your full, uninterrupted attention while they describe their issue. Empathize means acknowledging their feelings authentically — not with scripted phrases, but with genuine understanding. Apologize is taking responsibility on behalf of the service without admitting personal fault — 'I'm sorry this experience has been frustrating.' Problem-solve is moving into action mode with a clear plan. The value of LEAP is that it addresses both the emotional and practical dimensions of a complaint. Customers need to feel heard before they are ready to accept a solution. Skipping the first three steps leads to resistance.",
      },
      {
        title: "De-escalation techniques for angry customers",
        explanation:
          "De-escalation is the skill of reducing the emotional intensity of a difficult interaction before attempting to resolve the technical issue. Key techniques include lowering your own voice slightly (a calm voice is contagious), using the customer's name, and never responding to anger with defensiveness. Phrases like 'I completely understand your frustration and I'm going to do everything I can to help you right now' redirect focus from emotion to action. Avoid telling an angry customer to calm down — it typically has the opposite effect. Give the customer a sense of control by explaining exactly what you will do and when. Resolution begins only when the emotional temperature drops.",
      },
      {
        title: "Staying calm under pressure",
        explanation:
          "Support roles, especially at service desk level, involve sustained emotional labour — handling frustrated, confused, and sometimes hostile customers throughout the day. Staying calm under pressure is both a mindset and a set of practical techniques. Controlled breathing (slow exhale before responding) prevents reactive replies. Mental reframing helps — remembering that a customer's anger is directed at the problem, not at you personally. Taking a 30-second reset between difficult calls prevents emotional carryover. Recognising your own stress signals (tension in shoulders, faster breathing, clipped speech) early allows you to course-correct before it affects the call. Teams that manage stress well have lower turnover and higher CSAT scores.",
      },
      {
        title: "Avoiding defensive language",
        explanation:
          "Defensive language is any response that shifts blame, minimises the customer's concern, or creates an adversarial dynamic. Examples include 'That's not our fault', 'You should have read the manual', 'There's nothing I can do about that', or 'That's our policy.' These phrases feel dismissive and escalate rather than resolve. Replace them with ownership-based language: instead of 'That's not my department', say 'Let me connect you with the right team and make sure they have all the details.' Instead of 'I can't do that', say 'What I can do is...' followed by an alternative. Language choices have a direct and measurable impact on customer satisfaction scores.",
      },
      {
        title: "Phrases to use and avoid",
        explanation:
          "Certain phrases consistently improve customer interactions, while others consistently damage them. Use phrases such as: 'I completely understand', 'Let me look into that for you right away', 'Here is what I'm going to do', 'Is there anything else I can help you with?', and 'Thank you for your patience.' Avoid phrases such as: 'Calm down', 'As I already explained', 'That's not possible', 'It's not my fault', and 'You should have...' The difference between good and average support agents often comes down to these language choices. A phrase list pinned at your workstation for the first few months of your role can significantly accelerate your confidence and CSAT scores.",
      },
      {
        title: "Building rapport quickly",
        explanation:
          "Rapport is the sense of connection and trust that makes customers feel comfortable and cooperative during a support interaction. In a short call, rapport is built within the first 30 seconds. Using the customer's name (once confirmed) immediately personalises the interaction. Matching the customer's communication style — more casual with relaxed callers, more formal with serious ones — creates alignment. A brief moment of genuine human connection, such as acknowledging a customer who mentions it is their first day or that they are in a hurry, signals that you see them as a person rather than a ticket number. Rapport does not take extra time — it simply requires attention and intent.",
      },
    ],
  },
  {
    id: 5,
    title: "Windows Technical Support",
    description:
      "Troubleshooting Windows PCs, remote tools, and user account management.",
    topics: [
      {
        title: "Windows versions overview: Windows 10 vs 11",
        explanation:
          "Windows 10, released in 2015, remains the most widely deployed version in corporate environments due to its stability and broad hardware compatibility. Windows 11, released in 2021, introduced a redesigned interface, improved multi-tasking (Snap Layouts), and stricter hardware requirements including TPM 2.0 and Secure Boot. In a support role, you will encounter both versions regularly. Key differences relevant to support include the location of settings menus (significantly reorganised in Windows 11), new taskbar behaviour, and DirectX 12 Ultimate support. Knowing both versions allows you to provide accurate guidance without asking the customer to navigate to settings that do not exist in their version.",
      },
      {
        title: "Common issues: slow PC, boot failures, blue screen (BSOD)",
        explanation:
          "Three of the most frequently reported Windows issues are slow performance, boot failures, and blue screen errors. A slow PC is typically caused by high CPU or RAM usage (check Task Manager), too many startup programs, or insufficient storage space. Boot failures can result from corrupted Windows files (use Startup Repair from the recovery environment), failed updates, or hardware faults. A BSOD (Blue Screen of Death) displays a stop error code — common codes include SYSTEM_SERVICE_EXCEPTION and IRQL_NOT_LESS_OR_EQUAL. The stop code helps identify whether the cause is a driver, hardware, or software issue. Always check the Event Viewer after a BSOD for detailed error logs.",
      },
      {
        title:
          "Troubleshooting steps: Event Viewer, Task Manager, Device Manager",
        explanation:
          "Windows provides three essential built-in tools for diagnosing issues. Event Viewer (eventvwr.msc) logs system, application, and security events — error entries with red X icons indicate what failed and when, which is critical for diagnosing intermittent or post-crash issues. Task Manager (Ctrl+Shift+Esc) shows real-time CPU, memory, disk, and network usage — use the Startup tab to disable unnecessary programs. Device Manager (devmgmt.msc) shows all connected hardware and highlights devices with driver errors (yellow warning triangles). These three tools together can diagnose the majority of Windows issues without needing third-party software. Memorising their keyboard shortcuts and navigation saves significant time on support calls.",
      },
      {
        title: "Remote support tools: RDP, Quick Assist, TeamViewer",
        explanation:
          "Remote support tools allow technicians to view and control a user's computer without being physically present. RDP (Remote Desktop Protocol) is built into Windows and is the standard method for connecting to remote servers and computers within a corporate network — access it by typing 'mstsc' in the Run dialog. Quick Assist (built into Windows 10/11) allows a support agent to send a 6-digit code to a user, enabling remote control with the user's permission — ideal for end-user support. TeamViewer is a third-party tool used for external or cross-platform support. Understanding when to use each tool, and how to guide a non-technical user through sharing access, is a core IT support competency.",
      },
      {
        title: "User account management: local vs domain accounts",
        explanation:
          "Windows supports two types of user accounts. A local account is stored directly on the machine and has no connection to a central network — suitable for standalone home computers but impractical in corporate environments. A domain account is managed centrally through Active Directory and allows the user to log into any domain-joined machine using the same credentials. In corporate IT, virtually all user accounts are domain accounts. As a support agent, common account tasks include unlocking accounts, resetting passwords, checking group membership, and managing account expiry — all performed in Active Directory Users and Computers (ADUC). Understanding the distinction prevents confusion when a user's login issue is a domain problem, not a local one.",
      },
      {
        title: "Windows Update issues and fixes",
        explanation:
          "Windows Update is critical for security patches and feature improvements, but it is also a common source of support tickets. Typical issues include updates stuck at a percentage, update failures with error codes, or system slowness after a large update. First troubleshooting steps include running the Windows Update Troubleshooter (Settings > Update & Security > Troubleshoot), clearing the SoftwareDistribution folder (which stores downloaded updates), or using the System File Checker command 'sfc /scannow' to repair corrupted files. For persistent failures, the DISM tool ('DISM /Online /Cleanup-Image /RestoreHealth') repairs the Windows image itself. Document error codes carefully, as Microsoft's support database uses them to provide specific resolution steps.",
      },
      {
        title: "Printer and peripheral setup in Windows",
        explanation:
          "Adding a printer or peripheral in Windows involves either a plug-and-play process for USB devices or a manual network setup for shared printers. For USB devices, Windows typically installs drivers automatically via Windows Update. For network printers, you add the printer via Settings > Printers & Scanners > Add a device, or manually through 'Add a printer using a TCP/IP address or hostname' if auto-discovery fails. Driver issues are the most common cause of printer problems — always check Device Manager for warning indicators. For corporate environments, printers are often deployed via Group Policy to all users in a specific OU, which means setup issues may require AD access rather than local configuration.",
      },
    ],
  },
  {
    id: 6,
    title: "Mac Technical Support",
    description:
      "macOS diagnostics, FileVault, Terminal basics, and hardware essentials.",
    topics: [
      {
        title: "macOS versions and update process",
        explanation:
          "Apple releases a new major version of macOS annually, each named after a California location — for example Ventura, Sonoma, and Sequoia. Unlike Windows, macOS updates are distributed entirely through the App Store or System Preferences > Software Update, and are free. In enterprise environments, updates are often controlled by Mobile Device Management (MDM) systems like Jamf to prevent users from installing untested versions. As a support agent, knowing the current stable macOS release and the one prior is important because many issues are introduced during major version upgrades. Always confirm the macOS version first in a support call using 'About This Mac' from the Apple menu.",
      },
      {
        title: "Common issues: spinning wheel, app crashes, login issues",
        explanation:
          "The spinning colour wheel (colloquially the 'beachball') in macOS indicates that an application or the system is unresponsive — it is the macOS equivalent of Windows' 'not responding' state. It is typically caused by an application using excessive CPU or RAM. Force quitting (Cmd+Option+Esc) resolves most cases. App crashes on macOS generate a crash report that can be found in the Console app, providing detail on the fault. Login issues are often caused by corrupted user profiles, MDM policy changes, or FileVault encryption requiring recovery. Knowing where to find crash logs and how to boot into Safe Mode (hold Shift at startup) is essential for diagnosing macOS issues systematically.",
      },
      {
        title: "Disk Utility, Activity Monitor, Console for diagnostics",
        explanation:
          "macOS provides three essential built-in diagnostic tools. Disk Utility (Applications > Utilities) manages disks and volumes — use 'First Aid' to check and repair disk errors, especially after an unexpected shutdown. Activity Monitor is the macOS equivalent of Windows Task Manager — it shows CPU, memory, energy, disk, and network usage in real time and allows you to force-quit unresponsive processes. Console is the macOS log viewer, showing system and application logs in real time — critical for diagnosing crashes and intermittent errors. Knowing how to navigate these three tools gives you diagnostic capability covering most macOS hardware and software issues without installing third-party applications.",
      },
      {
        title: "FileVault, Time Machine, iCloud basics",
        explanation:
          "These three macOS features are frequently referenced in support tickets. FileVault is Apple's full-disk encryption tool, activated in System Preferences > Security & Privacy. When enabled, the startup disk is encrypted and a recovery key is generated — losing this key can make data permanently inaccessible. Time Machine is macOS's built-in backup solution, creating incremental backups to an external drive. It allows file-level or full system recovery. iCloud provides Apple's cloud storage and synchronisation service — commonly causing support issues when storage is full, sync conflicts occur, or users change Apple IDs. Understanding all three allows you to support Mac users confidently in both personal and corporate environments.",
      },
      {
        title: "Terminal basics for support tasks",
        explanation:
          "Terminal is the macOS command-line interface, found in Applications > Utilities. For support tasks, a small set of commands handles the majority of needs. 'sudo' runs commands with administrator privileges. 'ls' lists directory contents. 'cd' changes directories. 'ping' tests network connectivity. 'top' shows running processes (similar to Activity Monitor in text form). 'killall [app name]' force-quits an application. 'defaults write' modifies application preferences. 'diskutil list' shows all connected drives. Unlike Windows, macOS is Unix-based, so Terminal is powerful and capable. Entry-level Mac support does not require advanced scripting, but comfort with basic commands significantly speeds up diagnosis and resolution.",
      },
      {
        title: "Printer setup and sharing on Mac",
        explanation:
          "Adding a printer on macOS is done through System Preferences > Printers & Scanners. For USB printers, macOS typically auto-detects and installs the driver. For network printers, you can add them via IP address using the 'IP' tab and selecting the appropriate protocol (usually IPP or LPD). AirPrint-compatible printers connect wirelessly without manual driver installation. Printer sharing allows a Mac to share a connected USB printer with other devices on the same network — enabled through the Sharing preference pane. Common issues include drivers not loading after macOS updates (requiring a re-add or driver reinstall from the manufacturer's website) and queue stuck jobs requiring a print system reset.",
      },
      {
        title: "MacBook hardware basics: ports, adapters, battery",
        explanation:
          "Modern MacBooks have progressively reduced the number of physical ports. Current MacBook Air and Pro models primarily use USB-C (Thunderbolt 4) ports, requiring adapters or hubs for HDMI, USB-A, SD cards, and Ethernet. Knowing which adapter is required for which task is common in MacBook support. Battery health on macOS is tracked in System Information > Power — Apple recommends replacing the battery when cycle count exceeds 1000. MagSafe (on newer MacBook Pros and Airs) is the magnetic charging connector. Common hardware support queries include display output issues (often an adapter or resolution setting), charging problems (check for debris in port or reset SMC), and keyboard/trackpad issues (often resolved by SMC or NVRAM reset).",
      },
    ],
  },
  {
    id: 7,
    title: "Printers & Peripherals",
    description:
      "Printer types, setup, common errors, and peripheral troubleshooting.",
    topics: [
      {
        title: "Types of printers: laser vs inkjet, local vs network",
        explanation:
          "Understanding printer types helps you troubleshoot and recommend correctly. Laser printers use heat and toner powder to produce sharp, high-volume prints — common in offices due to lower per-page cost and faster output. Inkjet printers use liquid ink and are better for photo-quality colour printing but have higher per-page costs and are prone to clogged nozzles if unused. Local printers connect directly to a single computer via USB. Network printers connect to the office network via Ethernet or Wi-Fi, allowing multiple users to print without a physical connection. In corporate support, you will mostly deal with network laser printers, which introduce additional layers of setup involving IP addresses and print servers.",
      },
      {
        title: "Setting up a printer on Windows and Mac",
        explanation:
          "On Windows, printer setup is done through Settings > Bluetooth & Devices > Printers & Scanners > Add a device. For network printers not automatically detected, use 'Add manually' and enter the printer's IP address. Drivers may be installed automatically via Windows Update or manually from the manufacturer's website. On macOS, go to System Preferences > Printers & Scanners and click the '+' button. AirPrint printers are detected automatically on the same Wi-Fi network. For IP-based network printers on Mac, use the IP tab and select IPP as the protocol. Always test with a print page after setup. In corporate environments, printers are often pushed automatically via Group Policy or MDM to avoid manual setup.",
      },
      {
        title: "Common printer errors: offline, paper jam, driver issues",
        explanation:
          "Three printer errors dominate support queues. 'Printer offline' is the most frequent — it occurs when Windows loses communication with the printer, often due to a network change, IP address conflict, or a stuck print queue. Fix it by right-clicking the printer in Settings, selecting 'See what's printing', and clearing the queue, then setting the printer back online. Paper jams require physically removing all jammed paper carefully to avoid tearing — never force it. Always check all accessible panels and trays. Driver issues appear as print jobs completing on the computer but nothing printing, or incorrect output — resolve by uninstalling and reinstalling the latest driver from the manufacturer's website.",
      },
      {
        title: "Network printer setup and IP configuration",
        explanation:
          "Network printers communicate with computers using IP addresses, and knowing how to configure and troubleshoot this is essential. Every network printer should be assigned a static IP address (not DHCP) to prevent its address from changing and breaking connections for all users. This is configured in the printer's onboard menu or through its embedded web interface — accessed by entering the printer's IP into a browser. When adding the printer on a workstation, you connect by IP address directly or via a print server hostname. If users suddenly cannot print after a network change, the printer's IP may have changed — verify by printing a configuration page from the printer itself, which lists the current IP.",
      },
      {
        title: "Peripheral types: keyboards, mice, monitors, webcams",
        explanation:
          "Peripherals are devices that connect to a computer to extend its capabilities. Input peripherals include keyboards and mice (wired USB or wireless Bluetooth/RF). Output peripherals include monitors (connected via HDMI, DisplayPort, USB-C, or VGA). Communication peripherals include webcams and headsets, heavily used in remote and hybrid work environments. In IT support, peripheral issues are extremely common. Monitors not detected, mice not pairing, and webcams not appearing in video call apps are all frequent tickets. The first diagnostic step for most peripheral issues is to try a different USB port or cable — the majority of issues are physical connection or driver related rather than hardware failure.",
      },
      {
        title: "USB vs Bluetooth devices: pairing and troubleshooting",
        explanation:
          "USB devices connect through a physical cable and are generally plug-and-play — Windows and macOS install drivers automatically for most standard devices. Troubleshooting involves checking if the device is recognised in Device Manager (Windows) or System Information (Mac). Bluetooth devices require pairing — on Windows, this is done through Settings > Bluetooth & Devices; on Mac, through System Preferences > Bluetooth. Common Bluetooth issues include devices not appearing during pairing (ensure the device is in pairing mode), connection drops (interference from other Bluetooth devices or distance), and devices connecting to the wrong computer. Unpairing and re-pairing resolves most Bluetooth issues. USB hubs can cause issues if they are not externally powered and lack sufficient current.",
      },
      {
        title: "Driver installation and Windows Device Manager",
        explanation:
          "A driver is software that allows the operating system to communicate with a hardware device. Without the correct driver, a device may not function at all or may work with limited capability. Device Manager (devmgmt.msc) is the central tool for managing hardware drivers in Windows. Devices with driver problems are flagged with a yellow triangle. Right-clicking a device allows you to update, roll back, disable, or uninstall its driver. For updates, Windows can search automatically, or you can download the driver directly from the manufacturer's website. After a Windows major update, driver compatibility issues are common — always check Device Manager after a major update if users report peripheral problems.",
      },
    ],
  },
  {
    id: 8,
    title: "Networking Basics",
    description:
      "LAN/WAN, IP addressing, DNS, DHCP, and network troubleshooting.",
    topics: [
      {
        title: "What is a network: LAN, WAN, WLAN",
        explanation:
          "A network is a system that connects multiple devices to share data and resources. A LAN (Local Area Network) connects devices within a limited area such as an office or home — typically using Ethernet cables or Wi-Fi. A WAN (Wide Area Network) connects multiple LANs across large geographic distances — the internet itself is the largest WAN. A WLAN (Wireless LAN) is a LAN using Wi-Fi rather than physical cables. In IT support, you will primarily deal with LAN and WLAN issues — devices failing to connect, IP address conflicts, or slow internal network speeds. Understanding the difference between these network types helps you ask the right diagnostic questions and involve the right team.",
      },
      {
        title: "IP addressing: IPv4 basics, DHCP vs static IP",
        explanation:
          "An IP address is a unique numerical label assigned to every device on a network, used to identify and communicate with it. IPv4 addresses are written in the format 192.168.1.1 — four numbers between 0 and 255, separated by dots. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices when they connect to a network — most devices use DHCP by default. A static IP is manually assigned and never changes — used for servers, printers, and network equipment that need a predictable address. In support, IP address conflicts (two devices with the same IP) are a common cause of connectivity loss. Running 'ipconfig' on Windows shows the device's current IP assignment.",
      },
      {
        title: "DNS and DHCP explained simply",
        explanation:
          "DNS (Domain Name System) is the internet's address book. When you type 'google.com' into a browser, DNS translates that name into the actual IP address of Google's server so your computer knows where to connect. Without DNS, you would need to memorise IP addresses for every website. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network when they connect. Think of DHCP as the network's receptionist — it gives each arriving device a temporary address badge. In corporate support, DNS and DHCP failures cause widespread connectivity issues because users cannot reach internal systems or the internet. The command 'nslookup' tests DNS resolution from the command line.",
      },
      {
        title:
          "Common network issues: no internet, slow connection, VPN problems",
        explanation:
          "Three network issues appear most frequently in support queues. 'No internet' can mean the device has no IP (DHCP failure), DNS is broken, the gateway is unreachable, or the ISP is down — narrow it down with 'ipconfig' and 'ping'. Slow connections may be caused by bandwidth saturation, Wi-Fi interference, a faulty cable, or an ISP issue — run a speed test to isolate the problem. VPN problems are increasingly common in hybrid work environments; they typically involve incorrect credentials, expired certificates, firewall blocking the VPN port, or the VPN client needing reinstallation. Always ask the user whether the issue is on Wi-Fi, wired, or only when VPN is active — this narrows the cause significantly.",
      },
      {
        title: "Basic commands: ping, ipconfig/ifconfig, tracert, nslookup",
        explanation:
          "Four command-line tools are essential for first-line network troubleshooting. 'ping [IP or hostname]' tests basic connectivity — a successful ping shows round-trip times; no response indicates the target is unreachable or blocking ICMP. 'ipconfig' (Windows) or 'ifconfig' (Mac/Linux) displays the device's current IP address, subnet mask, and default gateway. 'tracert [hostname]' (Windows) or 'traceroute' (Mac/Linux) traces the path packets take to reach a destination and shows where the connection slows or drops. 'nslookup [hostname]' tests whether DNS resolution is working correctly. Mastering these four commands allows you to diagnose most network issues within minutes and provide precise information to the network team when escalating.",
      },
      {
        title: "Wi-Fi troubleshooting steps",
        explanation:
          "Wi-Fi issues are among the most reported IT support tickets, particularly in hybrid work environments. A systematic troubleshooting approach saves significant time. Start with the basics: is the Wi-Fi adapter enabled? (Check Network & Internet settings or the Fn key.) Is the device connecting to the correct SSID? Can other devices connect to the same network? If yes, the issue is device-specific. Forget the network and reconnect with credentials. Check if an IP address is being assigned using 'ipconfig'. Update the Wi-Fi driver. If no devices can connect, the issue is the router or access point. Reboot the router, check for firmware updates, and confirm DHCP is active. Always document findings even when escalating.",
      },
      {
        title: "Firewall basics and port blocking",
        explanation:
          "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predefined rules. It acts as a barrier between a trusted internal network and untrusted external networks. Firewalls work by allowing or blocking traffic on specific ports — for example, port 443 is HTTPS (secure web), port 80 is HTTP, port 3389 is RDP, and port 25 is SMTP email. In support, firewall issues typically present as an application or service failing to connect despite the network being otherwise healthy. The fix usually involves adding a firewall rule to allow traffic on the specific required port. Windows Defender Firewall can be temporarily disabled for testing, but always re-enable it after diagnosis.",
      },
    ],
  },
  {
    id: 9,
    title: "ITIL & Service Management",
    description:
      "ITIL 4 concepts, service desk function, SLAs, and CMDB basics.",
    topics: [
      {
        title: "What is ITIL and why companies use it",
        explanation:
          "ITIL (Information Technology Infrastructure Library) is a globally recognised framework of best practices for IT service management. It provides organisations with a structured, repeatable approach to planning, delivering, and improving IT services. Companies adopt ITIL because it reduces service disruption, improves customer satisfaction, lowers costs through standardised processes, and enables clearer communication between IT and business teams. ITIL is not software — it is a set of guidelines and practices that can be implemented in any tool. Many organisations require ITIL Foundation certification for IT support roles because it demonstrates that an employee understands how professional IT service delivery works, from incident logging to continual improvement.",
      },
      {
        title: "ITIL 4 key concepts: value, service, practice",
        explanation:
          "ITIL 4, the current version, introduced a modernised approach built around three core concepts. Value is the central principle — all IT activities must deliver value to the customer and the organisation. A service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve without managing specific costs and risks. A practice is the ITIL 4 term for what was previously called a 'process' — it encompasses people, processes, tools, and skills needed to achieve an objective. ITIL 4 includes 34 management practices grouped into General, Service, and Technical categories. The Service Value System (SVS) in ITIL 4 shows how all components work together to create value.",
      },
      {
        title: "Incident vs Problem vs Change vs Service Request",
        explanation:
          "These four categories define the types of work a service desk handles. An Incident is any unplanned disruption or degradation of a service — for example, a user cannot log in. A Problem is the underlying root cause of one or more incidents — for example, a corrupted Active Directory attribute affecting multiple users. A Change is a controlled addition, modification, or removal of a service component — for example, a server upgrade. A Service Request is a formal request for something new — for example, a new user account or software installation. Correctly categorising tickets at the point of logging ensures they are routed to the right team, handled with the correct process, and tracked against the appropriate SLA.",
      },
      {
        title: "Service Desk function and responsibilities",
        explanation:
          "The Service Desk is the single point of contact (SPOC) between IT and the business. It is responsible for logging all incoming incidents and requests, providing first-line resolution, escalating to specialist teams when required, and communicating updates to users. In ITIL terms, the Service Desk is not just a call-handling function — it is a critical business relationship hub. Responsibilities include ticket lifecycle management, SLA monitoring, knowledge base contribution, and trend reporting. Service Desk agents are often the first impression a user has of the IT function. A high-performing Service Desk improves overall business productivity by reducing the time employees spend dealing with IT disruptions.",
      },
      {
        title: "SLAs, OLAs, and underpinning contracts",
        explanation:
          "These three agreement types define the commitments that support delivery. An SLA (Service Level Agreement) is the formal agreement between IT and the customer defining expected response and resolution times, availability, and service quality. An OLA (Operational Level Agreement) is an internal agreement between different IT teams — for example, between the service desk and the network team — defining their mutual support commitments. An Underpinning Contract is an agreement with a third-party vendor that supports the SLA. For example, a hardware maintenance contract with a vendor supports an SLA that promises next-day hardware replacement. Understanding all three ensures that SLA commitments are realistic, supported by internal processes, and backed by vendor agreements.",
      },
      {
        title: "CMDB basics: Configuration Management Database",
        explanation:
          "A CMDB (Configuration Management Database) is a centralised repository that stores information about all IT assets and their relationships — known as Configuration Items (CIs). CIs include servers, laptops, applications, network devices, and software licences. The CMDB is used to understand the impact of incidents and changes (for example, which services are affected if a specific server fails), plan changes with awareness of dependencies, and track assets throughout their lifecycle. In tools like ServiceNow, the CMDB is deeply integrated with incident and change management. Keeping the CMDB accurate requires regular audits and automated discovery tools. For entry-level support staff, understanding the CMDB helps you escalate with better context.",
      },
      {
        title: "Continual Service Improvement (CSI)",
        explanation:
          "Continual Service Improvement (CSI) is the ITIL practice of regularly reviewing and improving IT services, processes, and practices to ensure they continue to meet the changing needs of the business. CSI uses a seven-step improvement process: identify the improvement strategy, define what will be measured, gather data, process data, analyse the data, present and use the information, and implement improvement. In practical terms, CSI activities include reviewing SLA breach trends, reducing recurring incidents through problem management, updating knowledge base articles, and training staff on new processes. CSI is not a one-time project — it is an ongoing cultural commitment to making the service better over time.",
      },
    ],
  },
  {
    id: 10,
    title: "Incident & Service Desk Management",
    description:
      "Incident lifecycle, priority matrix, ticket management, and major incidents.",
    topics: [
      {
        title:
          "Incident lifecycle: log, categorize, prioritize, resolve, close",
        explanation:
          "Every incident follows a defined lifecycle to ensure it is handled consistently and efficiently. Log: the incident is recorded in the ticketing system with user details, description, and time. Categorize: the incident is assigned a type (hardware, software, network, access) to route it to the correct team. Prioritize: urgency and impact are assessed to set the SLA clock and determine handling order. Resolve: the service desk works through the issue using available tools, knowledge base, and escalation paths until the service is restored. Close: the user confirms resolution, the ticket is updated with the fix details, and any knowledge article updates are flagged. Following this lifecycle consistently ensures nothing falls through the cracks.",
      },
      {
        title: "Priority matrix: impact vs urgency",
        explanation:
          "Priority in incident management is determined by two factors: impact and urgency. Impact measures the breadth of effect — how many users, systems, or business processes are affected. Urgency measures the speed at which the situation deteriorates or needs to be addressed. Together, these produce a priority level, typically P1 to P4. P1 (Critical): complete service outage affecting many users, requiring immediate response. P2 (High): significant service degradation or critical user affected. P3 (Medium): single user affected with a workaround available. P4 (Low): minor request or cosmetic issue. The priority matrix ensures that limited support resources are directed where business impact is greatest, and that SLA commitments are realistic and enforceable.",
      },
      {
        title: "Ticket management in tools like ServiceNow, Jira, Zendesk",
        explanation:
          "Ticketing tools are the core operational platform for any service desk. ServiceNow is the most widely used enterprise ITSM platform — it handles incidents, problems, changes, assets, and the CMDB in a single system. Jira Service Management (by Atlassian) is popular in software and tech companies and integrates tightly with development workflows. Zendesk is widely used in customer service and support centre environments. Regardless of the tool, the fundamental skills are the same: log accurately, categorise correctly, prioritise appropriately, update in real time, and close with complete resolution notes. Employers rarely expect prior experience with a specific tool — demonstrating that you understand the principles transfers quickly to any platform.",
      },
      {
        title: "Major incident management (P1/P2 handling)",
        explanation:
          "A major incident (P1 or P2) is a high-impact event that causes significant disruption to business operations and requires a dedicated, coordinated response. Key roles in a major incident include the Incident Manager (coordinates the response), the technical bridge team (specialists working the fix), and the communications lead (updates to affected users and stakeholders). The process involves immediate escalation, a dedicated bridge call or chat channel, regular status updates at defined intervals (typically every 30 minutes for P1), and a post-incident review (PIR) once resolved. During a major incident, communication is as important as the technical fix — stakeholders need to know what is happening, the expected resolution time, and the business impact.",
      },
      {
        title: "Communication during incidents: updates to users",
        explanation:
          "Proactive communication during an incident is one of the most valued behaviours in IT support. Users who receive regular, honest updates tolerate service outages far better than users left in silence. Best practices include sending an initial acknowledgement within the SLA response window confirming the incident is being investigated, providing updates at regular intervals (every 30 to 60 minutes for significant incidents) even if there is no resolution yet, and sending a resolution notification with a brief explanation of the cause and fix. Updates should be written in plain language, free of technical jargon. In ITIL terms, this practice is part of the Incident Management practice and directly impacts CSAT and user trust.",
      },
      {
        title: "Knowledge base articles: when and how to use them",
        explanation:
          "A knowledge base is a searchable repository of documented solutions, workarounds, and how-to guides maintained by the support team. It is one of the most powerful tools for improving first call resolution and reducing ticket volume. Use the knowledge base before escalating — if the issue is documented, resolution should be immediate. After resolving an undocumented issue, create or update a knowledge article so the next agent benefits. A good knowledge article includes the symptoms, affected environment, root cause (if known), resolution steps, and any applicable workarounds. In ITIL, this is part of the Knowledge Management practice. Teams with strong knowledge bases resolve significantly more incidents at first-line without specialist involvement.",
      },
      {
        title: "Shift handover and documentation",
        explanation:
          "Shift handover is the formal process of transferring responsibility for open incidents, ongoing issues, and critical context from one team or shift to the next. Poor handover is one of the most common causes of SLA breaches, duplicate work, and customer frustration. A good handover includes a summary of all open P1/P2 incidents with current status and next actions, any business-critical issues expected to escalate, known system risks or change windows overnight, and any communication commitments made to users. Handover should be both written (via a handover log) and verbal where possible. Good documentation discipline throughout a shift makes handover straightforward and demonstrates professionalism to your team and management.",
      },
    ],
  },
  {
    id: 11,
    title: "SQL DBA Basics",
    description:
      "Database fundamentals, SQL basics, backup/restore, and performance tuning.",
    topics: [
      {
        title: "What is a database and what a DBA does",
        explanation:
          "A database is an organised collection of structured data stored electronically, designed to allow efficient retrieval, insertion, and management of information. Databases power virtually every application — from banking systems to helpdesk tools to e-commerce platforms. A DBA (Database Administrator) is responsible for the installation, configuration, performance, security, backup, and availability of database systems. In an entry-level DBA role, you will typically perform tasks like running scheduled jobs, monitoring performance, executing backup and restore procedures, managing user permissions, and assisting developers with queries. Understanding what a DBA does helps you frame your skills correctly during interviews and identify which tasks to prioritise as you learn the role.",
      },
      {
        title: "SQL basics: SELECT, INSERT, UPDATE, DELETE",
        explanation:
          "SQL (Structured Query Language) is the standard language used to interact with relational databases. Four fundamental commands form the core of daily DBA and developer work. SELECT retrieves data from one or more tables — 'SELECT * FROM Employees WHERE Department = IT'. INSERT adds new rows to a table — 'INSERT INTO Employees (Name, Role) VALUES ('Priya', 'DBA')'. UPDATE modifies existing data — 'UPDATE Employees SET Role = 'Senior DBA' WHERE Name = 'Priya''. DELETE removes rows — 'DELETE FROM Employees WHERE Name = 'Priya''. Always use a WHERE clause with UPDATE and DELETE to avoid accidentally modifying or deleting all rows in a table. These four commands are tested in virtually every SQL-related interview.",
      },
      {
        title: "Database objects: tables, views, indexes, stored procedures",
        explanation:
          "A relational database is made up of several types of objects. Tables are the primary storage structure — each table holds rows and columns of data, similar to a spreadsheet. Views are virtual tables based on a SELECT query — they simplify complex queries and can be used to restrict what data users see. Indexes speed up data retrieval by creating a sorted reference to columns, similar to the index at the back of a book — without them, the database must scan every row (a table scan). Stored procedures are pre-written SQL code blocks saved in the database and executed by name — used for repetitive tasks, business logic, and automated processes. Understanding these objects is essential for any DBA role.",
      },
      {
        title: "Backup and restore: full, differential, transaction log",
        explanation:
          "Backup and restore are the most critical DBA responsibilities — data loss due to missed or failed backups is a career-defining event. SQL Server supports three backup types. A full backup captures the entire database at a point in time — typically run weekly or daily. A differential backup captures only the data changed since the last full backup — faster to create and smaller in size, typically run daily. A transaction log backup captures all database changes since the last log backup — usually run every 15 to 60 minutes, enabling point-in-time recovery. A typical recovery strategy combines all three: restore the last full, apply the latest differential, then apply transaction logs up to the point of failure.",
      },
      {
        title: "SQL Server Agent and scheduled jobs",
        explanation:
          "SQL Server Agent is a Microsoft SQL Server component that automates routine database administration tasks by running scheduled jobs. A job is a defined set of one or more steps — for example, run a backup script, then send a notification email. Jobs can be scheduled by time (daily at 2am), event (when an alert triggers), or on demand. SQL Server Agent is used for backup automation, database maintenance plans (rebuilding indexes, updating statistics), report generation, and data imports or exports. Monitoring job history is part of daily DBA work — failed jobs must be investigated immediately as they may indicate missed backups or broken data pipelines. SQL Server Agent requires the Windows service to be running.",
      },
      {
        title: "Performance basics: slow queries, execution plans",
        explanation:
          "Database performance issues, particularly slow queries, are among the most common escalations a DBA handles. A slow query is one that takes significantly longer than expected, often due to missing indexes, poorly written SQL, or excessive data volume. The first diagnostic tool is the execution plan — a visual representation of how SQL Server processes a query, showing which operations are most expensive. Look for Table Scan operations (red flag — no index being used), high estimated row counts, and key lookups. The Query Store in SQL Server tracks query performance over time and identifies regressions after changes. Adding a missing index on the filtered column is often the fastest fix for a slow query in an entry-level DBA environment.",
      },
      {
        title: "User management and permissions in SQL Server",
        explanation:
          "Controlling who can access what data is a core DBA responsibility with direct security and compliance implications. SQL Server uses a two-layer security model: logins at the server level and users at the database level. A login grants access to the SQL Server instance. A user maps the login to a specific database and is assigned to roles. Built-in database roles include db_datareader (SELECT only), db_datawriter (INSERT, UPDATE, DELETE), and db_owner (full control). The principle of least privilege requires granting only the minimum permissions necessary for a user to do their job. Permissions should be reviewed regularly and revoked promptly when a user changes roles or leaves the organisation.",
      },
    ],
  },
  {
    id: 12,
    title: "System Administration & Azure/AD",
    description:
      "Active Directory, Azure AD, Windows Server, patch management, and monitoring.",
    topics: [
      {
        title: "Role of a system administrator",
        explanation:
          "A System Administrator (SysAdmin) is responsible for the installation, configuration, maintenance, and security of the servers, infrastructure, and operating systems that a business relies on. Unlike a service desk agent who responds reactively to user issues, a SysAdmin works proactively to ensure systems are available, secure, and performing optimally. Typical responsibilities include managing Windows Server environments, Active Directory, user provisioning, patch management, backup monitoring, and implementing security policies. In entry-level roles, SysAdmins often share responsibilities with the service desk. As you gain experience, specialisation into areas like cloud administration (Azure) or security becomes the career progression path.",
      },
      {
        title: "Active Directory: users, groups, OUs, GPOs",
        explanation:
          "Active Directory (AD) is Microsoft's directory service for managing users, computers, and resources in a Windows domain environment. Users are account objects that allow individuals to log into domain-joined machines using centralised credentials. Groups are collections of users or computers used to assign permissions efficiently — instead of setting permissions for each user individually, you add them to a group. Organisational Units (OUs) are containers within AD used to organise objects logically by department, location, or function. Group Policy Objects (GPOs) are sets of rules linked to OUs that enforce configuration settings across machines and users — for example, blocking USB drives, setting desktop wallpaper, or mapping network drives automatically at login.",
      },
      {
        title: "Azure AD: cloud identity, SSO, MFA",
        explanation:
          "Azure Active Directory (Azure AD, now rebranded as Microsoft Entra ID) is Microsoft's cloud-based identity and access management service. While traditional on-premises AD manages users within an office network, Azure AD manages identities for cloud and hybrid environments, enabling users to securely access cloud applications such as Microsoft 365, SharePoint, and thousands of third-party SaaS apps. SSO (Single Sign-On) allows users to authenticate once and access multiple applications without re-entering credentials. MFA (Multi-Factor Authentication) adds a second layer of verification — typically a phone notification or authentication app code — significantly reducing the risk of compromised accounts. Azure AD is central to modern enterprise IT security architecture.",
      },
      {
        title: "Windows Server basics: roles and features",
        explanation:
          "Windows Server is the operating system that runs on corporate servers, providing shared services to the network. Unlike a desktop Windows OS, Windows Server is designed for multi-user, high-availability workloads. Roles are the primary services a server provides — common roles include Active Directory Domain Services (AD DS), DNS Server, DHCP Server, File and Storage Services, and Print Services. Features are optional software components that support roles or add functionality — for example, the .NET Framework or PowerShell DSC. Roles and features are installed and managed through Server Manager. Understanding which roles are installed on which servers is essential for troubleshooting and for planning changes that could affect dependent services.",
      },
      {
        title: "File and print server management",
        explanation:
          "File servers store and share files centrally, allowing multiple users to access documents from a single location rather than keeping copies on individual machines. Permissions on shared folders are controlled through a combination of NTFS permissions (applied to the file system) and Share permissions — the effective permission is the most restrictive of the two. Common admin tasks include creating new shares, modifying folder permissions, monitoring disk usage, and investigating access denied errors. Print servers centralise printer management, deploying printers to users via Group Policy and maintaining a single queue. Managing print servers includes resolving stuck queues, adding new printers, and ensuring correct drivers are available for all deployed operating systems.",
      },
      {
        title: "Patch management and WSUS",
        explanation:
          "Patch management is the process of identifying, testing, and deploying software updates to keep systems secure and stable. Unpatched systems are one of the most common entry points for cyberattacks. WSUS (Windows Server Update Services) is a free Microsoft tool that allows organisations to control which updates are deployed to which computers and when. Instead of each machine downloading patches directly from Microsoft, WSUS acts as an internal update server. Administrators approve patches after testing, then deploy them in phases — typically test machines first, then broader rollout. Patch cycles in most organisations follow a monthly schedule aligned with Microsoft's Patch Tuesday. Monitoring patch compliance rates is a regular SysAdmin reporting responsibility.",
      },
      {
        title: "Monitoring and alerting basics",
        explanation:
          "Proactive monitoring allows SysAdmins to detect and respond to issues before users are impacted. Key metrics to monitor include CPU and memory utilisation, disk space, service availability, network throughput, and event log errors. Tools used for monitoring include built-in Windows options like Performance Monitor and Task Manager on servers, as well as enterprise tools like SCOM (System Center Operations Manager), Nagios, Zabbix, or Azure Monitor for cloud infrastructure. Alerts are notifications triggered when a metric crosses a threshold — for example, alerting when disk space falls below 10%. A well-configured alerting system gives the SysAdmin time to act before a server runs out of disk space, a service crashes, or a performance issue affects users.",
      },
    ],
  },
];
