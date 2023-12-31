function generateLinks() {
    const domain = document.getElementById('domainInput').value;
    const linksArea = document.getElementById('linksArea');
    linksArea.innerHTML = ''; // Clear previous links

    if (domain) {
        const linksData = [
            { url: `https://archive.is/`, description: "Archive redirects (Manually enter the domain on the website)" },
            { url: `https://web.archive.org/cdx/search/cdx?url=*.${domain}&output=xml&fl=original&collapse=urlkey`, description: "Check for archived files" },
            { url: `https://www.virustotal.com/`, description: "Check domain on VirusTotal" },
            { url: `https://www.urlvoid.com/scan/${domain}/`, description: "Check domain on URLVoid" },
            { url: `https://builtwith.com/redirects/${domain}`, description: "Check redirects on BuiltWith" },
            { url: `https://securitytrails.com/app/account`, description: "Check domain on SecurityTrails" },
            { url: `https://www.hybrid-analysis.com/`, description: "Analyze downloads on Hybrid Analysis" },
            { url: `https://github.com/search?q=${domain}&type=commits`, description: "Search domain in GitHub commits" },
            { url: `https://grep.app/search?q=${domain}`, description: "Search domain on Grep.app" },
            { url: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${domain}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`, description: "Check Facebook ads for the domain" },
            { url: `https://archive.is/*.${domain}`, description: "Archive.is for domain" },
            { url: `https://viewdns.info/reverseip/?host=${domain}&t=1`, description: "ViewDNS reverse IP lookup" },
            { url: `https://viewdns.info/iphistory/?domain=${domain}`, description: "ViewDNS IP history" },
            { url: `https://viewdns.info/httpheaders/?domain=${domain}`, description: "ViewDNS HTTP headers" },
            { url: `https://web.archive.org/web/20230000000000*/${domain}`, description: "Web Archive for domain" },
            { url: `https://viewdns.info/dnsrecord/?domain=${domain}`, description: "ViewDNS DNS record" },
            { url: `https://viewdns.info/portscan/?host=${domain}`, description: "ViewDNS port scan" },
            { url: `https://crt.sh/?q=${domain}`, description: "CRT.sh for domain" },
            { url: `https://who.is/whois/${domain}`, description: "WHOIS lookup" },
            { url: `https://securitytrails.com/list/apex_domain/${domain}`, description: "SecurityTrails for domain" },
            { url: `https://urlscan.io/search/#${domain}`, description: "URLScan.io for domain" },
            { url: `https://www.shodan.io/search?query=${domain}`, description: "Shodan Search for domain" },
            { url: `https://search.censys.io/search?resource=hosts&sort=RELEVANCE&per_page=25&virtual_hosts=EXCLUDE&q=${domain}`, description: "Censys Search for domain" },
            { url: `https://dnshistory.org/dns-records/${domain}`, description: "DNS History for domain" },
            { url: `https://www.wappalyzer.com/lookup/${domain}/`, description: "Wappalyzer for domain" },
            { url: `https://builtwith.com/${domain}`, description: "BuiltWith for domain" },
            { url: `https://sitereport.netcraft.com/?url=http://${domain}`, description: "Netcraft Site Report for domain" },
            { url: `https://www.statscrop.com/www/${domain}`, description: "StatsCrop for domain" },
            { url: `https://spyonweb.com/${domain}`, description: "SpyOnWeb for domain" },
            { url: `https://securityheaders.com/?q=${domain}&followRedirects=on`, description: "Security Headers for domain" },
            { url: `https://github.com/search?q=${domain}&type=code`, description: "GitHub Code Search for domain" },
            { url: `https://trends.google.com/trends/explore?q=${domain}`, description: "Google Trends for domain" },
            { url: `https://dnssec-debugger.verisignlabs.com/${domain}`, description: "DNSSEC Debugger" },
            { url: `https://dnsviz.net/d/${domain}/analyze/`, description: "DNSViz for domain" },
            { url: `https://buckets.grayhatwarfare.com/files?keywords=${domain}`, description: "GrayHat Warfare for domain" },
            { url: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${domain}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`, description: "Facebook Ads Library for domain" },
        ];

        const table = document.createElement('table');
        linksData.forEach(data => {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();

            cell1.classList.add('url-column');
            cell2.classList.add('description-column');

            const link = document.createElement('a');
            link.href = data.url;
            link.textContent = data.url.length > 50 ? data.url.substring(0, 50) + '...' : data.url; // Truncate URL
            link.target = '_blank';
            cell1.appendChild(link);

            cell2.textContent = data.description;
        });

        linksArea.appendChild(table);
    } else {
        alert('Please enter a domain.');
    }
}


function checkLocalIP(ip, callback) {
    let responded = false;

    const img = new Image();
    img.onload = img.onerror = () => {
        if (!responded) {
            responded = true;
            console.log(`Response received from IP ${ip}`);
            callback(true, ip);
        }
    };

    img.src = `http://${ip}/favicon.ico?${new Date().getTime()}`;

    setTimeout(() => {
        if (!responded) {
            responded = true;
            console.log(`Timeout for IP ${ip}`);
            callback(false, ip);
        }
    }, 500);
}

function getOSVersionFromUserAgent() {
    const userAgent = navigator.userAgent;
    const osRegex = /Windows NT (\d+\.\d+)/;
    const match = userAgent.match(osRegex);
    return match ? `Windows NT ${match[1]}` : 'Unknown OS';
}

function displayBrowserInfo() {
    const browserInfoArea = document.getElementById('browserInfo');
    browserInfoArea.innerHTML = '<h2>Your Browser/Device Information:</h2>';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    const addRow = (key, value) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `<strong>${key}</strong>`;
        cell2.innerHTML = value;
    };

    // Browser and Operating System
    addRow('Browser Version', navigator.userAgent);
    addRow('Operating System', navigator.platform);
    // Operating System Version (from User-Agent)
    addRow('Operating System Version', getOSVersionFromUserAgent());

    // Screen Size and Device Pixel Ratio
    addRow('Screen Size', `${screen.width}x${screen.height}`);
    addRow('Device Pixel Ratio', window.devicePixelRatio);

    // Battery Status
    navigator.getBattery().then(battery => {
        addRow('Battery Level', `${Math.round(battery.level * 100)}%`);
        addRow('Battery Charging', battery.charging ? 'Yes' : 'No');
    });

    // GPU Information Using WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Not Available';
        addRow('Graphics Card', gpu);
    }

    // Device Orientation
    addRow('Device Orientation', screen.orientation.type);

    // Zoom Level (Approximation)
    addRow('Zoom Level', `${Math.round((window.outerWidth / window.innerWidth) * 100)}%`);

    // Number of CPU Cores
    addRow('CPU Cores', navigator.hardwareConcurrency);

    // Time Zone
    addRow('Time Zone', Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Installed Fonts (Using Flash or a third-party library like FontDetector)
    // Note: Detecting installed fonts is complex and might require third-party libraries.
    // addRow('Installed Fonts', getInstalledFonts()); // This requires a custom function or library

    browserInfoArea.appendChild(table);
}

displayBrowserInfo();

function displayNetworkInfo() {
    const browserInfoArea = document.getElementById('browserInfo');
    const networkScanStatus = document.createElement('div');
    networkScanStatus.textContent = 'Checking for common home Router IPs...';
    browserInfoArea.appendChild(networkScanStatus);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');
    browserInfoArea.appendChild(table);

    const addRow = (status, ip) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `<strong>${ip}</strong>`;
        cell2.textContent = status;
    };

    const commonIPs = ['192.168.1.1', '192.168.0.1', '192.168.1.254'];
    let completedChecks = 0;

    commonIPs.forEach(ip => {
        checkLocalIP(ip, (exists, ip) => {
            completedChecks++;
            addRow(exists ? 'Active IP Found' : 'No response', ip);

            if (completedChecks === commonIPs.length) {
                networkScanStatus.textContent = 'Network scan completed:';
            }
        });
    });
}

displayNetworkInfo();
