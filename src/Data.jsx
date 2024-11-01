import { CgFormatJustify } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { LiaConnectdevelop } from "react-icons/lia";
import { TbWritingSign } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import img from './assets/QRCode.jpg'



let Data = {
    Services : [
        { icon: <LiaConnectdevelop />,
          Heading: 'Web Development',
          parag: 'I create high-performance single-page applications (SPAs) using React.js, which offer a fluid and swift user experience. These applications are designed to load dynamic content seamlessly, eliminating the need for full page refreshes and ensuring maximum speed and interactivity.'
        },
        { icon: <DiResponsive />,
          Heading: 'Responsive Web Development',
          parag: 'With a year of experience in responsive web development, I create visually appealing websites that adapt seamlessly to any device. My focus is on delivering user-friendly designs for optimal viewing on desktops, tablets, and smartphones. Let me enhance your online presence with my expertise in responsive design.'
        },
        { icon: <MdDashboard />,
          Heading: 'Dashboard Development',
          parag: 'I develop admin dashboards and management systems for schools and companies using React.js and Tailwind CSS. My focus is on creating user-friendly interfaces that provide real-time insights and streamline administrative tasks. This combination enhances user experience and facilitates efficient data management.'
        },
        { icon: <TbWritingSign />,
          Heading: 'Scientific Writing',
          parag: 'I specialize in scientific writing for the biological sciences, helping researchers craft high-quality papers. With expertise in referencing styles and citation methods, I ensure meticulous formatting and compliance with academic standards. Let me assist you in effectively communicating your research findings.'
        },
        { icon: <CgFormatJustify />,
          Heading: 'Blog Post Writing',
          parag: 'With two years of blog writing experience, I create engaging articles on diverse topics. My research skills help me present complex ideas clearly, connecting with a wide audience. I am dedicated to crafting content that captivates readers and drives engagement.'
        }
      ],
    MyProjects : [
      {
        src: img,
        title: 'QR Code Genertor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui accusantium amet quisquam, quaerat magnam!'
      },
      {
        src: img,
        title: 'QR Code Genertor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui accusantium amet quisquam, quaerat magnam!'
      },
      {
        src: img,
        title: 'QR Code Genertor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui accusantium amet quisquam, quaerat magnam!'
      },
      {
        src: img,
        title: 'QR Code Genertor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui accusantium amet quisquam, quaerat magnam!'
      },
      {
        src: img,
        title: 'QR Code Genertor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui accusantium amet quisquam, quaerat magnam!'
      }
    ],
    MyEducation: [
      {
        title: 'BS Biotechnology',
        subTitle: 'Islamia University of Bahawalpur (2019-2023)',
        result: '3.39/4',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam porro aliquid consequuntur fugit autem.'
      },
      {
        title: 'FSc (Intermediate)',
        subTitle: 'Govt. College for Women (2017-2019)',
        result: '85%',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam porro aliquid consequuntur fugit autem'
      },
      {
        title: 'Matric',
        subTitle: 'Ibn-e-Sina Girls Higher Secondray School (2014-2016)',
        result: '90.36%',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam porro aliquid consequuntur fugit autem'
      }
    ],
    MyExperience: [
      {
        title: 'Frontend Web Developer',
        subTitle: 'Enigmatix (Pvt) Ltd',
        country: 'Pakistan',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam porro aliquid consequuntur fugit autem'
      },
      {
        title: 'Research Assistant Intern',
        subTitle: 'NIGAB, NARC Islamabad',
        country: 'Pakistan',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quisquam porro aliquid consequuntur fugit autem'
      }
    
    ]
    
}

export default Data;