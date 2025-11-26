# Guía de Despliegue en Vercel

## Pasos para desplegar:

### 1. Preparar Base de Datos (Neon Database)

Si aún no tienes una base de datos en Neon:

1. Ve a [Neon Console](https://console.neon.tech/)
2. Crea un nuevo proyecto
3. Copia la connection string (DATABASE_URL)

### 2. Poblar la Base de Datos

Desde tu computadora local:

```bash
# Crear archivo .env.local con tu DATABASE_URL
echo "DATABASE_URL=tu-connection-string-de-neon" > .env.local

# Generar las migraciones de Drizzle
npm run db:generate

# Aplicar las migraciones
npm run db:push

# Poblar la base de datos con datos de ejemplo
npm run db:seed
```

### 3. Desplegar en Vercel

#### Opción A: Desde la interfaz web

1. Ve a [Vercel](https://vercel.com)
2. Click en "Add New Project"
3. Importa el repositorio: `Alejandro2097/e-commerce`
4. Configura las variables de entorno:
   - `DATABASE_URL`: Tu connection string de Neon
   - `BETTER_AUTH_SECRET`: Genera uno con `openssl rand -base64 32`
   - `NODE_ENV`: `production`
5. Click en "Deploy"

#### Opción B: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Agregar variables de entorno
vercel env add DATABASE_URL
vercel env add BETTER_AUTH_SECRET
vercel env add NODE_ENV

# Desplegar a producción
vercel --prod
```

### 4. Variables de Entorno Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | Connection string de Neon | `postgresql://user:pass@host/db` |
| `BETTER_AUTH_SECRET` | Secret key para autenticación | Generar con `openssl rand -base64 32` |
| `NODE_ENV` | Ambiente de ejecución | `production` |

### 5. Verificar Despliegue

Una vez desplegado, tu aplicación estará disponible en:
- `https://your-project.vercel.app`

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Ver base de datos
npm run db:studio

# Regenerar datos de ejemplo
npm run db:seed
```

## Notas Importantes

- La base de datos solo necesita poblarse **UNA VEZ**
- No ejecutes `db:seed` en producción si ya tienes datos
- Las migraciones se aplican automáticamente en Vercel
- Los archivos estáticos se copian a `static/uploads/shoes/` durante el seed
