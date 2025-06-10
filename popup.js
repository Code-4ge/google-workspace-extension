document.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.getElementById('status');
    
    // Google Workspace service URLs
    const serviceUrls = {
        sheets: 'https://docs.google.com/spreadsheets/create',
        slides: 'https://docs.google.com/presentation/create',
        docs: 'https://docs.google.com/document/create',
        forms: 'https://docs.google.com/forms/create'
    };
    
    // Service display names
    const serviceNames = {
        sheets: 'Google Sheets',
        slides: 'Google Slides', 
        docs: 'Google Docs',
        forms: 'Google Forms'
    };
    
    // Function to create a new document
    function createDocument(service, button) {
        // Show status message
        statusDiv.textContent = `Creating your ${serviceNames[service].split(' ')[1]}...`;
        statusDiv.classList.add('show');
        
        // Disable button and show loading state
        button.disabled = true;
        const originalContent = button.innerHTML;
        button.innerHTML = `
            <div class="service-icon">⏳</div>
            <div class="service-name">Creating...</div>
        `;
        
        // Create new document
        chrome.tabs.create({
            url: serviceUrls[service],
            active: true
        }, function(tab) {
            // Reset button after a short delay
            setTimeout(() => {
                button.disabled = false;
                button.innerHTML = originalContent;
                statusDiv.classList.remove('show');
                
                // Close the popup
                window.close();
            }, 1000);
        });
    }
    
    // Add event listeners for all service buttons
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            createDocument(service, this);
        });
        
        // Add hover effect for better UX
        button.addEventListener('mouseenter', function() {
            const service = this.getAttribute('data-service');
            statusDiv.textContent = `Click to create new ${serviceNames[service]}`;
            statusDiv.classList.add('show');
        });
        
        button.addEventListener('mouseleave', function() {
            statusDiv.classList.remove('show');
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'Enter':
                // Default to Sheets for Enter key
                const sheetsButton = document.getElementById('createSheets');
                if (sheetsButton && !sheetsButton.disabled) {
                    sheetsButton.click();
                }
                break;
            case '1':
                // Shortcut for Sheets
                document.getElementById('createSheets').click();
                break;
            case '2':
                // Shortcut for Slides
                document.getElementById('createSlides').click();
                break;
            case '3':
                // Shortcut for Docs
                document.getElementById('createDocs').click();
                break;
            case '4':
                // Shortcut for Forms
                document.getElementById('createForms').click();
                break;
        }
    });
    
    // Add tooltips for keyboard shortcuts
    document.getElementById('createSheets').title = 'Shortcut: Enter or 1';
    document.getElementById('createSlides').title = 'Shortcut: 2';
    document.getElementById('createDocs').title = 'Shortcut: 3';
    document.getElementById('createForms').title = 'Shortcut: 4';
}); 