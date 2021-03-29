import image1 from '../assets/twitch-clip-vod-sync-1.jpg'
import image2 from '../assets/twitch-clip-vod-sync-2.jpg'
import image3 from '../assets/twitch-clip-vod-sync-3.jpg'

const projectList = [
    {
        title: 'Twitch clip/VOD sync',
        site: 'https://chrome.google.com/webstore/detail/twitch-clipvod-sync/iolfhmhipbbpacmhhffkjelgkadnffid',
        github: 'https://github.com/Miguel2597/twitch-clip-vod-sync',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'Chrome extension that synchronises a Twitch clip/VOD to another streamers VOD if that streamer was live at the exact moment in time of the clip/VOD.',
        images: [image1, image2, image3],
        full_desc: 
        <div>
            <p>This extension can be used anywhere as long as you provide a valid clip/VOD URL. If you have a clip/VOD open in your current tab, the extension will automatically fill in the URL field for you.</p>
            <p style={{fontWeight: 'bold'}}>Valid clip URLs examples</p>
            <p>https://clips.twitch.tv/ObliqueOddCougarFunRun-GF9H5eK6aSyFbT8U</p>
            <p>clips.twitch.tv/ObliqueOddCougarFunRun-GF9H5eK6aSyFbT8U</p>
            <p>twitch.tv/lirik/clip/EphemeralMuddyPanPeteZarollTie-D-ojcu-Nk40osS0S</p>
            <p style={{fontWeight: 'bold'}}>Valid VOD URLs examples</p>
            <p>VOD URLs must always include a timestamp with hours, minutes and seconds, even if they are 0.</p>
            <p>https://www.twitch.tv/videos/934247376?t=10h29m46s</p>
            <p>www.twitch.tv/videos/934247376?t=0h15m12s</p>
            <p>twitch.tv/videos/934247376?t=1h0m10s</p>
        </div>
    },
    {
        title: 'Praxis Market Drift',
        site: '',
        github: '',
        technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Python', 'Flask', 'MySQL'],
        desc: 'Master thesis',
        images: [],
        full_desc: 
        <div>
        </div>
    },
]

export default projectList