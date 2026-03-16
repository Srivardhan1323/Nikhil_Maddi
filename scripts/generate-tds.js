const fs = require('fs');

const templateContent = fs.readFileSync('d:/Vardhan/Nikhil_Maddi/file-income-tax.html', 'utf8');

// The replacement mapping
const replacements = [
  {
    find: /<title>.*?<\/title>/s,
    replace: '<title>Comprehensive TDS & Tax Management Solutions | TaxFilingOffice</title>'
  },
  {
    find: /<meta name="description" content=".*?">/s,
    replace: '<meta name="description" content="Managing Tax Deducted at Source (TDS) and overall taxation effectively is vital for smooth business operations. We provide complete solutions.">'
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
    replace: '<h1 class="hero-title-light" style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">Comprehensive TDS &amp; Tax<br><span class="hero-branding">Management Solutions</span></h1>'
  },
  {
    find: /<p class="hero-paragraph".*?Filing your income tax return is now simpler.*?<\/p>\s*<p class="hero-paragraph".*?Upload your documents securely.*?<\/p>\s*<p class="hero-paragraph".*?Our experienced tax professionals help you stay fully compliant.*?<\/p>/s,
    replace: '<p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">Managing Tax Deducted at Source (TDS) and overall taxation effectively is vital for smooth business operations.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">At TaxFilingOffice, we provide complete solutions to ensure accurate TDS deduction, timely deposits, and compliance with income tax laws.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 2rem;">We assist in end-to-end TDS compliance, quarterly return filing, challan payments, Form 16/16A generation, and tax planning support.</p>'
  },
  {
    find: /<h2 class="section-title">How Income Tax Return Filing Works<\/h2>/s,
    replace: '<h2 class="section-title">How Our TDS & Tax Management Works</h2>'
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Document Upload<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-upload-simple"><\/i><\/div>\s*<div class="step-content">\s*<p>Upload PAN, Form 16, and income proofs securely through our platform\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>TDS Applicability Review</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-magnifying-glass"></i></div>
                        <div class="step-content">
                            <p>We assess your transactions to determine where TDS must be deducted and applicable rates.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Expert Review<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-magnifying-glass"><\/i><\/div>\s*<div class="step-content">\s*<p>Our tax experts verify documents and check for applicable deductions\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Monthly Payments</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-calendar-check"></i></div>
                        <div class="step-content">
                            <p>Ensure timely deduction and deposit of TDS using correct challans.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Return Preparation<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-calculator"><\/i><\/div>\s*<div class="step-content">\s*<p>We prepare your ITR using latest rules and maximum refund optimization\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Quarterly Return Filing</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-file-text"></i></div>
                        <div class="step-content">
                            <p>Prepare and file TDS returns (Form 24Q, 26Q etc.) each quarter.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>E-Filing<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-paper-plane-tilt"><\/i><\/div>\s*<div class="step-content">\s*<p>Your ITR is filed, and you receive the confirmation and ITR-V instantly\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Tax Planning & Reporting</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-chart-bar"></i></div>
                        <div class="step-content">
                            <p>Annual tax planning, MIS reporting, and Form 16/16A generation support.</p>
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

fs.writeFileSync('d:/Vardhan/Nikhil_Maddi/tds-tax-management.html', finalHtml, 'utf8');
console.log('Created tds-tax-management.html successfully!');
