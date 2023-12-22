const TITLE_CLASS = 'text-2xl font-bold text-gray-800';
export default function AboutText() {
  return (
    <section className="bg-sky-50  p-8 m-8 mx-auto shadow-lg rounded-xl text-center w-full max-w-2xl ">
      <h2 className={TITLE_CLASS}>Who Am I?</h2>
      <p className="text-lg font-medium mt-2">
        꿈을 향한 미래를 코딩하는 개발자
      </p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p className="text-lg font-medium mt-2">신입</p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p className="text-lg font-medium mt-2">
        JavaScript, React, Next
        <br />
        Git
      </p>
    </section>
  );
}
