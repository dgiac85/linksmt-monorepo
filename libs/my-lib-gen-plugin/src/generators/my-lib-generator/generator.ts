import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  installPackagesTask,
  Tree,
} from '@nx/devkit';
import { wrapAngularDevkitSchematic } from '@nx/devkit/ngcli-adapter';
import * as path from 'path';
import { MyLibGeneratorGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';
import { libraryGenerator as backendLibraryGenerator } from '@nx/nest';

/*export async function myLibGeneratorGenerator(
  tree: Tree,
  options: MyLibGeneratorGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    tags:[getTags(options)],
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}*/

function getLibraryGenerator(schema: MyLibGeneratorGeneratorSchema) {
  if (schema.platform === 'node') return backendLibraryGenerator;
  return libraryGenerator;
}

export  async function myLibGeneratorGenerator(host: Tree, schema: MyLibGeneratorGeneratorSchema) {
  const libGenerator = getLibraryGenerator(schema);
  await libGenerator(host, { ...schema, tags: getTags(schema) });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}


function getTags(schema: MyLibGeneratorGeneratorSchema): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

export default myLibGeneratorGenerator;
