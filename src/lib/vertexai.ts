import { VertexAI } from '@google-cloud/vertexai'

// Vertex AI client singleton
let vertexAIInstance: VertexAI | null = null

export function getVertexAI(): VertexAI {
  if (!vertexAIInstance) {
    vertexAIInstance = new VertexAI({
      project: process.env.GOOGLE_CLOUD_PROJECT || 'skilled-worker-jp',
      location: process.env.VERTEX_AI_LOCATION || 'asia-northeast1',
    })
  }
  return vertexAIInstance
}

// System prompt for the chat assistant
export const SYSTEM_PROMPT = `あなたは特定技能外国人向けの就職支援アシスタントです。
以下の内容について、ユーザーの言語に合わせて丁寧に回答してください：

1. **特定技能制度について**
   - 特定技能1号・2号の違い
   - 対象となる産業分野（介護、建設、農業など）
   - 在留期間や更新について

2. **求人情報について**
   - 介護分野の仕事内容
   - 給与や待遇の目安
   - 勤務地や勤務条件

3. **手続き方法について**
   - 技能実習から特定技能への切り替え方法
   - 必要な試験（日本語能力試験、技能試験）
   - 必要書類

4. **生活サポートについて**
   - 住居サポート
   - 日本語学習サポート
   - 生活相談

回答は簡潔で分かりやすく、必要に応じて箇条書きを使用してください。
ユーザーが使用している言語で回答してください。`
