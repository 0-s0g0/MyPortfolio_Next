import { projects, Project } from './../../data/projects';
import Image from "next/image";
import Link from 'next/link';
import pagestyles from './../styles/productpage.module.css';
import PageHeader from "../components/Header/pageHeader";
import Fotter from "@/app/components/footer/footer";
import ReactMarkdown from 'react-markdown';

// id: 1 のプロジェクトデータを取得
const project: Project | undefined = projects.find(p => p.id === 3);

const ProjectDetail3 = () => {
  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <>
      <PageHeader />

      <div className={pagestyles.Ptitle}>
        <div className={pagestyles.titleText}>
          <div className={pagestyles.titleTexth1}>{project.title}</div>
          <div className={pagestyles.titleTexth4}>{project.description}</div>
        </div>
        <Image src={project.image} alt={project.title} className={pagestyles.Ptitleimg} />
      </div>

      <div className={pagestyles.tableWrapper}>
        <table className={pagestyles.table}>
          <tbody>
            <tr className={pagestyles.tableRow}>
              <th>GitHub</th>
              <td><Link href={project.github}>{project.github}</Link></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>背景</th>
              <td> <ReactMarkdown>{project.background}</ReactMarkdown></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>目的</th>
              <td> <ReactMarkdown>{project.purpose}</ReactMarkdown></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>機能</th>
              <td> <ReactMarkdown>{project.function}</ReactMarkdown></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>制作人数</th>
              <td><ReactMarkdown>{project.number}</ReactMarkdown></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>担当箇所</th>
              <td><ReactMarkdown>{project.role}</ReactMarkdown></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>使用技術</th>
              <td>{project.technologies.join(", ")}</td>
            </tr>
            {project.awardTitle && project.awardTitle[0] !== 'none' ? (
              <tr className={pagestyles.tableRow}>
                <th>受賞</th>
                <td>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.awardTitle.map((award, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: '#f59e0b',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          fontWeight: '500',
                        }}
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ) : null}
            {project.prezentation && project.prezentation !== 'none' ? (
              <tr className={pagestyles.tableRow}>
                <th>発表プロダクト</th>
                <td>{project.prezentation}</td>
              </tr>
            ) : null}  
            <tr className={pagestyles.tableRow}>
              <th>制作期間</th>
              <td><ReactMarkdown>{project.duration}</ReactMarkdown></td>
            </tr>
            {project.outlink && project.outlink !== 'none' ? (
              <tr className={pagestyles.tableRow}>
                <th>外部記事</th>
                <td><Link href={project.outlink}>{project.outname}</Link></td>
              </tr>
            ) : null} 
          </tbody>
        </table>    
      </div>

      <Fotter />
    </>
  );
};

export default ProjectDetail3;
