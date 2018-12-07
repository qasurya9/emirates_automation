# emirates_automation
# Sample javascript automation - Execution process

Prerequisites:-
1. Need MacBook/Mac.
2. Install latest chrome browser
3. Node.js to be installed to recognize npm Mac from terminal.
4. WebStorm IDE is optional. If you have, its great !!!


Steps to RUN this framework:-

1. Download git source code to your local

2. Open mac command prompt(i.e. terminal) and navigate to "local-source-code-folder/src folder path.
Ex:: If my code is in Downloads folder of mac, then navigate to this path "/Downloads/Emirates_TestAutomation/src".

3. Run "sudo npm install" to get libraries into local.
FYI :: After successful execution of step 3, you observed that "node_modules" folder newly created in local with all
required libraries.

4. Run this below command without any spaces.
   protractor config.js --params.baseUrlName='https://www.emirates.com/ae/english/'

5. After step 4, you observe html reports under our src/reports/<date:time>/html/<filename>.html
Open this html from any browser and observe the test report.

FYI :: For every time execution, it creates new report with date time.
