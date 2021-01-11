import { useCallback, useEffect, useState } from 'react';
import { loadTopic } from '../../queries';

export const useTopicsApi = () => {
  const [selectedTopic, setSelectedTopic] = useState('react');
  const [topicsHistory, addToHistory] = useState(['react']);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    loadTopic(selectedTopic)
      .then((x) => {
        setData(x.data.topic);
        setIsLoading(false);
      });
  }, [selectedTopic]);

  const handleSelect = useCallback((name) => {
    addToHistory((topics) => {
      const index = topics.findIndex((x) => x === name);
      if (index === -1) {
        return [...topics, name];
      }
      return [...topics].slice(0, index + 1);
    });
    setSelectedTopic(name);
  }, [setSelectedTopic, addToHistory]);

  return {
    handleSelect,
    isLoading,
    data,
    topicsHistory,
    selectedTopic,
  };
};
