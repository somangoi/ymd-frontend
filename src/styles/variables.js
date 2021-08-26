const variables = {
  displayFlex: (justify = "center", align = "center") => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,

  FlexColCenter: (justifyContent = "center", flexDirection = "column") => `
    display: flex;
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
  `,

  srOnly: `
    position: absolute;
    z-index: -100;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
  `
};

export default variables;
