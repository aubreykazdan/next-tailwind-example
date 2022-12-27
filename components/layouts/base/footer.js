import Container from "../container";

export default function Footer({}) {
  return (
    <div className="border-t">
      <Container>
        <div className="flex items-center justify-end mb-4 py-4">
          <p className="pt-4 text-sm">
            © {new Date().getFullYear()} Aubrey Kazdan
          </p>
        </div>
      </Container>
    </div>
  );
}
