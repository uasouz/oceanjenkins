#!/usr/bin/env groovy
pipeline{

  environment {
    registry = "hadara/oceanjenkins"
    registryCredential = 'dockerhub'
  }

    agent any

    tools {nodejs "node"}

    stages{

        stage('Prepare Node'){
            steps{
                sh 'ln -fs /var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation /usr/local/bin/node'
            }
        }

        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }

        stage('Test'){
            steps {
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

        stage('Building image') {
          steps{
            script {
              docker.build registry + ":$BUILD_NUMBER"
            }
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