export default function Service({ params }: { params: { service_id: string } }) {
  return (
    <div>
      Service: { params.service_id }
    </div>
  );
}
