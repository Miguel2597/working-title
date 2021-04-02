const projectList = [
  {
    title: 'Twitch clip/VOD sync',
    site: 'https://chrome.google.com/webstore/detail/twitch-clipvod-sync/iolfhmhipbbpacmhhffkjelgkadnffid',
    github: 'https://github.com/Miguel2597/twitch-clip-vod-sync',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
    desc: <p>Chrome extension that automates the process of finding another streamers perspective when watching a clip/VOD on Twitch, where two or more streamers are playing at the same time.</p>,
    images: [
      'https://i.gyazo.com/0440329c5ad49ae45b727b0e14e4b7c1.jpg',
      'https://i.gyazo.com/8e94cc3f5c6a2aac7056b41f12ea98a1.jpg',
      'https://i.gyazo.com/60bc88198d8d501dc82ee6833b415336.jpg'
    ],
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
    site: 'http://35.230.153.152',
    github: '',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Python', 'Flask', 'MySQL'],
    desc: <p>Web application that uses text mining techniques to display the necessary information to visualise the evolution of <a href="https://www.praxisnetwork.eu" target="_blank" rel="noopener noreferrer">Praxis Network</a> internships market. No credentials needed to try out the demo.</p>,
    images: [],
    full_desc: 
    <div>
    </div>
  },
]

export default projectList