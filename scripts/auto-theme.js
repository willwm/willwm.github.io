class AutoTheme {
  constructor() {
    console.info('🤖 AutoTheme go!');
  }

  /**
   * Returns a boolean indicating whether the user prefers a dark color scheme.
   * @returns {boolean} Whether the user prefers a dark color scheme.
   */
  get prefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
  }

  /**
   * Detects the user's preferred color scheme and adds or removes the 
   *  'dark-theme' class from the document's root element accordingly.
   * @function detectColorScheme
   * @memberof ClassName
   * @returns {void}
   */
  detectColorScheme() {
    const documentClassList = document.documentElement.classList;

    if (this.prefersDark) {
      documentClassList.add('dark-theme');
    } else {
      documentClassList.remove('dark-theme');
    }
  }
}

window.addEventListener('load', () => {
  const autoTheme = new AutoTheme();
  autoTheme.detectColorScheme();
});
