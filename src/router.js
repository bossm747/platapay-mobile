import { renderIndex } from './pages/Index.js';
import { renderBalance } from './pages/Balance.js';
import { renderOtpVerification } from './pages/OtpVerification.js';
import { renderMpin } from './pages/Mpin.js';
import { renderUserInfoForm } from './pages/UserInfoForm.js';
import { renderHomeAddressForm } from './pages/HomeAddressForm.js';
import { renderSuccess } from './pages/Success.js';
import { renderUserProfile } from './pages/UserProfile.js';
import { renderImageUpload } from './pages/ImageUpload.js';
import { renderAccountVerification } from './pages/AccountVerification.js';
import { renderDocumentScanning } from './pages/DocumentScanning.js';
import { renderKycIdScanner } from './pages/KycIdScanner.js';
import { renderIdUpload } from './pages/IdUpload.js';
import { renderIdVerification } from './pages/IdVerification.js';

export function renderPage(path) {
    const app = document.getElementById('app');
    app.innerHTML = '';

    switch (path) {
        case '/':
            renderIndex(app);
            break;
        case '/balance':
            renderBalance(app);
            break;
        case '/otp-verification':
            renderOtpVerification(app);
            break;
        case '/mpin':
            renderMpin(app);
            break;
        case '/user-info-form':
            renderUserInfoForm(app);
            break;
        case '/home-address-form':
            renderHomeAddressForm(app);
            break;
        case '/success':
            renderSuccess(app);
            break;
        case '/user-profile':
            renderUserProfile(app);
            break;
        case '/image-upload':
            renderImageUpload(app);
            break;
        case '/account-verification':
            renderAccountVerification(app);
            break;
        case '/document-scanning':
            renderDocumentScanning(app);
            break;
        case '/kyc-id-scanner':
            renderKycIdScanner(app);
            break;
        case '/id-upload':
            renderIdUpload(app);
            break;
        case '/id-verification':
            renderIdVerification(app);
            break;
        default:
            app.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}
