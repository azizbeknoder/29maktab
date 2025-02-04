import { leaderData } from '@/data/Leader'
export default function Leader() {
  return (
    <div className="w-full h-full my-14 ">
      <div className="px-4 md:px-7">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
          {leaderData.map((e) => {
            return (
              <li key={e.id} className="mb-10 md:mb-0 ">
                <a href={`/rahbarlar/${e.id}`}>
                  <div>
                    <img
                      src="/leader/Photo.jpg"
                      alt="Photo"
                      className="rounded-xl"
                    />
                    <h2 className="font-bold text-3xl  ">{e.fullname}</h2>
                    <p className="text-golder text-xl">{e.position}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
