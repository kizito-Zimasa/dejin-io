const tokenBuckets = new Map();

export function rateLimit(identifier, limit = 10, windowMs = 60000) {
  const now = Date.now();

  if (!tokenBuckets.has(identifier)) {
    tokenBuckets.set(identifier, {
      tokens: limit,
      lastRefill: now,
    });
  }

  const bucket = tokenBuckets.get(identifier);
  const timePassed = now - bucket.lastRefill;
  const tokensToAdd = (timePassed / windowMs) * limit;

  bucket.tokens = Math.min(limit, bucket.tokens + tokensToAdd);
  bucket.lastRefill = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return { allowed: true, remaining: Math.floor(bucket.tokens) };
  }

  return { allowed: false, remaining: 0, retryAfter: Math.ceil((1 - bucket.tokens) * (windowMs / limit)) };
}
