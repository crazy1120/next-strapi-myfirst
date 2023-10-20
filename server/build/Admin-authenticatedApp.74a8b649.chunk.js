"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[801],{

/***/ 84044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_AuthenticatedApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
;// CONCATENATED MODULE: ./.cache/package.json
const package_namespaceObject = {"i8":"4.14.4"};
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 12 modules
var hooks = __webpack_require__(20838);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(96854);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(1821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.mjs
var Portal = __webpack_require__(2637);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(2878);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.mjs
var FieldInput = __webpack_require__(77804);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(39708);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(95066);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
// EXTERNAL MODULE: ./.cache/admin/src/components/NpsSurvey/hooks/useNpsSurveySettings.js
var useNpsSurveySettings = __webpack_require__(66858);
;// CONCATENATED MODULE: ./.cache/admin/src/components/NpsSurvey/index.js










const FieldWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Field/* Field */.g))`
  height: ${32 / 16}rem;
  width: ${32 / 16}rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({ theme }) => theme.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({ theme }) => theme.colors.primary700};
    background-color: ${({ theme }) => theme.colors.neutral0};
    border-color: ${({ theme }) => theme.colors.primary700};
  }
`;
const delays = {
  postResponse: 90 * 24 * 60 * 60 * 1e3,
  // 90 days in ms
  postFirstDismissal: 7 * 24 * 60 * 60 * 1e3,
  // 7 days in ms
  postSubsequentDismissal: 90 * 24 * 60 * 60 * 1e3,
  // 90 days in ms
  display: 5 * 60 * 1e3
  // 5 minutes in ms
};
const ratingArray = [...Array(11).keys()];
const checkIfShouldShowSurvey = (settings) => {
  const { enabled, lastResponseDate, firstDismissalDate, lastDismissalDate } = settings;
  if (enabled === false) {
    return false;
  }
  if (lastResponseDate) {
    const timeSinceLastResponse = Date.now() - new Date(lastResponseDate).getTime();
    if (timeSinceLastResponse >= delays.postResponse) {
      return true;
    }
    return false;
  }
  if (lastDismissalDate) {
    const timeSinceLastDismissal = Date.now() - new Date(lastDismissalDate).getTime();
    if (timeSinceLastDismissal >= delays.postSubsequentDismissal) {
      return true;
    }
    return false;
  }
  if (firstDismissalDate) {
    const timeSinceFirstDismissal = Date.now() - new Date(firstDismissalDate).getTime();
    if (timeSinceFirstDismissal >= delays.postFirstDismissal) {
      return true;
    }
    return false;
  }
  return true;
};
const NpsSurvey = () => {
  const theme = (0,styled_components_browser_esm/* useTheme */.Fg)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { npsSurveySettings, setNpsSurveySettings } = (0,useNpsSurveySettings/* useNpsSurveySettings */.$)();
  const [isFeedbackResponse, setIsFeedbackResponse] = react.useState(false);
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { currentEnvironment, strapiVersion } = (0,dist/* useAppInfo */.L7)();
  const { mutate, isLoading } = (0,es.useMutation)(
    async (form) => {
      const res = await fetch("https://analytics.strapi.io/submit-nps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        throw new Error("Failed to submit NPS survey");
      }
      return res;
    },
    {
      onSuccess() {
        setNpsSurveySettings((settings) => ({
          ...settings,
          lastResponseDate: new Date(),
          firstDismissalDate: null,
          lastDismissalDate: null
        }));
        setIsFeedbackResponse(true);
        setTimeout(() => {
          setSurveyIsShown(false);
        }, 3e3);
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: formatMessage({ id: "notification.error" })
        });
      }
    }
  );
  const [surveyIsShown, setSurveyIsShown] = react.useState(
    checkIfShouldShowSurvey(npsSurveySettings)
  );
  const [displaySurvey, setDisplaySurvey] = react.useState(false);
  react.useEffect(() => {
    const displayTime = setTimeout(() => {
      setDisplaySurvey(true);
    }, delays.display);
    return () => {
      clearTimeout(displayTime);
    };
  }, []);
  if (!displaySurvey) {
    return null;
  }
  if (!surveyIsShown) {
    return null;
  }
  const handleSubmitResponse = ({ npsSurveyRating: rating, npsSurveyFeedback: comment }) => {
    const { email } = dist/* auth */.I8.getUserInfo();
    mutate({
      email,
      rating,
      comment,
      environment: currentEnvironment,
      version: strapiVersion,
      license: window.strapi.projectType
    });
  };
  const handleDismiss = () => {
    setNpsSurveySettings((settings) => {
      const nextSettings = {
        ...settings,
        lastResponseDate: null
      };
      if (settings.firstDismissalDate) {
        nextSettings.lastDismissalDate = new Date();
      } else {
        nextSettings.firstDismissalDate = new Date();
      }
      return nextSettings;
    });
    setSurveyIsShown(false);
  };
  return /* @__PURE__ */ react.createElement(Portal/* Portal */.h, null, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      initialValues: { npsSurveyFeedback: "", npsSurveyRating: null },
      onSubmit: handleSubmitResponse,
      validationSchema: yup_es/* object */.Ry({
        npsSurveyFeedback: yup_es/* string */.Z_(),
        npsSurveyRating: yup_es/* number */.Rx().required()
      })
    },
    ({ values, handleChange, setFieldValue }) => /* @__PURE__ */ react.createElement(formik_esm/* Form */.l0, { name: "npsSurveyForm" }, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        hasRadius: true,
        direction: "column",
        padding: 4,
        borderColor: "primary200",
        background: "neutral0",
        shadow: "popupShadow",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: theme.zIndices[2],
        width: "50%"
      },
      isFeedbackResponse ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold" }, formatMessage({
        id: "app.components.NpsSurvey.feedback-response",
        defaultMessage: "Thank you very much for your feedback!"
      })) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: "fieldset", width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", width: "100%" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginLeft: "auto", marginRight: "auto" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", as: "legend" }, formatMessage({
        id: "app.components.NpsSurvey.banner-title",
        defaultMessage: "How likely are you to recommend Strapi to a friend or colleague?"
      }))), /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: handleDismiss,
          "aria-label": formatMessage({
            id: "app.components.NpsSurvey.dismiss-survey-label",
            defaultMessage: "Dismiss survey"
          }),
          icon: /* @__PURE__ */ react.createElement(Cross/* default */.Z, null)
        }
      )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, marginTop: 2, marginBottom: 2, justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
        id: "app.components.NpsSurvey.no-recommendation",
        defaultMessage: "Not at all likely"
      })), ratingArray.map((number) => {
        return /* @__PURE__ */ react.createElement(
          FieldWrapper,
          {
            key: number,
            className: values.npsSurveyRating === number ? "selected" : null,
            hasRadius: true,
            background: "primary100",
            borderColor: "primary200",
            color: "primary600",
            position: "relative",
            cursor: "pointer"
          },
          /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: `nps-survey-rating-${number}-input` }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, /* @__PURE__ */ react.createElement(
            FieldInput/* FieldInput */._,
            {
              type: "radio",
              id: `nps-survey-rating-${number}-input`,
              name: "npsSurveyRating",
              checked: values.npsSurveyRating === number,
              onChange: (e) => setFieldValue("npsSurveyRating", parseInt(e.target.value, 10)),
              value: number
            }
          )), number)
        );
      }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
        id: "app.components.NpsSurvey.happy-to-recommend",
        defaultMessage: "Extremely likely"
      }))), values.npsSurveyRating !== null && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: 2 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: "npsSurveyFeedback", fontWeight: "semiBold", fontSize: 2 }, formatMessage({
        id: "app.components.NpsSurvey.feedback-question",
        defaultMessage: "Do you have any suggestion for improvements?"
      }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "62%", marginTop: 3, marginBottom: 4 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          id: "npsSurveyFeedback",
          width: "100%",
          onChange: handleChange
        },
        values.npsSurveyFeedback
      )), /* @__PURE__ */ react.createElement(Button/* Button */.z, { marginBottom: 2, type: "submit", loading: isLoading }, formatMessage({
        id: "app.components.NpsSurvey.submit-feedback",
        defaultMessage: "Submit Feedback"
      }))))
    ))
  ));
};
/* harmony default export */ const components_NpsSurvey = (NpsSurvey);

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(67621);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(92241);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/lodash/at.js
var at = __webpack_require__(33812);
var at_default = /*#__PURE__*/__webpack_require__.n(at);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(99571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.mjs
var FocusTrap = __webpack_require__(45553);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js







const ModalWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const Modal = ({ onClose, onSkip, children, hideSkip }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Portal/* Portal */.h, null, /* @__PURE__ */ react.createElement(ModalWrapper, { onClick: onClose, padding: 8, justifyContent: "center" }, /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.i, { onEscape: onClose }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral0",
      width: (0,dist/* pxToRem */.Q1)(660),
      shadow: "popupShadow",
      hasRadius: true,
      padding: 4,
      gap: 8,
      role: "dialog",
      "aria-modal": true,
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: onClose,
        "aria-label": formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" }),
        icon: /* @__PURE__ */ react.createElement(Cross/* default */.Z, null)
      }
    )),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 7, paddingRight: 7, paddingBottom: hideSkip ? 8 : 0 }, children),
    !hideSkip && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onSkip }, formatMessage({
      id: "app.components.GuidedTour.skip",
      defaultMessage: "Skip the tour"
    })))
  ))));
};
Modal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onSkip: (prop_types_default()).func.isRequired,
  hideSkip: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Modal = (Modal);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(53274);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(16334);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(43234);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Content.js





