import fs from 'fs/promises';
import path from 'path';

const srcDealsPath = path.join(process.cwd(), 'src/data/deals.json');
const srcGiveawaysPath = path.join(process.cwd(), 'src/data/giveaways.json');
const srcTrafficPath = path.join(process.cwd(), 'src/data/traffic.json');

const tmpDealsPath = '/tmp/deals.json';
const tmpGiveawaysPath = '/tmp/giveaways.json';
const tmpTrafficPath = '/tmp/traffic.json';

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function fetchKV(key: string, method: 'GET' | 'SET', value?: any) {
  if (!KV_URL || !KV_TOKEN) return null;
  try {
    const headers = {
      Authorization: `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json'
    };
    const command = method === 'GET' ? ['GET', key] : ['SET', key, JSON.stringify(value)];
    const res = await fetch(KV_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(command)
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (method === 'GET') {
      return data.result ? JSON.parse(data.result) : null;
    }
    return data;
  } catch {
    return null;
  }
}

// Helper to handle reading with /tmp fallback
async function readFileWithTmp(tmpPath: string, srcPath: string, defaultVal: any) {
  try {
    const data = await fs.readFile(tmpPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    try {
      const data = await fs.readFile(srcPath, 'utf-8');
      const parsed = JSON.parse(data);
      try { await fs.writeFile(tmpPath, JSON.stringify(parsed, null, 2), 'utf-8'); } catch {}
      return parsed;
    } catch {
      return defaultVal;
    }
  }
}

// Helper to handle writing to /tmp and src
async function writeFileWithTmp(tmpPath: string, srcPath: string, data: any) {
  const json = JSON.stringify(data, null, 2);
  try { await fs.writeFile(tmpPath, json, 'utf-8'); } catch {}
  try { await fs.writeFile(srcPath, json, 'utf-8'); } catch {}
}

export async function readDeals(): Promise<any[]> {
  if (KV_URL && KV_TOKEN) {
    const kvData = await fetchKV('deals', 'GET');
    if (kvData) return kvData;
    
    // Initialize KV with local/tmp data
    const localData = await readFileWithTmp(tmpDealsPath, srcDealsPath, []);
    await fetchKV('deals', 'SET', localData);
    return localData;
  }
  return readFileWithTmp(tmpDealsPath, srcDealsPath, []);
}

export async function writeDeals(deals: any[]) {
  if (KV_URL && KV_TOKEN) {
    await fetchKV('deals', 'SET', deals);
  }
  await writeFileWithTmp(tmpDealsPath, srcDealsPath, deals);
}

export async function readGiveaways(): Promise<any[]> {
  if (KV_URL && KV_TOKEN) {
    const kvData = await fetchKV('giveaways', 'GET');
    if (kvData) return kvData;
    
    const localData = await readFileWithTmp(tmpGiveawaysPath, srcGiveawaysPath, []);
    await fetchKV('giveaways', 'SET', localData);
    return localData;
  }
  return readFileWithTmp(tmpGiveawaysPath, srcGiveawaysPath, []);
}

export async function writeGiveaways(giveaways: any[]) {
  if (KV_URL && KV_TOKEN) {
    await fetchKV('giveaways', 'SET', giveaways);
  }
  await writeFileWithTmp(tmpGiveawaysPath, srcGiveawaysPath, giveaways);
}

export async function readTraffic() {
  if (KV_URL && KV_TOKEN) {
    const kvData = await fetchKV('traffic', 'GET');
    if (kvData) return kvData;
    
    const localData = await readFileWithTmp(tmpTrafficPath, srcTrafficPath, { visits: 0, clicks: 0 });
    await fetchKV('traffic', 'SET', localData);
    return localData;
  }
  return readFileWithTmp(tmpTrafficPath, srcTrafficPath, { visits: 0, clicks: 0 });
}

export async function writeTraffic(traffic: any) {
  if (KV_URL && KV_TOKEN) {
    await fetchKV('traffic', 'SET', traffic);
  }
  await writeFileWithTmp(tmpTrafficPath, srcTrafficPath, traffic);
}
