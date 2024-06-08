import { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  user: { id: string; name: string; email: string } | null;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