const LiStyled = styled_components_browser_esm/* default */.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({ theme }) => theme.colors.neutral800};
  }
`;
const Content = ({ id, defaultMessage }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4, paddingBottom: 6 }, formatMessage(
    { id, defaultMessage },
    {
      documentationLink: DocumentationLink,
      b: Bold,
      p: Paragraph,
      light: Light,
      ul: List,
      li: ListItem
    }
  ));
};
const DocumentationLink = (children) => /* @__PURE__ */ react.createElement(
  Typography/* Typography */.Z,
  {
    as: "a",
    textColor: "primary600",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"
  },
  children
);
const Bold = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold" }, children);
const Paragraph = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, children);
const Light = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, children);
const List = (children) => /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6 }, /* @__PURE__ */ react.createElement("ul", null, children));
const ListItem = (children) => /* @__PURE__ */ react.createElement(LiStyled, null, children);
Content.propTypes = {
  id: (prop_types_default()).string.isRequired,
  defaultMessage: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Content = (Content);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(2364);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js




const StepNumberWithPadding = ({ number, last, type }) => /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3, paddingBottom: last ? 0 : 3 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { number, type }));
StepNumberWithPadding.defaultProps = {
  number: void 0,
  last: false,
  type: ""
};
StepNumberWithPadding.propTypes = {
  number: (prop_types_default()).number,
  last: (prop_types_default()).bool,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_StepNumberWithPadding = (StepNumberWithPadding);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js










const StepperModal = ({
  title,
  content,
  cta,
  onCtaClick,
  sectionIndex,
  stepIndex,
  hasSectionAfter
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const hasSectionBefore = sectionIndex > 0;
  const hasStepsBefore = stepIndex > 0;
  const nextSectionIndex = sectionIndex + 1;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { marginRight: 8, justifyContent: "center", minWidth: (0,dist/* pxToRem */.Q1)(30) }, hasSectionBefore && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx, minHeight: (0,dist/* pxToRem */.Q1)(24) })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "primary600" }, formatMessage({
    id: "app.components.GuidedTour.title",
    defaultMessage: "3 steps to get started"
  }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { marginRight: 8, minWidth: (0,dist/* pxToRem */.Q1)(30) }, /* @__PURE__ */ react.createElement(
    components_StepNumberWithPadding,
    {
      number: sectionIndex + 1,
      type: hasStepsBefore ? constants/* IS_DONE */.hx : constants/* IS_ACTIVE */.lW
    }
  )), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha", fontWeight: "bold", textColor: "neutral800", as: "h3", id: "title" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { marginRight: 8, direction: "column", justifyContent: "center", minWidth: (0,dist/* pxToRem */.Q1)(30) }, hasSectionAfter && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx }), hasStepsBefore && /* @__PURE__ */ react.createElement(components_StepNumberWithPadding, { number: nextSectionIndex + 1, type: constants/* IS_ACTIVE */.lW, last: true }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(components_Content, { ...content }), cta && (cta.target ? /* @__PURE__ */ react.createElement(dist/* LinkButton */.Qj, { endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null), onClick: onCtaClick, to: cta.target }, formatMessage(cta.title)) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null), onClick: onCtaClick }, formatMessage(cta.title))))), hasStepsBefore && hasSectionAfter && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { marginRight: 8, justifyContent: "center", width: (0,dist/* pxToRem */.Q1)(30) }, /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx, minHeight: (0,dist/* pxToRem */.Q1)(24) }))));
};
StepperModal.defaultProps = {
  currentStep: null,
  cta: void 0
};
StepperModal.propTypes = {
  sectionIndex: (prop_types_default()).number.isRequired,
  stepIndex: (prop_types_default()).number.isRequired,
  hasSectionAfter: (prop_types_default()).bool.isRequired,
  content: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  cta: prop_types_default().shape({
    target: (prop_types_default()).string,
    title: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    })
  }),
  currentStep: (prop_types_default()).string,
  onCtaClick: (prop_types_default()).func.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const Stepper = (StepperModal);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/reducer.js

const initialState = {
  stepContent: null,
  sectionIndex: null,
  stepIndex: null,
  hasSectionAfter: false,
  hasStepAfter: false
};
const reducer = (state = initialState, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "UPDATE_MODAL": {
      draftState.stepContent = action.content;
      draftState.sectionIndex = action.newSectionIndex;
      draftState.stepIndex = action.newStepIndex;
      draftState.hasSectionAfter = action.newHasSectionAfter;
      draftState.hasStepAfter = action.newHasStepAfter;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const Modal_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/index.js







const GuidedTourModal = () => {
  const {
    currentStep,
    guidedTourState,
    setCurrentStep,
    setStepState,
    isGuidedTourVisible,
    setSkipped
  } = (0,dist/* useGuidedTour */.c1)();
  const [isVisible, setIsVisible] = (0,react.useState)(currentStep);
  const [{ stepContent, sectionIndex, stepIndex, hasSectionAfter, hasStepAfter }, dispatch] = (0,react.useReducer)(Modal_reducer, initialState);
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  (0,react.useEffect)(() => {
    if (!currentStep) {
      setIsVisible(false);
      return;
    }
    const [isStepDone] = at_default()(guidedTourState, currentStep);
    setIsVisible(!isStepDone && isGuidedTourVisible);
  }, [currentStep, guidedTourState, isGuidedTourVisible]);
  (0,react.useEffect)(() => {
    if (currentStep) {
      const [content] = at_default()(layout/* default */.Z, currentStep);
      const sectionKeys = Object.keys(guidedTourState);
      const [sectionName, stepName] = currentStep.split(".");
      const newSectionIndex = sectionKeys.indexOf(sectionName);
      const newStepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
      const newHasSectionAfter = newSectionIndex < sectionKeys.length - 1;
      const newHasStepAfter = newStepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
      dispatch({
        type: "UPDATE_MODAL",
        content,
        newSectionIndex,
        newStepIndex,
        newHasSectionAfter,
        newHasStepAfter
      });
    }
  }, [currentStep, guidedTourState]);
  const handleCtaClick = () => {
    setStepState(currentStep, true);
    trackUsage(stepContent.trackingEvent);
    setCurrentStep(null);
  };
  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage("didSkipGuidedtour");
  };
  if (isVisible && stepContent) {
    return /* @__PURE__ */ react.createElement(
      components_Modal,
      {
        hideSkip: !hasStepAfter && !hasSectionAfter,
        onSkip: handleSkip,
        onClose: handleCtaClick
      },
      /* @__PURE__ */ react.createElement(
        Stepper,
        {
          ...stepContent,
          onCtaClick: handleCtaClick,
          currentStep,
          sectionIndex,
          stepIndex,
          hasSectionAfter
        }
      )
    );
  }
  return null;
};
/* harmony default export */ const GuidedTour_Modal = (GuidedTourModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNav.mjs
var MainNav = __webpack_require__(27074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavBrand.mjs
var NavBrand = __webpack_require__(44240);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSections.mjs
var NavSections = __webpack_require__(71335);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavLink.mjs
var NavLink = __webpack_require__(5267);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSection.mjs
var NavSection = __webpack_require__(36395);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavFooter.mjs
var NavFooter = __webpack_require__(49296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavUser.mjs
var NavUser = __webpack_require__(65216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavCondense.mjs
var NavCondense = __webpack_require__(25711);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.mjs
var Write = __webpack_require__(30984);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.mjs
var Exit = __webpack_require__(68285);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(47533);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LeftMenu/index.js










const LinkUserWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${150 / 16}rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces[9]};
  left: ${({ theme }) => theme.spaces[5]};
`;
const LinkUser = (0,styled_components_browser_esm/* default */.ZP)((0,react_router_dom/* NavLink */.OL))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};

  &:hover {
    background: ${({ theme, logout }) => logout ? theme.colors.danger100 : theme.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.danger600};
    }
  }
