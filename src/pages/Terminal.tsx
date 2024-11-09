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
    <p className="whitespace-pre">{result}</p>
  </>
);

function Terminal() {
  const [historyItems, setHistoryItems] = useState<JSX.Element[]>([]);
  const [command, setCommand] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHistoryItems((prevItems): JSX.Element[] => [
        ...prevItems,
        <HistoryItem
          key={Math.random()}
          command={command}
          // implement logic
          result={command}
        />,
      ]);
      setCommand('');
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById('root')!;

    const prevClassesBody = document.body.classList;
    const prevClassesRoot = rootElement.classList;

    document.body.classList.remove(...prevClassesBody);
    rootElement.classList.remove(...prevClassesRoot);

    document.body.classList.add('min-h-screen', 'font-mono', 'antialiased');
    rootElement.classList.add('h-screen', 'p-4');

    if (inputRef.current) inputRef.current.focus();

    return () => {
      document.body.classList.remove(
        'min-h-screen',
        'font-mono',
        'antialiased',
      );
      rootElement.classList.remove('h-screen', 'p-4');

      document.body.classList.add(...prevClassesBody);
      rootElement.classList.add(...prevClassesRoot);
    };
  }, []);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ visible, hidden }}
      className="h-full overflow-auto rounded-md border-2 border-[#404040] p-4 text-xs sm:text-sm md:text-base dark:border-[#d4d4d4]"
    >
      <div>{historyItems}</div>
      <div className="flex flex-col md:flex-row">
        <Hostname />
        <div className="flex">
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
