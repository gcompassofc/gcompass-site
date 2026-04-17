import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './src/sanity/schemaTypes'
import {projectId, dataset} from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  title: 'G Compass Studio',

  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: '2024-04-17'}),
  ],

  schema,
})
