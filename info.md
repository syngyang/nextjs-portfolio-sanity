https://www.youtube.com/watch?v=l0pkuHopo8A

npx create-next-app@latest

npm i -D @tailwindcss/typography @tailwindcss/forms prisma


max-w-6xl	max-width: 72rem; /* 1152px */

space-y-1 :가로는 full 이고, 세로는 갭이 1

### SVG Icons
https://heroicons.com/
#### bar-3
SVG 용과 JSX 용 있음. React는 JSX 용 copy

#### "divide-y divide-gray-100 dark:divide-gray-700
Add borders between horizontal elements using the divide-x-{width} utilities.

#### leading-3
leading-3	line-height: .75rem; /* 12px */

leading-none	line-height: 1;
leading-tight	line-height: 1.25;

#### letter spacing
tracking-tighter	letter-spacing: -0.05em;
tracking-tight	letter-spacing: -0.025em;
tracking-normal	letter-spacing: 0em;
tracking-wide	letter-spacing: 0.025em;
tracking-wider	letter-spacing: 0.05em;
tracking-widest	letter-spacing: 0.1em;

### React SVG ICONS
https://reactsvgicons.com/

### PlanetScale

npx prisma db push

### sanity
npm create sanity@latest -- --template get-started --project egmk0kaz --dataset production --provider github

npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
최종안 :
npm create sanity@latest -- --template clean --create-project "portfolio-nextjs" --dataset production 


✔ Creating dataset
✔ Fetching existing projects
? Would you like to add configuration files for a Sanity project in this Next.js folder? No
? Project output path: D:\next134\portfolio-sanity/sanity
? Do you want to use TypeScript? Yes
✔ Bootstrapping files from template                                                                                       
✔ Resolving latest module versions
✔ Creating default project files
? Package manager to use for installing dependencies? npm
Running 'npm install --legacy-peer-deps'
#### sanity 끝
cd sanity && npm run dev

schemas/ project.ts 만들고
export default {
  name: 'project',
  title:'Project',
  type:'document',
  fields:[
    {
      name:'title',
      type:'string',
      title:'Title',
    },
    {
      name: 'overview',
      type:'string',
      title:'Small Overview',
    },
    {
      name: 'image',
      type: 'image',
      title:'Image'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link'
    }

  ]
}
***필드는 꼭 복수 (fields)
- portfolio-sanity/Project ID: 6rl3lkv7
- dataset 은 production ( Dataset/production)
- schemas/index.ts 안에 입력
- 새니티 사이트에 Content/Project 생김 


바깥메인에 아래 설치
npm i next-sanity

메인에 lib 폴더와 lib/sanity.ts 파일 만들고
import { createClient } from 'next-sanity';

### query 문은
http://localhost:3333/vision