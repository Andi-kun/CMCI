import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useVideoStore from "../store/useVideoStore";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Badge from "../components/Badge";
import SearchInput from "../components/SearchInput";
import { useMemo, useState } from "react";

const Videos = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const allVideos = useVideoStore((state) => state.videos);
  const removeVideo = useVideoStore((state) => state.removeVideo);
  const handleSearch = (value: string) => {
    setSearchValue(value ? value.toLowerCase() : "");
  };

  const videos = useMemo(
    () =>
      searchValue
        ? allVideos.filter(
            (video) =>
              video.title.toLowerCase().includes(searchValue) ||
              video.tags.some((tag) => tag.toLowerCase().includes(searchValue))
          )
        : allVideos,
    [allVideos, searchValue]
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3 my-5">
            <SearchInput onSearch={handleSearch} />
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Vidéo</span>
            </button>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Titre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Lien Google Drive
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Tags
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {videos.map((video) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {video.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      <a href={video.link}>{video.link}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex flex-row gap-1">
                      {video.tags.map((tag) => (
                        <Badge value={tag} />
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="py-3 px-4 flex justify-center items-center size-[46px] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={() => removeVideo(video.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
