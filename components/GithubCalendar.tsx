'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';

export default function GithubCalendar() {
  const [mounted, setMounted] = useState(false);
  const [totalContributions, setTotalContributions] = useState<number>(648);
  const [liveContributionsMap, setLiveContributionsMap] = useState<
    Record<string, { count: number; level: number }>
  >({});

  const fetchLiveContributions = useCallback(() => {
    fetch(`/api/github-contributions?t=${Date.now()}`, {
      cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.total && data.total['2026']) {
          setTotalContributions(data.total['2026']);
        }

        if (
          data &&
          Array.isArray(data.contributions) &&
          data.contributions.length > 0
        ) {
          const map: Record<string, { count: number; level: number }> = {};
          data.contributions.forEach(
            (item: { date: string; count: number; level: number }) => {
              map[item.date] = { count: item.count, level: item.level };
            }
          );
          setLiveContributionsMap(map);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setMounted(true);
    fetchLiveContributions();

    const interval = setInterval(() => {
      fetchLiveContributions();
    }, 5000);

    const handleFocus = () => fetchLiveContributions();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [fetchLiveContributions]);

  // High-contrast Monochromatic Dark Theme where 1 commit is clearly distinct from 0 commits
  const customTheme = {
    dark: [
      '#161618', // level 0: empty tile
      '#44444c', // level 1: 1-3 commits (clearly visible contrast!)
      '#71717a', // level 2: 4-7 commits
      '#d4d4d8', // level 3: 8-14 commits
      '#ffffff', // level 4: 15+ commits
    ],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };

  return (
    <div className="space-y-3 pt-8 pb-2 border-t border-neutral-900/80 my-8 w-full flex flex-col items-center">
      {/* Heatmap Grid - Perfectly Centered Symmetrically */}
      <div className="w-full overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
        {mounted ? (
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <GitHubCalendar
              username="codewithdevu"
              year={2026}
              colorScheme="dark"
              fontSize={12}
              blockSize={13}
              blockMargin={4}
              theme={customTheme}
              showWeekdayLabels={false}
              showTotalCount={false}
              showColorLegend={false}
              transformData={(data) => {
                return data.map((day) => {
                  const liveEntry = liveContributionsMap[day.date];
                  let finalCount = day.count;
                  let level: 0 | 1 | 2 | 3 | 4 = 0;

                  if (liveEntry !== undefined) {
                    finalCount = liveEntry.count;
                  }

                  if (finalCount >= 15) level = 4;
                  else if (finalCount >= 8) level = 3;
                  else if (finalCount >= 4) level = 2;
                  else if (finalCount >= 1) level = 1;

                  return {
                    ...day,
                    count: finalCount,
                    level,
                  };
                });
              }}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  'data-tooltip-id': 'github-tooltip',
                  'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                })
              }
            />
            <Tooltip
              id="github-tooltip"
              style={{
                backgroundColor: '#09090b',
                color: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #27272a',
                fontSize: '12px',
                fontWeight: '500',
                fontFamily: 'var(--font-mono)',
              }}
            />
          </div>
        ) : (
          <div className="w-full h-32 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Single Clean Bottom Bar Perfectly Centered & Aligned 1:1 with ayushworks.com */}
      <div className="w-full max-w-[895px] flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
        <span>{totalContributions} activities in 2026</span>
        <div className="flex items-center gap-1.5 text-xs">
          <span>Less</span>
          <span className="w-3 h-3 rounded-[2px] bg-[#161618] inline-block" />
          <span className="w-3 h-3 rounded-[2px] bg-[#44444c] inline-block" />
          <span className="w-3 h-3 rounded-[2px] bg-[#71717a] inline-block" />
          <span className="w-3 h-3 rounded-[2px] bg-[#d4d4d8] inline-block" />
          <span className="w-3 h-3 rounded-[2px] bg-[#ffffff] inline-block" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
