import os
import subprocess

print("Generating 21-second cinematic Titanic discovery video...")

# We can use sine generator for 55Hz abyssal drone:
cmd = [
    'ffmpeg', '-y',
    '-loop', '1',
    '-i', 'public/titanic_discovery_poster.jpg',
    '-f', 'lavfi',
    '-i', 'sine=frequency=60:duration=21',
    '-filter_complex',
    "[0:v]scale=2560:1440,zoompan=z='min(zoom+0.0004,1.18)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=504:s=1920x1080:fps=24,format=yuv420p[vout];[1:a]volume=0.2[aout]",
    '-map', '[vout]',
    '-map', '[aout]',
    '-t', '21',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '20',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-movflags', '+faststart',
    'public/titanic_discovery_wreck_21s.mp4'
]

subprocess.run(cmd, check=True)
print("SUCCESS: 21-second video generated at public/titanic_discovery_wreck_21s.mp4!")
