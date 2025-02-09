
const categories: [string, string[][]][] = [
  ['Paintings',
    [
      [
        'Painting 1',
        '/Painting1/image1.png',
      ],
      [
        'Painting 2',
        '/Painting2/image1.png',
      ],
      [
        'Painting 3',
        '/Painting3/image1.png',
      ],
      [
        'Painting 4',
        '/Painting4/image1.png',
      ],
      [
        'Painting 5',
        '/Painting5/image1.png',
      ],
      [
        'Painting 6',
        '/Painting6/image1.png',
      ],
      [
        'Painting 7',
        '/Painting7/image1.png',
      ],
      [
        'Painting 8',
        '/Painting8/image1.png',
      ],
    ]
  ],
  ['Poetry',
    [
     [
        'Poetry 1',
        '/Poetry1/image1.png',
      ],
      [
        'Poetry 2',
        '/Poetry2/image1.png',
      ],
      [
        'Poetry 3',
        '/Poetry3/image1.png',
      ],
      [
        'Poetry 4',
        '/Poetry4/image1.png',
      ],
      [
        'Poetry 5',
        '/Poetry5/image1.png',
      ],
      [
        'Poetry 6',
        '/Poetry6/image1.png',
      ],
      [
        'Poetry 7',
        '/Poetry7/image1.png',
      ],
    ]
  ],
  ['Photography',
    [
      [
        'Photography 1', 
        '/Photography1/image1.png',
      ],
      [
        'Photography 2',
        '/Photography2/image1.png', 
      ],
      [
        'Photography 3',
        '/Photography3/image1.png',
      ],
    ]
  ],
  ['Videos',
    [
      [
        'Video 1',
        '/Video1/image1.png',
      ],
      [
        'Video 2',
        '/Video2/image1.png',
      ],
      [
        'Video 3',
        '/Video3/image1.png',
      ],
      [
        'Video 4',
        '/Video4/image1.png',
      ],
      [
        'Video 5',
        '/Video5/image1.png',
      ],
    ]
  ]
]
export default function Works() {
    return (
      <div className="min-h-max">
        <div className="hidden lg:grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6 lg:px-28">
          {categories.map(([category, items], index) => (
            <div key={index} className="flex justify-center">
              <div>
              <div>{category}/<sup className="text-[#AE2D29]">&nbsp;0</sup></div>
              <ul className="pl-8 lg:pl-20">
                {items.map((item: string | string[], index: number) => (
                  <li className="font-bold p-1 text-xl" key={index}>
                    {Array.isArray(item) ? item[0] : item}
                    <sup className="text-[#AE2D29] font-thin">&nbsp;{index + 1}</sup>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
        <div className="lg:hidden w-full px-8">
        {categories.map(([category, items], index) => (
            <div key={index}>
            <div>{category}/<sup className="text-[#AE2D29]">&nbsp;0</sup></div>
            <ul className="pl-8 lg:pl-20">
              {items.map((item: string | string[], index: number) => (
                <li className="font-bold p-1 text-xl" key={index}>
                  {Array.isArray(item) ? item[0] : item}
                  <sup className="text-[#AE2D29] font-thin">&nbsp;{index + 1}</sup>
                </li>
              ))}
            </ul>
          </div>
          ))}
        </div>
      </div>
    );
  }

  