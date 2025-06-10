// Background service worker for Google Workspace Creator
chrome.runtime.onInstalled.addListener(() => {
    console.log('Google Workspace Creator extension installed');
});

// Google Workspace service URLs
const serviceUrls = {
    sheets: 'https://docs.google.com/spreadsheets/create',
    slides: 'https://docs.google.com/presentation/create',
    docs: 'https://docs.google.com/document/create',
    forms: 'https://docs.google.com/forms/create'
};

// Create context menu options for all services
chrome.runtime.onInstalled.addListener(() => {
    // Create parent menu item
    chrome.contextMenus.create({
        id: 'googleWorkspace',
        title: 'Create Google Workspace Document',
        contexts: ['page', 'selection']
    });
    
    // Create submenu items for each service
    chrome.contextMenus.create({
        id: 'createGoogleSheets',
        parentId: 'googleWorkspace',
        title: '📊 New Google Sheets',
        contexts: ['page', 'selection']
    });
    
    chrome.contextMenus.create({
        id: 'createGoogleSlides',
        parentId: 'googleWorkspace',
        title: '📋 New Google Slides',
        contexts: ['page', 'selection']
    });
    
    chrome.contextMenus.create({
        id: 'createGoogleDocs',
        parentId: 'googleWorkspace',
        title: '📄 New Google Docs',
        contexts: ['page', 'selection']
    });
    
    chrome.contextMenus.create({
        id: 'createGoogleForms',
        parentId: 'googleWorkspace',
        title: '📝 New Google Forms',
        contexts: ['page', 'selection']
    });
    
    // Add separator
    chrome.contextMenus.create({
        id: 'separator',
        parentId: 'googleWorkspace',
        type: 'separator',
        contexts: ['page', 'selection']
    });
    
    // Quick access to most common service
    chrome.contextMenus.create({
        id: 'quickSheets',
        parentId: 'googleWorkspace',
        title: '⚡ Quick Sheets (Most Used)',
        contexts: ['page', 'selection']
    });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = null;
    
    switch(info.menuItemId) {
        case 'createGoogleSheets':
        case 'quickSheets':
            url = serviceUrls.sheets;
            break;
        case 'createGoogleSlides':
            url = serviceUrls.slides;
            break;
        case 'createGoogleDocs':
            url = serviceUrls.docs;
            break;
        case 'createGoogleForms':
            url = serviceUrls.forms;
            break;
    }
    
    if (url) {
        chrome.tabs.create({
            url: url,
            active: true
        });
    }
});

// Handle keyboard shortcuts (optional - can be extended)
chrome.commands.onCommand.addListener((command) => {
    switch(command) {
        case 'create-sheets':
            chrome.tabs.create({ url: serviceUrls.sheets, active: true });
            break;
        case 'create-slides':
            chrome.tabs.create({ url: serviceUrls.slides, active: true });
            break;
        case 'create-docs':
            chrome.tabs.create({ url: serviceUrls.docs, active: true });
            break;
        case 'create-forms':
            chrome.tabs.create({ url: serviceUrls.forms, active: true });
            break;
    }
}); 