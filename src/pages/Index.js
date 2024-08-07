export function renderIndex(app) {
    const pages = [
        { path: "/balance", name: "Balance" },
        { path: "/otp-verification", name: "OTP Verification" },
        { path: "/mpin", name: "MPIN" },
        { path: "/user-info-form", name: "User Info Form" },
        { path: "/home-address-form", name: "Home Address Form" },
        { path: "/success", name: "Success" },
        { path: "/user-profile", name: "User Profile" },
        { path: "/image-upload", name: "Image Upload" },
        { path: "/account-verification", name: "Account Verification" },
        { path: "/document-scanning", name: "Document Scanning" },
        { path: "/kyc-id-scanner", name: "KYC ID Scanner" },
        { path: "/id-upload", name: "ID Upload" },
        { path: "/id-verification", name: "ID Verification" },
    ];

    const html = `
        <div class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h1 class="text-white text-4xl font-bold mb-4">Welcome to Platapay</h1>
            <div class="row row-cols-2 g-4 w-100 max-w-md">
                ${pages.map(page => `
                    <div class="col">
                        <a href="${page.path}" class="btn btn-primary w-100 shadow-lg">${page.name}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = html;
}
