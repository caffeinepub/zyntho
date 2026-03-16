export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface StudyPlan {
  day1: string;
  day2: string;
}

export interface InterviewRole {
  id: string;
  title: string;
  icon: string;
  questions: InterviewQuestion[];
  studyPlan: StudyPlan;
  day2Revision: string[];
}

const serviceDeskRole: InterviewRole = {
  id: "service-desk",
  title: "Service Desk Analyst",
  icon: "🖥️",
  questions: [
    {
      question: "What does a service desk analyst do?",
      answer:
        "Acts as the first point of contact for IT issues, logs tickets, troubleshoots common problems, escalates when needed, and ensures issues are resolved within SLA.",
    },
    {
      question: "What is First Call Resolution (FCR)?",
      answer:
        "Resolving the customer's issue on the first contact without needing a callback or escalation. It's a key KPI for service desks.",
    },
    {
      question: "How do you prioritize multiple tickets at once?",
      answer:
        "Use the priority matrix — assess impact (how many users affected) and urgency (how time-sensitive). High impact + high urgency = P1.",
    },
    {
      question: "Explain the incident management lifecycle.",
      answer:
        "Log → Categorize → Prioritize → Assign → Investigate → Resolve → Close → Review.",
    },
    {
      question: "What is an SLA and why does it matter?",
      answer:
        "Service Level Agreement defines the expected response and resolution times. Breaching SLAs impacts customer satisfaction and can have financial penalties.",
    },
    {
      question: "How would you handle an angry caller?",
      answer:
        "Listen without interrupting, empathize, apologize for the inconvenience, and focus on resolving the issue. Stay calm and professional.",
    },
    {
      question: "What tools have you used for ticketing?",
      answer:
        "Common tools include ServiceNow, Jira Service Management, Zendesk, Freshdesk, Remedy.",
    },
    {
      question:
        "What is the difference between an incident and a service request?",
      answer:
        "An incident is an unplanned interruption to a service. A service request is a standard request like a password reset or new software installation.",
    },
    {
      question: "How do you reset a user's password in Active Directory?",
      answer:
        "Open ADUC (Active Directory Users and Computers), find the user, right-click → Reset Password, set a temporary password, and force change at next logon.",
    },
    {
      question: "What steps do you take when a user says their PC is slow?",
      answer:
        "Check Task Manager for CPU/RAM usage, look for background processes, check disk space, scan for malware, check startup programs, run Windows Update.",
    },
    {
      question: "What is remote desktop and how do you use it?",
      answer:
        "RDP (Remote Desktop Protocol) allows support to connect to a user's PC remotely. Launch mstsc.exe, enter the computer name/IP, authenticate with credentials.",
    },
    {
      question: "What is ITIL and how does it apply to service desk?",
      answer:
        "ITIL is a framework for IT service management. Service desk uses it for incident, problem, change, and request management processes.",
    },
    {
      question: "How do you document a resolved ticket?",
      answer:
        "Note the issue reported, steps taken to diagnose, root cause, resolution applied, and time taken. Clear documentation helps future agents.",
    },
    {
      question: "What would you do if you cannot resolve an issue?",
      answer:
        "Escalate to Level 2 or the appropriate team with full details of the issue, steps already tried, and the user's contact info.",
    },
    {
      question: "Why do you want to work in IT support?",
      answer:
        "Show genuine interest in technology, helping people, and problem solving. Mention your learning mindset and career goals.",
    },
    {
      question: "What is a CMDB?",
      answer:
        "Configuration Management Database — stores information about hardware and software assets (CIs) and their relationships.",
    },
    {
      question: "How do you stay updated on common IT issues?",
      answer:
        "Check internal knowledge base, tech forums, vendor documentation, and learn from resolved tickets.",
    },
  ],
  studyPlan: {
    day1: "Review ITIL basics, incident lifecycle, priority matrix, ticketing tools (ServiceNow/Zendesk), Active Directory password reset, remote desktop",
    day2: "Practice answering common questions aloud, review escalation process, SLA definitions, FCR concept, prepare your own self-introduction",
  },
  day2Revision: [
    "FCR = resolve on first contact, no callback needed",
    "SLA = contracted response/resolution time",
    "Incident = unplanned outage/error | Service Request = standard ask",
    "Priority = Impact × Urgency",
    "Escalation: give full context, steps tried, user details",
    "ADUC = tool to manage AD users and reset passwords",
    "RDP = mstsc.exe for remote access",
    "ITIL 4 stages: log, categorize, prioritize, assign, resolve, close",
  ],
};

