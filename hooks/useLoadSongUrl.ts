import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

/**
 * useSupabaseClient() could be use in every context
 *  where useSessionContext() was used
 * Used here as we don't need to worry about authentication
 *  when fetching the actual song
 * In every other instance, authencation is and could
 * be necessary, so useSessionContext() is preferred
 */
const useLoadSong = (song: Song) => {
    const supabaseClient = useSupabaseClient();

    if(!song){
        return '';
    }

    const {data: songData} = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path)

    return songData.publicUrl
}

export default useLoadSong;