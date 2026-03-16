const fs = require('fs');
const path = require('path');

const directoryPath = 'd:/Vardhan/Nikhil_Maddi';

fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;

    const htmlFiles = files.filter(file => file.endsWith('.html'));

    htmlFiles.forEach(file => {
        const filePath = path.join(directoryPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Main Dropdowns & Footer Links (anchor replacements)
        // These replace index.html#something or just #something with the direct page link
        content = content.replace(/index\.html#gst/g, 'gst-services.html');
        content = content.replace(/"#gst"/g, '"gst-services.html"');
        
        content = content.replace(/index\.html#15ca/g, '15ca-15cb-services.html');
        content = content.replace(/"#15ca"/g, '"15ca-15cb-services.html"');
        
        content = content.replace(/index\.html#incorporation/g, 'company-incorporation.html');
        content = content.replace(/"#incorporation"/g, '"company-incorporation.html"');
        
        content = content.replace(/index\.html#roc/g, 'roc-filing.html');
        content = content.replace(/"#roc"/g, '"roc-filing.html"');
        
        content = content.replace(/index\.html#cma/g, 'cma-reports.html');
        content = content.replace(/"#cma"/g, '"cma-reports.html"');

        // Update the Dropdown explicitly to add the missing 3 links (TDS, ROC, CMA)
        const dropdownFind = /<ul class="submenu">\s*<li><a href="gst-services\.html">GST Services<\/a><\/li>\s*<li><a href="15ca-15cb-services\.html">15 CA & 15CB<\/a><\/li>\s*<li><a href="company-incorporation\.html">Company Incorporation<\/a><\/li>\s*<\/ul>/s;
        
        const dropdownReplace = `<ul class="submenu">
                            <li><a href="gst-services.html">GST Services</a></li>
                            <li><a href="15ca-15cb-services.html">15 CA & 15CB</a></li>
                            <li><a href="tds-tax-management.html">TDS & Tax Management</a></li>
                            <li><a href="company-incorporation.html">Company Incorporation</a></li>
                            <li><a href="roc-filing.html">ROC Filing</a></li>
                            <li><a href="cma-reports.html">CMA Reports</a></li>
                        </ul>`;
        
        if (content.match(dropdownFind)) {
            content = content.replace(dropdownFind, dropdownReplace);
        }

        // Update the Footer explicitly to add the missing links
        const footerFind = /<h4>Business Needs<\/h4>\s*<ul>\s*<li><a href=\"gst-services\.html\">GST Services<\/a><\/li>\s*<li><a href=\"company-incorporation\.html\">Company Incorporation<\/a><\/li>\s*<li><a href=\"roc-filing\.html\">ROC Filing<\/a><\/li>\s*<li><a href=\"cma-reports\.html\">CMA Reports<\/a><\/li>\s*<li><a href=\"add-on-services\.html#book-keeping\">Book Keeping<\/a><\/li>\s*<\/ul>/s;
        
        const footerReplace = `<h4>Business Needs</h4>
                <ul>
                    <li><a href="gst-services.html">GST Services</a></li>
                    <li><a href="company-incorporation.html">Company Incorporation</a></li>
                    <li><a href="roc-filing.html">ROC Filing</a></li>
                    <li><a href="cma-reports.html">CMA Reports</a></li>
                    <li><a href="15ca-15cb-services.html">15 CA & 15CB</a></li>
                    <li><a href="tds-tax-management.html">TDS Management</a></li>
                </ul>`;
        
        if (content.match(footerFind)) {
            content = content.replace(footerFind, footerReplace);
        }

        fs.writeFileSync(filePath, content, 'utf8');
    });
    console.log('Processed all HTML files successfully.');
});
