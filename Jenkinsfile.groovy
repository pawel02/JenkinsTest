pipeline {
    agent any

    stages {
        stage('Preperation') {
            steps {
                git url: 'https://github.com/pawel02/JenkinsTest.git', branch: "main"
                bat 'npm install'
            }
        }
        stage('Test')
        {
            steps
            {
                bat 'ng test --reporters=junit --watch=false'
            }   
            post {
                //record the test results
                always {
                    junit 'coverage-test/testFile.xml'
                }
            }
        }
        stage('Build')
        {
            steps
            {
                bat 'ng build --prod'
            }   
        }
        
    }
}
