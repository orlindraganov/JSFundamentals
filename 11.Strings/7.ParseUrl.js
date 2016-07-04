function solve(params) {
    let text = params[0],
        serverSeparator = '://'
        resourceSeparator = '/',
        protocol = '',
        server = '',
        resource = '';
        
        let serverIndex = text.indexOf(serverSeparator);
        let resourceIndex = text.indexOf(resourceSeparator, serverIndex + serverSeparator.length);
        
        protocol = text.substring(0,serverIndex);
        server = text.substring(serverIndex + serverSeparator.length, resourceIndex);
        resource = text.substring(resourceIndex, text.length);
        
        console.log('protocol: ' + protocol);
        console.log('server: ' + server);
        console.log('resource: ' + resource);
}