
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { search } = router.query;

  return (
    <div>
      <h1>Search this : {search?search.split("+").join(" "):""}</h1>
    </div>
  );
}