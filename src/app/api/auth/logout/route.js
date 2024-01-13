export default async function GET(req, res) {
  try {
    const response = res.json({
      message: "Logout successful",
      success: true,
    });
    res.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
}
