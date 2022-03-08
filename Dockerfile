FROM node:lts-alpine as builder

WORKDIR /code

ADD . /code

RUN npm install -g pnpm \
    && pnpm install \
    && pnpm build


# 选择更小的运行镜像
FROM nginx:alpine

COPY --from=builder code/packages/my-desk-app/dist/ /usr/share/nginx/html/
