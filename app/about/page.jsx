import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
export default function about() {
    return (
      <>
      <Header className="mb-10"/>
      <div className="">
      <header className="text-black text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4 bg-orange-200 ">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide exceptional healthcare services with a focus on availability, reliability, and support.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-orange-200 text-black py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Healthcare Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Cardiology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Neurology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Pediatrics</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Oncology</h3>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-orange-200   hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Advanced Diagnostics</h3>
            <p className="text-gray-700 mt-2">We utilize the latest technology for accurate diagnostics.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200   hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Telemedicine</h3>
            <p className="text-gray-700 mt-2">Consult with our specialists from the comfort of your home.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200   hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Robotic Surgery</h3>
            <p className="text-gray-700 mt-2">Minimally invasive procedures with precision.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200  hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Electronic Health Records</h3>
            <p className="text-gray-700 mt-2">Secure and easy access to your medical records.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Committed To Your Health And Happiness</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Book Appointment</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200  hover:bg-orangeLite-100  transition-colors">
            <h3 className="text-xl font-bold">Informed Staff</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200  hover:bg-orangeLite-100 transition-colors">
            <h3 className="text-xl font-bold">Total Health</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-orange-200 hover:bg-orangeLite-100  transition-colors">
            <h3 className="text-xl font-bold">Get Consultation</h3>
          </div>
        </div>
      </section>

  <Footer/>
    </div>
      </>
    )
    
  }
  