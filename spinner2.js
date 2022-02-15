let animation = "|/-\\|/-\\|/-\\|/-\\|";

const spinner2 = (animation) => {
  let time = 0;
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write("\r" + char);
    }, time);
    time += 85;
  }
  setTimeout(() => {
    console.log(``);
  }, time);
};

spinner2(animation);
