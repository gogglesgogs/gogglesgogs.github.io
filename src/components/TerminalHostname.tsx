function TerminalHostname() {
  return (
    <h1 className="flex font-bold">
      <span>guest</span>
      <span className="text-[#404040] dark:text-[#d4d4d4]">@</span>
      <span>{window.location.hostname}</span>
      <span className="text-[#404040] dark:text-[#d4d4d4]">:~$</span>
    </h1>
  );
}

export default TerminalHostname;
