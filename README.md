# wp_site_template

■タスクランナーの実行  
npx gulp default

【初期設定について】  

■必要モジュールのダウンロード  
npm install

■Wordpress環境は、LocalbyFlywheelで構築  
https://localwp.com/

■gulpfile.jsのbrowserSync、proxyを設定
```javascript
gulp.task("server", () => {
  browserSync({
    files: ["./**"],
    proxy: '●●●●●',
    open: 'external'
  });
});
```