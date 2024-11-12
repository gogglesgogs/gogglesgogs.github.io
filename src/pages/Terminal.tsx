import { useEffect, useState, useRef } from 'react';
import Hostname from '../components/Hostname';
import { motion } from 'framer-motion';
import { commands } from '../utils/commands';

type HistoryItem = {
  command: string;
  result: string;
};

const visible = { opacity: 1, transition: { duration: 0.5 } };
const hidden = { opacity: 0, transition: { duration: 0.5 } };

const HistoryItem = ({ command, result }: HistoryItem): JSX.Element => (
  <>
    <div className="flex flex-col md:flex-row">
      <Hostname />
      <div className="flex">
        <p className="visible md:hidden">❯</p>
        <p className="px-2">{command}</p>
      </div>
    </div>
    {result ? <p className="whitespace-pre">{result}</p> : null}
  </>
);

function saveHistory(saveItems: { command: string; result: string }[]) {
  localStorage.setItem('history', JSON.stringify(saveItems));
}

function Terminal() {
  const [history, setHistory] = useState<{ command: string; result: string }[]>(
    () => {
      localStorage.getItem('history');
      return JSON.parse(localStorage.getItem('history') || '[]');
    },
  );
  const [command, setCommand] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (command === '') {
        setHistory((prevItems) => [...prevItems, { command: '', result: '' }]);
        saveHistory([...history, { command: '', result: '' }]);
        setCommand('');
        return;
      }
      let result = '';
      const commandFunc = commands[command];
      if (commandFunc) {
        result = commandFunc();
      } else {
        result = `${command}: command not found`;
      }
      setHistory((prevItems) => [...prevItems, { command, result }]);
      saveHistory([...history, { command: '', result: '' }]);
      setCommand('');
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ visible, hidden }}
      className="h-full overflow-auto rounded-md border-2 border-[#404040] p-4 font-mono text-xs sm:text-sm md:text-base dark:border-[#d4d4d4]"
    >
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <HistoryItem command={item.command} result={item.result} />
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row">
        <Hostname />
        <div className="flex flex-grow">
          <p className="visible md:hidden">❯</p>
          <input
            ref={inputRef}
            id="command-input"
            name="command-input"
            aria-label="Command input"
            className="w-full bg-transparent px-2 outline-none"
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
    </motion.main>
  );
}

export default Terminal;