const customerSupportRole: InterviewRole = {
  id: "customer-support",
  title: "Customer Support Specialist",
  icon: "🎧",
  questions: [
    {
      question: "What does excellent customer support look like to you?",
      answer:
        "Listening carefully, resolving the issue quickly, showing empathy, and leaving the customer feeling valued and heard.",
    },
    {
      question: "How do you handle a customer who is frustrated or angry?",
      answer:
        "Stay calm, let them vent, acknowledge their frustration, apologize sincerely, then focus on resolution.",
    },
    {
      question: "What is CSAT and how is it measured?",
      answer:
        "Customer Satisfaction Score — measured by post-interaction surveys asking customers to rate their experience (usually 1-5 or 1-10).",
    },
    {
      question: "Describe a time you went above and beyond for a customer.",
      answer:
        "Give a specific example showing initiative, empathy, and problem ownership. Focus on the impact for the customer.",
    },
    {
      question: "What is Average Handle Time (AHT)?",
      answer:
        "The average time taken to handle one customer interaction including talk time, hold time, and after-call work.",
    },
    {
      question: "How do you manage multiple customer queries at once?",
      answer:
        "Prioritize by urgency, use templates for common queries, keep each customer updated, and avoid letting any ticket go stale.",
    },
    {
      question: "What is Net Promoter Score (NPS)?",
      answer:
        "Measures likelihood of a customer recommending the company (0-10 scale). Promoters (9-10), Passives (7-8), Detractors (0-6).",
    },
    {
      question: "How do you handle a complaint you cannot resolve immediately?",
      answer:
        "Acknowledge the complaint, set a realistic timeline, update the customer proactively, and ensure follow-through.",
    },
    {
      question: "What communication channels have you worked with?",
      answer:
        "Phone, email, live chat, ticketing systems. Adjust communication style for each channel.",
    },
    {
      question: "How do you build rapport with a customer quickly?",
      answer:
        "Use their name, match their energy professionally, show genuine interest in their issue, and be direct with solutions.",
    },
    {
      question: "What does empathy mean in customer support?",
      answer:
        'Understanding and sharing the customer\'s feelings. Saying "I understand how frustrating this must be" and meaning it.',
    },
    {
      question: "How do you handle a situation where the customer is wrong?",
      answer:
        'Politely correct with facts, never argue, frame it as "here\'s what I found" and offer the right solution calmly.',
    },
    {
      question: "What is a knowledge base and why is it useful?",
      answer:
        "A self-service repository of articles for common issues. Reduces ticket volume and empowers customers to self-resolve.",
    },
    {
      question: "How do you ensure quality in every customer interaction?",
      answer:
        'Follow scripts where needed, listen actively, verify resolution before closing, and ask "Is there anything else I can help with?"',
    },
    {
      question: "Why do you want to work in customer support?",
      answer:
        "Show passion for helping people, communication skills, and a solution-focused mindset. Mention long-term career goals.",
    },
    {
      question: "What is first contact resolution?",
      answer:
        "Resolving a customer's issue in a single interaction without follow-up needed.",
    },
    {
      question: "How do you handle language barriers with customers?",
      answer:
        "Speak slowly and clearly, use simple language, avoid jargon, repeat back for confirmation, and offer written follow-up.",
    },
  ],
  studyPlan: {
    day1: "CSAT, NPS, AHT definitions, complaint handling, empathy vs sympathy, de-escalation techniques, communication channels",
    day2: "Practice self-introduction, review LEAP model, handling difficult customers, first contact resolution, knowledge base usage",
  },
  day2Revision: [
    "CSAT = post-call satisfaction rating",
    "NPS = would you recommend us (0-10)",
    "AHT = talk time + hold + after-call work",
    "LEAP: Listen, Empathize, Apologize, Problem-solve",
    "Empathy ≠ sympathy: feel WITH them vs feel FOR them",
    "FCR = one interaction, full resolution",
    "De-escalation: calm tone, let them speak, stay solution-focused",
    "Knowledge base = self-service articles for common issues",
  ],
};

