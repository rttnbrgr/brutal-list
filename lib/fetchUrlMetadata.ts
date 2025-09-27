export function extractTitle(html: string): string | null {
  // Try Open Graph title first
  let match = html.match(
    /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i,
  );
  if (match) return match[1];

  // Try Twitter title
  match = html.match(
    /<meta\s+name=["']twitter:title["']\s+content=["']([^"']+)["']/i,
  );
  if (match) return match[1];

  // Fall back to regular title tag
  match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (match) return match[1].trim();

  return null;
}

export function extractDescription(html: string): string | null {
  // Try Open Graph description first
  let match = html.match(
    /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i,
  );
  if (match) return match[1];

  // Try Twitter description
  match = html.match(
    /<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i,
  );
  if (match) return match[1];

  // Try standard meta description
  match = html.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i,
  );
  if (match) return match[1];

  return null;
}

export function extractFavicon(html: string, baseUrl: URL): string | null {
  // Try various favicon patterns
  const faviconPatterns = [
    // Standard favicon
    /<link\s+rel=["']icon["']\s+href=["']([^"']+)["']/i,
    /<link\s+href=["']([^"']+)["']\s+rel=["']icon["']/i,

    // Shortcut icon
    /<link\s+rel=["']shortcut icon["']\s+href=["']([^"']+)["']/i,
    /<link\s+href=["']([^"']+)["']\s+rel=["']shortcut icon["']/i,

    // Apple touch icon (often high quality)
    /<link\s+rel=["']apple-touch-icon["']\s+href=["']([^"']+)["']/i,
    /<link\s+href=["']([^"']+)["']\s+rel=["']apple-touch-icon["']/i,
  ];

  for (const pattern of faviconPatterns) {
    const match = html.match(pattern);
    if (match) {
      const faviconPath = match[1];

      // Convert relative URLs to absolute
      if (faviconPath.startsWith("http")) {
        return faviconPath;
      } else if (faviconPath.startsWith("//")) {
        return `${baseUrl.protocol}${faviconPath}`;
      } else if (faviconPath.startsWith("/")) {
        return `${baseUrl.origin}${faviconPath}`;
      } else {
        return `${baseUrl.origin}/${faviconPath}`;
      }
    }
  }

  // Default fallback to /favicon.ico
  return `${baseUrl.origin}/favicon.ico`;
}

// Simple async function for direct HTTP requests
export async function fetchUrlMetadata(url: string) {
  try {
    // Validate URL format
    const validUrl = new URL(url);

    // Fetch the HTML content
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; MetadataBot/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();

    // Extract metadata using regex patterns
    const title = extractTitle(html);
    const description = extractDescription(html);
    const favicon = extractFavicon(html, validUrl);

    return {
      url: validUrl.toString(),
      title,
      description,
      favicon,
      success: true,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      url: url,
      title: null,
      description: null,
      favicon: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
