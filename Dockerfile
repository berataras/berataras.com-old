FROM node:18
WORKDIR /app
COPY . /app
RUN npm install --frozen-lockfile
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
