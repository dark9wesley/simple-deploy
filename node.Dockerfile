# 选择基础镜像
FROM node:14-alpine

# 创建工作目录
WORKDIR /app

# 将宿主机代码添加至工作目录
ADD . /app
RUN ls -lah

# 安装依赖
RUN yarn

# 暴露端口
EXPOSE 8000

CMD npm start
