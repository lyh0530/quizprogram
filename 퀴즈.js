const questions = [
    {question:'학생들이 싫어하는 피자는?',answer:'책피자'},
    {question:'곰이 다니는 목욕탕 이름은?',answer:'곰탕'},
    {question:'신이 화가 나면?',answer:'신발끈'},
    {question:'오래될수록 젊어 보이는 것은?',answer:'사진'},
    {question:'세상에서 가장 뜨거운 바다는?',answer:'열바다'},
    {question:'세상에서 가장 추운 바다는?',answer:'썰렁해'},
    {question:'개가 사람을 가르친다를 4자로 줄이면?',answer:'개인지도'},
    {question:'쥐네마리가 모이면 무엇이 될까?',answer:'쥐포'},
    {question:'공이 웃으면?',answer:'풋볼'},
    {question:'자동차를 톡하고 치면?',answer:'카톡'},
    {question:'다리미가 좋아하는 음식은?',answer:'피자'},
    {question:'폭발하기 가장 쉬운 나라는?',answer:'부탄'},
    {question:'광부가 가장 많은 나라는?',answer:'케냐'},
    {question:'물고기 반대말은?',answer:'불고기'},
    {question:'육지에 사는 고래는?',answer:'술고래'},
    {question:'세상에서 가장 무서운 비는?',answer:'낭비'},
    {question:'도둑이 몰래 훔친 돈은?',answer:'슬그머니'},
    {question:'몸무게가 가장 많이 나갈 때는?',answer:'철들때'},
    {question:'울다가 다시 웃는사람을 다섯글자로?',answer:'아까운사람'},
    {question:'세상에서 가장 쉬운 숫자는?',answer:'190000'},
    {question:'돌잔치를 영어로 하면?',answer:'락페스티벌'},
    {question:'날마다 흑심을 품고 다니는것은?',answer:'연필'},
    {question:'아몬드가 죽으면?',answer:'다이아몬드'},
    {question:'곤충의 몸을 3등분하면?',answer:'죽는다.'},
    {question:'세상에서 제일 뜨거운 과일은?',answer:'천도복숭아'},
    {question:'바나나가 웃으면?',answer:'바나나킥'},
    {question:'왕이 헤어질때 하는 인사는?',answer:'바이킹'}
]
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
function quiz(){
    let isTrue = true;
    while(isTrue){
        let ansCnt = 0;
        let ans =[];
        let randomIndexArray = [];
        for (i=0; i<3; i++) {
        randomNum = Math.round(Math.random() * 27);
        if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
        }
        }

        for(let i=0;i<3;i++){
            sleep(3000);
            ans.push(prompt((i+1)+'. '+questions[randomIndexArray[i]].question));
            if(questions[randomIndexArray[i]].answer == ans[i]){
            ansCnt++;
            isTrue=false;
            }
        }
        alert(`맞춘문제 :${ansCnt}`);
    }   
}

quiz();