const sqlDbaRole: InterviewRole = {
  id: "sql-dba",
  title: "SQL DBA",
  icon: "🗄️",
  questions: [
    {
      question: "What is the role of a SQL DBA?",
      answer:
        "Installs, configures, monitors, and maintains SQL Server databases. Responsible for backups, performance tuning, security, and availability.",
    },
    {
      question: "What are the types of SQL Server backups?",
      answer:
        "Full backup (entire DB), Differential backup (changes since last full), Transaction Log backup (logs since last backup). Used together for point-in-time recovery.",
    },
    {
      question: "What is normalization?",
      answer:
        "Organizing database tables to reduce redundancy. 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency).",
    },
    {
      question:
        "What is the difference between clustered and non-clustered index?",
      answer:
        "Clustered index determines physical row order (one per table). Non-clustered is a separate structure pointing to data rows (multiple per table).",
    },
    {
      question: "What is a stored procedure?",
      answer:
        "A saved SQL script that can be executed repeatedly. Improves performance, security, and code reuse.",
    },
    {
      question: "What is a transaction?",
      answer:
        "A unit of work that must complete fully or not at all. Uses ACID properties: Atomicity, Consistency, Isolation, Durability.",
    },
    {
      question: "How do you find a slow-running query?",
      answer:
        "Use SQL Server Profiler, Activity Monitor, or sys.dm_exec_query_stats. Analyze the execution plan for missing indexes or full table scans.",
    },
    {
      question: "What is a deadlock?",
      answer:
        "When two transactions block each other waiting for locked resources. SQL Server detects and terminates one as the deadlock victim.",
    },
    {
      question: "Explain the difference between DELETE, TRUNCATE, and DROP.",
      answer:
        "DELETE removes specific rows (logged, can rollback). TRUNCATE removes all rows (minimal logging, faster). DROP removes the entire table.",
    },
    {
      question: "What is SQL Server Agent?",
      answer:
        "A Windows service that runs scheduled jobs — backups, index maintenance, ETL jobs, alerts.",
    },
    {
      question: "What is a view in SQL?",
      answer:
        "A virtual table based on a SELECT query. Simplifies complex queries and restricts direct table access.",
    },
    {
      question: "How do you restore a database?",
      answer:
        "Use RESTORE DATABASE command with NORECOVERY for full restore, then apply differential and log backups, then RECOVERY to bring online.",
    },
    {
      question: "What is DBCC CHECKDB?",
      answer:
        "A command to check database integrity — detects corruption in data and indexes. Run regularly as maintenance.",
    },
    {
      question: "What are SQL Server roles and permissions?",
      answer:
        "Fixed server roles (sysadmin, dbcreator) and database roles (db_owner, db_datareader). Assign least privilege access.",
    },
    {
      question: "What monitoring tools do you use for SQL Server?",
      answer:
        "SQL Server Management Studio (SSMS), Activity Monitor, Performance Monitor, SQL Profiler, third-party tools like SolarWinds DPA.",
    },
    {
      question: "What is an execution plan?",
      answer:
        "A visual representation of how SQL Server executes a query. Shows operators, costs, and where optimization is needed.",
    },
    {
      question: "What is high availability in SQL Server?",
      answer:
        "Keeping databases accessible. Solutions: Always On Availability Groups, Failover Clustering, Database Mirroring, Log Shipping.",
    },
  ],
  studyPlan: {
    day1: "Backup types and restore, normalization, indexes (clustered vs non-clustered), stored procedures, transactions and ACID",
    day2: "Slow query diagnosis, execution plans, SQL Server Agent, permissions and roles, monitoring tools, high availability concepts",
  },
  day2Revision: [
    "Full → Differential → Transaction Log backups = point-in-time recovery",
    "Clustered index = physical order, 1 per table | Non-clustered = logical, many per table",
    "ACID: Atomicity, Consistency, Isolation, Durability",
    "Deadlock = two transactions blocking each other, SQL Server kills one",
    "DELETE = logged, row-by-row | TRUNCATE = fast, all rows | DROP = removes table",
    "Execution plan = visual query cost breakdown",
    "DBCC CHECKDB = integrity check for corruption",
    "Always On AG = best high availability solution",
  ],
};

const sysAdminRole: InterviewRole = {
  id: "sys-admin",
  title: "System Administrator",
  icon: "⚙️",
  questions: [
    {
      question: "What does a system administrator do?",
      answer:
        "Manages and maintains servers, user accounts, network infrastructure, and ensures systems are available, secure, and up-to-date.",
    },
    {
      question: "What is Active Directory?",
      answer:
        "A Microsoft directory service for managing users, computers, groups, and policies in a Windows domain environment.",
    },
    {
      question: "What is a Group Policy Object (GPO)?",
      answer:
        "A set of rules applied to users or computers in AD. Controls security settings, desktop configuration, software deployment.",
    },
    {
      question: "How do you add a user to Active Directory?",
      answer:
        "Open ADUC, navigate to the correct OU, right-click → New User, fill in details, set password, assign to groups.",
    },
    {
      question: "What is the difference between a workgroup and a domain?",
      answer:
        "Workgroup is peer-to-peer, no central management. Domain uses AD for centralized authentication and policy management.",
    },
    {
      question: "How do you troubleshoot a server that is not responding?",
      answer:
        "Check physical/virtual status, ping the server, check event logs, review resource usage (CPU/RAM/disk), check services, attempt remote connection.",
    },
    {
      question: "What is DHCP and how does it work?",
      answer:
        "Dynamic Host Configuration Protocol assigns IP addresses automatically to devices on a network. Uses Discover, Offer, Request, Acknowledge (DORA) process.",
    },
    {
      question: "What is DNS and why is it critical?",
      answer:
        "Domain Name System translates hostnames to IP addresses. Without it, users cannot reach servers or websites by name.",
    },
    {
      question: "What is patch management?",
      answer:
        "The process of applying updates to OS and software to fix vulnerabilities. Tools: WSUS for Windows, SCCM, or third-party tools.",
    },
    {
      question: "What is virtualization?",
      answer:
        "Running multiple virtual machines on one physical server. Tools: VMware vSphere, Microsoft Hyper-V. Reduces hardware costs, improves flexibility.",
    },
    {
      question: "How do you monitor server health?",
      answer:
        "Use tools like Windows Performance Monitor, SCOM, Nagios, Zabbix, or cloud monitoring tools. Watch CPU, memory, disk I/O, and event logs.",
    },
    {
      question: "What is a file server and how do you manage permissions?",
      answer:
        "A server that stores and shares files. Permissions set via NTFS (local) and Share permissions. Principle of least privilege applies.",
    },
    {
      question: "What is a backup strategy?",
      answer:
        "3-2-1 rule: 3 copies of data, on 2 different media types, with 1 offsite. Includes full, differential, and incremental backups.",
    },
    {
      question: "What are common Windows Server roles?",
      answer:
        "AD DS, DNS, DHCP, File Server, Print Server, IIS (web server), Remote Desktop Services, Hyper-V.",
    },
    {
      question: "How do you handle a security breach?",
      answer:
        "Isolate affected systems, notify security team, investigate logs, contain the breach, eradicate threat, restore from clean backup, document incident.",
    },
    {
      question: "What is MFA and why is it important?",
      answer:
        "Multi-Factor Authentication adds a second verification step (code, biometric) beyond password. Significantly reduces account compromise risk.",
    },
    {
      question: "What is the principle of least privilege?",
      answer:
        "Give users and systems only the access they need to do their job — no more. Reduces attack surface.",
    },
  ],
  studyPlan: {
    day1: "Active Directory (users, groups, OUs, GPOs), DNS, DHCP, Windows Server roles, patch management, virtualization basics",
    day2: "Troubleshooting methodology, backup strategy (3-2-1), security basics (MFA, least privilege), monitoring tools, practice self-introduction",
  },
  day2Revision: [
    "AD = centralized user/computer management | GPO = rules applied to users/computers",
    "DHCP = auto assigns IPs | DNS = name to IP translation",
    "DORA: Discover, Offer, Request, Acknowledge (DHCP process)",
    "WSUS = Windows update management tool",
    "3-2-1 backup: 3 copies, 2 media, 1 offsite",
    "Least privilege = only give access that's needed",
    "MFA = password + second factor (code/biometric)",
    "Virtualization = multiple VMs on one physical server (VMware/Hyper-V)",
  ],
};

