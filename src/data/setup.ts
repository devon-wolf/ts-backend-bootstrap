import { promises as fs } from 'fs';
import path from 'path';
import { Pool } from 'pg';

export default (pool : Pool) => {
  return fs
    .readFile(
      path.join(
        path.dirname(new URL(import.meta.url).pathname),
        '..',
        'sql',
        'setup.sql'
      ),
      {
        encoding: 'utf-8',
      }
    )
    .then((sql) => pool.query(sql));
};
