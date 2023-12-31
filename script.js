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
