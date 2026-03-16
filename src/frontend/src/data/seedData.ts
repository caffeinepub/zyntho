import type { Content } from "../backend.d";

export const SEED_DATA: Content = {
  chapters: [
    {
      id: BigInt(1),
      title: "Customer Service Fundamentals",
      topics: [
        {
          id: BigInt(1),
          title: "What is Customer Service?",
          notes:
            "Definition and importance • Customer vs. Consumer • Internal vs. External customers • Why customer service matters in IT • Key qualities of a good support professional",
        },
        {
          id: BigInt(2),
          title: "Empathy & Sympathy in Support",
          notes:
            "Difference between empathy and sympathy • Using empathetic language: 'I understand how frustrating this must be' • Avoid dismissive phrases • Practice: rewrite cold responses with empathy • Real-world scenarios",
        },
        {
          id: BigInt(3),
          title: "Handling Irate Customers",
          notes:
            "LEAP technique: Listen, Empathize, Apologize, Problem-solve • Stay calm, do not argue • De-escalation phrases • When to escalate to a senior • Role-play scenarios",
        },
        {
          id: BigInt(4),
          title: "Customer Retention Strategies",
          notes:
            "Why retention matters more than acquisition • Follow-up calls and emails • Proactive communication • Setting expectations correctly • Measuring customer satisfaction (CSAT, NPS)",
        },
        {
          id: BigInt(5),
          title: "Professional Phone & Chat Etiquette",
          notes:
            "Greeting scripts • Hold procedures and permission • Active listening cues • Closing a call professionally • Do's and don'ts of chat support",
        },
      ],
    },
    {
      id: BigInt(2),
      title: "Service Desk Basics",
      topics: [
        {
          id: BigInt(6),
          title: "Role of a Service Desk Agent",
          notes:
            "Single Point of Contact (SPOC) concept • Tier 1 vs Tier 2 vs Tier 3 support • Daily responsibilities • KPIs: FCR, AHT, CSAT • Career growth from service desk",
        },
        {
          id: BigInt(7),
          title: "Ticketing Systems Overview",
          notes:
            "What is a ticket? • Ticket lifecycle: Open → In Progress → Resolved → Closed • Common tools: ServiceNow, Jira, Zendesk (concepts only, no links) • Priority levels: P1, P2, P3, P4 • SLA basics",
        },
        {
          id: BigInt(8),
          title: "Incident vs Service Request",
          notes:
            "Incident: unplanned interruption • Service Request: standard request (e.g. new software) • Examples of each • How to categorize correctly • Impact on SLA",
        },
        {
          id: BigInt(9),
          title: "Escalation Procedures",
          notes:
            "When to escalate • Escalation matrix • Functional vs. Hierarchical escalation • Documenting before escalating • Communication during escalation",
        },
        {
          id: BigInt(10),
          title: "SLA and OLA Basics",
          notes:
            "Service Level Agreement definition • Operational Level Agreement • Response time vs. Resolution time • Breach management • Reporting SLA performance",
        },
      ],
    },
    {
      id: BigInt(3),
      title: "Communication & Presentation Skills",
      topics: [
        {
          id: BigInt(11),
          title: "Voice & Accent for IT Professionals",
          notes:
            "Neutral accent tips • Pace, tone, and clarity • Common pronunciation in IT terms (e.g. cache, query, SQL) • Avoiding filler words • Listening skills in voice support",
        },
        {
          id: BigInt(12),
          title: "Professional Written Communication",
          notes:
            "Email structure: Subject, Greeting, Body, Closing • Avoiding jargon with non-technical users • Ticket notes best practices • Grammar essentials • Proofreading checklist",
        },
        {
          id: BigInt(13),
          title: "Presentation Skills for IT Roles",
          notes:
            "Structuring a presentation: Intro, Content, Summary • Slide best practices • Confidence techniques • Handling Q&A • Virtual presentation tips (Teams, Zoom concepts)",
        },
        {
          id: BigInt(14),
          title: "Stakeholder Communication",
          notes:
            "Identifying stakeholders • Adjusting technical language for audience • Status update formats • Escalating bad news professionally • Building rapport with business teams",
        },
      ],
    },
    {
      id: BigInt(4),
      title: "Basic Networking & Internet Troubleshooting",
      topics: [
        {
          id: BigInt(15),
          title: "OSI Model & TCP/IP Basics",
          notes:
            "7 layers of OSI model with examples • TCP/IP 4-layer model • How data travels across a network • Protocols per layer: HTTP, FTP, SMTP, DNS • Practical relevance for support",
        },
        {
          id: BigInt(16),
          title: "IP Addressing & Subnetting",
          notes:
            "IPv4 vs IPv6 • Classes of IP: A, B, C • Private vs Public IP • Subnet mask basics • CIDR notation intro • ipconfig/ifconfig commands",
        },
        {
          id: BigInt(17),
          title: "DNS, DHCP & Gateway",
          notes:
            "How DNS works (domain to IP) • DHCP lease process • Default gateway role • Common DNS issues and fixes • nslookup, ping, tracert commands",
        },
        {
          id: BigInt(18),
          title: "Common Internet Issues & Fixes",
          notes:
            "No internet vs. Limited connectivity • Steps: check physical → IP → DNS → gateway → ISP • Browser troubleshooting • Clearing cache and cookies • Proxy settings",
        },
        {
          id: BigInt(19),
          title: "Network Hardware Basics",
          notes:
            "Router vs Switch vs Hub vs Modem • Wireless standards: 2.4GHz vs 5GHz • LAN/WAN concepts • Network topology basics: Star, Bus, Ring • Cable types: Cat5e, Cat6",
        },
      ],
    },
    {
      id: BigInt(5),
      title: "Windows & Mac Technical Support",
      topics: [
        {
          id: BigInt(20),
          title: "Windows OS Fundamentals",
          notes:
            "Windows versions relevant to enterprise: Win 10, Win 11 • Control Panel vs Settings • User Account Control (UAC) • Windows Update process • Safe Mode and its uses",
        },
        {
          id: BigInt(21),
          title: "Common Windows Issues & Fixes",
          notes:
            "Blue Screen of Death (BSOD): causes and steps • Slow performance: Task Manager, startup programs • Windows not booting: repair tools • Profile corruption fixes • Event Viewer basics",
        },
        {
          id: BigInt(22),
          title: "Mac OS Fundamentals",
          notes:
            "macOS versions overview • Finder, Spotlight, System Preferences • FileVault and Time Machine basics • macOS vs Windows comparison for support • Common macOS terminal commands",
        },
        {
          id: BigInt(23),
          title: "Common Mac Issues & Fixes",
          notes:
            "Spinning beach ball: causes • Force quit applications • Permission repair • Keychain issues • macOS reinstall via Recovery Mode",
        },
        {
          id: BigInt(24),
          title: "Remote Support Tools & Techniques",
          notes:
            "Remote Desktop Protocol (RDP) setup • TeamViewer/AnyDesk concepts (no links) • Requesting access professionally • Documentation during remote session • Security best practices",
        },
      ],
    },
    {
      id: BigInt(6),
      title: "Printers, Routers & Peripherals",
      topics: [
        {
          id: BigInt(25),
          title: "Printer Troubleshooting",
          notes:
            "Printer offline status fix • Spooler service restart • Driver installation steps • Network printer setup • Paper jam and ink issues",
        },
        {
          id: BigInt(26),
          title: "Router Configuration Basics",
          notes:
            "Accessing router admin panel (192.168.1.1) • Changing SSID and password • Port forwarding basics • DHCP reservation • Firmware update importance",
        },
        {
          id: BigInt(27),
          title: "Peripheral Devices Support",
          notes:
            "USB troubleshooting: Device Manager • External monitors: display settings, resolution • Keyboard and mouse issues • Headset/audio device setup • Webcam configuration",
        },
        {
          id: BigInt(28),
          title: "Hardware Basics for Support",
          notes:
            "RAM, CPU, HDD/SSD identification • Reading system specs: PC and Mac • Identifying hardware failures • Warranty check process • When to replace vs repair",
        },
      ],
    },
    {
      id: BigInt(7),
      title: "ITIL Framework",
      topics: [
        {
          id: BigInt(29),
          title: "Introduction to ITIL",
          notes:
            "What is ITIL? IT Infrastructure Library • ITIL 4 vs ITIL v3 key differences • Why organizations adopt ITIL • Service Value System (SVS) overview • ITIL certification path (concept only)",
        },
        {
          id: BigInt(30),
          title: "ITIL Service Value Chain",
          notes:
            "6 activities: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support • How activities interconnect • Value streams concept • Inputs and outputs of each activity",
        },
        {
          id: BigInt(31),
          title: "Key ITIL Practices",
          notes:
            "Incident Management practice • Problem Management: reactive vs proactive • Change Enablement: types of changes (standard, normal, emergency) • Service Request Management • Knowledge Management",
        },
        {
          id: BigInt(32),
          title: "Continual Improvement",
          notes:
            "CSI (Continual Service Improvement) model • Plan-Do-Check-Act (PDCA) cycle • Improvement register • Metrics: KPIs and CSFs • How to propose improvements at work",
        },
      ],
    },
    {
      id: BigInt(8),
      title: "Incident Management",
      topics: [
        {
          id: BigInt(33),
          title: "Incident Lifecycle",
          notes:
            "Stages: Identification → Logging → Categorization → Prioritization → Diagnosis → Escalation → Resolution → Closure • Major incident vs minor incident • P1 war room concept",
        },
        {
          id: BigInt(34),
          title: "Priority Matrix",
          notes:
            "Impact vs Urgency matrix • P1: Critical business impact • P2: High impact, workaround available • P3: Medium, affects single user • P4: Low, informational • Setting correct priority",
        },
        {
          id: BigInt(35),
          title: "Major Incident Management",
          notes:
            "Definition of a Major Incident • Bridge call management • War room roles: Incident Manager, Technical Lead, Communication Lead • Post-Incident Review (PIR) • RCA basics",
        },
        {
          id: BigInt(36),
          title: "Incident Communication",
          notes:
            "Stakeholder updates during incidents • Status page updates • Internal vs external communication • Avoiding blame language • Templates for incident updates",
        },
      ],
    },
    {
      id: BigInt(9),
      title: "SQL & DBA Basics",
      topics: [
        {
          id: BigInt(37),
          title: "Introduction to Databases",
          notes:
            "Relational vs Non-relational databases • Tables, rows, columns, keys • Primary key vs Foreign key • Normalization basics (1NF, 2NF, 3NF) • Database use cases in enterprise",
        },
        {
          id: BigInt(38),
          title: "SQL Fundamentals",
          notes:
            "SELECT, FROM, WHERE, ORDER BY, GROUP BY • INSERT, UPDATE, DELETE basics • JOINs: INNER, LEFT, RIGHT, FULL • Aggregate functions: COUNT, SUM, AVG, MAX, MIN • Aliases and subqueries intro",
        },
        {
          id: BigInt(39),
          title: "Database Administration Basics",
          notes:
            "DBA roles and responsibilities • Backup and recovery concepts: full, differential, incremental • User permissions and roles in SQL • Database maintenance: index, statistics • Monitoring basics",
        },
        {
          id: BigInt(40),
          title: "SQL Server & MySQL Concepts",
          notes:
            "SQL Server Management Studio (SSMS) overview • MySQL Workbench overview • Stored procedures concept • Views and triggers basics • Transaction management: COMMIT, ROLLBACK",
        },
      ],
    },
    {
      id: BigInt(10),
      title: "System Administration",
      topics: [
        {
          id: BigInt(41),
          title: "System Admin Role Overview",
          notes:
            "Responsibilities: infrastructure, user management, security, backups • Difference: Sysadmin vs Network Admin vs DBA • Tools: AD, Group Policy, PowerShell • Documentation habits • On-call responsibilities",
        },
        {
          id: BigInt(42),
          title: "Windows Server Basics",
          notes:
            "Roles: AD DS, DNS, DHCP, File Server, Print Server • Domain vs Workgroup • Server Manager overview • Windows Server versions: 2016, 2019, 2022 • Basic server hardening",
        },
        {
          id: BigInt(43),
          title: "Active Directory Fundamentals",
          notes:
            "AD objects: Users, Groups, OUs, Computers • LDAP basics • Group Policy Objects (GPO) • AD DS installation steps • Common AD tasks: reset password, unlock account, add to group",
        },
        {
          id: BigInt(44),
          title: "PowerShell for Admins",
          notes:
            "Basic commands: Get-Process, Get-Service, Get-EventLog • User management via PowerShell • File and folder operations • Scripting basics: variables, loops, conditionals • Running scripts securely",
        },
        {
          id: BigInt(45),
          title: "Backup & Disaster Recovery",
          notes:
            "Backup types: Full, Incremental, Differential • RPO vs RTO definitions • Windows Server Backup tool • Testing restores • Business Continuity Plan (BCP) basics",
        },
      ],
    },
    {
      id: BigInt(11),
      title: "Azure & Active Directory",
      topics: [
        {
          id: BigInt(46),
          title: "Cloud Computing Fundamentals",
          notes:
            "IaaS, PaaS, SaaS definitions with examples • Public, Private, Hybrid cloud • Benefits of cloud: scalability, cost, availability • Cloud vs on-premises comparison • Shared responsibility model",
        },
        {
          id: BigInt(47),
          title: "Microsoft Azure Overview",
          notes:
            "Azure regions and availability zones • Core services: Compute (VMs), Storage, Networking, Identity • Azure Portal navigation overview • Subscriptions and Resource Groups • Azure pricing model basics",
        },
        {
          id: BigInt(48),
          title: "Azure Active Directory (Entra ID)",
          notes:
            "Azure AD vs on-prem AD differences • Tenants and domains • User and group management in Azure AD • MFA setup concepts • Conditional Access basics • Azure AD Connect for hybrid",
        },
        {
          id: BigInt(49),
          title: "Azure VM & Storage Basics",
          notes:
            "Creating a VM in Azure (concept walkthrough) • VM sizes and pricing tiers • Azure Blob Storage, File Storage, Queue Storage • Managed Disks • Availability Sets and Scale Sets basics",
        },
        {
          id: BigInt(50),
          title: "Azure Security & Compliance",
          notes:
            "Azure Security Center (Defender for Cloud) overview • Role-Based Access Control (RBAC) in Azure • Azure Policy basics • Key Vault concept • Compliance frameworks: ISO 27001, SOC2 basics",
        },
      ],
    },
    {
      id: BigInt(12),
      title: "Interview Preparation",
      topics: [
        {
          id: BigInt(51),
          title: "How to Use This Module",
          notes:
            "This module contains role-specific Q&A and 2-day preparation timelines • Select your target job role from the Interview Prep section • Practice answering out loud, not just reading • Use the STAR method: Situation, Task, Action, Result • Record yourself for voice and confidence improvement",
        },
      ],
    },
  ],
  interviewPrepContent: [
    {
      jobRole: "Service Desk Agent",
      questions: [
        {
          question:
            "What is the difference between an incident and a service request?",
          answer:
            "An incident is an unplanned interruption to a service, like a system going down. A service request is a standard request from a user, such as requesting new software installation. Incidents affect business operations and have priority levels; service requests follow a predefined fulfillment process.",
        },
        {
          question:
            "How do you handle a situation where you cannot resolve a user's issue?",
          answer:
            "I would first reassure the user that I am taking ownership of their issue. I would document all details clearly in the ticket, attempt all available troubleshooting steps, and then escalate to Tier 2 with a full summary. I would keep the user informed throughout the process and follow up once resolved.",
        },
        {
          question: "What does FCR mean and why is it important?",
          answer:
            "FCR stands for First Call Resolution. It measures the percentage of issues resolved on the first contact without needing a callback or escalation. High FCR indicates efficient support, improves customer satisfaction, and reduces operational costs.",
        },
        {
          question: "Describe a time you dealt with a difficult customer.",
          answer:
            "Use the STAR method. Describe a situation where a customer was frustrated, explain how you listened without interrupting, empathized with their situation, and then calmly worked through the issue step by step. End with a positive outcome.",
        },
        {
          question: "What is an SLA?",
          answer:
            "A Service Level Agreement is a contract between a service provider and customer defining expected service standards, including response and resolution times. For example, a P1 incident may have a 1-hour response SLA and 4-hour resolution SLA.",
        },
        {
          question:
            "Walk me through how you would troubleshoot a user who cannot connect to the internet.",
          answer:
            "I would follow a structured approach: First check if the issue is isolated to one user or widespread. Then verify physical connections, check IP configuration using ipconfig, test with ping to local gateway and then to 8.8.8.8, check DNS resolution, clear browser cache, and if unresolved, escalate to network team.",
        },
      ],
      twoDayTimeline: [
        {
          day: BigInt(1),
          activity:
            "Review Chapter 1 (Customer Service Fundamentals) and Chapter 2 (Service Desk Basics) • Practice the 6 Q&A answers out loud 3 times each • Write your own answers using STAR method for behavioral questions • Study ticketing system concepts and SLA definitions",
        },
        {
          day: BigInt(2),
          activity:
            "Review escalation procedures and incident vs service request differences • Do a mock interview: ask a friend or record yourself answering all 6 questions • Focus on calm tone, clear structure, and avoiding filler words • Research the company's service desk tools before the interview",
        },
      ],
    },
    {
      jobRole: "Customer Support Specialist",
      questions: [
        {
          question: "How do you handle an irate customer?",
          answer:
            "I use the LEAP technique: Listen fully without interrupting, Empathize by acknowledging their frustration, Apologize for the inconvenience even if it was not my fault, and then Problem-solve by offering clear next steps. Staying calm and not taking it personally is key.",
        },
        {
          question: "What is the difference between empathy and sympathy?",
          answer:
            "Sympathy means feeling sorry for someone's situation. Empathy means understanding and sharing their feeling. In customer support, empathy is more powerful because it shows the customer you genuinely understand their experience, building trust and reducing frustration.",
        },
        {
          question: "How do you ensure customer retention?",
          answer:
            "By delivering consistent service, following up after issue resolution, setting correct expectations, and communicating proactively. I also look for opportunities to add value during interactions, which builds long-term customer loyalty.",
        },
        {
          question:
            "Describe your communication style when helping a non-technical user.",
          answer:
            "I avoid jargon and use simple, clear language. I confirm understanding by asking 'Does that make sense?' I break complex steps into numbered instructions and check in regularly. My goal is to make the customer feel confident, not overwhelmed.",
        },
        {
          question:
            "How do you handle multiple customers at the same time in chat support?",
          answer:
            "I prioritize by urgency, use saved responses for common queries while personalizing them, keep response times within SLA, and maintain quality by not copying and pasting without reviewing. I also keep customers updated if there will be a wait.",
        },
        {
          question:
            "What metrics are used to measure customer support performance?",
          answer:
            "Key metrics include CSAT (Customer Satisfaction Score), NPS (Net Promoter Score), First Response Time, Resolution Time, FCR (First Call Resolution), and Ticket Volume. These help identify areas of improvement and measure team performance.",
        },
      ],
      twoDayTimeline: [
        {
          day: BigInt(1),
          activity:
            "Review Chapter 1 (Customer Service Fundamentals) and Chapter 3 (Communication Skills) • Practice LEAP technique with a partner or by recording yourself • Write out your personal answers to all 6 questions • Focus on empathy language and soft skills",
        },
        {
          day: BigInt(2),
          activity:
            "Review customer retention and metrics concepts • Conduct a mock interview session • Practice speaking clearly with good pace and minimal filler words • Prepare 2-3 examples from your own experience or academic projects using STAR method",
        },
      ],
    },
    {
      jobRole: "SQL DBA",
      questions: [
        {
          question: "What is normalization and why is it important?",
          answer:
            "Normalization is the process of organizing a database to reduce redundancy and improve data integrity. 1NF removes duplicate columns, 2NF removes partial dependencies, 3NF removes transitive dependencies. It ensures data is stored efficiently and consistently.",
        },
        {
          question:
            "What is the difference between a clustered and non-clustered index?",
          answer:
            "A clustered index determines the physical order of data in a table — there can only be one per table. A non-clustered index creates a separate structure pointing to the data rows, allowing multiple per table. Clustered indexes are faster for range queries; non-clustered are better for specific lookups.",
        },
        {
          question: "What is a stored procedure?",
          answer:
            "A stored procedure is a precompiled set of SQL statements stored in the database that can be executed on demand. Benefits include improved performance, code reusability, reduced network traffic, and enhanced security through permission control.",
        },
        {
          question:
            "Explain the difference between DELETE, TRUNCATE, and DROP.",
          answer:
            "DELETE removes specific rows based on a WHERE clause and can be rolled back. TRUNCATE removes all rows from a table faster but cannot be easily rolled back and resets identity columns. DROP removes the entire table including its structure and cannot be undone.",
        },
        {
          question: "What backup strategies do you know?",
          answer:
            "Full backup: complete copy of the database. Differential backup: changes since the last full backup. Transaction log backup: records all transactions and allows point-in-time recovery. A common strategy is full backups weekly, differential daily, and log backups hourly.",
        },
        {
          question: "How do you troubleshoot a slow SQL query?",
          answer:
            "I would use the execution plan to identify bottlenecks, check for missing indexes, look for table scans instead of index seeks, review JOINs for efficiency, check for blocking or deadlocks, and review statistics. I would also look at query structure and consider rewriting subqueries as JOINs.",
        },
      ],
      twoDayTimeline: [
        {
          day: BigInt(1),
          activity:
            "Review Chapter 9 (SQL & DBA Basics) thoroughly • Practice writing SELECT, JOIN, and aggregate queries on paper • Study normalization and indexing concepts • Write out answers to Q1, Q2, Q3 in your own words",
        },
        {
          day: BigInt(2),
          activity:
            "Study backup strategies and stored procedures • Review execution plans and query optimization concepts • Conduct a mock interview for all 6 questions • Prepare to whiteboard or write a basic SQL query during the interview",
        },
      ],
    },
    {
      jobRole: "System Administrator",
      questions: [
        {
          question:
            "What is Active Directory and what are its main components?",
          answer:
            "Active Directory is a Microsoft directory service used to manage users, computers, and resources in a network. Main components include: Domain Controllers (store the AD database), Organizational Units (for organizing objects), Group Policy Objects (for applying settings), Users and Groups, and the LDAP protocol for communication.",
        },
        {
          question: "How do you create a new user in Active Directory?",
          answer:
            "In Active Directory Users and Computers (ADUC), right-click the appropriate OU, select New > User, fill in the user details (first name, last name, username), set an initial password, and configure options like 'user must change password at next logon'. The account can then be added to relevant security groups.",
        },
        {
          question: "What is Group Policy and give an example of its use?",
          answer:
            "Group Policy allows administrators to manage settings for users and computers in an Active Directory environment. For example, you can use GPO to enforce password complexity requirements, map network drives, restrict USB usage, deploy software, or configure desktop wallpapers across all domain computers.",
        },
        {
          question: "What is the difference between RPO and RTO?",
          answer:
            "RPO (Recovery Point Objective) is the maximum acceptable amount of data loss measured in time — how old can the backup be. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure. Both are critical for designing backup and disaster recovery strategies.",
        },
        {
          question:
            "How would you troubleshoot a server that is not responding?",
          answer:
            "I would first check physical connectivity and power. Then attempt to ping the server. Check the server console or ILO/iDRAC for hardware issues. Review Windows Event Logs for errors. Check services and processes via Task Manager. If remote access fails, involve the data center team. Document all steps taken.",
        },
        {
          question:
            "What PowerShell command would you use to find all disabled user accounts?",
          answer:
            "Search-ADAccount -AccountDisabled -UsersOnly | Select-Object Name, SamAccountName | Export-Csv disabled_users.csv. This command searches Active Directory for all disabled user accounts and exports the results to a CSV file for review.",
        },
      ],
      twoDayTimeline: [
        {
          day: BigInt(1),
          activity:
            "Review Chapter 10 (System Administration) and Chapter 11 (Azure & AD) • Study Active Directory components and Group Policy concepts • Practice writing the PowerShell command from Q6 • Write out answers to Q1, Q2, Q3",
        },
        {
          day: BigInt(2),
          activity:
            "Review backup concepts, RPO/RTO, and server troubleshooting steps • Conduct a full mock interview for all 6 questions • Prepare to discuss a project or lab where you used AD or scripting • Review Windows Server roles: DNS, DHCP, File Server",
        },
      ],
    },
    {
      jobRole: "Azure Cloud Administrator",
      questions: [
        {
          question: "What is the difference between IaaS, PaaS, and SaaS?",
          answer:
            "IaaS (Infrastructure as a Service) provides virtualized computing resources like VMs — you manage OS and above. PaaS (Platform as a Service) provides a platform for developers to build applications without managing infrastructure. SaaS (Software as a Service) delivers ready-to-use applications over the internet. Examples: Azure VM (IaaS), Azure App Service (PaaS), Microsoft 365 (SaaS).",
        },
        {
          question:
            "What is Azure Active Directory and how does it differ from on-premises AD?",
          answer:
            "Azure Active Directory (now called Microsoft Entra ID) is a cloud-based identity and access management service. Unlike on-premises AD, Azure AD uses HTTP/HTTPS protocols instead of LDAP/Kerberos, supports OAuth and SAML for modern authentication, is managed via portal not ADUC, and is designed for cloud and SaaS applications. Azure AD Connect syncs on-prem identities to Azure AD.",
        },
        {
          question: "What is RBAC in Azure?",
          answer:
            "Role-Based Access Control in Azure controls who has access to Azure resources and what they can do. Roles are assigned at different scopes: Management Group, Subscription, Resource Group, or Resource. Built-in roles include Owner (full access), Contributor (manage resources, no access management), and Reader (view only). Custom roles can also be created.",
        },
        {
          question: "How do you secure an Azure Virtual Machine?",
          answer:
            "Key steps include: using NSG (Network Security Group) to control inbound/outbound traffic, disabling unused ports, enabling Microsoft Defender for Cloud, applying OS patches via Azure Update Management, using Azure Bastion for secure RDP/SSH instead of public IPs, enabling disk encryption, and configuring JIT (Just-In-Time) access.",
        },
        {
          question: "What is an Azure Resource Group?",
          answer:
            "A Resource Group is a logical container that holds related Azure resources for an application or solution. It allows you to manage, deploy, and monitor resources as a group, apply RBAC permissions, set policies, and manage billing. All resources in a group share the same lifecycle.",
        },
        {
          question:
            "What is the difference between Azure Availability Sets and Availability Zones?",
          answer:
            "Availability Sets protect against failures within a single datacenter by distributing VMs across fault domains (different racks) and update domains (patching groups). Availability Zones protect against entire datacenter failures by distributing VMs across physically separate datacenters within a region. Zones provide higher availability but at higher cost.",
        },
      ],
      twoDayTimeline: [
        {
          day: BigInt(1),
          activity:
            "Review Chapter 11 (Azure & Active Directory) and Chapter 10 (System Administration) • Study IaaS/PaaS/SaaS, RBAC, and Azure AD concepts • Write out your answers to Q1, Q2, Q3 using your own words • Review Azure portal navigation concepts",
        },
        {
          day: BigInt(2),
          activity:
            "Study VM security, Resource Groups, and Availability concepts • Conduct a full mock interview for all 6 questions • Prepare to explain the Shared Responsibility Model • Review Azure pricing tiers and common services: Compute, Storage, Networking, Identity",
        },
      ],
    },
  ],
};
