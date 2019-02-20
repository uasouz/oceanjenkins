#!/usr/bin/env groovy
pipeline{


  environment {
    registry = "hadara/oceanjenkins"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }

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
                sh 'npm run test'
            }
        }

        stage('Build'){
            steps{
                sh 'npm run build'
                sh 'tar -zcvf app.tar.gz dist'
            }
        }

        stage('Building image') {
          steps{
            script {
              dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
          }
        }

        stage('Deploy Image') {
          steps{
            script {
              docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
              }
            }
          }
        }

        stage('Remove Unused docker image') {
          steps{
            sh "docker rmi $registry:$BUILD_NUMBER"
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
