#!/usr/bin/env groovy
pipeline{

    agent any

    tools {
        nodejs "node"
    }

    stages{

        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }

        stage('Test'){
            steps {
                sh 'npm run test-jenkins'
            }
        }

        stage('Build'){
            steps{
                sh 'npm run build'
                sh 'tar -zcvf app.tar.gz dist'
            }
        }

    }

     post {
        always {
           archiveArtifacts artifacts: 'app.tar.gz', onlyIfSuccessful: true
           junit 'report/report.xml'
           deleteDir()
        }
   }
}