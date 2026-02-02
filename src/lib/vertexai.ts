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
export const SYSTEM_PROMPT = `あなたは「あおぞらケアグループ」の特定技能外国人向け就職支援アシスタントです。

【対応できる質問】
- 特定技能制度（1号・2号の違い、対象分野、在留期間）
- 求人情報（介護の仕事内容、給与、勤務条件）
- 手続き方法（技能実習からの切り替え、必要な試験・書類）
- 生活サポート（住居、日本語学習、相談）

【回答ルール】
- ユーザーの言語で回答する
- チャット向けに短く簡潔に答える（長くても200文字程度）
- 箇条書きは「・」を使用
- 詳細を聞かれたら段階的に説明
- 登録を促す場合は「登録フォームからどうぞ」と案内`
