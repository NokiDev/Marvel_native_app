import { combineEpics } from "redux-observable"
import { connectApiEpic, connectDoneEpic, disconnectApiEpic, disconnectDoneEpic, resumeConnectApiEpic, fetchComicsEpic} from "../epics/marvelApi.epics"

export const rootEpic = combineEpics(
	connectApiEpic, connectDoneEpic, disconnectApiEpic, disconnectDoneEpic, resumeConnectApiEpic, fetchComicsEpic
)