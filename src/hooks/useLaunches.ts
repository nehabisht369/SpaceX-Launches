import { useState, useEffect, useCallback } from "react";
import { fetchLaunches } from "../api/spacex";

export const useLaunches = () => {
  const [launches, setLaunches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadLaunches = useCallback(
    async (currentPage: number, isRefreshing = false) => {
      try {
        if (isRefreshing) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        const newLaunches = await fetchLaunches(currentPage);

        if (newLaunches.length === 0) {
          setHasMore(false);
        } else {
          setLaunches((prev) =>
            currentPage === 1 ? newLaunches : [...prev, ...newLaunches]
          );
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (isRefreshing) {
          setRefreshing(false);
        } else {
          setLoading(false);
        }
      }
    },
    []
  );

  const refresh = useCallback(() => {
    setPage(1);
    setHasMore(true);
    loadLaunches(1, true);
  }, [loadLaunches]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
      loadLaunches(page + 1);
    }
  }, [loading, hasMore, page, loadLaunches]);

  useEffect(() => {
    loadLaunches(page);
  }, []);

  return { launches, loading, error, refreshing, hasMore, refresh, loadMore };
};
