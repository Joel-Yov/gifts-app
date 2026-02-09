export interface OptionsSidebar {
    optionName: string;
    icono: string;
    optionDescription: string;
    ruta: string;
    params?: Record<string, string | number>; //PARA RUTAS DINAMICAS; ejemplo /reports/123
}