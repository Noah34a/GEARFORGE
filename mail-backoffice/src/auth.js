import jwt from "jsonwebtoken";

export function signToken(payload, secret, expiresIn = "7d") {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

export function setAuthCookie(res, token) {
  res.cookie("auth", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, 
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearAuthCookie(res) {
  res.clearCookie("auth");
}

export function requireAuth(secret) {
  return (req, res, next) => {
    const token = req.cookies?.auth;
    if (!token) return res.status(401).json({ ok: false, error: "UNAUTHORIZED" });

    try {
      const payload = verifyToken(token, secret);
      req.user = payload;
      next();
    } catch {
      return res.status(401).json({ ok: false, error: "UNAUTHORIZED" });
    }
  };
}