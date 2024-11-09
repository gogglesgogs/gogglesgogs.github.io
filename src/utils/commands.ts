export const commands: Record<string, (args: string[]) => string> = { 
  help: () => 'Available commands: ' + Object.keys(commands).join(', '),
  clear: () => '',
};
