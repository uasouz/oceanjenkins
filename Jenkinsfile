#!/usr/bin/env groovy
pipeline{
    agent any

    tools {nodejs "nodejs"}
    stages{

        stage('Test'){
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }

        stage('Build'){
            steps{
                sh 'npm install'
                sh 'npm run build'
                sh 'tar -zcvf app.tar.gz dist'
            }
        }

    }

     post {
        always {
           archiveArtifacts artifacts: 'app.tar.gz', onlyIfSuccessful: true
           deleteDir()
        }
   }
}