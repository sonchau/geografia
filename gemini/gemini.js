
gemini.suite('Header', (suite) => {
    suite.setUrl('/?selectedKind=Header&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel')
        .setCaptureElements('#root')
        .capture('default');      
});

gemini.suite('Loading Page', (suite) => {
    suite.setUrl('/?selectedKind=Loading%20Page&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel')
        .setCaptureElements('#root')
        .capture('default');
   
});

gemini.suite('Chart', (suite) => {
    suite.setUrl('/?selectedKind=Chart&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel')
        .setCaptureElements('#root')
        .capture('default');
   
});
