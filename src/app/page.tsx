"use client";
import { useState } from "react";
import siteModules from "./config";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./page.module.css";

export default function Home() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const modules = Object.keys(siteModules);

  const getCards = () => {
    if (search.trim()) {
      const query = search.trim().toLowerCase();
      const matched: { name: string; url: string }[] = [];
      modules.forEach((m) => {
        matched.push(
            ...siteModules[m].items.filter((item: { name: string; url: string }) =>
                item.name.toLowerCase().includes(query)
            )
        );
      });
      return { title: `🔍 搜索结果 (${matched.length} 项)`, items: matched };
    }
    if (activeModule) {
      const mod = siteModules[activeModule];
      return {
        title: `${mod.emoji || "📁"} ${activeModule}`,
        items: mod.items,
      };
    }
    return { title: "", items: [] };
  };

  const { title, items } = getCards();

  return (
      <div id={"main"}>
        <header>
          <Typography variant="h3" gutterBottom>🛠️ 我的工具网站</Typography>
          <Box className={styles.searchBox}>
            <TextField id="outlined-search" label={"搜索"} type="search"  value={search} onChange={(e) => setSearch(e.target.value)}/>
          </Box>
        </header>
        <Box className={styles.moduleButtons}>
          {modules.map((m) => (
              <Button variant={"outlined"} key={m} onClick={() => { setActiveModule(m); setSearch(""); }}>
                {siteModules[m].emoji || "📁"} {m}
              </Button>
          ))}
          <Button variant={"outlined"} onClick={() => window.open("/filefind", "_blank")}>
            📂 文件共享区域
          </Button>
        </Box>
        <Box className={styles.contentArea}>
            {title && <Typography variant="h6" gutterBottom>{title}</Typography>}
            <br />
            <Box className={styles.cardContainer}>
              {items.length === 0 && title && <p>未找到相关内容。</p>}
              {items.map((item: { name: string; url: string }, idx: number) => {
                return (
                    <Box sx={{p: 2, borderRadius: 2, gridTemplateColumns: { md: '1fr 1fr' }, gap: 2,}} key={item.url} className={`${styles.card}`} style={{ animationDelay: `${idx * 0.05}s` }}>
                        <a href={item.url} target="_blank">{item.name}</a>
                    </Box>
                );
              })}
            </Box>
          </Box>
      </div>
  );
}