`;
const LeftMenu = ({ generalSectionLinks, pluginsSectionLinks }) => {
  const buttonRef = (0,react.useRef)();
  const [userLinksVisible, setUserLinksVisible] = (0,react.useState)(false);
  const {
    logos: { menu }
  } = (0,hooks/* useConfigurations */.um)();
  const [condensed, setCondensed] = (0,dist/* usePersistentState */.Yw)("navbar-condensed", false);
  const { userDisplayName } = (0,dist/* useAppInfo */.L7)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const history = (0,react_router/* useHistory */.k6)();
  const { post } = (0,dist/* getFetchClient */.tg)();
  const initials = userDisplayName.split(" ").map((name) => name.substring(0, 1)).join("").substring(0, 2);
  const handleToggleUserLinks = () => setUserLinksVisible((prev) => !prev);
  const handleLogout = async () => {
    await post("/admin/logout");
    dist/* auth */.I8.clearAppStorage();
    handleToggleUserLinks();
    history.push("/auth/login");
  };
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && e.relatedTarget?.parentElement?.id !== "main-nav-user-button") {
      setUserLinksVisible(false);
    }
  };
  const handleClickOnLink = (destination = null) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  const menuTitle = formatMessage({
    id: "app.components.LeftMenu.navbrand.title",
    defaultMessage: "Strapi Dashboard"
  });
  return /* @__PURE__ */ react.createElement(MainNav/* MainNav */.$, { condensed }, /* @__PURE__ */ react.createElement(
    NavBrand/* NavBrand */.D,
    {
      as: react_router_dom/* NavLink */.OL,
      workplace: formatMessage({
        id: "app.components.LeftMenu.navbrand.workplace",
        defaultMessage: "Workplace"
      }),
      title: menuTitle,
      icon: /* @__PURE__ */ react.createElement(
        "img",
        {
          src: menu.custom || menu.default,
          alt: formatMessage({
            id: "app.components.LeftMenu.logo.alt",
            defaultMessage: "Application logo"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null), /* @__PURE__ */ react.createElement(NavSections/* NavSections */._, null, /* @__PURE__ */ react.createElement(
    NavLink/* NavLink */.O,
    {
      as: react_router_dom/* NavLink */.OL,
      to: "/content-manager",
      icon: /* @__PURE__ */ react.createElement(Write/* default */.Z, null),
      onClick: () => handleClickOnLink("/content-manager")
    },
    formatMessage({ id: "global.content-manager", defaultMessage: "Content manager" })
  ), pluginsSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.y,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.plugins",
        defaultMessage: "Plugins"
      })
    },
    pluginsSectionLinks.map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.O,
        {
          as: react_router_dom/* NavLink */.OL,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(Icon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null, generalSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.y,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.general",
        defaultMessage: "General"
      })
    },
    generalSectionLinks.map((link) => {
      const LinkIcon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.O,
        {
          as: react_router_dom/* NavLink */.OL,
          badgeContent: link.notificationsCount > 0 && link.notificationsCount.toString() || void 0,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(LinkIcon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null), /* @__PURE__ */ react.createElement(NavFooter/* NavFooter */.q, null, /* @__PURE__ */ react.createElement(
    NavUser/* NavUser */.r,
    {
      id: "main-nav-user-button",
      ref: buttonRef,
      onClick: handleToggleUserLinks,
      initials
    },
    userDisplayName
  ), userLinksVisible && /* @__PURE__ */ react.createElement(
    LinkUserWrapper,
    {
      onBlur: handleBlur,
      padding: 1,
      shadow: "tableShadow",
      background: "neutral0",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.i, { onEscape: handleToggleUserLinks }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 0 }, /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleToggleUserLinks, to: "/me" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: "global.profile",
      defaultMessage: "Profile"
    }))), /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleLogout, to: "/auth/login" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "danger600" }, formatMessage({
      id: "app.components.LeftMenu.logout",
      defaultMessage: "Logout"
    })), /* @__PURE__ */ react.createElement(Exit/* default */.Z, null))))
  ), /* @__PURE__ */ react.createElement(NavCondense/* NavCondense */.w, { onClick: () => setCondensed((s) => !s) }, condensed ? formatMessage({
    id: "app.components.LeftMenu.expand",
    defaultMessage: "Expand the navbar"
  }) : formatMessage({
    id: "app.components.LeftMenu.collapse",
    defaultMessage: "Collapse the navbar"
  }))));
};
LeftMenu.propTypes = {
  generalSectionLinks: (prop_types_default()).array.isRequired,
  pluginsSectionLinks: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_LeftMenu = (LeftMenu);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/SkipToContent.mjs
var SkipToContent = __webpack_require__(23886);
;// CONCATENATED MODULE: ./.cache/admin/src/layouts/AppLayout/index.js





const FlexBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  flex: 1;
`;
const AppLayout = ({ children, sideNav }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(SkipToContent/* SkipToContent */.z, null, formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-start" }, sideNav, /* @__PURE__ */ react.createElement(FlexBox, null, children)));
};
AppLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  sideNav: (prop_types_default()).node.isRequired
};
/* harmony default export */ const layouts_AppLayout = (AppLayout);

