FROM gitpod/workspace-full



#export ANDROID_HOME="/workspace/real-estate-mobile/android-sdk/"
#export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
#build command     tns build ios --emulator
USER gitpod
RUN yes n | npm i @angular/cli -g


# Give back control
USER root