const azureAdminRole: InterviewRole = {
  id: "azure-admin",
  title: "Azure Administrator",
  icon: "☁️",
  questions: [
    {
      question: "What is Microsoft Azure?",
      answer:
        "Microsoft's cloud computing platform offering IaaS, PaaS, and SaaS services including VMs, storage, networking, databases, and identity services.",
    },
    {
      question: "What is Azure Active Directory (Azure AD)?",
      answer:
        "Microsoft's cloud-based identity service. Manages users, groups, and app access. Different from on-premise AD — it's identity-as-a-service.",
    },
    {
      question: "What is the difference between IaaS, PaaS, and SaaS?",
      answer:
        "IaaS = infrastructure (VMs, storage). PaaS = platform for developers (App Service, Azure SQL). SaaS = ready-to-use apps (Microsoft 365, Dynamics).",
    },
    {
      question: "What is a resource group in Azure?",
      answer:
        "A logical container for Azure resources (VMs, storage, etc.) that share the same lifecycle and can be managed together.",
    },
    {
      question: "What is Azure Virtual Machine?",
      answer:
        "An on-demand scalable compute resource in Azure. Supports Windows and Linux. Billed per hour/minute of usage.",
    },
    {
      question: "What is Azure Blob Storage?",
      answer:
        "Object storage for unstructured data like images, videos, backups. Offers Hot, Cool, and Archive tiers based on access frequency.",
    },
    {
      question: "What is Azure Virtual Network (VNet)?",
      answer:
        "Provides isolated network in Azure. Resources within a VNet communicate privately. VNet Peering connects separate VNets.",
    },
    {
      question: "What is Azure AD Conditional Access?",
      answer:
        "Policy-based access control that enforces conditions (location, device compliance, MFA) before granting access to resources.",
    },
    {
      question: "What is an Azure Availability Set?",
      answer:
        "Logical grouping of VMs to protect against hardware failures. Distributes VMs across fault domains and update domains.",
    },
    {
      question: "What is Azure Monitor?",
      answer:
        "Service for collecting, analyzing, and acting on telemetry from Azure resources. Includes metrics, logs, and alerts.",
    },
    {
      question: "What is Role-Based Access Control (RBAC) in Azure?",
      answer:
        "Granular permission management for Azure resources. Roles: Owner, Contributor, Reader. Assigned at subscription, resource group, or resource level.",
    },
    {
      question: "What is Azure Policy?",
      answer:
        "Service to enforce organizational standards across Azure resources. Audits compliance and can deny non-compliant deployments.",
    },
    {
      question: "What is the Azure pricing model?",
      answer:
        "Pay-as-you-go (consumption-based), Reserved Instances (1-3 year commitment for discount), Spot VMs (discounted unused capacity).",
    },
    {
      question: "What is Azure Key Vault?",
      answer:
        "Securely stores secrets, certificates, and encryption keys. Applications retrieve secrets at runtime without hardcoding them.",
    },
    {
      question: "What is the difference between Azure AD and on-premise AD?",
      answer:
        "On-premise AD manages domain-joined devices on a local network. Azure AD is cloud-based, manages SaaS app access, supports MFA, and works with any device.",
    },
    {
      question: "What is Azure Site Recovery?",
      answer:
        "Disaster recovery service that replicates on-premise or Azure VMs to another region. Enables failover with minimal downtime.",
    },
    {
      question: "What is Azure DevOps?",
      answer:
        "Suite of tools for software development lifecycle: Boards, Repos, Pipelines, Test Plans, and Artifacts.",
    },
  ],
  studyPlan: {
    day1: "Azure fundamentals (IaaS/PaaS/SaaS), Azure AD vs on-premise AD, Resource Groups, VMs, VNet basics, Blob Storage",
    day2: "RBAC and permissions, Conditional Access, Azure Monitor, Key Vault, pricing model, Availability Sets, practice self-introduction",
  },
  day2Revision: [
    "IaaS = VMs/storage | PaaS = developer platform | SaaS = ready-made apps",
    "Azure AD = cloud identity, not the same as on-premise AD",
    "Resource Group = container for related Azure resources",
    "RBAC roles: Owner > Contributor > Reader",
    "Blob Storage tiers: Hot (frequent), Cool (infrequent), Archive (rare)",
    "Conditional Access = enforce MFA/location rules before login",
    "Azure Monitor = metrics, logs, alerts for all resources",
    "Key Vault = store secrets/keys securely, apps read at runtime",
  ],
};

export const interviewRoles: InterviewRole[] = [
  serviceDeskRole,
  customerSupportRole,
  sqlDbaRole,
  sysAdminRole,
  azureAdminRole,
];
