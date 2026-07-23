import { useState } from "react";
import './Tabs.css';

const Tabs = () => {

    const [tab, setTab] = useState(0)

    const SectionArray = [
        {"id":1, "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
        {"id":2, "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
        {"id":3, "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
    ]

    const handleClick = (id) => {
    setTab(tab===id? 0: id)
    }
 

    return (
        <section className="tab-container">
            <div className="tab-buttons">
                {SectionArray.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={tab === item.id ? "active" : ""}
                    >
                        Section {item.id}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {SectionArray.map((item) => (
                  <div className={tab === item.id ? "show" : "hide"}>
                  {item.content}
              </div>
                ))}
            </div>
        </section>
    );
}

export default Tabs;