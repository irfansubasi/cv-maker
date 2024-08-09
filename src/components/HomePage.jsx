import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <Header />
                <section className="how-it">
                    <h1>How does it work?</h1>
                    <div className='steps'>
                        <div>
                            <span>1</span>
                            <h2>Enter details</h2>
                            <p>Start by entering your personal information, details such as your schooling and experience.</p>
                        </div>
                        <div>
                            <span>2</span>
                            <h2>Customize it</h2>
                            <p>Use features that are completely up to you, such as adding some color to your resume, changing its shape, etc.</p>
                        </div>
                        <div>
                            <span>3</span>
                            <h2>Download</h2>
                            <p>Download your resume in PDF format to send to companies!</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
        
    );
}
