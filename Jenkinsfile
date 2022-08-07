pipeline {
  agent any
  stages {
    stage('Ready') {
      steps {
        sh 'sh "echo \'Ready\'"'
      }
    }

    stage('Build') {
      steps {
        sh '''sh "echo \'Build Jar\'"
'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''sh "echo \'Deploy GCP\'"
'''
      }
    }

  }
}