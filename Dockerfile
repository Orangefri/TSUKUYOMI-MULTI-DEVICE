FROM quay.io/qasimali9263/suhail-xmd:latest
RUN git clone https://github.com/Orangefri/TSUKUYOMI-MULTI-DEVICE.git /root/TSUKUYOMI-MD
WORKDIR /root/TSUKUYOMI-MD
RUN npm install
RUN npm install -g pm2
EXPOSE 8000
CMD ["npm","start" ]
