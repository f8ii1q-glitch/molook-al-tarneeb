# ملوك الطرنيب | MOLOOK AL TARNEEB — صورة النشر (بلا npm install)
#
# تعتمد على المجلد dist الجاهز الذي بُني واختُبر محليًا: الخادم المبني (dist/server/index.js)
# حزمة مستقلة تضم ws وzod ولا تحتاج node_modules. لذلك لا يوجد هنا تثبيت حزم ولا بناء.
# تنبيه: لم تُبنَ هذه الصورة بـ Docker في بيئة التطوير (لا يوجد Docker هناك)؛ جُرّب تشغيل
# الأمر نفسه مباشرة بـ Node 22 فقط.
FROM node:22-slim
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    DATABASE_PATH=/app/data/tarneeb.db
WORKDIR /app
COPY dist ./dist
RUN mkdir -p /app/data && chown -R node:node /app/data
USER node
# المنصة تمرّر PORT (في Render الافتراضي 10000) والخادم يقرؤه.
EXPOSE 10000
CMD ["node", "dist/server/index.js"]
