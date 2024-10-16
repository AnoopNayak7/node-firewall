const http = require('http');
const fs = require('fs');

// Load firewall rules from rules.json
const firewallRules = JSON.parse(fs.readFileSync('rules.json'));

const server = http.createServer((req, res) => {
    const clientIP = req.socket.remoteAddress.replace(/^.*:/, '');  // Get the client IP
    const clientPort = req.socket.remotePort;                        // Get the client port

    // Check if the IP is allowed or blocked
    if (firewallRules.blockedIPs.includes(clientIP)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('Access Denied: Your IP is blocked by the firewall.\n');
    }

    if (!firewallRules.allowedIPs.includes(clientIP)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('Access Denied: Your IP is not allowed.\n');
    }

    // Check if the port is allowed
    if (!firewallRules.allowedPorts.includes(req.socket.localPort)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('Access Denied: The port you are using is blocked.\n');
    }

    // If passed all firewall rules
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome, you have passed the firewall!\n');
});

// Start the server on port 8080
server.listen(8080, () => {
    console.log('Firewall running on http://localhost:8080');
});
