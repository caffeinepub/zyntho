export interface Topic {
  title: string;
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  description: string;
  topics: Topic[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Customer Service Fundamentals",
    level: "beginner",
    description:
      "Core principles of customer service, communication, and handling diverse customer interactions professionally.",
    topics: [
      {
        title: "What is Customer Service",
        explanation:
          "Customer service is the direct support and assistance provided to customers before, during, and after their use of a product or service. It acts as the bridge between a company and its users, shaping satisfaction, loyalty, and brand reputation. In IT roles, customer service means solving technical problems while making users feel heard and valued. Poor service leads to churn and negative reviews; exceptional service builds long-term loyalty. Every interaction — whether via phone, email, or chat — is an opportunity to reinforce trust and demonstrate professionalism.",
      },
      {
        title: "Communication Skills",
        explanation:
          "Effective communication in support roles involves three core elements: tone, pace, and clarity. Tone sets the emotional quality of your voice — warm and professional reassures customers, while flat or aggressive tones escalate situations. Pace determines how fast or slow you speak; too fast causes confusion, too slow frustrates callers. Clarity means using direct, simple language that anyone can understand without technical background. Great communicators adapt their style to each customer — matching their energy level, simplifying jargon, and always confirming that the customer has understood the resolution before closing.",
      },
      {
        title: "Active Listening",
        explanation:
          "Active listening is the deliberate practice of fully concentrating on what a customer says rather than waiting to speak. It prevents misdiagnosis — many tickets are reopened because agents solved the wrong problem. Techniques include summarising the issue back to the customer ('So what you're experiencing is...'), giving verbal acknowledgements like 'I understand' or 'That must be frustrating', asking open-ended questions to gather detail, and taking brief notes. In IT support, active listening is consistently rated the number one soft skill in job descriptions and directly improves First Call Resolution rates.",
      },
      {
        title: "Empathy and Sympathy",
        explanation:
          "Empathy means understanding and sharing the feelings of your customer — you acknowledge their frustration as real and valid. Sympathy is feeling sorry for them from a distance. In support, empathy is more powerful: 'I understand how disruptive it is to lose access to your email — let's fix this right now.' Sympathy sounds like: 'That's too bad.' Empathy drives genuine connection and reduces tension. Practical empathy techniques include using the customer's name, acknowledging the impact of their issue on their work, and avoiding dismissive language like 'That's not possible' or 'You should have checked the manual.'",
      },
      {
        title: "Handling Difficult Customers",
        explanation:
          "Difficult customers are often frustrated customers — their anger is rarely personal; it's about the impact of the unresolved issue on their work or life. The LAST framework is a proven approach: Listen without interrupting, Apologise for the inconvenience (not for being wrong), Solve the problem using your available tools and authority, and Thank the customer for their patience. Never match aggression with aggression. If a customer becomes abusive, calmly state acceptable behaviour boundaries. Escalating to a supervisor is appropriate when the situation is outside your authority or when a customer specifically requests it.",
      },
      {
        title: "Customer Satisfaction",
        explanation:
          "Customer satisfaction (CSAT) measures how well your service met customer expectations. It is typically captured through post-interaction surveys asking users to rate their experience from 1 to 5. High CSAT scores reflect agents who listen well, resolve issues on the first contact, set accurate expectations, and follow up proactively. CSAT is a leading indicator of customer retention — organisations that consistently score above 85% retain significantly more clients. In IT support, CSAT is influenced by speed of resolution, clarity of communication, and whether the agent showed genuine interest in helping the customer.",
      },
    ],
  },
  {
    id: 2,
    title: "IT Service Management Basics",
    level: "beginner",
    description:
      "Introduction to ITSM frameworks, incident and service request management, and core ITIL concepts.",
    topics: [
      {
        title: "Introduction to ITSM",
        explanation:
          "IT Service Management (ITSM) is a set of policies and practices for designing, delivering, managing, and improving IT services to meet business needs. Unlike traditional IT management, which focuses on technology, ITSM focuses on outcomes — ensuring IT services provide measurable value to users and the organisation. ITSM frameworks (like ITIL) provide structured processes, roles, and terminology. Key benefits include consistent service delivery, reduced downtime, better change control, and improved customer satisfaction. Understanding ITSM fundamentals is essential for anyone working in IT support, service desk, or operations roles.",
      },
      {
        title: "Incident Management",
        explanation:
          "Incident management is the process of restoring normal service operation as quickly as possible after an unplanned interruption, minimising business impact. The lifecycle is: Detection → Logging → Categorisation → Prioritisation → Assignment → Investigation → Resolution → Closure → Review. Priority is based on impact (how many users affected) and urgency (how time-sensitive the fix is). An P1 incident might be all users unable to access email; a P3 might be one user's screensaver not working. The goal is fast restoration, not root cause analysis — that belongs to Problem Management.",
      },
      {
        title: "Service Request Management",
        explanation:
          "Service requests are standard, pre-approved tasks that users request from IT — such as password resets, software installations, or new hardware provisioning. Unlike incidents, service requests do not involve service disruption; they fulfil agreed, expected needs. A well-designed service catalogue lists all available requests with clear fulfilment steps and timelines. Service request management improves efficiency by automating repetitive tasks, setting user expectations through SLAs, and freeing senior engineers from routine work. Well-categorised requests also generate data on what users need most, informing future IT planning.",
      },
      {
        title: "Problem Management",
        explanation:
          "Problem management addresses the root cause of incidents to prevent recurrence. While incident management restores service quickly, problem management digs deeper — identifying WHY the incident happened and implementing a permanent fix. A 'known error' is a problem with a documented workaround but no permanent fix yet. Problem management produces Root Cause Analysis (RCA) reports and drives changes through the Change Management process. For example, if 20 users report VPN dropouts (20 incidents), problem management investigates whether there's a firmware bug, network capacity issue, or configuration error as the root cause.",
      },
      {
        title: "Change Management",
        explanation:
          "Change management controls the lifecycle of all IT changes to minimise risk to services while enabling necessary improvements. All changes go through a Change Advisory Board (CAB) which reviews, approves, and schedules them. Change types include standard (pre-approved, low risk, e.g. password resets), normal (reviewed and approved before implementation), and emergency (urgent fixes to restore service, reviewed after). Proper change records document the change description, risk assessment, rollback plan, and implementation steps. Without change management, unplanned changes are the single largest cause of service outages in IT environments.",
      },
      {
        title: "ITIL Framework Overview",
        explanation:
          "ITIL (Information Technology Infrastructure Library) is the world's most widely adopted ITSM framework, providing best-practice guidance for IT service management. ITIL 4, the current version, organises service management around the Service Value System (SVS) — a holistic model showing how all components work together to deliver value. It includes four dimensions (organisations and people, information and technology, partners and suppliers, value streams) and 34 management practices. ITIL certifications (Foundation, Practitioner, Strategist, Leader) are industry-recognised credentials that improve career prospects in IT support and service management.",
      },
    ],
  },
  {
    id: 3,
    title: "Technical Support Fundamentals",
    level: "beginner",
    description:
      "Essential skills for troubleshooting, ticketing, remote support, documentation, and SLA management.",
    topics: [
      {
        title: "Troubleshooting Methodology",
        explanation:
          "Effective troubleshooting follows a structured methodology rather than random guessing. The CompTIA approach: Identify the problem (gather information, ask questions), Establish a theory (consider the most probable causes), Test the theory (verify or eliminate it), Establish a plan of action (document the fix steps), Implement the solution, Verify full functionality, and Document the outcome. Always start with the simplest possible cause before moving to complex ones — this is called Occam's Razor in troubleshooting. Documenting your steps as you go enables faster escalation and helps build the team's knowledge base for future similar issues.",
      },
      {
        title: "Ticketing Systems",
        explanation:
          "Ticketing systems are the backbone of IT support operations. They capture every user request or incident as a structured record including issue description, priority, category, assigned engineer, and resolution history. Common platforms include ServiceNow, Jira Service Management, Zendesk, Freshdesk, and BMC Remedy. A well-managed ticket includes: clear subject line, detailed description, reproduction steps, priority assignment, and time stamps. Proper ticket hygiene — regular updates, accurate categorisation, and complete closure notes — enables management reporting, SLA tracking, trend analysis, and knowledge base development that benefits the entire support team.",
      },
      {
        title: "Remote Support Tools",
        explanation:
          "Remote support tools allow IT agents to view and control a user's computer without physically being present, dramatically improving resolution speed. Common tools include TeamViewer, AnyDesk, Microsoft Remote Desktop, and LogMeIn Rescue. Enterprise environments often use tools built into ITSM platforms like ServiceNow's Remote Support. Best practices include always obtaining user consent before connecting, explaining what you are doing during the session, never accessing files unrelated to the issue, and disconnecting promptly after resolution. Remote support is the standard first-line approach before any physical intervention is considered.",
      },
      {
        title: "Documentation Best Practices",
        explanation:
          "Good documentation is what separates a capable individual contributor from a team asset. In IT support, documentation includes knowledge base articles, runbooks, network diagrams, configuration records, and post-incident reports. Effective documentation is specific (exact error messages, steps taken), current (updated when processes change), searchable (clear titles and tags), and actionable (anyone with basic skills can follow it). Every resolved ticket should include a clear resolution note — this builds a searchable knowledge base that reduces repeat ticket volume and enables faster onboarding of new team members.",
      },
      {
        title: "Escalation Procedures",
        explanation:
          "Escalation is the structured transfer of an issue to a higher-level team or specialist when the current agent cannot resolve it within their skill level, tools, or authority. You should escalate when you have exhausted your troubleshooting steps, the SLA is at risk of breach, the issue requires specialist system access, or the customer insists on speaking with a manager. A good escalation handover includes: ticket number, customer name, issue description, steps already tried, and urgency level. Avoid escalating prematurely — it wastes senior time and lowers first-call resolution rates. Escalate with context, never without it.",
      },
      {
        title: "SLA Understanding",
        explanation:
          "A Service Level Agreement (SLA) is a formal contract between the IT team and the business (or between a vendor and a client) that defines expected service targets. Key SLA metrics include Response Time (how quickly you acknowledge the ticket), Resolution Time (how quickly you close it), and Availability (e.g. 99.9% uptime). Priority levels (P1–P4) define different SLA timelines — P1 incidents typically require a 15-minute response and 4-hour resolution. Breaching SLAs consistently results in financial penalties, contract reviews, and damaged client trust. Tracking SLA compliance is a daily responsibility for all support agents.",
      },
    ],
  },
  {
    id: 4,
    title: "Windows Operating System",
    level: "intermediate",
    description:
      "Windows administration, Active Directory, Group Policy, Registry, and event log troubleshooting.",
    topics: [
      {
        title: "Windows Architecture",
        explanation:
          "Windows is built on a layered architecture with two core modes: User Mode (where applications run with limited hardware access) and Kernel Mode (where the OS core and drivers run with full hardware access). The Windows NT kernel handles memory management, process scheduling, security, and I/O operations. Key components include the Hardware Abstraction Layer (HAL), executive services (I/O Manager, Security Reference Monitor, Object Manager), and the Win32 subsystem for running applications. Understanding this architecture helps diagnose whether an issue is application-level (user mode crash) or system-level (kernel panic / Blue Screen of Death).",
      },
      {
        title: "Active Directory Basics",
        explanation:
          "Active Directory (AD) is Microsoft's directory service for managing users, computers, and resources in a Windows domain environment. It stores information about objects (users, groups, computers, printers) in a hierarchical structure of Domains, Organisational Units (OUs), and Forests. Key concepts: Domain Controller (DC) authenticates users; LDAP is the protocol AD uses; Kerberos handles authentication tickets. Common IT support tasks include resetting passwords, unlocking accounts, adding users to groups, and joining computers to the domain. AD is fundamental to enterprise IT — virtually every corporate Windows environment relies on it for access control and authentication.",
      },
      {
        title: "Group Policy",
        explanation:
          "Group Policy Objects (GPOs) allow administrators to manage settings for users and computers across an entire Active Directory domain from a central location. Policies can enforce password complexity requirements, deploy software, map network drives, configure firewall rules, and restrict access to specific applications or settings. GPOs are applied in this order: Local → Site → Domain → OU (LSDOU). Use `gpresult /r` to see which policies are applied to a user or computer, and `gpupdate /force` to immediately refresh policies. Understanding Group Policy is essential for system administrators managing Windows environments at any scale.",
      },
      {
        title: "Windows Registry",
        explanation:
          "The Windows Registry is a hierarchical database that stores configuration settings for the operating system, applications, and hardware. It is organised into Hives (HKEY_LOCAL_MACHINE for system-wide settings, HKEY_CURRENT_USER for per-user settings, HKEY_CLASSES_ROOT for file associations). Registry keys store data as Values in types including REG_SZ (string), REG_DWORD (number), and REG_BINARY (binary data). Always back up the registry before editing — incorrect changes can render Windows unbootable. Use Regedit.exe for manual editing or PowerShell for scripted changes. Many application issues, autostart programs, and file associations are controlled through Registry entries.",
      },
      {
        title: "Event Viewer and Logs",
        explanation:
          "Windows Event Viewer (eventvwr.msc) is the primary diagnostic tool for Windows issues, recording Application, Security, System, and Setup events. Each log entry has an Event ID, Source, Level (Information, Warning, Error, Critical), and detailed description. Critical IDs to know: Event ID 41 (unexpected shutdown), 4624/4625 (logon success/failure), 7034 (service crashed), 6008 (dirty shutdown). The Security log records all logon events and is crucial for security auditing. Use Windows PowerShell's `Get-EventLog` or `Get-WinEvent` cmdlets to filter and export logs. Event logs are the first place to look when diagnosing unexpected Windows behaviour.",
      },
      {
        title: "Common Windows Issues",
        explanation:
          "IT support professionals regularly encounter a core set of Windows problems. Blue Screen of Death (BSOD) crashes — check minidump files in C:WindowsMinidump and the associated stop codes. Slow performance — check Task Manager for CPU/RAM/disk usage; SFC /scannow repairs corrupted system files. Windows Update failures — clear the SoftwareDistribution folder and restart the Update service. Profile corruption — create a new local profile and migrate data. Network connectivity issues — use ipconfig, ping, nslookup and tracert for diagnosis. Mastering these common scenarios covers approximately 80% of real-world Windows support tickets.",
      },
    ],
  },
  {
    id: 5,
    title: "Networking Fundamentals",
    level: "intermediate",
    description:
      "OSI model, TCP/IP, DNS, DHCP, VPN, firewall concepts, and network troubleshooting techniques.",
    topics: [
      {
        title: "OSI Model",
        explanation:
          "The OSI (Open Systems Interconnection) model is a conceptual framework that divides network communication into 7 layers: Physical (cables, signals), Data Link (MAC addresses, switches), Network (IP addresses, routers), Transport (TCP/UDP, port numbers), Session (connection management), Presentation (encryption, compression), and Application (HTTP, SMTP, DNS). In troubleshooting, you work from the bottom up — first confirm physical connectivity (Layer 1), then check if the network is reachable (Layer 3), then verify the application is responding (Layer 7). The OSI model is the universal language of networking, referenced in every network interview and troubleshooting conversation.",
      },
      {
        title: "TCP/IP Protocol",
        explanation:
          "TCP/IP is the foundational protocol suite of the internet and all modern networks. TCP (Transmission Control Protocol) is connection-oriented — it establishes a three-way handshake (SYN, SYN-ACK, ACK) before data transfer, guaranteeing delivery and order. UDP (User Datagram Protocol) is connectionless — faster but without delivery guarantees, used for streaming and gaming. IP addressing uses 32-bit addresses (IPv4) like 192.168.1.100 with subnet masks defining network segments. Key commands: `ipconfig` (Windows) / `ifconfig` (Linux) show IP configuration; `ping` tests connectivity; `tracert` / `traceroute` traces the route to a destination.",
      },
      {
        title: "DNS and DHCP",
        explanation:
          "DNS (Domain Name System) translates human-readable domain names (like www.google.com) into IP addresses that computers use. Without DNS, you'd need to remember IP addresses for every website. DNS resolution goes: browser cache → OS cache → DNS resolver → Root servers → TLD servers → Authoritative server. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to devices on a network. Common issues: DNS cache poisoning, DHCP scope exhaustion (no more IPs to assign), and DNS resolution failures. Commands: `nslookup` tests DNS, `ipconfig /flushdns` clears the DNS cache.",
      },
      {
        title: "VPN Basics",
        explanation:
          "A VPN (Virtual Private Network) creates an encrypted tunnel between a user's device and a corporate network, allowing secure remote access as if the user were physically in the office. Split tunneling routes only corporate traffic through the VPN while other traffic goes directly to the internet. Common VPN protocols include OpenVPN, IKEv2/IPsec, L2TP/IPsec, and WireGuard. Enterprise VPN solutions include Cisco AnyConnect, Palo Alto GlobalProtect, and Fortinet FortiClient. Common VPN support issues include certificate errors, authentication failures, split-tunnel configuration problems, and DNS resolution issues when connected. VPN troubleshooting is a daily task in any corporate IT support role.",
      },
      {
        title: "Network Troubleshooting",
        explanation:
          "Systematic network troubleshooting follows a top-down or bottom-up approach using the OSI model. Essential commands: `ping` tests basic connectivity; `tracert`/`traceroute` identifies where packets are lost; `nslookup` tests DNS resolution; `netstat -an` shows active connections and listening ports; `ipconfig /all` shows full IP configuration; `arp -a` shows the ARP cache mapping IPs to MACs. Common scenarios: No network access (check IP assignment and gateway); intermittent drops (check for duplex mismatch, cable issues, or DHCP lease problems); slow performance (check for packet loss, bandwidth saturation, or DNS delays). Document every step for escalation.",
      },
      {
        title: "Firewall Concepts",
        explanation:
          "Firewalls control incoming and outgoing network traffic based on rules — they are the first line of defence for any network. Stateful firewalls track the state of active connections and allow return traffic for established sessions. Application-layer firewalls (next-gen firewalls) can inspect traffic at Layer 7, blocking specific applications or content. Key concepts: allow/deny rules, port-based filtering, DMZ (demilitarised zone for public-facing servers), NAT (Network Address Translation for private IP mapping). In IT support, firewall rules are often the reason why a user cannot access a specific application or website. Always check firewall logs before concluding an application is broken.",
      },
    ],
  },
  {
    id: 6,
    title: "Hardware and Peripherals",
    level: "beginner",
    description:
      "Desktop and laptop components, printer and router setup, monitor troubleshooting, and peripheral support.",
    topics: [
      {
        title: "Desktop Components",
        explanation:
          "Understanding desktop hardware is fundamental to IT support. Core components: CPU (Central Processing Unit) — the brain of the computer, executing instructions; RAM (Random Access Memory) — temporary storage for active processes (4–32 GB typical); HDD/SSD — permanent storage (SSD is 10x faster than HDD); GPU (Graphics Processing Unit) — renders video output; PSU (Power Supply Unit) — converts AC mains to DC power; Motherboard — connects all components. Common hardware failures: RAM errors (blue screens, random crashes), HDD failure (clicking noises, slow performance), PSU failure (random shutdowns). Use tools like CrystalDiskInfo for disk health and MemTest86 for RAM diagnostics.",
      },
      {
        title: "Laptop Troubleshooting",
        explanation:
          "Laptops present unique support challenges due to their compact design and battery dependency. Common issues: Battery not charging — check power adapter, charging port, and battery health via manufacturer diagnostics. Overheating — clean vents with compressed air; check whether thermal paste needs replacing; use throttlestop or similar tools to monitor temps. Screen issues — check for loose LCD cable (often flickering or dead display), test with external monitor to isolate GPU vs panel. Keyboard failures — check for debris, test in BIOS; wireless keyboard issues might be driver-related. Always check manufacturer documentation for disassembly procedures — laptops vary significantly in repairability.",
      },
      {
        title: "Printer Setup and Troubleshooting",
        explanation:
          "Printer support is one of the most common IT helpdesk requests. Setup involves installing the correct driver (from manufacturer website or Windows Update), configuring the IP address for network printers, and adding the printer via Windows Settings or Control Panel. Common issues: Print jobs stuck in queue — clear the print spooler (services.msc, stop Print Spooler, delete files in C:WindowsSystem32spoolPRINTERS, restart service). Driver conflicts — uninstall and reinstall drivers. Offline status — check network connectivity and printer IP. Paper jams — follow manufacturer clearing procedures. For enterprise environments, printers are deployed via Group Policy.",
      },
      {
        title: "Router Configuration",
        explanation:
          "Routers direct network traffic between different networks — typically between a home/office network and the internet. Basic router configuration involves: accessing the admin interface (usually 192.168.0.1 or 192.168.1.1), setting the SSID and wireless password, configuring DHCP range, enabling/disabling NAT, setting up port forwarding for specific services, and updating firmware. Common issues: Cannot access admin panel — check default IP, try factory reset. No internet — check WAN settings and ISP credentials. Slow Wi-Fi — check channel congestion (use Wi-Fi analyser app), update firmware, or change frequency band from 2.4 GHz to 5 GHz for faster speeds.",
      },
      {
        title: "Monitor Issues",
        explanation:
          "Monitor troubleshooting covers display hardware and display settings. No signal — swap cable, test with another monitor, check GPU seating in desktop. Flickering display — check refresh rate (should match monitor's spec, e.g. 60 Hz or 144 Hz), check for damaged cable, test with different cable type (HDMI vs DisplayPort). Resolution issues — update GPU drivers, check display adapter settings. Discolouration or dead pixels — manufacturer warranty claim territory. Dual monitor setup problems — check if second monitor is detected in Display Settings; set correct arrangement and primary display. For laptops, use Fn + display key (e.g. Fn+F8) to switch between display modes.",
      },
      {
        title: "Keyboard and Mouse Issues",
        explanation:
          "Keyboard and mouse issues are among the simplest but most common hardware calls. Wired keyboard/mouse not responding — swap USB port, try USB 2.0 vs 3.0, check Device Manager for errors, uninstall and reinstall HID drivers. Wireless keyboard/mouse not responding — check batteries, resync the USB receiver (hold pair button), check Bluetooth settings for Bluetooth models. Sticky or unresponsive keys — compressed air for debris, isopropyl alcohol for sticky residue. Mouse cursor jumping or lagging — clean optical sensor, replace mouse pad, update mouse drivers. Always check if the issue persists in a different application or at the BIOS/UEFI level to isolate hardware from software causes.",
      },
    ],
  },
  {
    id: 7,
    title: "Mac OS Support",
    level: "intermediate",
    description:
      "Mac OS architecture, common issues, Terminal basics, security, Time Machine, and AD integration.",
    topics: [
      {
        title: "Mac OS Architecture",
        explanation:
          "macOS is built on Darwin, a Unix-based foundation using the XNU kernel (a hybrid of Mach microkernel and BSD components). The architecture includes: the kernel layer (hardware management, memory, processes), Core OS and Core Services layers (security framework, networking, file systems), Media and Application layers (QuickTime, AppKit, Cocoa). The file system uses APFS (Apple File System) on modern Macs — designed for SSDs with features like snapshots, space sharing, and strong encryption. Unlike Windows, macOS uses a Unix permission model with users and groups. System resources are in /System (read-only on macOS Catalina+) and user files in ~/Library.",
      },
      {
        title: "Common Mac Issues",
        explanation:
          "Frequent macOS support calls include: Spinning beach ball (overloaded CPU or RAM — check Activity Monitor, identify high-usage process, force quit if necessary). Cannot install app — check Security & Privacy settings; unsigned apps require approval. Keychain errors — lock/unlock Keychain, or reset login keychain from Keychain Access. Wi-Fi dropping — create a new network location, delete Wi-Fi preference files from /Library/Preferences/SystemConfiguration. App crashes — check Console.app for crash logs; reinstall application. macOS update failing — boot to Recovery Mode, run Disk Utility First Aid, reinstall macOS. Apple-specific knowledge is increasingly valuable as organisations move to mixed Windows/Mac environments.",
      },
      {
        title: "Terminal Basics",
        explanation:
          "The Terminal app gives access to macOS's Unix underpinning via command line. Essential commands: `ls -la` (list all files with permissions), `cd` (change directory), `sudo` (run as administrator), `ps aux` (list all running processes), `kill -9 [PID]` (force quit a process), `top` (real-time system resource monitor), `diskutil list` (list all disks and partitions), `defaults write` (modify app preferences), `caffeinate` (prevent sleep). For IT support, Terminal is used for tasks that have no GUI option: clearing caches, modifying hidden files, running scripts, and diagnosing network issues with `ping`, `traceroute`, and `nslookup`.",
      },
      {
        title: "FileVault and Security",
        explanation:
          "FileVault is macOS's full-disk encryption feature, using XTS-AES-128 encryption to protect all data on the startup disk. When enabled, data is encrypted at rest and requires the user password (or recovery key) to decrypt at boot. For IT management, FileVault can be managed via MDM (Mobile Device Management) solutions like Jamf, allowing recovery keys to be stored centrally. macOS also includes Gatekeeper (controls which apps can run based on developer signing), System Integrity Protection/SIP (prevents root-level modifications to system files), and Secure Enclave (on Apple Silicon Macs for biometric data and encryption keys). These security features significantly reduce the malware risk compared to Windows.",
      },
      {
        title: "Time Machine Backup",
        explanation:
          "Time Machine is macOS's built-in backup solution, automatically creating incremental backups to an external drive or network volume (NAS) every hour. It retains hourly backups for 24 hours, daily backups for a month, and weekly backups until the drive is full. To restore: boot to Recovery Mode (hold Cmd+R at startup) and select Restore from Time Machine Backup, or browse backups through the Time Machine interface for individual file recovery. For enterprise environments, Time Machine is often supplemented by cloud backup solutions (Backblaze, CrashPlan) or centralised NAS-based backups. Always verify backup health before an issue occurs — a backup that has never been tested is not a backup.",
      },
      {
        title: "Mac Active Directory Integration",
        explanation:
          "macOS can join Windows Active Directory domains, enabling centrally-managed authentication and access to network resources. Joining is done via System Preferences → Users & Groups → Login Options → Network Account Server (or via `dsconfigad` command). Once joined, AD users can log in with their domain credentials; Group Policy equivalent settings are applied via Mobile Device Management (MDM). Common integration issues include clock skew (Kerberos requires clocks to be within 5 minutes of the DC — sync using `sudo sntp -sS time.apple.com`), network connectivity to the DC, and DNS resolution. In mixed environments, this integration bridges Mac users into enterprise identity management.",
      },
    ],
  },
  {
    id: 8,
    title: "Voice, Accent and Communication",
    level: "beginner",
    description:
      "Professional phone etiquette, accent training, email and chat support, and de-escalation techniques.",
    topics: [
      {
        title: "Professional Phone Etiquette",
        explanation:
          "Phone support requires a distinct set of communication skills compared to face-to-face or email interaction. Standard etiquette: answer within 3 rings, greet warmly with your name and company ('Good morning, this is Arjun from Zyntho IT Support'), confirm the caller's name and ticket number, never put someone on hold for more than 2 minutes without checking back. Use hold music, not silence. When transferring, give the caller the name and extension of who they're being transferred to. Close every call by summarising the resolution and asking 'Is there anything else I can help you with today?' Consistent etiquette builds customer trust and professional credibility.",
      },
      {
        title: "Neutral Accent Techniques",
        explanation:
          "A neutral accent does not mean eliminating your regional identity — it means ensuring your speech is clearly understood by an international audience. Key techniques: slow down your natural speaking pace by 10–15% when on calls; over-articulate consonants at the end of words (final T and D sounds are commonly dropped); use a slightly raised pitch for questions to make them sound friendlier. Practice linking words naturally: 'I can help you' should flow as 'I-can-help-you' without abrupt stops. Record yourself on calls and listen back — you will immediately notice patterns to improve. Companies like Concentrix and Wipro BPO use structured accent neutralisation programmes for new hires.",
      },
      {
        title: "Pace and Clarity",
        explanation:
          "Speaking too fast is the single biggest communication issue in telephone support. When nervous or busy, people naturally speed up. The ideal support call pace is 130–150 words per minute — fast enough to sound competent, slow enough to be understood clearly. Clarity comes from sentence structure: short sentences (under 15 words) are easier to follow over phone audio than long, complex ones. Use pauses strategically after important information ('Your ticket number is 4521... do you have something to write with?'). Spell out technical terms or names using the NATO alphabet when needed (Alpha, Bravo, Charlie). Customers who understand you are more cooperative and easier to help.",
      },
      {
        title: "Email Communication",
        explanation:
          "Professional email in IT support must be clear, concise, and structured. The subject line should reference the ticket number and issue type: 'Resolution Update: Ticket #4521 — VPN Access Issue'. The greeting should use the customer's name. The body should use short paragraphs and bullet points for steps. Avoid passive voice ('The issue was investigated' → 'I investigated the issue'). Always close with next steps and a timeline: 'I will follow up by 3 PM today with an update.' Use professional sign-offs ('Best regards' or 'Kind regards'), include your name, team, and contact number. Proofread before sending — errors undermine confidence in your technical competence.",
      },
      {
        title: "Chat Support Best Practices",
        explanation:
          "Chat support has unique demands — customers expect faster responses than email (under 2 minutes) but the interaction is text-only with no vocal cues. Best practices: use a warm opening ('Hi [Name], thanks for reaching out! I'm happy to help.'); avoid short, cold replies that feel robotic; use formatting (bold for steps, numbered lists for procedures) where the platform allows; check in if you need research time ('Let me look into this — please give me a moment'); keep the customer engaged rather than going silent. Chat logs are evidence — be professional and accurate. Avoid slang, excessive emojis, and vague statements. Chat support skills translate directly to email and ticketing.",
      },
      {
        title: "De-escalation Techniques",
        explanation:
          "De-escalation is the set of techniques used to calm an angry or distressed customer and guide the conversation back to productive problem-solving. The HEAT method: Hear them out (let them vent fully without interruption), Empathise ('I completely understand why that's frustrating'), Apologise for the impact ('I'm sorry you've had to deal with this'), and Take action ('Here's what I'm going to do right now to fix this'). Lower your speaking volume slightly when a customer raises theirs — it creates a contrast that naturally calms the conversation. Never argue, never say 'It's not my fault', and never promise what you cannot deliver. De-escalation is a skill that protects both the customer relationship and your own wellbeing.",
      },
    ],
  },
  {
    id: 9,
    title: "SQL and Database Basics",
    level: "intermediate",
    description:
      "SQL queries, JOINs, database backup and recovery, performance tuning, stored procedures, and access management.",
    topics: [
      {
        title: "SQL SELECT Queries",
        explanation:
          "The SELECT statement is the foundation of SQL, used to retrieve data from one or more tables. Basic syntax: `SELECT column1, column2 FROM table_name WHERE condition ORDER BY column ASC/DESC`. Use `SELECT *` sparingly — always specify needed columns in production to reduce data transfer. Filtering with WHERE uses comparison operators (=, >, <, !=, BETWEEN, LIKE, IN). Aggregation functions (COUNT, SUM, AVG, MAX, MIN) summarise data; use with GROUP BY for grouped results. HAVING filters grouped results (unlike WHERE which filters rows). Understanding SELECT thoroughly enables you to write reports, diagnose data issues, and answer business questions directly from the database without developer involvement.",
      },
      {
        title: "JOINs and Relationships",
        explanation:
          "JOINs combine rows from two or more tables based on a related column. INNER JOIN returns only matching rows in both tables — the most common type. LEFT JOIN returns all rows from the left table and matching rows from the right (NULL for no match). RIGHT JOIN is the mirror. FULL OUTER JOIN returns all rows from both tables. CROSS JOIN creates a Cartesian product (every combination — use rarely). Good database design uses JOINs to normalise data: store customer information once, reference it by CustomerID in order tables, rather than repeating the name in every order row. Understanding normalisation and relationships is fundamental for SQL DBA and database-adjacent support roles.",
      },
      {
        title: "Database Backup and Recovery",
        explanation:
          "Database backup is a non-negotiable responsibility in DBA and system administration roles. SQL Server offers three backup types: Full backup (complete copy of all data), Differential backup (changes since last full backup), and Transaction Log backup (all transactions since last log backup — enables point-in-time recovery). Recovery models: Simple (no log backups, limited recovery), Full (full point-in-time recovery), Bulk-Logged (optimised for bulk operations). RPO (Recovery Point Objective) defines acceptable data loss; RTO (Recovery Time Objective) defines acceptable downtime. Always verify backups by running test restores — a backup that has never been tested is not a reliable backup.",
      },
      {
        title: "Performance Tuning Basics",
        explanation:
          "Database performance issues typically stem from missing indexes, poorly written queries, or insufficient hardware resources. Indexes are data structures that speed up data retrieval (like a book index) at the cost of slightly slower writes. Identify slow queries using SQL Server's Query Store, Execution Plans, or `sys.dm_exec_query_stats`. The execution plan shows whether a query is doing expensive full table scans instead of index seeks. Common fixes: add appropriate indexes, rewrite queries to avoid SELECT *, avoid functions in WHERE clauses (they prevent index usage), update statistics, and avoid cursor-based operations in favour of set-based queries. Regular index maintenance (rebuild/reorganise) keeps performance consistent over time.",
      },
      {
        title: "Stored Procedures",
        explanation:
          "Stored procedures are pre-compiled SQL code blocks stored in the database, executed by calling their name rather than writing the full query each time. Benefits include better performance (execution plan cached), improved security (users can execute a procedure without direct table access), code reuse, and reduced network traffic (one call vs. multiple queries). Basic syntax: `CREATE PROCEDURE ProcedureName @Param1 INT AS BEGIN ... END`. Use parameters to make procedures reusable. Error handling uses TRY...CATCH blocks. Stored procedures are widely used in enterprise applications for data manipulation, business logic enforcement, and generating reports. Every SQL DBA is expected to read, write, and debug stored procedures fluently.",
      },
      {
        title: "User Access Management",
        explanation:
          "Database access management ensures that users can only see and modify data appropriate to their role — a core principle of data security. SQL Server uses Logins (server-level identity), Users (database-level identity mapped to a login), and Roles (collections of permissions assigned to users). The principle of least privilege means granting only the minimum permissions required. Common permissions: SELECT, INSERT, UPDATE, DELETE, EXECUTE. Use `GRANT`, `REVOKE`, and `DENY` statements to manage permissions. Regularly audit database users with `sys.database_principals` and `sys.database_permissions`. Orphaned users (users without a matching login) should be cleaned up. Access management is audited during security reviews and is a regulatory compliance requirement.",
      },
    ],
  },
  {
    id: 10,
    title: "System Administration",
    level: "advanced",
    description:
      "Linux command line, user management, cron jobs, log analysis, shell scripting, and security hardening.",
    topics: [
      {
        title: "Linux Command Line Basics",
        explanation:
          "The Linux command line is essential for any system administrator. Core commands: `ls -la` (list all files with permissions and ownership), `cd`, `pwd` (print working directory), `mkdir`, `rm -rf` (delete recursively — use carefully), `cp`, `mv`, `find / -name 'filename'` (search files), `grep -r 'pattern' /path` (search content), `cat`, `less`, `head`, `tail -f` (stream live log output), `chmod` (change permissions), `chown` (change ownership). Process management: `ps aux`, `top`, `htop`, `kill`, `killall`. Package management varies by distribution: `apt` (Debian/Ubuntu), `yum`/`dnf` (RHEL/CentOS), `zypper` (SUSE). Mastery of these commands is a minimum requirement for any Linux sysadmin role.",
      },
      {
        title: "User and Group Management",
        explanation:
          "Linux uses a Unix-based permission model where every file and process is owned by a user and a group. Create users with `useradd -m username` (-m creates home directory); set passwords with `passwd username`; delete with `userdel -r username` (-r removes home). Create groups with `groupadd groupname`; add users to groups with `usermod -aG groupname username`. View user info with `id username`; view all users in `/etc/passwd`; view groups in `/etc/group`. The `sudo` mechanism allows non-root users to run commands with elevated privileges — configure via `visudo` (edits `/etc/sudoers` safely). In enterprise environments, user management integrates with LDAP/AD for centralised identity.",
      },
      {
        title: "Cron Jobs and Scheduling",
        explanation:
          "Cron is the Linux task scheduler, executing commands at defined times without manual intervention. The crontab format is: `minute hour day-of-month month day-of-week command`. Example: `0 2 * * * /scripts/backup.sh` runs backup.sh at 2 AM daily. Edit your crontab with `crontab -e`; view with `crontab -l`; list all users' crontabs in `/etc/cron.d/`. Special shortcuts: @reboot (run at startup), @daily, @weekly. Use `systemd` timers as a modern alternative to cron on RHEL/CentOS 7+ systems. Always redirect cron output to a log file (`>> /var/log/cron-backup.log 2>&1`) for auditing. Unreliable cron jobs are a common source of missed backups and data loss incidents.",
      },
      {
        title: "Log Analysis",
        explanation:
          "Linux log analysis is critical for diagnosing system issues and security incidents. Primary log locations: `/var/log/syslog` or `/var/log/messages` (general system events), `/var/log/auth.log` or `/var/log/secure` (authentication events), `/var/log/nginx/` or `/var/log/apache2/` (web server logs), `/var/log/kern.log` (kernel messages). Use `journalctl -xe` (systemd logs), `journalctl -u servicename` (logs for specific service), `journalctl --since 'today'` (time-filtered). Common analysis: `grep 'ERROR' /var/log/syslog | tail -50` finds recent errors; `awk '{print $1}' /var/log/auth.log | sort | uniq -c | sort -nr` counts events by source. Centralised logging via ELK Stack or Splunk is standard in enterprise environments.",
      },
      {
        title: "Shell Scripting Basics",
        explanation:
          "Shell scripts automate repetitive Linux tasks, saving time and reducing human error. A basic bash script starts with a shebang line: `#!/bin/bash`. Variables: `NAME='value'`; reference with `$NAME`. Conditionals: `if [ condition ]; then ... fi`. Loops: `for i in $(seq 1 10); do ... done`. Functions: `function_name() { commands; }`. User input: `read -p 'Enter value: ' VAR`. Exit codes: 0 = success, non-zero = failure. Make a script executable with `chmod +x script.sh`. Practical uses: automated backups, user provisioning scripts, disk space monitoring with email alerts, log rotation, and batch file operations. Shell scripting proficiency is expected of mid-level to senior sysadmins in every Linux environment.",
      },
      {
        title: "Security Hardening",
        explanation:
          "Linux security hardening reduces the attack surface of a system to its minimum necessary footprint. Key hardening steps: Disable root SSH login (`PermitRootLogin no` in `/etc/ssh/sshd_config`), use SSH key authentication instead of passwords, change the SSH port from 22, configure UFW or iptables to allow only necessary ports. Keep the system patched: `apt update && apt upgrade -y`. Remove unused services: `systemctl disable servicename`. Enable auditd for security event logging. Use fail2ban to auto-block brute-force SSH attempts. Apply CIS (Center for Internet Security) benchmarks as a standard hardening checklist. Security hardening is a regulatory requirement in PCI-DSS, HIPAA, and ISO 27001 compliant environments.",
      },
    ],
  },
  {
    id: 11,
    title: "Azure Cloud Fundamentals",
    level: "advanced",
    description:
      "Azure architecture, virtual machines, Azure AD, storage, networking, and security essentials.",
    topics: [
      {
        title: "Azure Architecture Overview",
        explanation:
          "Microsoft Azure is a public cloud platform with over 200 services across compute, storage, networking, security, AI, and DevOps. Azure's global infrastructure is organised into Regions (geographic locations with multiple data centres), Availability Zones (physically separate data centres within a region for fault tolerance), and Edge Locations (for CDN and low-latency delivery). Azure resources are organised hierarchically: Management Groups → Subscriptions → Resource Groups → Resources. Azure Resource Manager (ARM) is the deployment and management service — all resource creation goes through ARM regardless of interface used (Portal, CLI, PowerShell, or Terraform). Understanding this hierarchy is foundational for the AZ-900 Azure Fundamentals certification.",
      },
      {
        title: "Virtual Machines in Azure",
        explanation:
          "Azure Virtual Machines (VMs) are Infrastructure-as-a-Service (IaaS) compute resources that provide scalable Windows or Linux servers in the cloud. When provisioning a VM, key decisions include: VM Size (CPU/RAM — B-series for burstable workloads, D-series for general purpose, F-series for compute-heavy), Region (choose closest to users for latency), OS disk type (Premium SSD for production, Standard SSD for dev/test), and Network Security Group (NSG) rules. Pricing models: Pay-as-you-go (per minute), Reserved Instances (1–3 year commitment, up to 72% savings), Spot Instances (unused capacity, cheapest but can be reclaimed). Always apply Azure Advisor recommendations to reduce costs and improve security posture.",
      },
      {
        title: "Azure Active Directory",
        explanation:
          "Azure Active Directory (Azure AD / Entra ID) is Microsoft's cloud-based identity and access management service. Unlike on-premises AD (which uses Kerberos/LDAP), Azure AD uses OAuth 2.0, OpenID Connect, and SAML for authentication. Core features: Single Sign-On (SSO) to thousands of SaaS apps, Multi-Factor Authentication (MFA), Conditional Access (grant/block access based on user, device, location, and risk), and B2B/B2C for external users. Azure AD Connect syncs on-premises AD to Azure AD in hybrid environments. Roles: Global Administrator (full control), User Administrator, Application Administrator. Understanding Azure AD is mandatory for any cloud or hybrid IT support role.",
      },
      {
        title: "Azure Storage",
        explanation:
          "Azure Storage is a massively scalable, durable cloud storage service with four data services: Blob Storage (unstructured data — images, videos, backups), File Storage (fully managed SMB/NFS file shares for cloud or hybrid use), Queue Storage (message queuing for decoupled applications), and Table Storage (NoSQL key-value store). Storage accounts have redundancy options: LRS (3 copies in one datacenter), ZRS (3 copies across zones), GRS (6 copies across two regions), GZRS. Access tiers: Hot (frequently accessed), Cool (infrequently accessed, cheaper storage), Archive (rarely accessed, cheapest storage, hours to retrieve). Storage is secured via access keys, Shared Access Signatures (SAS), or Azure AD authentication.",
      },
      {
        title: "Azure Networking",
        explanation:
          "Azure networking provides the connectivity fabric for all cloud resources. Key services: Virtual Network (VNet) — the isolated network in Azure where VMs and services communicate; Subnets divide VNets into segments; Network Security Groups (NSGs) control inbound/outbound traffic at subnet and NIC level; VNet Peering connects VNets within or across regions; Azure VPN Gateway connects on-premises networks to Azure via IPsec/IKE VPN; ExpressRoute provides a dedicated private connection (not over the internet). Azure Load Balancer distributes traffic across VMs; Azure Application Gateway provides Layer-7 load balancing with WAF. DNS: Azure DNS hosts custom domains; Private DNS Zones for internal name resolution.",
      },
      {
        title: "Azure Security Center",
        explanation:
          "Microsoft Defender for Cloud (formerly Azure Security Center) is a unified cloud security management system providing threat protection across Azure, hybrid, and multi-cloud environments. It continuously assesses your security posture with a Secure Score — a quantified measure of your security configuration quality. Key capabilities: Security recommendations (actionable steps to improve posture), threat detection and alerts (suspicious activity across VMs, storage, databases), regulatory compliance dashboard (tracks compliance with PCI-DSS, HIPAA, CIS benchmarks), and just-in-time VM access (reduces attack surface by allowing RDP/SSH only when needed). In Azure admin roles, Defender for Cloud is reviewed daily to maintain strong security posture.",
      },
    ],
  },
  {
    id: 12,
    title: "Interview and Career Readiness",
    level: "beginner",
    description:
      "Resume writing, LinkedIn optimisation, interview techniques, professional presentation, and career growth.",
    topics: [
      {
        title: "Resume Writing Tips",
        explanation:
          "An IT support resume should be one page for under 2 years' experience, two pages maximum for senior roles. Use a clean, ATS-friendly format without tables or columns — Applicant Tracking Systems parse plain text. The summary section (2–3 sentences) should state your role, key skills, and value proposition. List technical skills clearly: operating systems, ticketing tools, certifications, scripting languages. For experience, use action verbs and quantify achievements: 'Resolved 40+ tickets weekly, maintaining 92% CSAT score' is stronger than 'Helped users with issues'. Include all relevant certifications (CompTIA A+, ITIL Foundation, Azure AZ-900). Tailor your resume keywords to each job description to pass ATS screening.",
      },
      {
        title: "LinkedIn Profile Optimisation",
        explanation:
          "LinkedIn is the primary platform for IT recruiters. Key profile elements: Professional photo (increases profile views by 14x), headline (not just 'Student' — use 'Aspiring IT Support Analyst | CompTIA A+ | ITIL Foundation'), About section (3–4 sentences summarising your goal, skills, and value), Experience section (same as resume with quantified achievements), Skills section (add 10+ relevant skills — endorsements from connections boost visibility), Certifications section (add all credentials), and Featured section (add a project or article). Use 'Open to Work' for recruiters. Connect with alumni, IT professionals, and recruiters. Engage with industry content weekly — LinkedIn's algorithm rewards active profiles with significantly more visibility.",
      },
      {
        title: "STAR Method for Interviews",
        explanation:
          "The STAR method structures answers to behavioural interview questions — those starting with 'Tell me about a time when...' STAR stands for: Situation (brief context — where and when), Task (your specific responsibility), Action (what you actually did — focus here, use 'I' not 'we'), Result (quantify the outcome wherever possible). Example: 'Tell me about a time you handled an angry customer.' S: 'A client's email system was down for 3 hours.' T: 'I was the first-line agent who took the call.' A: 'I apologised, escalated to Tier 2 immediately, gave 30-minute updates, and stayed on the call until resolved.' R: 'The client sent positive feedback and the CSAT score was 5/5.' Practise 10 STAR stories before any interview.",
      },
      {
        title: "Dress Code and Body Language",
        explanation:
          "Professional presentation significantly influences interview outcomes. For IT roles, business casual is standard: ironed trousers or dark jeans, collared shirt or blouse, clean shoes. Avoid casual wear (t-shirts, trainers) and over-formal wear (three-piece suit for a support role) unless specified. Body language accounts for over 55% of first impressions. Firm handshake (not crushing), consistent eye contact, upright posture, and genuine smile convey confidence and enthusiasm. In video interviews: ensure good lighting (light source in front of you), clean background, working microphone, camera at eye level. Arrive 10 minutes early for in-person; join 5 minutes early for video. These details signal professionalism before you've said a word.",
      },
      {
        title: "Salary Negotiation Basics",
        explanation:
          "Salary negotiation is a professional expectation in IT hiring — recruiters budget expecting negotiation. Research market rates using LinkedIn Salary, Glassdoor, Ambitionbox, and Levels.fyi before any interview. Know your number: desired salary and acceptable floor. Wait for the employer to make the first offer when possible. Counter confidently: 'Based on my research of the market and my skills in [specific areas], I was expecting closer to [target figure]. Is there flexibility?' If the salary is fixed, negotiate other components: joining bonus, extra leave, WFH days, training budget, or earlier performance review. Never accept verbally on the spot — it is standard practice to take 24 hours to consider. Always get the final offer in writing.",
      },
      {
        title: "First Week on the Job",
        explanation:
          "The first week is your longest-lasting first impression. Priority actions: introduce yourself proactively to every team member and key stakeholder; understand the ticketing system, escalation paths, and team processes before trying to improve them; ask your manager for a 30/60/90-day plan to align expectations; shadow senior team members to learn unwritten practices; take detailed notes — this becomes your personal knowledge base. Professional behaviours: arrive 5 minutes early, meet deadlines even on small tasks, ask clarifying questions rather than guessing, and acknowledge mistakes immediately if they happen. The first week sets the tone for how your team perceives your reliability and professionalism throughout your tenure.",
      },
    ],
  },
];
