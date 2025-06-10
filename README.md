# Google Workspace Creator - Web Browser Extension

![Version](https://img.shields.io/badge/version-2.0-green.svg)
![Platform](https://img.shields.io/badge/platform-Microsoft%20Edge-blue.svg)
![Platform](https://img.shields.io/badge/platform-Chrome-blue.svg)
![Manifest](https://img.shields.io/badge/manifest-v3-orange.svg)

A modern, lightweight Google Workspace extension that enables instant creation of Google Workspace documents with just one click. Transform your productivity workflow with seamless access to Google Sheets, Slides, Docs, and Forms.

## ✨ Features

- 🚀 **One-Click Document Creation** - Instantly create any Google Workspace document
- 🎨 **Modern Glass-Morphism UI** - Beautiful, intuitive interface with service-specific theming
- ⚡ **Multiple Access Methods** - Popup, context menu, and keyboard shortcuts
- 🎯 **Four Core Services** - Google Sheets, Slides, Docs, and Forms support
- ⌨️ **Keyboard Shortcuts** - Global and popup-specific shortcuts for power users
- 🔒 **Privacy-First** - No data collection, minimal permissions, secure by design
- 📱 **Responsive Design** - Clean 2x2 grid layout optimized for all screen sizes

## 🛠️ Supported Google Workspace Services

| Service | Icon | Popup Shortcut | Global Shortcut | Description |
|---------|------|---------------|-----------------|-------------|
| **Google Sheets** | 📊 | `Enter` / `1` | `Ctrl+Shift+S` | Create spreadsheets |
| **Google Slides** | 📋 | `2` | `Ctrl+Shift+P` | Create presentations |
| **Google Docs** | 📄 | `3` | `Ctrl+Shift+D` | Create documents |
| **Google Forms** | 📝 | `4` | `Ctrl+Shift+F` | Create forms & surveys |

## 📦 Installation

### Option 1: Developer Mode (Recommended)

1. **Download or Clone** this repository:
   ```bash
   git clone https://github.com/Code-4ge/google-workspace-extension.git
   ```

2. **Open Microsoft Edge / Chrome** and navigate to:
   ```
   edge://extensions/
   ```
   or
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the bottom-left corner

4. **Load the Extension**:
   - Click "Load unpacked"
   - Navigate to the `google-workspace-extension` folder
   - Select the folder and click "Select Folder"

5. **Verify Installation**:
   - The extension should appear in your extensions list
   - Look for the workspace icon in your browser toolbar

### Option 2: Packed Extension

1. **Create Package** (if distributing):
   - In browser, go to `edge://extensions/` or `chrome://extensions/`
   - Click "Pack extension"
   - Select the project folder as "Extension root directory"
   - Click "Pack Extension"

2. **Install Package**:
   - Drag the generated `.crx` file into Edge extensions page
   - Click "Add extension" when prompted

## 🚀 Usage Guide

### Method 1: Extension Popup (Primary)
1. Click the workspace icon in your browser toolbar
2. Select any service button (hover for preview)
3. Document opens instantly in a new tab
4. Use keyboard shortcuts for faster access

### Method 2: Right-Click Context Menu
1. Right-click anywhere on any webpage
2. Select "Create Google Workspace Document"
3. Choose from the submenu:
   - 📊 New Google Sheets
   - 📋 New Google Slides  
   - 📄 New Google Docs
   - 📝 New Google Forms

### Method 3: Global Keyboard Shortcuts
- `Ctrl+Shift+S` → Google Sheets
- `Ctrl+Shift+P` → Google Slides  
- `Ctrl+Shift+D` → Google Docs
- `Ctrl+Shift+F` → Google Forms

### Method 4: Popup Shortcuts
When popup is open:
- `Enter` or `1` → Google Sheets
- `2` → Google Slides
- `3` → Google Docs
- `4` → Google Forms

<!-- ## 📁 Project Structure

```
google-workspace-extension/
├── 📄 manifest.json       # Extension configuration (Manifest v3)
├── 🎨 popup.html          # Modern UI interface
├── ⚡ popup.js           # Main functionality & shortcuts
├── 🔧 background.js      # Service worker (context menus)
├── 🖼️ icon16.png         # Extension icon (16x16)
├── 🖼️ icon32.png         # Extension icon (32x32)  
├── 🖼️ icon48.png         # Extension icon (48x48)
├── 🖼️ icon128.png        # Extension icon (128x128)
└── 📚 README.md          # Documentation
``` -->

## 🔧 Technical Details

### Permissions Explained
- **`tabs`** - Create new tabs for Google Workspace documents
- **`activeTab`** - Interact with current tab for context menus
- **`contextMenus`** - Enable right-click functionality

### Technology Stack
- **Manifest Version**: 3 (latest standard)
- **Service Worker**: Background script for context menus
- **Modern CSS**: Glass-morphism design with backdrop filters
- **Chrome Extension APIs**: Native browser integration

<!-- ### URLs Used
- Google Sheets: `https://docs.google.com/spreadsheets/create`
- Google Slides: `https://docs.google.com/presentation/create`
- Google Docs: `https://docs.google.com/document/create`
- Google Forms: `https://docs.google.com/forms/create` -->

## 🎨 Design System

### Color Themes
Each service has its own branded color scheme:
- **Sheets**: Green (`#34a853`) - Matches Google Sheets branding
- **Slides**: Orange (`#ffbb33`) - Matches Google Slides branding  
- **Docs**: Blue (`#4285f4`) - Matches Google Docs branding
- **Forms**: Purple (`#8e3ab9`) - Matches Google Forms branding

### UI Features
- **Glass-morphism Effects**: Translucent buttons with backdrop blur
- **Hover States**: Interactive feedback and status messages
- **Loading States**: Visual feedback during document creation
- **Responsive Grid**: Clean 2x2 layout for all services
- **Typography**: Segoe UI font family for modern look

## 🔍 Troubleshooting

### Extension Issues
| Problem | Solution |
|---------|----------|
| Extension not appearing | Enable Developer mode, check file structure |
| Buttons not working | Sign in to Google account, check popup blockers |
| Context menu missing | Reload extension, right-click on webpage content |
| Shortcuts not working | Check for conflicts, restart browser |

### Common Fixes
1. **Reload Extension**: Go to `edge://extensions/` and click refresh
2. **Check Permissions**: Ensure all required permissions are granted
3. **Clear Cache**: Sometimes helps with loading issues
4. **Google Account**: Must be signed in to create documents

<!-- ## 🛠️ Development

### Setup Development Environment
```bash
# Clone the repository
git clone https://github.com/yourusername/google-workspace-extension.git

# Navigate to project directory  
cd google-workspace-extension

# Make your changes to source files
# Test changes by reloading extension in Edge
```

### Making Changes
1. Edit source files (`popup.html`, `popup.js`, `background.js`)
2. Go to `edge://extensions/`
3. Click refresh button next to your extension
4. Test changes in popup and context menus

### Customization Options
- **`popup.html`** - Modify UI, colors, layout
- **`popup.js`** - Add services, change shortcuts, modify functionality  
- **`background.js`** - Update context menus, global shortcuts
- **`manifest.json`** - Change permissions, metadata, shortcuts -->

## 🔒 Security & Privacy

- ✅ **No Data Collection** - Extension doesn't store or transmit user data
- ✅ **Minimal Permissions** - Only requests necessary permissions
- ✅ **Official URLs Only** - Only opens official Google Workspace URLs
- ✅ **Open Source** - All code is transparent and auditable
- ✅ **Local Processing** - All operations happen locally in browser

## 📊 Performance

- **Bundle Size**: < 50KB total
- **Load Time**: < 100ms popup initialization
- **Memory Usage**: < 5MB runtime footprint
- **CPU Impact**: Minimal background processes
- **Battery Friendly**: No continuous operations

## 📈 Version History

### v2.0 (Current)
- ✨ Added Google Slides, Docs, and Forms support
- 🎨 Complete UI redesign with glass-morphism
- ⚡ Enhanced keyboard shortcuts
- 🔧 Migrated to Manifest v3
- 📱 Improved responsive design

### v1.0 (Legacy)
- 🚀 Initial release with Google Sheets only
- 📋 Basic context menu integration
- ⌨️ Simple keyboard shortcuts

<!-- ## 🗺️ Roadmap

### Planned Features
- 📊 **Google Analytics** dashboard creation
- 🗂️ **Google Drive** folder creation shortcuts
- 📧 **Gmail** template creation
- 📅 **Google Calendar** event creation
- 🎨 **Custom Templates** for each service
- 🌙 **Dark/Light Mode** toggle
- 📱 **Mobile Extension** compatibility

### Community Contributions
We welcome contributions! See our [Contributing Guidelines](CONTRIBUTING.md) for details. -->

<!-- ## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/google-workspace-extension/issues)
- 💡 **Feature Requests**: [Submit a request](https://github.com/yourusername/google-workspace-extension/issues)
- 📧 **Email**: your.email@domain.com
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/google-workspace-extension/discussions) -->

## ⭐ Show Your Support

If this extension helps your productivity, please consider:
- ⭐ Starring this repository
- 🍴 Forking for your own modifications
- 📢 Sharing with colleagues and friends
- 🐛 Reporting bugs or suggesting features

---

<div align="center">

**🚀 Transform your productivity with instant Google Workspace access! 🚀**

*Made with ❤️ for the productivity community*

[![GitHub stars](https://img.shields.io/github/stars/Code-4ge/google-workspace-extension.svg?style=social&label=Star)](https://github.com/Code-4ge/google-workspace-extension)
[![GitHub forks](https://img.shields.io/github/forks/Code-4ge/google-workspace-extension.svg?style=social&label=Fork)](https://github.com/Code-4ge/google-workspace-extension/fork)

</div> 