// EXTERNAL MODULE: ./.cache/admin/src/pages/App/constants.js
var App_constants = __webpack_require__(63128);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.mjs
var Popover = __webpack_require__(8990);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.mjs
var Message = __webpack_require__(50862);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.mjs
var Question = __webpack_require__(13317);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.mjs
var Play = __webpack_require__(64820);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/onboarding-preview.png
const onboarding_preview_namespaceObject = __webpack_require__.p + "19eb2dfcf2603eb55733.png";
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.mjs
var Book = __webpack_require__(42108);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.mjs
var PaperPlane = __webpack_require__(13789);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/constants.js

const VIDEO_LINKS = [
  {
    label: {
      id: "app.components.Onboarding.link.build-content",
      defaultMessage: "Build a content architecture"
    },
    href: "https://www.youtube.com/watch?v=G9GjN0RxhkE",
    duration: "5:48"
  },
  {
    label: {
      id: "app.components.Onboarding.link.manage-content",
      defaultMessage: "Add & manage content"
    },
    href: "https://www.youtube.com/watch?v=DEZw4KbybAI",
    duration: "3:18"
  },
  {
    label: { id: "app.components.Onboarding.link.manage-media", defaultMessage: "Manage media" },
    href: "https://www.youtube.com/watch?v=-61MuiMQb38",
    duration: "3:41"
  }
];
const WATCH_MORE = {
  href: "https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",
  label: {
    id: "app.components.Onboarding.link.more-videos",
    defaultMessage: "Watch more videos"
  }
};
const DOCUMENTATION_LINKS = [
  {
    label: { id: "global.documentation", defaultMessage: "documentation" },
    href: "https://docs.strapi.io",
    icon: Book/* default */.Z
  },
  {
    label: { id: "app.static.links.cheatsheet", defaultMessage: "cheatsheet" },
    href: "https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",
    icon: PaperPlane/* default */.Z
  }
];

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/index.js








