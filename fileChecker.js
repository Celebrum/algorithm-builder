const fs = require('fs');
const path = require('path');

function checkFile(filepath) {
    try {
        // Check if file exists
        if (!fs.existsSync(filepath)) {
            return {
                status: false,
                error: `File does not exist: ${filepath}`
            };
        }

        // Check read permissions
        try {
            fs.accessSync(filepath, fs.constants.R_OK);
        } catch (err) {
            return {
                status: false,
                error: `No read permissions for: ${filepath}`
            };
        }

        // Basic content check
        const stats = fs.statSync(filepath);
        if (stats.size === 0) {
            return {
                status: false,
                error: `File is empty: ${filepath}`
            };
        }

        return {
            status: true,
            filepath: filepath
        };
    } catch (error) {
        return {
            status: false,
            error: `Error checking file ${filepath}: ${error.message}`
        };
    }
}

function verifyAllFiles(rootDir) {
    const results = [];
    
    function traverseDirectory(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                traverseDirectory(fullPath);
            } else {
                results.push(checkFile(fullPath));
            }
        });
    }

    traverseDirectory(rootDir);
    return results;
}

// Export the functions
module.exports = {
    checkFile,
    verifyAllFiles
};
