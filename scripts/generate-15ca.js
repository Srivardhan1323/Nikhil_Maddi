const fs = require('fs');

const templateContent = fs.readFileSync('d:/Vardhan/Nikhil_Maddi/file-income-tax.html', 'utf8');

// The replacement mapping
const replacements = [
  {
    find: /<title>.*?<\/title>/s,
    replace: '<title>Expert Assistance in Filing Form 15CA & 15CB | TaxFilingOffice</title>'
  },
  {
    find: /<meta name="description" content=".*?">/s,
    replace: '<meta name="description" content="Planning a foreign remittance? Ensure full tax compliance with TaxFilingOffice’s expert 15CA and 15CB services.">'
  },
  {
    find: /<li class="nav-item dropdown">\s*<a href="index\.html#individual" class="nav-link dropdown-toggle active">/s,
    replace: '<li class="nav-item dropdown">\n                        <a href="index.html#individual" class="nav-link dropdown-toggle">'
  },
  {
    find: /<li class="nav-item dropdown">\s*<a href="index\.html#business" class="nav-link dropdown-toggle">/s,
    replace: '<li class="nav-item dropdown">\n                        <a href="index.html#business" class="nav-link dropdown-toggle active">'
  },
  {
    find: /<img src="\.\/assets\/file-income-tax-hero\.png".*?>/s,
    replace: '<div class="illustration-placeholder" style="height: 350px;"></div>'
  },
  {
    find: /<h1 class="hero-title-light".*?<\/h1>/s,
    replace: '<h1 class="hero-title-light" style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">Expert Assistance in Filing<br><span class="hero-branding">Form 15CA & 15CB</span></h1>'
  },
  {
    find: /<p class="hero-paragraph".*?Filing your income tax return is now simpler.*?<\/p>\s*<p class="hero-paragraph".*?Upload your documents securely.*?<\/p>\s*<p class="hero-paragraph".*?Our experienced tax professionals help you stay fully compliant.*?<\/p>/s,
    replace: '<p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">Planning a foreign remittance? Ensure full tax compliance with TaxFilingOffice’s expert 15CA and 15CB services.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">Our team assists in evaluating taxability, preparing accurate Form 15CA online, and obtaining Form 15CB from a registered CA for remittances under the Income Tax Act.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 2rem;">Avoid delays and penalties—get reliable, fast, and fully compliant foreign remittance support from our professionals.</p>'
  },
  {
    find: /<h2 class="section-title">How Income Tax Return Filing Works<\/h2>/s,
    replace: '<h2 class="section-title">Step-by-Step 15CA & 15CB Process</h2>'
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Document Upload<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-upload-simple"><\/i><\/div>\s*<div class="step-content">\s*<p>Upload PAN, Form 16, and income proofs securely through our platform\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Taxability Review</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-check-circle"></i></div>
                        <div class="step-content">
                            <p>We analyze the nature of the foreign remittance and determine whether tax is applicable.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Expert Review<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-magnifying-glass"><\/i><\/div>\s*<div class="step-content">\s*<p>Our tax experts verify documents and check for applicable deductions\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Form 15CB Certificate</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-file-text"></i></div>
                        <div class="step-content">
                            <p>A Chartered Accountant issues Form 15CB after reviewing documents and TDS implications.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Return Preparation<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-calculator"><\/i><\/div>\s*<div class="step-content">\s*<p>We prepare your ITR using latest rules and maximum refund optimization\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Online Filing of 15CA</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-desktop"></i></div>
                        <div class="step-content">
                            <p>We file Form 15CA on the income tax portal using the correct part (A/B/C/D) based on remittance.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>E-Filing<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-paper-plane-tilt"><\/i><\/div>\s*<div class="step-content">\s*<p>Your ITR is filed, and you receive the confirmation and ITR-V instantly\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Final Submission</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-paper-plane-right"></i></div>
                        <div class="step-content">
                            <p>All certified and filed forms are shared with the client and banker for completing remittance.</p>
                        </div>
                    </div>`
  }
];

let finalHtml = templateContent;
for (let i = 0; i < replacements.length; i++) {
    const rep = replacements[i];
    if(!finalHtml.match(rep.find)) {
        console.log("FAILED TO MATCH AT INDEX " + i + ": " + rep.find);
    } else {
        finalHtml = finalHtml.replace(rep.find, rep.replace);
    }
}

fs.writeFileSync('d:/Vardhan/Nikhil_Maddi/15ca-15cb-services.html', finalHtml, 'utf8');
console.log('Created 15ca-15cb-services.html successfully!');
