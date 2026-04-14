import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 

const projetosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    idade_minima: z.number(),
    duracao: z.string(),
    autor: z.string(),
    dificuldade: z.enum(['iniciante', 'intermediario', 'avancado']),
    categoria: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    visivel: z.boolean().default(true),
    
    recursos: z.array(z.object({
      nome: z.string(),
      tipo: z.string(),
      url: z.string()
    })).optional(),
    
  }),
});

export const collections = {
  'projects': projetosCollection,
};