pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

        stage('Build docker image') {
            steps {  
                sh 'docker build -t durgathulluru/nodeapp .'
            }
        }
        stage('Login Docker-Hub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push durgathulluru/nodeapp'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }


