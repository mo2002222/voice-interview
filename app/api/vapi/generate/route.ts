import {generateText} from 'ai'
import {google} from '@ai-sdk/google'
import { getRandomInterviewCover } from '@/utils';
import { db } from '@/firebase/admin';
export async function GET(){
    return Response.json({success: true, data: "thank you!"}, {status:200});
}

export async function POST(request: Request){
    const {type, role, level, techtstack, amount, userid} = await request.json();

    try {
        const {text: questions} = await generateText({
            model: google('gemini-2.0-flash-001'),
            prompt: `
                prepare questions for a job interview.
                the job role is ${role}.
                the job experience level is ${level}.
                the tech stack used in the job is ${techtstack}.
                the focus between behavioural and technical qustions should lean towards: ${type}.
                the amount of qustions required is: ${amount}.
                pleas return only thw questions, witout any additional text.
                the questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might breack the voice assistant.
                return the questions formatted like this:
                ["Question 1", "Question 2", "Question 3"]

                Thank you! <3
            `
        })

        const interview = {
            role, type, level,
            techtstack: techtstack.splite(','),
            questions: JSON.parse(questions),
            userId: userid,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString()
        }

        await db.collection("interview").add(interview);

        return Response.json({success: true}, {status: 200})
    } catch (error) {
        console.log(error);
        return Response.json({success: false, error},{status:500},)
    }
}