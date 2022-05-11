import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypesProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypesProps) {
  return (
    <>
      <header>
        <span className="text-xl heading-6">Select a feedback type</span>
        <CloseButton />
      </header>
      
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([ key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}