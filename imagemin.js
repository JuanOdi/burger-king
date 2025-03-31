(async () => {
  const keepfolder = (await import('imagemin-keep-folder')).default;
  const mozjpeg = (await import('imagemin-mozjpeg')).default;
  const pngquant = (await import('imagemin-pngquant')).default;
  const gifsicle = (await import('imagemin-gifsicle')).default;
  const svgo = (await import('imagemin-svgo')).default;

  keepfolder(['src/images/**/*.{jpg,png,gif,svg}'], {
    plugins: [
      mozjpeg({
        quality: 85
      }),
      pngquant({
        quality: [.7, .8]
      }),
      gifsicle(),
      svgo()
    ],
    replaceOutputDir: output => {
      return output.replace(/images\//, '../dist/_assets/images/');
    }
  });
})();
