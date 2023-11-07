import { useCallback, useState } from "react";

export default function useProcessando() {
  const [processando, setProcessando] = useState<boolean>(false);

  const iniciarProcessamento = useCallback(function () {
    setProcessando(true);
  }, []);

  const encerrarProcessamento = useCallback(function () {
    setProcessando(false);
  }, []);

  return {
    processando,
    iniciarProcessamento,
    encerrarProcessamento,
  };
}
