import { questions } from "@/utils/helpers/PsiTest.help"


const PsiTest = () => {
    
    return <div>
        {questions.map((item, index) => (
            <p>
                {index+1} {item}
            </p>
        ))}
        <button>да</button>
        <button> нет</button>
    </div>
}

export default PsiTest