// 페이지 이동
import { useNavigate } from "react-router-dom";

import PageMove from "../component/PageMovie.jsx";
import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";

import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
        
    return(
        // 페이지 전체
        <div className="home-container">
            {/* header */}
            <Header />

            {/* body */}
            <div className="home-body">
                {/* 지도 이미지 */}
                <img className="busan-map" src="src\img\busan.png" useMap="#img-busan"/>
                {/* 지역별 버튼 */}

                    <map name="img-busan">
                        <area 
                            onClick={() => PageMove(navigate, "central")}
                            alt="중부" 
                            title="central-map" 
                            coords="330,319,362,304,385,271,364,255,369,240,355,209,365,193,366,185,388,162,412,159,455,138,481,159,471,191,468,205,486,214,496,228,482,258,467,275,458,288,457,313,462,333,439,347,433,363,405,370,384,386,352,385,341,402,327,391,323,345" shape="poly"/>

                        <area 
                            onClick={() => PageMove(navigate, "eastern")}
                            alt="동부" 
                            title="eastern-map" 
                            coords="453,139,478,158,468,199,486,211,497,228,457,289,458,318,468,336,485,365,507,380,552,376,598,332,628,312,644,276,647,212,665,183,669,128,727,127,692,61,669,24,570,21,476,60" shape="poly"/>
        
                        <area 
                            onClick={() => PageMove(navigate, "western")}
                            alt="서부" 
                            title="western-map" 
                            coords="365,183,354,209,369,241,364,256,382,271,362,304,331,318,325,346,328,367,322,391,310,396,295,426,304,476,299,538,254,544,224,479,172,477,143,487,56,462,71,408,29,368,132,299,180,265" shape="poly"/>

                        <area 
                            onClick={() => PageMove(navigate, "southern")}
                            alt="남부" 
                            title="southern-map" 
                            coords="310,396,298,426,311,437,324,463,324,486,317,509,328,515,359,488,405,525,429,529,438,517,422,485,379,435,392,428,406,443,430,437,441,458,453,449,469,461,485,433,470,408,457,397,482,370,460,334,401,386,359,392,337,406" shape="poly"/>    
                        </map>    
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
}