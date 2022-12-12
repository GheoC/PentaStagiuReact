import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import {useState} from "react";

const defaultTitle = "Cinema City";

function App() {
    const [title, setTitle] = useState(defaultTitle);
    const [user, setUser] = useState({name: "gheo", age: 7});
    const [pages, setPages] = useState(["About", "Dashboard", "Contact"]);
    const [showPage, setShowPage] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [newPage, setNewPage] = useState("");

    const resetTitle = () => {
        setTitle(defaultTitle);
    }
    return <>
        <Header navigationTitle={title} resetTitle={resetTitle} user={user}/>
        <Main/>
        <main>
            <section>
                {showPage && (
                    <>
                        {pages[currentPage]}
                        <div>
                            <button
                                onClick={() => {
                                    setCurrentPage(currentPage - 1);
                                }}
                            >
                                &lt;
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentPage(currentPage + 1);
                                }}
                            >
                                &gt;
                            </button>
                        </div>
                    </>
                )}
            </section>
        </main>

        <Footer/>
        <input
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
        />
        <button
            onClick={() => {
                setTitle(defaultTitle);
            }}
        >
            Reset title
        </button>
        <div>
            <button onClick={() => setShowPage(!showPage)}>Toggle content</button>
        </div>
        <div>
            <input
                placeholder="Add new page"
                value={newPage}
                onChange={(e) => setNewPage(e.target.value)}
            />
            <button
                onClick={() => {
                    if (newPage) {
                        setPages([...pages, newPage]);
                        setNewPage("");
                    }
                }}
            >
                Add new page
            </button>
        </div>
    </>
}

export default App;