import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';
const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {

    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || new Date()).format('MMM D, YYYY');


  return (
    <div className='card-border w-90 max-sm:full min-h-96'>
      <div className="card-interview">
        <div className="">
          <div className="absolute top-2 right-2 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image src={getRandomInterviewCover()} alt='cover' className='rounded-full object-fit size-[90px]*' width={90} height={90} />
          <h3 className="cap mt-5">{role} Interview</h3>
          <div className="flex flex-row justify-between gap-2 ">
              <div className="flex flex-row gap-2 items-center">
                <Image src={'/calendar.svg'} alt='calendar icon' width={22} height={22} />
                <p className="">{formattedDate}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
              <Image src={'/star.svg'} alt='star icon' width={22} height={22} />
              <p>{feedback?.totalScore || '---'}/100</p>
              </div>
          </div>
           <p className='line-clamp-2 mt-4'>
            {feedback ? feedback.finalAssessment : "No feedback yet. Take the interview to get detailed feedback and improve your skills!"}
           </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />
          <Button className='btn-primary'>
            <Link href={`${
              feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`
            }`}>
              {feedback ? "View Feedback" : "Take Interview"}
            </Link>
          </Button>

        </div>

      </div>
    </div>
  )
}

export default InterviewCard