const HelperButton = (0,styled_components_browser_esm/* default */.ZP)((0,Button/* Button */.z))`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`;
const IconWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  transform: translate(-50%, -50%);
`;
const VideoLinkWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({ theme }) => `-${theme.spaces[1]}`};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary100};

    /* Hover style for the number displayed */
    ${Typography/* Typography */.Z}:first-child {
      color: ${({ theme }) => theme.colors.primary500};
    }

    /* Hover style for the label */
    ${Typography/* Typography */.Z}:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Preview = styled_components_browser_esm/* default */.ZP.img`
  width: ${({ theme }) => theme.spaces[10]};
  height: ${({ theme }) => theme.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TypographyLineHeight = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`;
const TextLink = (0,styled_components_browser_esm/* default */.ZP)(TypographyLineHeight)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const Onboarding = () => {
  const triggerRef = (0,react.useRef)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { communityEdition } = (0,dist/* useAppInfo */.L7)();
  const handlePopoverVisibility = () => {
    setIsOpen((prev) => !prev);
  };
  const docLinks = [
    ...DOCUMENTATION_LINKS,
    {
      label: { id: "Settings.application.get-help", defaultMessage: "Get help" },
      icon: Message/* default */.Z,
      href: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home"
    }
  ];
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: "aside", position: "fixed", bottom: 2, right: 2 }, /* @__PURE__ */ react.createElement(
    HelperButton,
    {
      "aria-label": formatMessage(
        isOpen ? {
          id: "app.components.Onboarding.help.button-close",
          defaultMessage: "Close help menu"
        } : {
          id: "app.components.Onboarding.help.button",
          defaultMessage: "Open help menu"
        }
      ),
      onClick: handlePopoverVisibility,
      ref: triggerRef
    },
    /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: isOpen ? Cross/* default */.Z : Question/* default */.Z, color: "buttonNeutral0" })
  ), isOpen && /* @__PURE__ */ react.createElement(Portal/* Portal */.h, null, /* @__PURE__ */ react.createElement(
    Popover/* Content */.VY,
    {
      padding: 0,
      onDimiss: handlePopoverVisibility,
      source: triggerRef,
      placement: "top-end",
      spacing: 12
    },
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        justifyContent: "space-between",
        paddingBottom: 5,
        paddingRight: 6,
        paddingLeft: 6,
        paddingTop: 6
      },
      /* @__PURE__ */ react.createElement(TypographyLineHeight, { fontWeight: "bold" }, formatMessage({
        id: "app.components.Onboarding.title",
        defaultMessage: "Get started videos"
      })),
      /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href: WATCH_MORE.href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "pi",
          textColor: "primary600"
        },
        formatMessage(WATCH_MORE.label)
      )
    ),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
    VIDEO_LINKS.map(({ href, duration, label }, index) => /* @__PURE__ */ react.createElement(
      VideoLinkWrapper,
      {
        as: "a",
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        key: href,
        hasRadius: true,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 11
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral200", variant: "alpha" }, index + 1)),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative" }, /* @__PURE__ */ react.createElement(Preview, { src: onboarding_preview_namespaceObject, alt: "" }), /* @__PURE__ */ react.createElement(
        IconWrapper,
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "primary600",
          borderRadius: "50%",
          justifyContent: "center",
          width: 6,
          height: 6
        },
        /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Play/* default */.Z, color: "buttonNeutral0", width: 3, height: 3 })
      )),
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(label)), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, ":"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", variant: "pi" }, duration))
    )),
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        direction: "column",
        alignItems: "stretch",
        gap: 2,
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 5
      },
      docLinks.map(({ label, href, icon }) => /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3, key: href }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: icon, color: "primary600" }), /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "sigma",
          textColor: "primary700"
        },
        formatMessage(label)
      )))
    )
  )));
};
/* harmony default export */ const Admin_Onboarding = (Onboarding);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/index.js













const CM = (0,react.lazy)(
  () => Promise.all(/* import() | content-manager */[__webpack_require__.e(9423), __webpack_require__.e(456), __webpack_require__.e(7649), __webpack_require__.e(994)]).then(__webpack_require__.bind(__webpack_require__, 85602))
);
const HomePage = (0,react.lazy)(() => __webpack_require__.e(/* import() | Admin_homePage */ 3981).then(__webpack_require__.bind(__webpack_require__, 22339)));
const InstalledPluginsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_pluginsPage */ 3677).then(__webpack_require__.bind(__webpack_require__, 4186))
);
const MarketplacePage = (0,react.lazy)(
  () => Promise.all(/* import() | Admin_marketplace */[__webpack_require__.e(5338), __webpack_require__.e(5516)]).then(__webpack_require__.bind(__webpack_require__, 9117))
);
const NotFoundPage = (0,react.lazy)(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 23337))
);
const InternalErrorPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_InternalErrorPage */ 9501).then(__webpack_require__.bind(__webpack_require__, 50068))
);
const ProfilePage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_profilePage */ 9497).then(__webpack_require__.bind(__webpack_require__, 3549))
);
const SettingsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_settingsPage */ 5895).then(__webpack_require__.bind(__webpack_require__, 39223)).then((module) => ({
    default: module.SettingsPage
  }))
);
const useTrackUsage = () => {
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const dispatch = (0,react_redux_es/* useDispatch */.I0)();
  const appStatus = (0,react_redux_es/* useSelector */.v9)((state) => state.admin_app.status);
  (0,react.useEffect)(() => {
    if (appStatus === "init") {
      trackUsage("didAccessAuthenticatedAdministration");
      dispatch({ type: App_constants/* SET_APP_RUNTIME_STATUS */.eb });
    }
  }, [appStatus]);
};
const Admin = () => {
  useTrackUsage();
  const { isLoading, generalSectionLinks, pluginsSectionLinks } = (0,hooks/* useMenu */.H9)();
  const { menu } = (0,dist/* useStrapiApp */.j1)();
  const { showTutorials } = (0,hooks/* useConfigurations */.um)();
  const routes = (0,react.useMemo)(() => {
    return menu.filter((link) => link.Component).map(({ to, Component, exact }) => (0,utils/* createRoute */.ot)(Component, to, exact));
  }, [menu]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(cjs.DndProvider, { backend: dist_cjs/* HTML5Backend */.PD }, /* @__PURE__ */ react.createElement(
    layouts_AppLayout,
    {
      sideNav: /* @__PURE__ */ react.createElement(
        components_LeftMenu,
        {
          generalSectionLinks,
          pluginsSectionLinks
        }
      )
    },
    /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/", component: HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/me", component: ProfilePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager", component: CM }), routes, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings/:settingId", component: SettingsPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings", component: SettingsPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/marketplace" }, /* @__PURE__ */ react.createElement(MarketplacePage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/list-plugins", exact: true }, /* @__PURE__ */ react.createElement(InstalledPluginsPage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/404", component: NotFoundPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/500", component: InternalErrorPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: NotFoundPage }))),
    /* @__PURE__ */ react.createElement(GuidedTour_Modal, null),
    showTutorials && /* @__PURE__ */ react.createElement(Admin_Onboarding, null)
  ));
};
/* harmony default export */ const pages_Admin = (Admin);


;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/init.js
const init = (plugins) => {
  return {
    plugins: Object.keys(plugins).reduce((acc, current) => {
      acc[current] = { ...plugins[current] };
      return acc;
    }, {})
  };
};
/* harmony default export */ const PluginsInitializer_init = (init);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/reducer.js


const reducer_initialState = {
  plugins: null
};
const reducer_reducer = (state = reducer_initialState, action) => (
  /* eslint-disable-next-line consistent-return */
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    switch (action.type) {
      case "SET_PLUGIN_READY": {
        set_default()(draftState, ["plugins", action.pluginId, "isReady"], true);
        break;
      }
      default:
        return draftState;
    }
  })
);

/* harmony default export */ const PluginsInitializer_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/index.js





const PluginsInitializer = () => {
  const { plugins: appPlugins } = (0,dist/* useStrapiApp */.j1)();
  const [{ plugins }, dispatch] = (0,react.useReducer)(PluginsInitializer_reducer, reducer_initialState, () => PluginsInitializer_init(appPlugins));
  const setPlugin = (0,react.useRef)((pluginId) => {
    dispatch({ type: "SET_PLUGIN_READY", pluginId });
  });
  const hasApluginNotReady = Object.keys(plugins).some(
    (plugin) => plugins[plugin].isReady === false
  );
  if (hasApluginNotReady) {
    const initializers = Object.keys(plugins).reduce((acc, current) => {
      const InitializerComponent = plugins[current].initializer;
      if (InitializerComponent) {
        const key = plugins[current].pluginId;
        acc.push(/* @__PURE__ */ react.createElement(InitializerComponent, { key, setPlugin: setPlugin.current }));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, initializers, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null));
  }
  return /* @__PURE__ */ react.createElement(pages_Admin, null);
};
/* harmony default export */ const components_PluginsInitializer = (PluginsInitializer);

// EXTERNAL MODULE: ./.cache/admin/src/components/RBACProvider/constants.js
var RBACProvider_constants = __webpack_require__(58633);
;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/actions.js

const resetStore = () => ({ type: RBACProvider_constants/* RESET_STORE */.l });
const setPermissions = (permissions) => ({
  type: RBACProvider_constants/* SET_PERMISSIONS */.m,
  permissions
});


;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/index.js





const RBACProvider = ({ children, permissions, refetchPermissions }) => {
  const { allPermissions } = (0,react_redux_es/* useSelector */.v9)((state) => state.rbacProvider);
  const dispatch = (0,react_redux_es/* useDispatch */.I0)();
  (0,react.useEffect)(() => {
    dispatch(setPermissions(permissions));
    return () => {
      dispatch(resetStore());
    };
  }, [permissions, dispatch]);
  if (!allPermissions) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(dist/* RBACProviderContext */.oL.Provider, { value: { allPermissions, refetchPermissions } }, children);
};
RBACProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  permissions: (prop_types_default()).array.isRequired,
  refetchPermissions: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_RBACProvider = (RBACProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/api.js

const { get: api_get } = (0,dist/* getFetchClient */.tg)();
const fetchAppInfo = async () => {
  try {
    const { data, headers } = await api_get("/admin/information");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
const fetchCurrentUserPermissions = async () => {
  try {
    const { data, headers } = await api_get("/admin/users/me/permissions");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};
const fetchUserRoles = async () => {
  try {
    const {
      data: {
        data: { roles }
      }
    } = await api_get("/admin/users/me");
    return roles;
  } catch (err) {
    throw new Error(err);
  }
};


// EXTERNAL MODULE: ./node_modules/semver/functions/lt.js
var lt = __webpack_require__(64797);
var lt_default = /*#__PURE__*/__webpack_require__.n(lt);
// EXTERNAL MODULE: ./node_modules/semver/functions/valid.js
var valid = __webpack_require__(85811);
var valid_default = /*#__PURE__*/__webpack_require__.n(valid);
;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.ts


const checkLatestStrapiVersion = (currentPackageVersion, latestPublishedVersion) => {
  if (!valid_default()(currentPackageVersion) || !valid_default()(latestPublishedVersion)) {
    return false;
  }
  return lt_default()(currentPackageVersion, latestPublishedVersion);
};

;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/fetchStrapiLatestRelease.ts

const strapiVersion = package_namespaceObject.i8;
const fetchStrapiLatestRelease = async () => {
  try {
    const res = await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");
    if (!res.ok) {
      throw new Error("Failed to fetch latest Strapi version.");
    }
    const { tag_name } = await res.json();
    return tag_name;
  } catch (err) {
    return strapiVersion;
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/index.js













const AuthenticatedApp_strapiVersion = package_namespaceObject.i8;
const AuthenticatedApp = () => {
  const { setGuidedTourVisibility } = (0,dist/* useGuidedTour */.c1)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const userInfo = dist/* auth */.I8.getUserInfo();
  const userName = get_default()(userInfo, "username") || (0,utils/* getFullName */.Pp)(userInfo.firstname, userInfo.lastname);
  const [userDisplayName, setUserDisplayName] = (0,react.useState)(userName);
  const [userId, setUserId] = (0,react.useState)(null);
  const { showReleaseNotification } = (0,hooks/* useConfigurations */.um)();
  const [
    { data: appInfos, status },
    { data: tagName, isLoading },
    { data: permissions, status: fetchPermissionsStatus, refetch, isFetching },
    { data: userRoles }
  ] = (0,es.useQueries)([
    { queryKey: "app-infos", queryFn: fetchAppInfo },
    {
      queryKey: "strapi-release",
      queryFn: () => fetchStrapiLatestRelease(toggleNotification),
      enabled: showReleaseNotification,
      initialData: AuthenticatedApp_strapiVersion
    },
    {
      queryKey: "admin-users-permission",
      queryFn: fetchCurrentUserPermissions,
      initialData: []
    },
    {
      queryKey: "user-roles",
      queryFn: fetchUserRoles
    }
  ]);
  const shouldUpdateStrapi = checkLatestStrapiVersion(AuthenticatedApp_strapiVersion, tagName);
  (0,react.useEffect)(() => {
    if (userRoles) {
      const isUserSuperAdmin = userRoles.find(({ code }) => code === "strapi-super-admin");
      if (isUserSuperAdmin && appInfos?.autoReload) {
        setGuidedTourVisibility(true);
      }
    }
  }, [userRoles, appInfos, setGuidedTourVisibility]);
  (0,react.useEffect)(() => {
    const getUserId = async () => {
      const userId2 = await (0,utils/* hashAdminUserEmail */.Qy)(userInfo);
      setUserId(userId2);
    };
    getUserId();
  }, [userInfo]);
  const shouldShowNotDependentQueriesLoader = isFetching || status === "loading" || fetchPermissionsStatus === "loading";
  const shouldShowLoader = isLoading || shouldShowNotDependentQueriesLoader;
  if (shouldShowLoader) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  if (status === "error") {
    return /* @__PURE__ */ react.createElement("div", null, "error...");
  }
  return /* @__PURE__ */ react.createElement(
    dist/* AppInfoProvider */.iq,
    {
      ...appInfos,
      userId,
      latestStrapiReleaseTag: tagName,
      setUserDisplayName,
      shouldUpdateStrapi,
      userDisplayName
    },
    /* @__PURE__ */ react.createElement(components_RBACProvider, { permissions, refetchPermissions: refetch }, /* @__PURE__ */ react.createElement(components_NpsSurvey, null), /* @__PURE__ */ react.createElement(components_PluginsInitializer, null))
  );
};
/* harmony default export */ const components_AuthenticatedApp = (AuthenticatedApp);


/***/ }),

/***/ 43234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16334);





const StepLine = ({ type, ...props }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x,
    {
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(2),
      height: "100%",
      background: type === _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM ? "neutral300" : "primary500",
      hasRadius: true,
      ...props
    }
  );
};
StepLine.defaultProps = {
  type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM
};
StepLine.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_ACTIVE */ .lW, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_DONE */ .hx, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepLine);


/***/ }),

/***/ 2364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10701);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50703);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32370);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59082);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16334);






const StepNumber = ({ type, number }) => {
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .hx) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, "aria-hidden": true, width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(16), color: "neutral0" })
    );
  }
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .lW) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, { fontWeight: "semiBold", textColor: "neutral0" }, number)
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k,
    {
      borderColor: "neutral500",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: 2,
      borderRadius: "50%",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      justifyContent: "center"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, { fontWeight: "semiBold", textColor: "neutral600" }, number)
  );
};
StepNumber.defaultProps = {
  number: void 0,
  type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .VM
};
StepNumber.propTypes = {
  number: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .lW, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .hx, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .VM])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepNumber);


/***/ }),

/***/ 16334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VM: () => (/* binding */ IS_NOT_DONE),
/* harmony export */   hx: () => (/* binding */ IS_DONE),
/* harmony export */   lW: () => (/* binding */ IS_ACTIVE)
/* harmony export */ });
const IS_ACTIVE = "isActive";
const IS_DONE = "isDone";
const IS_NOT_DONE = "isNotDone";


/***/ }),

/***/ 99571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const layout = {
  contentTypeBuilder: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CTB.title",
        defaultMessage: "\u{1F9E0} Build the content structure"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.CTB.cta.title",
          defaultMessage: "Go to the Content type Builder"
        },
        type: "REDIRECT",
        target: "/plugins/content-type-builder"
      },
      trackingEvent: "didClickGuidedTourHomepageContentTypeBuilder"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CTB.create.title",
        defaultMessage: "\u{1F9E0} Create a first Collection type"
      },
      content: {
        id: "app.components.GuidedTour.CTB.create.content",
        defaultMessage: "<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CTB.create.cta.title",
          defaultMessage: "Build a Collection type"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep1CollectionType"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CTB.success.title",
        defaultMessage: "Step 1: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CTB.success.content",
        defaultMessage: "<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didCreateGuidedTourCollectionType"
    }
  },
  contentManager: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CM.title",
        defaultMessage: "\u26A1\uFE0F What would you like to share with the world?"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didClickGuidedTourHomepageContentManager"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CM.create.title",
        defaultMessage: "\u26A1\uFE0F Create content"
      },
      content: {
        id: "app.components.GuidedTour.CM.create.content",
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep2ContentManager"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CM.success.title",
        defaultMessage: "Step 2: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CM.success.content",
        defaultMessage: "<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CM.success.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didCreateGuidedTourEntry"
    }
  },
  apiTokens: {
    home: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.apiTokens.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didClickGuidedTourHomepageApiTokens"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.create.content",
        defaultMessage: "<p>Generate an authentication token here and retrieve the content you just created.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.apiTokens.create.cta.title",
          defaultMessage: "Generate an API Token"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep3ApiTokens"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.apiTokens.success.title",
        defaultMessage: "Step 3: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.success.content",
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: "didGenerateGuidedTourApiTokens"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ })

}]);