// TODO: review whether these definitions should be here

import { cloneStore } from "./decorators"
import { models as globalModels } from "../../store/store"
import { createQuestionList } from "./helpers"
import {
  questionCreator,
  questionWithBadImage,
  questionWithImage,
  questionWithLongData,
  questionWithManyChoices,
  questionWithNonASCIIChars,
  standardQuestion,
} from "../../lib/mocks"

export const withDailyScore = cloneStore({
  session: { ...globalModels.session, dailyScore: "76%" },
})

const nUnanswered = 1
const [, , summaryPage, completedAnswers] = createQuestionList()
const [correctPage, incorrectPage, unansweredPage, incompleteAnswers] =
  createQuestionList(nUnanswered)

export const aboutModalOpen = cloneStore({
  modals: {
    ...globalModels.modals,
    about: { ...globalModels.modals.about, isOpen: true },
  },
})

export const troubleshootingModalOpen = cloneStore({
  modals: {
    ...globalModels.modals,
    troubleshooting: { ...globalModels.modals.troubleshooting, isOpen: true },
  },
})

export const howItWorksModalOpen = cloneStore({
  modals: {
    ...globalModels.modals,
    howItWorks: { ...globalModels.modals.howItWorks, isOpen: true },
  },
})

export const contactModalOpen = cloneStore({
  modals: {
    ...globalModels.modals,
    contact: { ...globalModels.modals.contact, isOpen: true },
  },
})

export const completedSummary = cloneStore({
  session: {
    ...globalModels.session,
    page: summaryPage,
    answers: completedAnswers,
    questions: questionCreator(correctPage, standardQuestion),
  },
})

export const completedSummaryWithScore = cloneStore({
  session: {
    ...globalModels.session,
    page: summaryPage,
    answers: completedAnswers,
    dailyScore: "80%",
  },
})

export const completedSummaryVoted = cloneStore({
  session: {
    ...globalModels.session,
    page: summaryPage,
    answers: completedAnswers,
    voted: { [summaryPage]: true },
  },
})

export const completedSummarySuggested = cloneStore({
  session: {
    ...globalModels.session,
    page: summaryPage,
    answers: completedAnswers,
    suggested: true,
  },
})

export const inProgressUnanswered = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, standardQuestion),
  },
})

export const inProgressUnansweredNonASCII = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, questionWithNonASCIIChars),
  },
})

export const inProgressUnansweredManyChoices = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, questionWithManyChoices),
  },
})

export const inProgressUnansweredImage = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, questionWithImage),
  },
})

export const inProgressUnansweredBadImage = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, questionWithBadImage),
  },
})

export const inProgressUnansweredLongData = cloneStore({
  session: {
    ...globalModels.session,
    page: unansweredPage,
    answers: incompleteAnswers,
    questions: questionCreator(unansweredPage, questionWithLongData),
  },
})

export const inProgressCorrect = cloneStore({
  session: {
    ...globalModels.session,
    page: correctPage,
    answers: incompleteAnswers,
    picks: { [correctPage]: "D" },
    questions: questionCreator(correctPage, standardQuestion),
  },
})

export const inProgressCorrectVoted = cloneStore({
  session: {
    ...globalModels.session,
    page: correctPage,
    answers: incompleteAnswers,
    picks: { [correctPage]: "D" },
    questions: questionCreator(correctPage, standardQuestion),
    voted: { [correctPage]: true },
  },
})

export const inProgressIncorrect = cloneStore({
  session: {
    ...globalModels.session,
    page: incorrectPage,
    answers: incompleteAnswers,
    picks: { [incorrectPage]: "A" },
    questions: questionCreator(incorrectPage, standardQuestion),
  },
})

export const inProgressCorrectLongData = cloneStore({
  session: {
    ...globalModels.session,
    page: correctPage,
    answers: incompleteAnswers,
    picks: { [correctPage]: "D" },
    questions: questionCreator(correctPage, questionWithLongData),
  },
})
