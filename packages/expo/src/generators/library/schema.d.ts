import type { ProjectNameAndRootFormat } from '@nx/devkit/src/generators/project-name-and-root-utils';
import type { Linter, LinterType } from '@nx/eslint';

/**
 * Same as the @nx/react library schema, except it removes keys: style, component, routing, appProject
 */
export interface Schema {
  name: string;
  directory?: string;
  projectNameAndRootFormat?: ProjectNameAndRootFormat;
  skipTsConfig: boolean; // default is false
  skipFormat: boolean; // default is false
  tags?: string;
  unitTestRunner: 'jest' | 'none';
  linter: Linter | LinterType; // default is eslint
  publishable?: boolean;
  buildable?: boolean;
  importPath?: string;
  js: boolean; // default is false
  strict: boolean; // default is true
  setParserOptionsProject?: boolean;
  skipPackageJson?: boolean; // default is false
  addPlugin?: boolean;
}
