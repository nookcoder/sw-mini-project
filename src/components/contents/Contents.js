import WebLogo from '../../images/WebLogo.svg'
import reactLogo from '../../images/react.png'
import springLogo from '../../images/spring.png'
import numpyLogo from '../../images/numpy.png'
import nodejsLogo from '../../images/nodejs.png'
import djangoLogo from '../../images/django.png'
import javascriptLogo from '../../images/javascript.png'
import javaLogo from '../../images/java.png'
import pythonLogo from '../../images/python.png'
import nestLogo from '../../images/nestjs.png'

export const contents = {
    python : {
        imageUrl : pythonLogo,
        name : "Python",
        summary : "파이썬은 1991년 네덜란드계 소프트웨어 엔지니어인 귀도 반 로섬이 발표한 고급 프로그래밍 언어로, 플랫폼에 독립적이며 인터프리터식, 객체지향적, 동적 타이핑 대화형 언어이다.",
        chips : ["numpy", "django"]
    },
    react : {
        imageUrl : reactLogo,
        name : "React",
        summary : "리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다.",
        chips : []
    },
    nodejs : {
        imageUrl : nodejsLogo,
        name : "Nodejs",
        summary : "Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 논블로킹 I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다.",
        chips : []
    },
    numpy : {
        imageUrl : numpyLogo,
        name : "Numpy",
        summary : "NumPy는 행렬이나 일반적으로 대규모 다차원 배열을 쉽게 처리할 수 있도록 지원하는 파이썬의 라이브러리이다. NumPy는 데이터 구조 외에도 수치 계산을 위해 효율적으로 구현된 기능을 제공한다.",
        chips : []
    },
    spring : {
        imageUrl : springLogo,
        name : "Spring",
        summary : "스프링 프레임워크는 자바 플랫폼을 위한 오픈 소스 애플리케이션 프레임워크로서 간단히 스프링이라고도 한다. 동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하고 있다.",
        chips : []
    },
    nestjs : {
        imageUrl : nestLogo,
        name : "NestJSs",
        summary : "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.\n",
        chips : []
    },
    django : {
        imageUrl : nestLogo,
        name : "NestJSs",
        summary : "장고는 파이썬으로 작성된 오픈 소스 웹 프레임워크로, 모델-템플릿-뷰 패턴을 따르고 있다. 현재는 장고 소프트웨어 재단에 의해 관리되고 있다. 고도의 데이터베이스 기반 웹사이트를 작성하는 데 있어서 수고를 더는 것이 장고의 주된 목표이다.",
        chips : []
    },
    javascript : {
        imageUrl : javascriptLogo,
        name : "Javascript",
        summary : "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.",
        chips : ["nodejs", "nestjs"]
    },
    java : {
        imageUrl : javaLogo,
        name : "Java",
        summary : "자바는 썬 마이크로시스템즈의 제임스 고슬링과 다른 연구원들이 개발한 객체 지향적 프로그래밍 언어이다. 1991년 그린 프로젝트라는 이름으로 시작해 1995년에 발표했다.",
        chips : ["spring"]
    },
}
