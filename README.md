### **Node Firewall**

This project demonstrates how a firewall works using both **iptables** (Linux firewall) and a **Node.js** server to simulate basic firewall rules. It shows how to control network traffic by allowing or blocking certain IP addresses and ports.

---

### **Project Files**
- **firewall.js**: This is the Node.js server that acts like a firewall. It checks the incoming requests and either allows or blocks them based on the rules in the `rules.json` file.
- **rules.json**: A file that contains the rules for the firewall. It lists allowed and blocked IP addresses and ports.
- **iptables.sh**: This is a script for setting up basic firewall rules using `iptables` on a Linux system. It blocks or allows network traffic based on the rules in the script.

---

### **How to Run the Project**

1. **Run Firewall Rules with iptables** (Linux Only):
   - Open a terminal.
   - Navigate to the project folder.
   - Run the `iptables.sh` script to set up firewall rules.
   
   ```bash
   chmod +x iptables.sh
   sudo ./iptables.sh
   ```
   This will apply the basic firewall rules to your system.

2. **Run the Node.js Firewall Simulator**:
   - Install Node.js if you haven’t already.
   - Open a terminal and navigate to the project folder.
   - Run the Node.js server with:

   ```bash
   node firewall.js
   ```

   The server will start on **http://localhost:8080**.

3. **Test the Firewall**:
   - Open your browser or use `curl` to test the server.

   Example:
   ```bash
   curl http://localhost:8080
   ```

   - If your IP and port are allowed, you’ll see:
     ```
     Welcome, you have passed the firewall!
     ```

   - If your IP or port is blocked, you’ll see:
     ```
     Access Denied: Your IP is blocked by the firewall.
     ```

---

### **What These Files Do**
- **iptables.sh**: Configures firewall rules on a Linux system to block or allow specific IP addresses and ports.
- **firewall.js**: Simulates a firewall in Node.js by checking each incoming request against the rules in `rules.json`.
- **rules.json**: Holds the IP addresses and ports that are allowed or blocked by the Node.js firewall.

---

### **Notes**
- This project is designed to help you understand the basics of firewalls.
- It uses **iptables** for system-level control and **Node.js** for simulating firewall rules.

That’s it! You now have a simple firewall running on your system.