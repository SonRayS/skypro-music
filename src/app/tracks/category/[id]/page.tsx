import BodyGetTrack from "@/app/components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getPlaylist } from "@/app/components/api/getPlaylistId/getPlaylistId";

type paramsCategory = {
    params: { id: string };
};

export default async function CategoryPage({ params }: paramsCategory) {
    const tracksData = await getPlaylist(params.id);

    return (
        <>
            <BodyGetTrack tracksData={tracksData} />
        </>
    );
}
