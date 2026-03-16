const fs = require('fs');

const templateContent = fs.readFileSync('d:/Vardhan/Nikhil_Maddi/file-income-tax.html', 'utf8');

// The replacement mapping
const replacements = [
  {
    find: /<title>.*?<\/title>/s,
    replace: '<title>Comprehensive GST Services for Businesses | TaxFilingOffice</title>'
  },
  {
    find: /<meta name="description" content=".*?">/s,
    replace: '<meta name="description" content="Ensure seamless GST compliance with TaxFilingOffice’s end-to-end GST services. From registration to return filing, we handle everything with accuracy and expertise.">'
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
    replace: '<h1 class="hero-title-light" style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">Comprehensive GST Services<br><span class="hero-branding">for Businesses</span></h1>'
  },
  {
    find: /<p class="hero-paragraph".*?Filing your income tax return is now simpler.*?<\/p>\s*<p class="hero-paragraph".*?Upload your documents securely.*?<\/p>\s*<p class="hero-paragraph".*?Our experienced tax professionals help you stay fully compliant.*?<\/p>/s,
    replace: '<p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">Ensure seamless GST compliance with TaxFilingOffice’s end-to-end GST services. From registration to return filing, we handle everything with accuracy and expertise.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1rem;">Our services include GST registration, monthly/quarterly return filings, ITC reconciliation, annual returns, audits, and notices handling—so you stay fully compliant and avoid penalties.</p>\n                    <p class="hero-paragraph" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 2rem;">Focus on growing your business while we take care of your GST obligations professionally and efficiently.</p>'
  },
  {
    find: /<h2 class="section-title">How Income Tax Return Filing Works<\/h2>/s,
    replace: '<h2 class="section-title">How Our GST Services Work</h2>'
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Document Upload<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-upload-simple"><\/i><\/div>\s*<div class="step-content">\s*<p>Upload PAN, Form 16, and income proofs securely through our platform\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>GST Registration</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-file-plus"></i></div>
                        <div class="step-content">
                            <p>We assist with fresh GST registrations and amendments for all business types across India.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Expert Review<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-magnifying-glass"><\/i><\/div>\s*<div class="step-content">\s*<p>Our tax experts verify documents and check for applicable deductions\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Return Filing</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-calculator"></i></div>
                        <div class="step-content">
                            <p>File GSTR-1, GSTR-3B, and annual returns on time with our accurate and timely support.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>Return Preparation<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-calculator"><\/i><\/div>\s*<div class="step-content">\s*<p>We prepare your ITR using latest rules and maximum refund optimization\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>ITC Reconciliation</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-puzzle-piece"></i></div>
                        <div class="step-content">
                            <p>We reconcile your Input Tax Credit (ITC) with GSTR-2B to ensure maximum benefits and compliance.</p>
                        </div>
                    </div>`
  },
  {
    find: /<div class="process-flow-step">\s*<div class="step-heading">\s*<h4>E-Filing<\/h4>\s*<\/div>\s*<div class="step-dot"><i class="ph-fill ph-paper-plane-tilt"><\/i><\/div>\s*<div class="step-content">\s*<p>Your ITR is filed, and you receive the confirmation and ITR-V instantly\.<\/p>\s*<\/div>\s*<\/div>/s,
    replace: `<div class="process-flow-step">
                        <div class="step-heading">
                            <h4>Audit & Notices</h4>
                        </div>
                        <div class="step-dot"><i class="ph-fill ph-shield-check"></i></div>
                        <div class="step-content">
                            <p>Our team represents you in GST audits and handles notices from the department efficiently.</p>
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

fs.writeFileSync('d:/Vardhan/Nikhil_Maddi/gst-services.html', finalHtml, 'utf8');
console.log('Created gst-services.html successfully!');
