export default function Gift({ params }: { params: { gift_id: string } }) {
  return (
    <div>
      Gift: { params.gift_id }
    </div>
  );
}
