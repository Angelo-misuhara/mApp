import { useState } from "react"


const MainPage = () => {

    const [savingCount, setSavingCount] = useState('');
  const [allSaving, setAllSaving] = useState(0);

  const addSaving = (e) => {
    e.preventDefault();
    const savingAmount = parseInt(savingCount);
    if (!isNaN(savingAmount)) {
      setAllSaving(allSaving + savingAmount);
      setSavingCount(''); // Clear the input field after saving
    }
  };
  return (
    <>
      <div className="Flex justify-center">
        {/**About us */}
        <div>
          <section className="text-gray-600 body-font" id="bgsec1">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="img/fiance1.jpg"/>
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">What is Savings?</h1>
                <p className="mb-8 text-justify">Savings are like your money best friend for the future! It is the smart and caring act of setting aside a portion of your hard-earned income instead of spending it all right away. Think of it as a little nest egg that grows over time to help you achieve your dreams and face any surprises that come your way.
                You can keep your savings in different places, like a special bank account or even investments that make your money work for you. It is like having a secret stash that you can rely on when you need it most, whether it is for emergencies, exciting opportunities, or those big-ticket items you have been dreaming of.
                By saving, you are building a strong foundation of financial security and peace of mind. It is like planting seeds today that will grow into a beautiful money tree tomorrow. Plus, as you save, your money can earn even more money through interest or returns, helping it grow faster and giving you more options in the future.</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Why do we need to save?
                </h1>
                <p className="mb-8 leading-relaxed text-justify">Saving money is a vital practice that empowers individuals to safeguard their financial future and achieve lasting security. In this     brief essay, we will explore why saving is essential and how it can transform your life.
                  Saving provides a safety net during unexpected events, such as medical expenses or job loss. It grants you financial stability and peace of mind. By cultivating a habit of saving, you take control of your financial destiny, breaking free from the cycle of living paycheck to paycheck.
                  Moreover, saving allows you to accomplish your dreams. Whether its buying a house, starting a business, or pursuing higher education, saving turns aspirations into actionable plans. It provides the means to turn your dreams into reality.
                  Saving for retirement is also crucial. With longer life expectancies and changing pension systems, saving independently ensures a comfortable future. By investing in retirement savings accounts, you secure financial stability for your golden years.
                  Furthermore, saving reduces reliance on credit and debt, fostering financial independence. It empowers you to meet financial obligations without borrowing and builds a strong foundation for a debt-free life.
                  In conclusion, saving is a powerful tool that unlocks financial freedom, provides security, and helps you achieve your dreams. Embrace the power of saving today and shape a prosperous future.
                </p>
                <div className="flex justify-center">
                  <button className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Start Saving</button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="img/saving.jpg"/>
              </div>
            </div>
          </section>
          <section>
            <div className=" flex flex-row justify-between pt-32  bg-[url('/img/dog-savings.jpg')] bg-origin-border bg-cover bg-no-repeat" id="savingsFlex">
              <div className="flex flex-col m-10">
                  <h2 className="font-medium">Your Savings</h2>
                  <p className="font-bold text-7xl break-words">₱{allSaving}.00</p>
              </div>
              <div className="flex flex-col m-10 p-36" id="input-Savings">
                  <label htmlFor="tittle" className="leading-7 text-sm text-gray-600">Saving :</label>
                    <input
                      type="text"
                      value={savingCount}
                      placeholder="00000000"
                      id="tittle"
                      name="tittle"
                      required
                      onChange={(e) => setSavingCount(e.target.value)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                      <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 mt-4  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={addSaving}
                  >
                    Save
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Save like a pro, watch your money grow</p>
              </div>
            </div>
      </section>
        </div>
      </div>
    </>
  )
}

export default MainPage