
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model DocumentChunk
 * 
 */
export type DocumentChunk = $Result.DefaultSelection<Prisma.$DocumentChunkPayload>
/**
 * Model WebsitePage
 * 
 */
export type WebsitePage = $Result.DefaultSelection<Prisma.$WebsitePagePayload>
/**
 * Model CrawlJob
 * 
 */
export type CrawlJob = $Result.DefaultSelection<Prisma.$CrawlJobPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentChunk`: Exposes CRUD operations for the **DocumentChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentChunks
    * const documentChunks = await prisma.documentChunk.findMany()
    * ```
    */
  get documentChunk(): Prisma.DocumentChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websitePage`: Exposes CRUD operations for the **WebsitePage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsitePages
    * const websitePages = await prisma.websitePage.findMany()
    * ```
    */
  get websitePage(): Prisma.WebsitePageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crawlJob`: Exposes CRUD operations for the **CrawlJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlJobs
    * const crawlJobs = await prisma.crawlJob.findMany()
    * ```
    */
  get crawlJob(): Prisma.CrawlJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    DocumentChunk: 'DocumentChunk',
    WebsitePage: 'WebsitePage',
    CrawlJob: 'CrawlJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "documentChunk" | "websitePage" | "crawlJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      DocumentChunk: {
        payload: Prisma.$DocumentChunkPayload<ExtArgs>
        fields: Prisma.DocumentChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          findFirst: {
            args: Prisma.DocumentChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          findMany: {
            args: Prisma.DocumentChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[]
          }
          create: {
            args: Prisma.DocumentChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          createMany: {
            args: Prisma.DocumentChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[]
          }
          delete: {
            args: Prisma.DocumentChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          update: {
            args: Prisma.DocumentChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          deleteMany: {
            args: Prisma.DocumentChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[]
          }
          upsert: {
            args: Prisma.DocumentChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentChunkPayload>
          }
          aggregate: {
            args: Prisma.DocumentChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentChunk>
          }
          groupBy: {
            args: Prisma.DocumentChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentChunkCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentChunkCountAggregateOutputType> | number
          }
        }
      }
      WebsitePage: {
        payload: Prisma.$WebsitePagePayload<ExtArgs>
        fields: Prisma.WebsitePageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsitePageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsitePageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          findFirst: {
            args: Prisma.WebsitePageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsitePageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          findMany: {
            args: Prisma.WebsitePageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>[]
          }
          create: {
            args: Prisma.WebsitePageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          createMany: {
            args: Prisma.WebsitePageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsitePageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>[]
          }
          delete: {
            args: Prisma.WebsitePageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          update: {
            args: Prisma.WebsitePageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          deleteMany: {
            args: Prisma.WebsitePageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsitePageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsitePageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>[]
          }
          upsert: {
            args: Prisma.WebsitePageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePagePayload>
          }
          aggregate: {
            args: Prisma.WebsitePageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsitePage>
          }
          groupBy: {
            args: Prisma.WebsitePageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsitePageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsitePageCountArgs<ExtArgs>
            result: $Utils.Optional<WebsitePageCountAggregateOutputType> | number
          }
        }
      }
      CrawlJob: {
        payload: Prisma.$CrawlJobPayload<ExtArgs>
        fields: Prisma.CrawlJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          findFirst: {
            args: Prisma.CrawlJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          findMany: {
            args: Prisma.CrawlJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          create: {
            args: Prisma.CrawlJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          createMany: {
            args: Prisma.CrawlJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrawlJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          delete: {
            args: Prisma.CrawlJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          update: {
            args: Prisma.CrawlJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          deleteMany: {
            args: Prisma.CrawlJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrawlJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          upsert: {
            args: Prisma.CrawlJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          aggregate: {
            args: Prisma.CrawlJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlJob>
          }
          groupBy: {
            args: Prisma.CrawlJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlJobCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    documentChunk?: DocumentChunkOmit
    websitePage?: WebsitePageOmit
    crawlJob?: CrawlJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    documentChunks: number
    websitePages: number
    crawlJobs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentChunks?: boolean | CompanyCountOutputTypeCountDocumentChunksArgs
    websitePages?: boolean | CompanyCountOutputTypeCountWebsitePagesArgs
    crawlJobs?: boolean | CompanyCountOutputTypeCountCrawlJobsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDocumentChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentChunkWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountWebsitePagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsitePageWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCrawlJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    slug: string | null
    website: string | null
    description: string | null
    logoUrl: string | null
    apiKey: string | null
    apiKeyCreatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    slug: string | null
    website: string | null
    description: string | null
    logoUrl: string | null
    apiKey: string | null
    apiKeyCreatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    slug: number
    website: number
    description: number
    logoUrl: number
    apiKey: number
    apiKeyCreatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    slug?: true
    website?: true
    description?: true
    logoUrl?: true
    apiKey?: true
    apiKeyCreatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    slug?: true
    website?: true
    description?: true
    logoUrl?: true
    apiKey?: true
    apiKeyCreatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    slug?: true
    website?: true
    description?: true
    logoUrl?: true
    apiKey?: true
    apiKeyCreatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    userId: string
    name: string
    slug: string
    website: string | null
    description: string | null
    logoUrl: string | null
    apiKey: string
    apiKeyCreatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    slug?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    apiKey?: boolean
    apiKeyCreatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentChunks?: boolean | Company$documentChunksArgs<ExtArgs>
    websitePages?: boolean | Company$websitePagesArgs<ExtArgs>
    crawlJobs?: boolean | Company$crawlJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    slug?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    apiKey?: boolean
    apiKeyCreatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    slug?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    apiKey?: boolean
    apiKeyCreatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    slug?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    apiKey?: boolean
    apiKeyCreatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "slug" | "website" | "description" | "logoUrl" | "apiKey" | "apiKeyCreatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentChunks?: boolean | Company$documentChunksArgs<ExtArgs>
    websitePages?: boolean | Company$websitePagesArgs<ExtArgs>
    crawlJobs?: boolean | Company$crawlJobsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      documentChunks: Prisma.$DocumentChunkPayload<ExtArgs>[]
      websitePages: Prisma.$WebsitePagePayload<ExtArgs>[]
      crawlJobs: Prisma.$CrawlJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      slug: string
      website: string | null
      description: string | null
      logoUrl: string | null
      apiKey: string
      apiKeyCreatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentChunks<T extends Company$documentChunksArgs<ExtArgs> = {}>(args?: Subset<T, Company$documentChunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    websitePages<T extends Company$websitePagesArgs<ExtArgs> = {}>(args?: Subset<T, Company$websitePagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crawlJobs<T extends Company$crawlJobsArgs<ExtArgs> = {}>(args?: Subset<T, Company$crawlJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly userId: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly apiKey: FieldRef<"Company", 'String'>
    readonly apiKeyCreatedAt: FieldRef<"Company", 'DateTime'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.documentChunks
   */
  export type Company$documentChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    where?: DocumentChunkWhereInput
    orderBy?: DocumentChunkOrderByWithRelationInput | DocumentChunkOrderByWithRelationInput[]
    cursor?: DocumentChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentChunkScalarFieldEnum | DocumentChunkScalarFieldEnum[]
  }

  /**
   * Company.websitePages
   */
  export type Company$websitePagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    where?: WebsitePageWhereInput
    orderBy?: WebsitePageOrderByWithRelationInput | WebsitePageOrderByWithRelationInput[]
    cursor?: WebsitePageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsitePageScalarFieldEnum | WebsitePageScalarFieldEnum[]
  }

  /**
   * Company.crawlJobs
   */
  export type Company$crawlJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    where?: CrawlJobWhereInput
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    cursor?: CrawlJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model DocumentChunk
   */

  export type AggregateDocumentChunk = {
    _count: DocumentChunkCountAggregateOutputType | null
    _avg: DocumentChunkAvgAggregateOutputType | null
    _sum: DocumentChunkSumAggregateOutputType | null
    _min: DocumentChunkMinAggregateOutputType | null
    _max: DocumentChunkMaxAggregateOutputType | null
  }

  export type DocumentChunkAvgAggregateOutputType = {
    chunkIndex: number | null
  }

  export type DocumentChunkSumAggregateOutputType = {
    chunkIndex: number | null
  }

  export type DocumentChunkMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    botConfigId: string | null
    sourceType: string | null
    sourceId: string | null
    sourceUrl: string | null
    title: string | null
    content: string | null
    contentHash: string | null
    chunkIndex: number | null
    anchor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentChunkMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    botConfigId: string | null
    sourceType: string | null
    sourceId: string | null
    sourceUrl: string | null
    title: string | null
    content: string | null
    contentHash: string | null
    chunkIndex: number | null
    anchor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentChunkCountAggregateOutputType = {
    id: number
    companyId: number
    botConfigId: number
    sourceType: number
    sourceId: number
    sourceUrl: number
    title: number
    content: number
    contentHash: number
    chunkIndex: number
    anchor: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentChunkAvgAggregateInputType = {
    chunkIndex?: true
  }

  export type DocumentChunkSumAggregateInputType = {
    chunkIndex?: true
  }

  export type DocumentChunkMinAggregateInputType = {
    id?: true
    companyId?: true
    botConfigId?: true
    sourceType?: true
    sourceId?: true
    sourceUrl?: true
    title?: true
    content?: true
    contentHash?: true
    chunkIndex?: true
    anchor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentChunkMaxAggregateInputType = {
    id?: true
    companyId?: true
    botConfigId?: true
    sourceType?: true
    sourceId?: true
    sourceUrl?: true
    title?: true
    content?: true
    contentHash?: true
    chunkIndex?: true
    anchor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentChunkCountAggregateInputType = {
    id?: true
    companyId?: true
    botConfigId?: true
    sourceType?: true
    sourceId?: true
    sourceUrl?: true
    title?: true
    content?: true
    contentHash?: true
    chunkIndex?: true
    anchor?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentChunk to aggregate.
     */
    where?: DocumentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentChunks to fetch.
     */
    orderBy?: DocumentChunkOrderByWithRelationInput | DocumentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentChunks
    **/
    _count?: true | DocumentChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentChunkMaxAggregateInputType
  }

  export type GetDocumentChunkAggregateType<T extends DocumentChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentChunk[P]>
      : GetScalarType<T[P], AggregateDocumentChunk[P]>
  }




  export type DocumentChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentChunkWhereInput
    orderBy?: DocumentChunkOrderByWithAggregationInput | DocumentChunkOrderByWithAggregationInput[]
    by: DocumentChunkScalarFieldEnum[] | DocumentChunkScalarFieldEnum
    having?: DocumentChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentChunkCountAggregateInputType | true
    _avg?: DocumentChunkAvgAggregateInputType
    _sum?: DocumentChunkSumAggregateInputType
    _min?: DocumentChunkMinAggregateInputType
    _max?: DocumentChunkMaxAggregateInputType
  }

  export type DocumentChunkGroupByOutputType = {
    id: string
    companyId: string
    botConfigId: string | null
    sourceType: string
    sourceId: string | null
    sourceUrl: string | null
    title: string | null
    content: string
    contentHash: string
    chunkIndex: number
    anchor: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentChunkCountAggregateOutputType | null
    _avg: DocumentChunkAvgAggregateOutputType | null
    _sum: DocumentChunkSumAggregateOutputType | null
    _min: DocumentChunkMinAggregateOutputType | null
    _max: DocumentChunkMaxAggregateOutputType | null
  }

  type GetDocumentChunkGroupByPayload<T extends DocumentChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentChunkGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentChunkGroupByOutputType[P]>
        }
      >
    >


  export type DocumentChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    botConfigId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceUrl?: boolean
    title?: boolean
    content?: boolean
    contentHash?: boolean
    chunkIndex?: boolean
    anchor?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentChunk"]>

  export type DocumentChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    botConfigId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceUrl?: boolean
    title?: boolean
    content?: boolean
    contentHash?: boolean
    chunkIndex?: boolean
    anchor?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentChunk"]>

  export type DocumentChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    botConfigId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceUrl?: boolean
    title?: boolean
    content?: boolean
    contentHash?: boolean
    chunkIndex?: boolean
    anchor?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentChunk"]>

  export type DocumentChunkSelectScalar = {
    id?: boolean
    companyId?: boolean
    botConfigId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceUrl?: boolean
    title?: boolean
    content?: boolean
    contentHash?: boolean
    chunkIndex?: boolean
    anchor?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "botConfigId" | "sourceType" | "sourceId" | "sourceUrl" | "title" | "content" | "contentHash" | "chunkIndex" | "anchor" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["documentChunk"]>
  export type DocumentChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type DocumentChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type DocumentChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $DocumentChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentChunk"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      botConfigId: string | null
      sourceType: string
      sourceId: string | null
      sourceUrl: string | null
      title: string | null
      content: string
      contentHash: string
      chunkIndex: number
      anchor: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentChunk"]>
    composites: {}
  }

  type DocumentChunkGetPayload<S extends boolean | null | undefined | DocumentChunkDefaultArgs> = $Result.GetResult<Prisma.$DocumentChunkPayload, S>

  type DocumentChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentChunkCountAggregateInputType | true
    }

  export interface DocumentChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentChunk'], meta: { name: 'DocumentChunk' } }
    /**
     * Find zero or one DocumentChunk that matches the filter.
     * @param {DocumentChunkFindUniqueArgs} args - Arguments to find a DocumentChunk
     * @example
     * // Get one DocumentChunk
     * const documentChunk = await prisma.documentChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentChunkFindUniqueArgs>(args: SelectSubset<T, DocumentChunkFindUniqueArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentChunkFindUniqueOrThrowArgs} args - Arguments to find a DocumentChunk
     * @example
     * // Get one DocumentChunk
     * const documentChunk = await prisma.documentChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkFindFirstArgs} args - Arguments to find a DocumentChunk
     * @example
     * // Get one DocumentChunk
     * const documentChunk = await prisma.documentChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentChunkFindFirstArgs>(args?: SelectSubset<T, DocumentChunkFindFirstArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkFindFirstOrThrowArgs} args - Arguments to find a DocumentChunk
     * @example
     * // Get one DocumentChunk
     * const documentChunk = await prisma.documentChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentChunks
     * const documentChunks = await prisma.documentChunk.findMany()
     * 
     * // Get first 10 DocumentChunks
     * const documentChunks = await prisma.documentChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentChunkWithIdOnly = await prisma.documentChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentChunkFindManyArgs>(args?: SelectSubset<T, DocumentChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentChunk.
     * @param {DocumentChunkCreateArgs} args - Arguments to create a DocumentChunk.
     * @example
     * // Create one DocumentChunk
     * const DocumentChunk = await prisma.documentChunk.create({
     *   data: {
     *     // ... data to create a DocumentChunk
     *   }
     * })
     * 
     */
    create<T extends DocumentChunkCreateArgs>(args: SelectSubset<T, DocumentChunkCreateArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentChunks.
     * @param {DocumentChunkCreateManyArgs} args - Arguments to create many DocumentChunks.
     * @example
     * // Create many DocumentChunks
     * const documentChunk = await prisma.documentChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentChunkCreateManyArgs>(args?: SelectSubset<T, DocumentChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentChunks and returns the data saved in the database.
     * @param {DocumentChunkCreateManyAndReturnArgs} args - Arguments to create many DocumentChunks.
     * @example
     * // Create many DocumentChunks
     * const documentChunk = await prisma.documentChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentChunks and only return the `id`
     * const documentChunkWithIdOnly = await prisma.documentChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentChunk.
     * @param {DocumentChunkDeleteArgs} args - Arguments to delete one DocumentChunk.
     * @example
     * // Delete one DocumentChunk
     * const DocumentChunk = await prisma.documentChunk.delete({
     *   where: {
     *     // ... filter to delete one DocumentChunk
     *   }
     * })
     * 
     */
    delete<T extends DocumentChunkDeleteArgs>(args: SelectSubset<T, DocumentChunkDeleteArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentChunk.
     * @param {DocumentChunkUpdateArgs} args - Arguments to update one DocumentChunk.
     * @example
     * // Update one DocumentChunk
     * const documentChunk = await prisma.documentChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentChunkUpdateArgs>(args: SelectSubset<T, DocumentChunkUpdateArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentChunks.
     * @param {DocumentChunkDeleteManyArgs} args - Arguments to filter DocumentChunks to delete.
     * @example
     * // Delete a few DocumentChunks
     * const { count } = await prisma.documentChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentChunkDeleteManyArgs>(args?: SelectSubset<T, DocumentChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentChunks
     * const documentChunk = await prisma.documentChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentChunkUpdateManyArgs>(args: SelectSubset<T, DocumentChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentChunks and returns the data updated in the database.
     * @param {DocumentChunkUpdateManyAndReturnArgs} args - Arguments to update many DocumentChunks.
     * @example
     * // Update many DocumentChunks
     * const documentChunk = await prisma.documentChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentChunks and only return the `id`
     * const documentChunkWithIdOnly = await prisma.documentChunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentChunk.
     * @param {DocumentChunkUpsertArgs} args - Arguments to update or create a DocumentChunk.
     * @example
     * // Update or create a DocumentChunk
     * const documentChunk = await prisma.documentChunk.upsert({
     *   create: {
     *     // ... data to create a DocumentChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentChunk we want to update
     *   }
     * })
     */
    upsert<T extends DocumentChunkUpsertArgs>(args: SelectSubset<T, DocumentChunkUpsertArgs<ExtArgs>>): Prisma__DocumentChunkClient<$Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkCountArgs} args - Arguments to filter DocumentChunks to count.
     * @example
     * // Count the number of DocumentChunks
     * const count = await prisma.documentChunk.count({
     *   where: {
     *     // ... the filter for the DocumentChunks we want to count
     *   }
     * })
    **/
    count<T extends DocumentChunkCountArgs>(
      args?: Subset<T, DocumentChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentChunkAggregateArgs>(args: Subset<T, DocumentChunkAggregateArgs>): Prisma.PrismaPromise<GetDocumentChunkAggregateType<T>>

    /**
     * Group by DocumentChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentChunkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentChunkGroupByArgs['orderBy'] }
        : { orderBy?: DocumentChunkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentChunk model
   */
  readonly fields: DocumentChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentChunk model
   */
  interface DocumentChunkFieldRefs {
    readonly id: FieldRef<"DocumentChunk", 'String'>
    readonly companyId: FieldRef<"DocumentChunk", 'String'>
    readonly botConfigId: FieldRef<"DocumentChunk", 'String'>
    readonly sourceType: FieldRef<"DocumentChunk", 'String'>
    readonly sourceId: FieldRef<"DocumentChunk", 'String'>
    readonly sourceUrl: FieldRef<"DocumentChunk", 'String'>
    readonly title: FieldRef<"DocumentChunk", 'String'>
    readonly content: FieldRef<"DocumentChunk", 'String'>
    readonly contentHash: FieldRef<"DocumentChunk", 'String'>
    readonly chunkIndex: FieldRef<"DocumentChunk", 'Int'>
    readonly anchor: FieldRef<"DocumentChunk", 'String'>
    readonly metadata: FieldRef<"DocumentChunk", 'Json'>
    readonly createdAt: FieldRef<"DocumentChunk", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentChunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentChunk findUnique
   */
  export type DocumentChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentChunk to fetch.
     */
    where: DocumentChunkWhereUniqueInput
  }

  /**
   * DocumentChunk findUniqueOrThrow
   */
  export type DocumentChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentChunk to fetch.
     */
    where: DocumentChunkWhereUniqueInput
  }

  /**
   * DocumentChunk findFirst
   */
  export type DocumentChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentChunk to fetch.
     */
    where?: DocumentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentChunks to fetch.
     */
    orderBy?: DocumentChunkOrderByWithRelationInput | DocumentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentChunks.
     */
    cursor?: DocumentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentChunks.
     */
    distinct?: DocumentChunkScalarFieldEnum | DocumentChunkScalarFieldEnum[]
  }

  /**
   * DocumentChunk findFirstOrThrow
   */
  export type DocumentChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentChunk to fetch.
     */
    where?: DocumentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentChunks to fetch.
     */
    orderBy?: DocumentChunkOrderByWithRelationInput | DocumentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentChunks.
     */
    cursor?: DocumentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentChunks.
     */
    distinct?: DocumentChunkScalarFieldEnum | DocumentChunkScalarFieldEnum[]
  }

  /**
   * DocumentChunk findMany
   */
  export type DocumentChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentChunks to fetch.
     */
    where?: DocumentChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentChunks to fetch.
     */
    orderBy?: DocumentChunkOrderByWithRelationInput | DocumentChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentChunks.
     */
    cursor?: DocumentChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentChunks.
     */
    skip?: number
    distinct?: DocumentChunkScalarFieldEnum | DocumentChunkScalarFieldEnum[]
  }

  /**
   * DocumentChunk create
   */
  export type DocumentChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentChunk.
     */
    data: XOR<DocumentChunkCreateInput, DocumentChunkUncheckedCreateInput>
  }

  /**
   * DocumentChunk createMany
   */
  export type DocumentChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentChunks.
     */
    data: DocumentChunkCreateManyInput | DocumentChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentChunk createManyAndReturn
   */
  export type DocumentChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentChunks.
     */
    data: DocumentChunkCreateManyInput | DocumentChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentChunk update
   */
  export type DocumentChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentChunk.
     */
    data: XOR<DocumentChunkUpdateInput, DocumentChunkUncheckedUpdateInput>
    /**
     * Choose, which DocumentChunk to update.
     */
    where: DocumentChunkWhereUniqueInput
  }

  /**
   * DocumentChunk updateMany
   */
  export type DocumentChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentChunks.
     */
    data: XOR<DocumentChunkUpdateManyMutationInput, DocumentChunkUncheckedUpdateManyInput>
    /**
     * Filter which DocumentChunks to update
     */
    where?: DocumentChunkWhereInput
    /**
     * Limit how many DocumentChunks to update.
     */
    limit?: number
  }

  /**
   * DocumentChunk updateManyAndReturn
   */
  export type DocumentChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * The data used to update DocumentChunks.
     */
    data: XOR<DocumentChunkUpdateManyMutationInput, DocumentChunkUncheckedUpdateManyInput>
    /**
     * Filter which DocumentChunks to update
     */
    where?: DocumentChunkWhereInput
    /**
     * Limit how many DocumentChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentChunk upsert
   */
  export type DocumentChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentChunk to update in case it exists.
     */
    where: DocumentChunkWhereUniqueInput
    /**
     * In case the DocumentChunk found by the `where` argument doesn't exist, create a new DocumentChunk with this data.
     */
    create: XOR<DocumentChunkCreateInput, DocumentChunkUncheckedCreateInput>
    /**
     * In case the DocumentChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentChunkUpdateInput, DocumentChunkUncheckedUpdateInput>
  }

  /**
   * DocumentChunk delete
   */
  export type DocumentChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
    /**
     * Filter which DocumentChunk to delete.
     */
    where: DocumentChunkWhereUniqueInput
  }

  /**
   * DocumentChunk deleteMany
   */
  export type DocumentChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentChunks to delete
     */
    where?: DocumentChunkWhereInput
    /**
     * Limit how many DocumentChunks to delete.
     */
    limit?: number
  }

  /**
   * DocumentChunk without action
   */
  export type DocumentChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentChunk
     */
    select?: DocumentChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentChunk
     */
    omit?: DocumentChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentChunkInclude<ExtArgs> | null
  }


  /**
   * Model WebsitePage
   */

  export type AggregateWebsitePage = {
    _count: WebsitePageCountAggregateOutputType | null
    _min: WebsitePageMinAggregateOutputType | null
    _max: WebsitePageMaxAggregateOutputType | null
  }

  export type WebsitePageMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    url: string | null
    title: string | null
    status: string | null
    lastCrawledAt: Date | null
    contentHash: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsitePageMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    url: string | null
    title: string | null
    status: string | null
    lastCrawledAt: Date | null
    contentHash: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsitePageCountAggregateOutputType = {
    id: number
    companyId: number
    url: number
    title: number
    status: number
    lastCrawledAt: number
    contentHash: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebsitePageMinAggregateInputType = {
    id?: true
    companyId?: true
    url?: true
    title?: true
    status?: true
    lastCrawledAt?: true
    contentHash?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsitePageMaxAggregateInputType = {
    id?: true
    companyId?: true
    url?: true
    title?: true
    status?: true
    lastCrawledAt?: true
    contentHash?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsitePageCountAggregateInputType = {
    id?: true
    companyId?: true
    url?: true
    title?: true
    status?: true
    lastCrawledAt?: true
    contentHash?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsitePageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsitePage to aggregate.
     */
    where?: WebsitePageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsitePages to fetch.
     */
    orderBy?: WebsitePageOrderByWithRelationInput | WebsitePageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsitePageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsitePages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsitePages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsitePages
    **/
    _count?: true | WebsitePageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsitePageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsitePageMaxAggregateInputType
  }

  export type GetWebsitePageAggregateType<T extends WebsitePageAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsitePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsitePage[P]>
      : GetScalarType<T[P], AggregateWebsitePage[P]>
  }




  export type WebsitePageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsitePageWhereInput
    orderBy?: WebsitePageOrderByWithAggregationInput | WebsitePageOrderByWithAggregationInput[]
    by: WebsitePageScalarFieldEnum[] | WebsitePageScalarFieldEnum
    having?: WebsitePageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsitePageCountAggregateInputType | true
    _min?: WebsitePageMinAggregateInputType
    _max?: WebsitePageMaxAggregateInputType
  }

  export type WebsitePageGroupByOutputType = {
    id: string
    companyId: string
    url: string
    title: string | null
    status: string
    lastCrawledAt: Date | null
    contentHash: string | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: WebsitePageCountAggregateOutputType | null
    _min: WebsitePageMinAggregateOutputType | null
    _max: WebsitePageMaxAggregateOutputType | null
  }

  type GetWebsitePageGroupByPayload<T extends WebsitePageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsitePageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsitePageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsitePageGroupByOutputType[P]>
            : GetScalarType<T[P], WebsitePageGroupByOutputType[P]>
        }
      >
    >


  export type WebsitePageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    url?: boolean
    title?: boolean
    status?: boolean
    lastCrawledAt?: boolean
    contentHash?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websitePage"]>

  export type WebsitePageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    url?: boolean
    title?: boolean
    status?: boolean
    lastCrawledAt?: boolean
    contentHash?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websitePage"]>

  export type WebsitePageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    url?: boolean
    title?: boolean
    status?: boolean
    lastCrawledAt?: boolean
    contentHash?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websitePage"]>

  export type WebsitePageSelectScalar = {
    id?: boolean
    companyId?: boolean
    url?: boolean
    title?: boolean
    status?: boolean
    lastCrawledAt?: boolean
    contentHash?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebsitePageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "url" | "title" | "status" | "lastCrawledAt" | "contentHash" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["websitePage"]>
  export type WebsitePageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type WebsitePageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type WebsitePageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $WebsitePagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsitePage"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      url: string
      title: string | null
      status: string
      lastCrawledAt: Date | null
      contentHash: string | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["websitePage"]>
    composites: {}
  }

  type WebsitePageGetPayload<S extends boolean | null | undefined | WebsitePageDefaultArgs> = $Result.GetResult<Prisma.$WebsitePagePayload, S>

  type WebsitePageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsitePageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsitePageCountAggregateInputType | true
    }

  export interface WebsitePageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsitePage'], meta: { name: 'WebsitePage' } }
    /**
     * Find zero or one WebsitePage that matches the filter.
     * @param {WebsitePageFindUniqueArgs} args - Arguments to find a WebsitePage
     * @example
     * // Get one WebsitePage
     * const websitePage = await prisma.websitePage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsitePageFindUniqueArgs>(args: SelectSubset<T, WebsitePageFindUniqueArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsitePage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsitePageFindUniqueOrThrowArgs} args - Arguments to find a WebsitePage
     * @example
     * // Get one WebsitePage
     * const websitePage = await prisma.websitePage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsitePageFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsitePageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsitePage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageFindFirstArgs} args - Arguments to find a WebsitePage
     * @example
     * // Get one WebsitePage
     * const websitePage = await prisma.websitePage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsitePageFindFirstArgs>(args?: SelectSubset<T, WebsitePageFindFirstArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsitePage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageFindFirstOrThrowArgs} args - Arguments to find a WebsitePage
     * @example
     * // Get one WebsitePage
     * const websitePage = await prisma.websitePage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsitePageFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsitePageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsitePages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsitePages
     * const websitePages = await prisma.websitePage.findMany()
     * 
     * // Get first 10 WebsitePages
     * const websitePages = await prisma.websitePage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websitePageWithIdOnly = await prisma.websitePage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsitePageFindManyArgs>(args?: SelectSubset<T, WebsitePageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsitePage.
     * @param {WebsitePageCreateArgs} args - Arguments to create a WebsitePage.
     * @example
     * // Create one WebsitePage
     * const WebsitePage = await prisma.websitePage.create({
     *   data: {
     *     // ... data to create a WebsitePage
     *   }
     * })
     * 
     */
    create<T extends WebsitePageCreateArgs>(args: SelectSubset<T, WebsitePageCreateArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsitePages.
     * @param {WebsitePageCreateManyArgs} args - Arguments to create many WebsitePages.
     * @example
     * // Create many WebsitePages
     * const websitePage = await prisma.websitePage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsitePageCreateManyArgs>(args?: SelectSubset<T, WebsitePageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsitePages and returns the data saved in the database.
     * @param {WebsitePageCreateManyAndReturnArgs} args - Arguments to create many WebsitePages.
     * @example
     * // Create many WebsitePages
     * const websitePage = await prisma.websitePage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsitePages and only return the `id`
     * const websitePageWithIdOnly = await prisma.websitePage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsitePageCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsitePageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsitePage.
     * @param {WebsitePageDeleteArgs} args - Arguments to delete one WebsitePage.
     * @example
     * // Delete one WebsitePage
     * const WebsitePage = await prisma.websitePage.delete({
     *   where: {
     *     // ... filter to delete one WebsitePage
     *   }
     * })
     * 
     */
    delete<T extends WebsitePageDeleteArgs>(args: SelectSubset<T, WebsitePageDeleteArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsitePage.
     * @param {WebsitePageUpdateArgs} args - Arguments to update one WebsitePage.
     * @example
     * // Update one WebsitePage
     * const websitePage = await prisma.websitePage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsitePageUpdateArgs>(args: SelectSubset<T, WebsitePageUpdateArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsitePages.
     * @param {WebsitePageDeleteManyArgs} args - Arguments to filter WebsitePages to delete.
     * @example
     * // Delete a few WebsitePages
     * const { count } = await prisma.websitePage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsitePageDeleteManyArgs>(args?: SelectSubset<T, WebsitePageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsitePages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsitePages
     * const websitePage = await prisma.websitePage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsitePageUpdateManyArgs>(args: SelectSubset<T, WebsitePageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsitePages and returns the data updated in the database.
     * @param {WebsitePageUpdateManyAndReturnArgs} args - Arguments to update many WebsitePages.
     * @example
     * // Update many WebsitePages
     * const websitePage = await prisma.websitePage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsitePages and only return the `id`
     * const websitePageWithIdOnly = await prisma.websitePage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsitePageUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsitePageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsitePage.
     * @param {WebsitePageUpsertArgs} args - Arguments to update or create a WebsitePage.
     * @example
     * // Update or create a WebsitePage
     * const websitePage = await prisma.websitePage.upsert({
     *   create: {
     *     // ... data to create a WebsitePage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsitePage we want to update
     *   }
     * })
     */
    upsert<T extends WebsitePageUpsertArgs>(args: SelectSubset<T, WebsitePageUpsertArgs<ExtArgs>>): Prisma__WebsitePageClient<$Result.GetResult<Prisma.$WebsitePagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsitePages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageCountArgs} args - Arguments to filter WebsitePages to count.
     * @example
     * // Count the number of WebsitePages
     * const count = await prisma.websitePage.count({
     *   where: {
     *     // ... the filter for the WebsitePages we want to count
     *   }
     * })
    **/
    count<T extends WebsitePageCountArgs>(
      args?: Subset<T, WebsitePageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsitePageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsitePage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsitePageAggregateArgs>(args: Subset<T, WebsitePageAggregateArgs>): Prisma.PrismaPromise<GetWebsitePageAggregateType<T>>

    /**
     * Group by WebsitePage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsitePageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsitePageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsitePageGroupByArgs['orderBy'] }
        : { orderBy?: WebsitePageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsitePageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsitePageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsitePage model
   */
  readonly fields: WebsitePageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsitePage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsitePageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebsitePage model
   */
  interface WebsitePageFieldRefs {
    readonly id: FieldRef<"WebsitePage", 'String'>
    readonly companyId: FieldRef<"WebsitePage", 'String'>
    readonly url: FieldRef<"WebsitePage", 'String'>
    readonly title: FieldRef<"WebsitePage", 'String'>
    readonly status: FieldRef<"WebsitePage", 'String'>
    readonly lastCrawledAt: FieldRef<"WebsitePage", 'DateTime'>
    readonly contentHash: FieldRef<"WebsitePage", 'String'>
    readonly errorMessage: FieldRef<"WebsitePage", 'String'>
    readonly createdAt: FieldRef<"WebsitePage", 'DateTime'>
    readonly updatedAt: FieldRef<"WebsitePage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebsitePage findUnique
   */
  export type WebsitePageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter, which WebsitePage to fetch.
     */
    where: WebsitePageWhereUniqueInput
  }

  /**
   * WebsitePage findUniqueOrThrow
   */
  export type WebsitePageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter, which WebsitePage to fetch.
     */
    where: WebsitePageWhereUniqueInput
  }

  /**
   * WebsitePage findFirst
   */
  export type WebsitePageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter, which WebsitePage to fetch.
     */
    where?: WebsitePageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsitePages to fetch.
     */
    orderBy?: WebsitePageOrderByWithRelationInput | WebsitePageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsitePages.
     */
    cursor?: WebsitePageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsitePages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsitePages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsitePages.
     */
    distinct?: WebsitePageScalarFieldEnum | WebsitePageScalarFieldEnum[]
  }

  /**
   * WebsitePage findFirstOrThrow
   */
  export type WebsitePageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter, which WebsitePage to fetch.
     */
    where?: WebsitePageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsitePages to fetch.
     */
    orderBy?: WebsitePageOrderByWithRelationInput | WebsitePageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsitePages.
     */
    cursor?: WebsitePageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsitePages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsitePages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsitePages.
     */
    distinct?: WebsitePageScalarFieldEnum | WebsitePageScalarFieldEnum[]
  }

  /**
   * WebsitePage findMany
   */
  export type WebsitePageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter, which WebsitePages to fetch.
     */
    where?: WebsitePageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsitePages to fetch.
     */
    orderBy?: WebsitePageOrderByWithRelationInput | WebsitePageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsitePages.
     */
    cursor?: WebsitePageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsitePages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsitePages.
     */
    skip?: number
    distinct?: WebsitePageScalarFieldEnum | WebsitePageScalarFieldEnum[]
  }

  /**
   * WebsitePage create
   */
  export type WebsitePageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * The data needed to create a WebsitePage.
     */
    data: XOR<WebsitePageCreateInput, WebsitePageUncheckedCreateInput>
  }

  /**
   * WebsitePage createMany
   */
  export type WebsitePageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsitePages.
     */
    data: WebsitePageCreateManyInput | WebsitePageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsitePage createManyAndReturn
   */
  export type WebsitePageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * The data used to create many WebsitePages.
     */
    data: WebsitePageCreateManyInput | WebsitePageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsitePage update
   */
  export type WebsitePageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * The data needed to update a WebsitePage.
     */
    data: XOR<WebsitePageUpdateInput, WebsitePageUncheckedUpdateInput>
    /**
     * Choose, which WebsitePage to update.
     */
    where: WebsitePageWhereUniqueInput
  }

  /**
   * WebsitePage updateMany
   */
  export type WebsitePageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsitePages.
     */
    data: XOR<WebsitePageUpdateManyMutationInput, WebsitePageUncheckedUpdateManyInput>
    /**
     * Filter which WebsitePages to update
     */
    where?: WebsitePageWhereInput
    /**
     * Limit how many WebsitePages to update.
     */
    limit?: number
  }

  /**
   * WebsitePage updateManyAndReturn
   */
  export type WebsitePageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * The data used to update WebsitePages.
     */
    data: XOR<WebsitePageUpdateManyMutationInput, WebsitePageUncheckedUpdateManyInput>
    /**
     * Filter which WebsitePages to update
     */
    where?: WebsitePageWhereInput
    /**
     * Limit how many WebsitePages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsitePage upsert
   */
  export type WebsitePageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * The filter to search for the WebsitePage to update in case it exists.
     */
    where: WebsitePageWhereUniqueInput
    /**
     * In case the WebsitePage found by the `where` argument doesn't exist, create a new WebsitePage with this data.
     */
    create: XOR<WebsitePageCreateInput, WebsitePageUncheckedCreateInput>
    /**
     * In case the WebsitePage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsitePageUpdateInput, WebsitePageUncheckedUpdateInput>
  }

  /**
   * WebsitePage delete
   */
  export type WebsitePageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
    /**
     * Filter which WebsitePage to delete.
     */
    where: WebsitePageWhereUniqueInput
  }

  /**
   * WebsitePage deleteMany
   */
  export type WebsitePageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsitePages to delete
     */
    where?: WebsitePageWhereInput
    /**
     * Limit how many WebsitePages to delete.
     */
    limit?: number
  }

  /**
   * WebsitePage without action
   */
  export type WebsitePageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsitePage
     */
    select?: WebsitePageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsitePage
     */
    omit?: WebsitePageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsitePageInclude<ExtArgs> | null
  }


  /**
   * Model CrawlJob
   */

  export type AggregateCrawlJob = {
    _count: CrawlJobCountAggregateOutputType | null
    _avg: CrawlJobAvgAggregateOutputType | null
    _sum: CrawlJobSumAggregateOutputType | null
    _min: CrawlJobMinAggregateOutputType | null
    _max: CrawlJobMaxAggregateOutputType | null
  }

  export type CrawlJobAvgAggregateOutputType = {
    totalPages: number | null
    donePages: number | null
    failedPages: number | null
  }

  export type CrawlJobSumAggregateOutputType = {
    totalPages: number | null
    donePages: number | null
    failedPages: number | null
  }

  export type CrawlJobMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    domain: string | null
    status: string | null
    triggeredBy: string | null
    totalPages: number | null
    donePages: number | null
    failedPages: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type CrawlJobMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    domain: string | null
    status: string | null
    triggeredBy: string | null
    totalPages: number | null
    donePages: number | null
    failedPages: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type CrawlJobCountAggregateOutputType = {
    id: number
    companyId: number
    domain: number
    status: number
    triggeredBy: number
    totalPages: number
    donePages: number
    failedPages: number
    startedAt: number
    finishedAt: number
    createdAt: number
    _all: number
  }


  export type CrawlJobAvgAggregateInputType = {
    totalPages?: true
    donePages?: true
    failedPages?: true
  }

  export type CrawlJobSumAggregateInputType = {
    totalPages?: true
    donePages?: true
    failedPages?: true
  }

  export type CrawlJobMinAggregateInputType = {
    id?: true
    companyId?: true
    domain?: true
    status?: true
    triggeredBy?: true
    totalPages?: true
    donePages?: true
    failedPages?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type CrawlJobMaxAggregateInputType = {
    id?: true
    companyId?: true
    domain?: true
    status?: true
    triggeredBy?: true
    totalPages?: true
    donePages?: true
    failedPages?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type CrawlJobCountAggregateInputType = {
    id?: true
    companyId?: true
    domain?: true
    status?: true
    triggeredBy?: true
    totalPages?: true
    donePages?: true
    failedPages?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CrawlJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlJob to aggregate.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlJobs
    **/
    _count?: true | CrawlJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrawlJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrawlJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlJobMaxAggregateInputType
  }

  export type GetCrawlJobAggregateType<T extends CrawlJobAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlJob[P]>
      : GetScalarType<T[P], AggregateCrawlJob[P]>
  }




  export type CrawlJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlJobWhereInput
    orderBy?: CrawlJobOrderByWithAggregationInput | CrawlJobOrderByWithAggregationInput[]
    by: CrawlJobScalarFieldEnum[] | CrawlJobScalarFieldEnum
    having?: CrawlJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlJobCountAggregateInputType | true
    _avg?: CrawlJobAvgAggregateInputType
    _sum?: CrawlJobSumAggregateInputType
    _min?: CrawlJobMinAggregateInputType
    _max?: CrawlJobMaxAggregateInputType
  }

  export type CrawlJobGroupByOutputType = {
    id: string
    companyId: string
    domain: string
    status: string
    triggeredBy: string
    totalPages: number
    donePages: number
    failedPages: number
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    _count: CrawlJobCountAggregateOutputType | null
    _avg: CrawlJobAvgAggregateOutputType | null
    _sum: CrawlJobSumAggregateOutputType | null
    _min: CrawlJobMinAggregateOutputType | null
    _max: CrawlJobMaxAggregateOutputType | null
  }

  type GetCrawlJobGroupByPayload<T extends CrawlJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlJobGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlJobGroupByOutputType[P]>
        }
      >
    >


  export type CrawlJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    domain?: boolean
    status?: boolean
    triggeredBy?: boolean
    totalPages?: boolean
    donePages?: boolean
    failedPages?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    domain?: boolean
    status?: boolean
    triggeredBy?: boolean
    totalPages?: boolean
    donePages?: boolean
    failedPages?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    domain?: boolean
    status?: boolean
    triggeredBy?: boolean
    totalPages?: boolean
    donePages?: boolean
    failedPages?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectScalar = {
    id?: boolean
    companyId?: boolean
    domain?: boolean
    status?: boolean
    triggeredBy?: boolean
    totalPages?: boolean
    donePages?: boolean
    failedPages?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
  }

  export type CrawlJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "domain" | "status" | "triggeredBy" | "totalPages" | "donePages" | "failedPages" | "startedAt" | "finishedAt" | "createdAt", ExtArgs["result"]["crawlJob"]>
  export type CrawlJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CrawlJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CrawlJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CrawlJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlJob"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      domain: string
      status: string
      triggeredBy: string
      totalPages: number
      donePages: number
      failedPages: number
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["crawlJob"]>
    composites: {}
  }

  type CrawlJobGetPayload<S extends boolean | null | undefined | CrawlJobDefaultArgs> = $Result.GetResult<Prisma.$CrawlJobPayload, S>

  type CrawlJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrawlJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrawlJobCountAggregateInputType | true
    }

  export interface CrawlJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlJob'], meta: { name: 'CrawlJob' } }
    /**
     * Find zero or one CrawlJob that matches the filter.
     * @param {CrawlJobFindUniqueArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlJobFindUniqueArgs>(args: SelectSubset<T, CrawlJobFindUniqueArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrawlJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrawlJobFindUniqueOrThrowArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlJobFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindFirstArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlJobFindFirstArgs>(args?: SelectSubset<T, CrawlJobFindFirstArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindFirstOrThrowArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlJobFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrawlJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlJobs
     * const crawlJobs = await prisma.crawlJob.findMany()
     * 
     * // Get first 10 CrawlJobs
     * const crawlJobs = await prisma.crawlJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlJobFindManyArgs>(args?: SelectSubset<T, CrawlJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrawlJob.
     * @param {CrawlJobCreateArgs} args - Arguments to create a CrawlJob.
     * @example
     * // Create one CrawlJob
     * const CrawlJob = await prisma.crawlJob.create({
     *   data: {
     *     // ... data to create a CrawlJob
     *   }
     * })
     * 
     */
    create<T extends CrawlJobCreateArgs>(args: SelectSubset<T, CrawlJobCreateArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrawlJobs.
     * @param {CrawlJobCreateManyArgs} args - Arguments to create many CrawlJobs.
     * @example
     * // Create many CrawlJobs
     * const crawlJob = await prisma.crawlJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlJobCreateManyArgs>(args?: SelectSubset<T, CrawlJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrawlJobs and returns the data saved in the database.
     * @param {CrawlJobCreateManyAndReturnArgs} args - Arguments to create many CrawlJobs.
     * @example
     * // Create many CrawlJobs
     * const crawlJob = await prisma.crawlJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrawlJobs and only return the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrawlJobCreateManyAndReturnArgs>(args?: SelectSubset<T, CrawlJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrawlJob.
     * @param {CrawlJobDeleteArgs} args - Arguments to delete one CrawlJob.
     * @example
     * // Delete one CrawlJob
     * const CrawlJob = await prisma.crawlJob.delete({
     *   where: {
     *     // ... filter to delete one CrawlJob
     *   }
     * })
     * 
     */
    delete<T extends CrawlJobDeleteArgs>(args: SelectSubset<T, CrawlJobDeleteArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrawlJob.
     * @param {CrawlJobUpdateArgs} args - Arguments to update one CrawlJob.
     * @example
     * // Update one CrawlJob
     * const crawlJob = await prisma.crawlJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlJobUpdateArgs>(args: SelectSubset<T, CrawlJobUpdateArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrawlJobs.
     * @param {CrawlJobDeleteManyArgs} args - Arguments to filter CrawlJobs to delete.
     * @example
     * // Delete a few CrawlJobs
     * const { count } = await prisma.crawlJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlJobDeleteManyArgs>(args?: SelectSubset<T, CrawlJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlJobs
     * const crawlJob = await prisma.crawlJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlJobUpdateManyArgs>(args: SelectSubset<T, CrawlJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlJobs and returns the data updated in the database.
     * @param {CrawlJobUpdateManyAndReturnArgs} args - Arguments to update many CrawlJobs.
     * @example
     * // Update many CrawlJobs
     * const crawlJob = await prisma.crawlJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrawlJobs and only return the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrawlJobUpdateManyAndReturnArgs>(args: SelectSubset<T, CrawlJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrawlJob.
     * @param {CrawlJobUpsertArgs} args - Arguments to update or create a CrawlJob.
     * @example
     * // Update or create a CrawlJob
     * const crawlJob = await prisma.crawlJob.upsert({
     *   create: {
     *     // ... data to create a CrawlJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlJob we want to update
     *   }
     * })
     */
    upsert<T extends CrawlJobUpsertArgs>(args: SelectSubset<T, CrawlJobUpsertArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrawlJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobCountArgs} args - Arguments to filter CrawlJobs to count.
     * @example
     * // Count the number of CrawlJobs
     * const count = await prisma.crawlJob.count({
     *   where: {
     *     // ... the filter for the CrawlJobs we want to count
     *   }
     * })
    **/
    count<T extends CrawlJobCountArgs>(
      args?: Subset<T, CrawlJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrawlJobAggregateArgs>(args: Subset<T, CrawlJobAggregateArgs>): Prisma.PrismaPromise<GetCrawlJobAggregateType<T>>

    /**
     * Group by CrawlJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrawlJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlJobGroupByArgs['orderBy'] }
        : { orderBy?: CrawlJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrawlJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlJob model
   */
  readonly fields: CrawlJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrawlJob model
   */
  interface CrawlJobFieldRefs {
    readonly id: FieldRef<"CrawlJob", 'String'>
    readonly companyId: FieldRef<"CrawlJob", 'String'>
    readonly domain: FieldRef<"CrawlJob", 'String'>
    readonly status: FieldRef<"CrawlJob", 'String'>
    readonly triggeredBy: FieldRef<"CrawlJob", 'String'>
    readonly totalPages: FieldRef<"CrawlJob", 'Int'>
    readonly donePages: FieldRef<"CrawlJob", 'Int'>
    readonly failedPages: FieldRef<"CrawlJob", 'Int'>
    readonly startedAt: FieldRef<"CrawlJob", 'DateTime'>
    readonly finishedAt: FieldRef<"CrawlJob", 'DateTime'>
    readonly createdAt: FieldRef<"CrawlJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlJob findUnique
   */
  export type CrawlJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob findUniqueOrThrow
   */
  export type CrawlJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob findFirst
   */
  export type CrawlJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlJobs.
     */
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob findFirstOrThrow
   */
  export type CrawlJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlJobs.
     */
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob findMany
   */
  export type CrawlJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter, which CrawlJobs to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob create
   */
  export type CrawlJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * The data needed to create a CrawlJob.
     */
    data: XOR<CrawlJobCreateInput, CrawlJobUncheckedCreateInput>
  }

  /**
   * CrawlJob createMany
   */
  export type CrawlJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlJobs.
     */
    data: CrawlJobCreateManyInput | CrawlJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlJob createManyAndReturn
   */
  export type CrawlJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data used to create many CrawlJobs.
     */
    data: CrawlJobCreateManyInput | CrawlJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrawlJob update
   */
  export type CrawlJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * The data needed to update a CrawlJob.
     */
    data: XOR<CrawlJobUpdateInput, CrawlJobUncheckedUpdateInput>
    /**
     * Choose, which CrawlJob to update.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob updateMany
   */
  export type CrawlJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlJobs.
     */
    data: XOR<CrawlJobUpdateManyMutationInput, CrawlJobUncheckedUpdateManyInput>
    /**
     * Filter which CrawlJobs to update
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to update.
     */
    limit?: number
  }

  /**
   * CrawlJob updateManyAndReturn
   */
  export type CrawlJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data used to update CrawlJobs.
     */
    data: XOR<CrawlJobUpdateManyMutationInput, CrawlJobUncheckedUpdateManyInput>
    /**
     * Filter which CrawlJobs to update
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrawlJob upsert
   */
  export type CrawlJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * The filter to search for the CrawlJob to update in case it exists.
     */
    where: CrawlJobWhereUniqueInput
    /**
     * In case the CrawlJob found by the `where` argument doesn't exist, create a new CrawlJob with this data.
     */
    create: XOR<CrawlJobCreateInput, CrawlJobUncheckedCreateInput>
    /**
     * In case the CrawlJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlJobUpdateInput, CrawlJobUncheckedUpdateInput>
  }

  /**
   * CrawlJob delete
   */
  export type CrawlJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
    /**
     * Filter which CrawlJob to delete.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob deleteMany
   */
  export type CrawlJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlJobs to delete
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to delete.
     */
    limit?: number
  }

  /**
   * CrawlJob without action
   */
  export type CrawlJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlJobInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    slug: 'slug',
    website: 'website',
    description: 'description',
    logoUrl: 'logoUrl',
    apiKey: 'apiKey',
    apiKeyCreatedAt: 'apiKeyCreatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const DocumentChunkScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    botConfigId: 'botConfigId',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    sourceUrl: 'sourceUrl',
    title: 'title',
    content: 'content',
    contentHash: 'contentHash',
    chunkIndex: 'chunkIndex',
    anchor: 'anchor',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentChunkScalarFieldEnum = (typeof DocumentChunkScalarFieldEnum)[keyof typeof DocumentChunkScalarFieldEnum]


  export const WebsitePageScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    url: 'url',
    title: 'title',
    status: 'status',
    lastCrawledAt: 'lastCrawledAt',
    contentHash: 'contentHash',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebsitePageScalarFieldEnum = (typeof WebsitePageScalarFieldEnum)[keyof typeof WebsitePageScalarFieldEnum]


  export const CrawlJobScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    domain: 'domain',
    status: 'status',
    triggeredBy: 'triggeredBy',
    totalPages: 'totalPages',
    donePages: 'donePages',
    failedPages: 'failedPages',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt'
  };

  export type CrawlJobScalarFieldEnum = (typeof CrawlJobScalarFieldEnum)[keyof typeof CrawlJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    apiKey?: StringFilter<"Company"> | string
    apiKeyCreatedAt?: DateTimeFilter<"Company"> | Date | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    documentChunks?: DocumentChunkListRelationFilter
    websitePages?: WebsitePageListRelationFilter
    crawlJobs?: CrawlJobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    apiKeyCreatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documentChunks?: DocumentChunkOrderByRelationAggregateInput
    websitePages?: WebsitePageOrderByRelationAggregateInput
    crawlJobs?: CrawlJobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    slug?: string
    apiKey?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    apiKeyCreatedAt?: DateTimeFilter<"Company"> | Date | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    documentChunks?: DocumentChunkListRelationFilter
    websitePages?: WebsitePageListRelationFilter
    crawlJobs?: CrawlJobListRelationFilter
  }, "id" | "userId" | "slug" | "apiKey">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    apiKeyCreatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    userId?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    apiKey?: StringWithAggregatesFilter<"Company"> | string
    apiKeyCreatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type DocumentChunkWhereInput = {
    AND?: DocumentChunkWhereInput | DocumentChunkWhereInput[]
    OR?: DocumentChunkWhereInput[]
    NOT?: DocumentChunkWhereInput | DocumentChunkWhereInput[]
    id?: StringFilter<"DocumentChunk"> | string
    companyId?: StringFilter<"DocumentChunk"> | string
    botConfigId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceType?: StringFilter<"DocumentChunk"> | string
    sourceId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceUrl?: StringNullableFilter<"DocumentChunk"> | string | null
    title?: StringNullableFilter<"DocumentChunk"> | string | null
    content?: StringFilter<"DocumentChunk"> | string
    contentHash?: StringFilter<"DocumentChunk"> | string
    chunkIndex?: IntFilter<"DocumentChunk"> | number
    anchor?: StringNullableFilter<"DocumentChunk"> | string | null
    metadata?: JsonNullableFilter<"DocumentChunk">
    createdAt?: DateTimeFilter<"DocumentChunk"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentChunk"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type DocumentChunkOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    botConfigId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    contentHash?: SortOrder
    chunkIndex?: SortOrder
    anchor?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type DocumentChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentChunkWhereInput | DocumentChunkWhereInput[]
    OR?: DocumentChunkWhereInput[]
    NOT?: DocumentChunkWhereInput | DocumentChunkWhereInput[]
    companyId?: StringFilter<"DocumentChunk"> | string
    botConfigId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceType?: StringFilter<"DocumentChunk"> | string
    sourceId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceUrl?: StringNullableFilter<"DocumentChunk"> | string | null
    title?: StringNullableFilter<"DocumentChunk"> | string | null
    content?: StringFilter<"DocumentChunk"> | string
    contentHash?: StringFilter<"DocumentChunk"> | string
    chunkIndex?: IntFilter<"DocumentChunk"> | number
    anchor?: StringNullableFilter<"DocumentChunk"> | string | null
    metadata?: JsonNullableFilter<"DocumentChunk">
    createdAt?: DateTimeFilter<"DocumentChunk"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentChunk"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type DocumentChunkOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    botConfigId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    contentHash?: SortOrder
    chunkIndex?: SortOrder
    anchor?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentChunkCountOrderByAggregateInput
    _avg?: DocumentChunkAvgOrderByAggregateInput
    _max?: DocumentChunkMaxOrderByAggregateInput
    _min?: DocumentChunkMinOrderByAggregateInput
    _sum?: DocumentChunkSumOrderByAggregateInput
  }

  export type DocumentChunkScalarWhereWithAggregatesInput = {
    AND?: DocumentChunkScalarWhereWithAggregatesInput | DocumentChunkScalarWhereWithAggregatesInput[]
    OR?: DocumentChunkScalarWhereWithAggregatesInput[]
    NOT?: DocumentChunkScalarWhereWithAggregatesInput | DocumentChunkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentChunk"> | string
    companyId?: StringWithAggregatesFilter<"DocumentChunk"> | string
    botConfigId?: StringNullableWithAggregatesFilter<"DocumentChunk"> | string | null
    sourceType?: StringWithAggregatesFilter<"DocumentChunk"> | string
    sourceId?: StringNullableWithAggregatesFilter<"DocumentChunk"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"DocumentChunk"> | string | null
    title?: StringNullableWithAggregatesFilter<"DocumentChunk"> | string | null
    content?: StringWithAggregatesFilter<"DocumentChunk"> | string
    contentHash?: StringWithAggregatesFilter<"DocumentChunk"> | string
    chunkIndex?: IntWithAggregatesFilter<"DocumentChunk"> | number
    anchor?: StringNullableWithAggregatesFilter<"DocumentChunk"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"DocumentChunk">
    createdAt?: DateTimeWithAggregatesFilter<"DocumentChunk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentChunk"> | Date | string
  }

  export type WebsitePageWhereInput = {
    AND?: WebsitePageWhereInput | WebsitePageWhereInput[]
    OR?: WebsitePageWhereInput[]
    NOT?: WebsitePageWhereInput | WebsitePageWhereInput[]
    id?: StringFilter<"WebsitePage"> | string
    companyId?: StringFilter<"WebsitePage"> | string
    url?: StringFilter<"WebsitePage"> | string
    title?: StringNullableFilter<"WebsitePage"> | string | null
    status?: StringFilter<"WebsitePage"> | string
    lastCrawledAt?: DateTimeNullableFilter<"WebsitePage"> | Date | string | null
    contentHash?: StringNullableFilter<"WebsitePage"> | string | null
    errorMessage?: StringNullableFilter<"WebsitePage"> | string | null
    createdAt?: DateTimeFilter<"WebsitePage"> | Date | string
    updatedAt?: DateTimeFilter<"WebsitePage"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type WebsitePageOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    lastCrawledAt?: SortOrderInput | SortOrder
    contentHash?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type WebsitePageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_url?: WebsitePageCompanyIdUrlCompoundUniqueInput
    AND?: WebsitePageWhereInput | WebsitePageWhereInput[]
    OR?: WebsitePageWhereInput[]
    NOT?: WebsitePageWhereInput | WebsitePageWhereInput[]
    companyId?: StringFilter<"WebsitePage"> | string
    url?: StringFilter<"WebsitePage"> | string
    title?: StringNullableFilter<"WebsitePage"> | string | null
    status?: StringFilter<"WebsitePage"> | string
    lastCrawledAt?: DateTimeNullableFilter<"WebsitePage"> | Date | string | null
    contentHash?: StringNullableFilter<"WebsitePage"> | string | null
    errorMessage?: StringNullableFilter<"WebsitePage"> | string | null
    createdAt?: DateTimeFilter<"WebsitePage"> | Date | string
    updatedAt?: DateTimeFilter<"WebsitePage"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId_url">

  export type WebsitePageOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    lastCrawledAt?: SortOrderInput | SortOrder
    contentHash?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebsitePageCountOrderByAggregateInput
    _max?: WebsitePageMaxOrderByAggregateInput
    _min?: WebsitePageMinOrderByAggregateInput
  }

  export type WebsitePageScalarWhereWithAggregatesInput = {
    AND?: WebsitePageScalarWhereWithAggregatesInput | WebsitePageScalarWhereWithAggregatesInput[]
    OR?: WebsitePageScalarWhereWithAggregatesInput[]
    NOT?: WebsitePageScalarWhereWithAggregatesInput | WebsitePageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsitePage"> | string
    companyId?: StringWithAggregatesFilter<"WebsitePage"> | string
    url?: StringWithAggregatesFilter<"WebsitePage"> | string
    title?: StringNullableWithAggregatesFilter<"WebsitePage"> | string | null
    status?: StringWithAggregatesFilter<"WebsitePage"> | string
    lastCrawledAt?: DateTimeNullableWithAggregatesFilter<"WebsitePage"> | Date | string | null
    contentHash?: StringNullableWithAggregatesFilter<"WebsitePage"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WebsitePage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebsitePage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebsitePage"> | Date | string
  }

  export type CrawlJobWhereInput = {
    AND?: CrawlJobWhereInput | CrawlJobWhereInput[]
    OR?: CrawlJobWhereInput[]
    NOT?: CrawlJobWhereInput | CrawlJobWhereInput[]
    id?: StringFilter<"CrawlJob"> | string
    companyId?: StringFilter<"CrawlJob"> | string
    domain?: StringFilter<"CrawlJob"> | string
    status?: StringFilter<"CrawlJob"> | string
    triggeredBy?: StringFilter<"CrawlJob"> | string
    totalPages?: IntFilter<"CrawlJob"> | number
    donePages?: IntFilter<"CrawlJob"> | number
    failedPages?: IntFilter<"CrawlJob"> | number
    startedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlJob"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CrawlJobOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    triggeredBy?: SortOrder
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CrawlJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrawlJobWhereInput | CrawlJobWhereInput[]
    OR?: CrawlJobWhereInput[]
    NOT?: CrawlJobWhereInput | CrawlJobWhereInput[]
    companyId?: StringFilter<"CrawlJob"> | string
    domain?: StringFilter<"CrawlJob"> | string
    status?: StringFilter<"CrawlJob"> | string
    triggeredBy?: StringFilter<"CrawlJob"> | string
    totalPages?: IntFilter<"CrawlJob"> | number
    donePages?: IntFilter<"CrawlJob"> | number
    failedPages?: IntFilter<"CrawlJob"> | number
    startedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlJob"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CrawlJobOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    triggeredBy?: SortOrder
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CrawlJobCountOrderByAggregateInput
    _avg?: CrawlJobAvgOrderByAggregateInput
    _max?: CrawlJobMaxOrderByAggregateInput
    _min?: CrawlJobMinOrderByAggregateInput
    _sum?: CrawlJobSumOrderByAggregateInput
  }

  export type CrawlJobScalarWhereWithAggregatesInput = {
    AND?: CrawlJobScalarWhereWithAggregatesInput | CrawlJobScalarWhereWithAggregatesInput[]
    OR?: CrawlJobScalarWhereWithAggregatesInput[]
    NOT?: CrawlJobScalarWhereWithAggregatesInput | CrawlJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CrawlJob"> | string
    companyId?: StringWithAggregatesFilter<"CrawlJob"> | string
    domain?: StringWithAggregatesFilter<"CrawlJob"> | string
    status?: StringWithAggregatesFilter<"CrawlJob"> | string
    triggeredBy?: StringWithAggregatesFilter<"CrawlJob"> | string
    totalPages?: IntWithAggregatesFilter<"CrawlJob"> | number
    donePages?: IntWithAggregatesFilter<"CrawlJob"> | number
    failedPages?: IntWithAggregatesFilter<"CrawlJob"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrawlJob"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkCreateNestedManyWithoutCompanyInput
    websitePages?: WebsitePageCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkUncheckedCreateNestedManyWithoutCompanyInput
    websitePages?: WebsitePageUncheckedCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUpdateManyWithoutCompanyNestedInput
    websitePages?: WebsitePageUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUncheckedUpdateManyWithoutCompanyNestedInput
    websitePages?: WebsitePageUncheckedUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentChunkCreateInput = {
    id?: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutDocumentChunksInput
  }

  export type DocumentChunkUncheckedCreateInput = {
    id?: string
    companyId: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentChunkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDocumentChunksNestedInput
  }

  export type DocumentChunkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentChunkCreateManyInput = {
    id?: string
    companyId: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentChunkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentChunkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageCreateInput = {
    id?: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutWebsitePagesInput
  }

  export type WebsitePageUncheckedCreateInput = {
    id?: string
    companyId: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsitePageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutWebsitePagesNestedInput
  }

  export type WebsitePageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageCreateManyInput = {
    id?: string
    companyId: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsitePageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobCreateInput = {
    id?: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutCrawlJobsInput
  }

  export type CrawlJobUncheckedCreateInput = {
    id?: string
    companyId: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CrawlJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCrawlJobsNestedInput
  }

  export type CrawlJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobCreateManyInput = {
    id?: string
    companyId: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CrawlJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DocumentChunkListRelationFilter = {
    every?: DocumentChunkWhereInput
    some?: DocumentChunkWhereInput
    none?: DocumentChunkWhereInput
  }

  export type WebsitePageListRelationFilter = {
    every?: WebsitePageWhereInput
    some?: WebsitePageWhereInput
    none?: WebsitePageWhereInput
  }

  export type CrawlJobListRelationFilter = {
    every?: CrawlJobWhereInput
    some?: CrawlJobWhereInput
    none?: CrawlJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsitePageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrawlJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    apiKey?: SortOrder
    apiKeyCreatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    apiKey?: SortOrder
    apiKeyCreatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    apiKey?: SortOrder
    apiKeyCreatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type DocumentChunkCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    botConfigId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentHash?: SortOrder
    chunkIndex?: SortOrder
    anchor?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentChunkAvgOrderByAggregateInput = {
    chunkIndex?: SortOrder
  }

  export type DocumentChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    botConfigId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentHash?: SortOrder
    chunkIndex?: SortOrder
    anchor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentChunkMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    botConfigId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentHash?: SortOrder
    chunkIndex?: SortOrder
    anchor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentChunkSumOrderByAggregateInput = {
    chunkIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WebsitePageCompanyIdUrlCompoundUniqueInput = {
    companyId: string
    url: string
  }

  export type WebsitePageCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    status?: SortOrder
    lastCrawledAt?: SortOrder
    contentHash?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsitePageMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    status?: SortOrder
    lastCrawledAt?: SortOrder
    contentHash?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsitePageMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    status?: SortOrder
    lastCrawledAt?: SortOrder
    contentHash?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CrawlJobCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    triggeredBy?: SortOrder
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlJobAvgOrderByAggregateInput = {
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
  }

  export type CrawlJobMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    triggeredBy?: SortOrder
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlJobMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    triggeredBy?: SortOrder
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlJobSumOrderByAggregateInput = {
    totalPages?: SortOrder
    donePages?: SortOrder
    failedPages?: SortOrder
  }

  export type DocumentChunkCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput> | DocumentChunkCreateWithoutCompanyInput[] | DocumentChunkUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentChunkCreateOrConnectWithoutCompanyInput | DocumentChunkCreateOrConnectWithoutCompanyInput[]
    createMany?: DocumentChunkCreateManyCompanyInputEnvelope
    connect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
  }

  export type WebsitePageCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput> | WebsitePageCreateWithoutCompanyInput[] | WebsitePageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WebsitePageCreateOrConnectWithoutCompanyInput | WebsitePageCreateOrConnectWithoutCompanyInput[]
    createMany?: WebsitePageCreateManyCompanyInputEnvelope
    connect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
  }

  export type CrawlJobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput> | CrawlJobCreateWithoutCompanyInput[] | CrawlJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CrawlJobCreateOrConnectWithoutCompanyInput | CrawlJobCreateOrConnectWithoutCompanyInput[]
    createMany?: CrawlJobCreateManyCompanyInputEnvelope
    connect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
  }

  export type DocumentChunkUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput> | DocumentChunkCreateWithoutCompanyInput[] | DocumentChunkUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentChunkCreateOrConnectWithoutCompanyInput | DocumentChunkCreateOrConnectWithoutCompanyInput[]
    createMany?: DocumentChunkCreateManyCompanyInputEnvelope
    connect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
  }

  export type WebsitePageUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput> | WebsitePageCreateWithoutCompanyInput[] | WebsitePageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WebsitePageCreateOrConnectWithoutCompanyInput | WebsitePageCreateOrConnectWithoutCompanyInput[]
    createMany?: WebsitePageCreateManyCompanyInputEnvelope
    connect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
  }

  export type CrawlJobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput> | CrawlJobCreateWithoutCompanyInput[] | CrawlJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CrawlJobCreateOrConnectWithoutCompanyInput | CrawlJobCreateOrConnectWithoutCompanyInput[]
    createMany?: CrawlJobCreateManyCompanyInputEnvelope
    connect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentChunkUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput> | DocumentChunkCreateWithoutCompanyInput[] | DocumentChunkUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentChunkCreateOrConnectWithoutCompanyInput | DocumentChunkCreateOrConnectWithoutCompanyInput[]
    upsert?: DocumentChunkUpsertWithWhereUniqueWithoutCompanyInput | DocumentChunkUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DocumentChunkCreateManyCompanyInputEnvelope
    set?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    disconnect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    delete?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    connect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    update?: DocumentChunkUpdateWithWhereUniqueWithoutCompanyInput | DocumentChunkUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DocumentChunkUpdateManyWithWhereWithoutCompanyInput | DocumentChunkUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DocumentChunkScalarWhereInput | DocumentChunkScalarWhereInput[]
  }

  export type WebsitePageUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput> | WebsitePageCreateWithoutCompanyInput[] | WebsitePageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WebsitePageCreateOrConnectWithoutCompanyInput | WebsitePageCreateOrConnectWithoutCompanyInput[]
    upsert?: WebsitePageUpsertWithWhereUniqueWithoutCompanyInput | WebsitePageUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WebsitePageCreateManyCompanyInputEnvelope
    set?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    disconnect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    delete?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    connect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    update?: WebsitePageUpdateWithWhereUniqueWithoutCompanyInput | WebsitePageUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WebsitePageUpdateManyWithWhereWithoutCompanyInput | WebsitePageUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WebsitePageScalarWhereInput | WebsitePageScalarWhereInput[]
  }

  export type CrawlJobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput> | CrawlJobCreateWithoutCompanyInput[] | CrawlJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CrawlJobCreateOrConnectWithoutCompanyInput | CrawlJobCreateOrConnectWithoutCompanyInput[]
    upsert?: CrawlJobUpsertWithWhereUniqueWithoutCompanyInput | CrawlJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CrawlJobCreateManyCompanyInputEnvelope
    set?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    disconnect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    delete?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    connect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    update?: CrawlJobUpdateWithWhereUniqueWithoutCompanyInput | CrawlJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CrawlJobUpdateManyWithWhereWithoutCompanyInput | CrawlJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CrawlJobScalarWhereInput | CrawlJobScalarWhereInput[]
  }

  export type DocumentChunkUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput> | DocumentChunkCreateWithoutCompanyInput[] | DocumentChunkUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DocumentChunkCreateOrConnectWithoutCompanyInput | DocumentChunkCreateOrConnectWithoutCompanyInput[]
    upsert?: DocumentChunkUpsertWithWhereUniqueWithoutCompanyInput | DocumentChunkUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DocumentChunkCreateManyCompanyInputEnvelope
    set?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    disconnect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    delete?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    connect?: DocumentChunkWhereUniqueInput | DocumentChunkWhereUniqueInput[]
    update?: DocumentChunkUpdateWithWhereUniqueWithoutCompanyInput | DocumentChunkUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DocumentChunkUpdateManyWithWhereWithoutCompanyInput | DocumentChunkUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DocumentChunkScalarWhereInput | DocumentChunkScalarWhereInput[]
  }

  export type WebsitePageUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput> | WebsitePageCreateWithoutCompanyInput[] | WebsitePageUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WebsitePageCreateOrConnectWithoutCompanyInput | WebsitePageCreateOrConnectWithoutCompanyInput[]
    upsert?: WebsitePageUpsertWithWhereUniqueWithoutCompanyInput | WebsitePageUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WebsitePageCreateManyCompanyInputEnvelope
    set?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    disconnect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    delete?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    connect?: WebsitePageWhereUniqueInput | WebsitePageWhereUniqueInput[]
    update?: WebsitePageUpdateWithWhereUniqueWithoutCompanyInput | WebsitePageUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WebsitePageUpdateManyWithWhereWithoutCompanyInput | WebsitePageUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WebsitePageScalarWhereInput | WebsitePageScalarWhereInput[]
  }

  export type CrawlJobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput> | CrawlJobCreateWithoutCompanyInput[] | CrawlJobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CrawlJobCreateOrConnectWithoutCompanyInput | CrawlJobCreateOrConnectWithoutCompanyInput[]
    upsert?: CrawlJobUpsertWithWhereUniqueWithoutCompanyInput | CrawlJobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CrawlJobCreateManyCompanyInputEnvelope
    set?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    disconnect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    delete?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    connect?: CrawlJobWhereUniqueInput | CrawlJobWhereUniqueInput[]
    update?: CrawlJobUpdateWithWhereUniqueWithoutCompanyInput | CrawlJobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CrawlJobUpdateManyWithWhereWithoutCompanyInput | CrawlJobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CrawlJobScalarWhereInput | CrawlJobScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutDocumentChunksInput = {
    create?: XOR<CompanyCreateWithoutDocumentChunksInput, CompanyUncheckedCreateWithoutDocumentChunksInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentChunksInput
    connect?: CompanyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutDocumentChunksNestedInput = {
    create?: XOR<CompanyCreateWithoutDocumentChunksInput, CompanyUncheckedCreateWithoutDocumentChunksInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDocumentChunksInput
    upsert?: CompanyUpsertWithoutDocumentChunksInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDocumentChunksInput, CompanyUpdateWithoutDocumentChunksInput>, CompanyUncheckedUpdateWithoutDocumentChunksInput>
  }

  export type CompanyCreateNestedOneWithoutWebsitePagesInput = {
    create?: XOR<CompanyCreateWithoutWebsitePagesInput, CompanyUncheckedCreateWithoutWebsitePagesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWebsitePagesInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutWebsitePagesNestedInput = {
    create?: XOR<CompanyCreateWithoutWebsitePagesInput, CompanyUncheckedCreateWithoutWebsitePagesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWebsitePagesInput
    upsert?: CompanyUpsertWithoutWebsitePagesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutWebsitePagesInput, CompanyUpdateWithoutWebsitePagesInput>, CompanyUncheckedUpdateWithoutWebsitePagesInput>
  }

  export type CompanyCreateNestedOneWithoutCrawlJobsInput = {
    create?: XOR<CompanyCreateWithoutCrawlJobsInput, CompanyUncheckedCreateWithoutCrawlJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCrawlJobsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutCrawlJobsNestedInput = {
    create?: XOR<CompanyCreateWithoutCrawlJobsInput, CompanyUncheckedCreateWithoutCrawlJobsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCrawlJobsInput
    upsert?: CompanyUpsertWithoutCrawlJobsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCrawlJobsInput, CompanyUpdateWithoutCrawlJobsInput>, CompanyUncheckedUpdateWithoutCrawlJobsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DocumentChunkCreateWithoutCompanyInput = {
    id?: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentChunkUncheckedCreateWithoutCompanyInput = {
    id?: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentChunkCreateOrConnectWithoutCompanyInput = {
    where: DocumentChunkWhereUniqueInput
    create: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput>
  }

  export type DocumentChunkCreateManyCompanyInputEnvelope = {
    data: DocumentChunkCreateManyCompanyInput | DocumentChunkCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type WebsitePageCreateWithoutCompanyInput = {
    id?: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsitePageUncheckedCreateWithoutCompanyInput = {
    id?: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsitePageCreateOrConnectWithoutCompanyInput = {
    where: WebsitePageWhereUniqueInput
    create: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput>
  }

  export type WebsitePageCreateManyCompanyInputEnvelope = {
    data: WebsitePageCreateManyCompanyInput | WebsitePageCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CrawlJobCreateWithoutCompanyInput = {
    id?: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CrawlJobUncheckedCreateWithoutCompanyInput = {
    id?: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CrawlJobCreateOrConnectWithoutCompanyInput = {
    where: CrawlJobWhereUniqueInput
    create: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput>
  }

  export type CrawlJobCreateManyCompanyInputEnvelope = {
    data: CrawlJobCreateManyCompanyInput | CrawlJobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type DocumentChunkUpsertWithWhereUniqueWithoutCompanyInput = {
    where: DocumentChunkWhereUniqueInput
    update: XOR<DocumentChunkUpdateWithoutCompanyInput, DocumentChunkUncheckedUpdateWithoutCompanyInput>
    create: XOR<DocumentChunkCreateWithoutCompanyInput, DocumentChunkUncheckedCreateWithoutCompanyInput>
  }

  export type DocumentChunkUpdateWithWhereUniqueWithoutCompanyInput = {
    where: DocumentChunkWhereUniqueInput
    data: XOR<DocumentChunkUpdateWithoutCompanyInput, DocumentChunkUncheckedUpdateWithoutCompanyInput>
  }

  export type DocumentChunkUpdateManyWithWhereWithoutCompanyInput = {
    where: DocumentChunkScalarWhereInput
    data: XOR<DocumentChunkUpdateManyMutationInput, DocumentChunkUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DocumentChunkScalarWhereInput = {
    AND?: DocumentChunkScalarWhereInput | DocumentChunkScalarWhereInput[]
    OR?: DocumentChunkScalarWhereInput[]
    NOT?: DocumentChunkScalarWhereInput | DocumentChunkScalarWhereInput[]
    id?: StringFilter<"DocumentChunk"> | string
    companyId?: StringFilter<"DocumentChunk"> | string
    botConfigId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceType?: StringFilter<"DocumentChunk"> | string
    sourceId?: StringNullableFilter<"DocumentChunk"> | string | null
    sourceUrl?: StringNullableFilter<"DocumentChunk"> | string | null
    title?: StringNullableFilter<"DocumentChunk"> | string | null
    content?: StringFilter<"DocumentChunk"> | string
    contentHash?: StringFilter<"DocumentChunk"> | string
    chunkIndex?: IntFilter<"DocumentChunk"> | number
    anchor?: StringNullableFilter<"DocumentChunk"> | string | null
    metadata?: JsonNullableFilter<"DocumentChunk">
    createdAt?: DateTimeFilter<"DocumentChunk"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentChunk"> | Date | string
  }

  export type WebsitePageUpsertWithWhereUniqueWithoutCompanyInput = {
    where: WebsitePageWhereUniqueInput
    update: XOR<WebsitePageUpdateWithoutCompanyInput, WebsitePageUncheckedUpdateWithoutCompanyInput>
    create: XOR<WebsitePageCreateWithoutCompanyInput, WebsitePageUncheckedCreateWithoutCompanyInput>
  }

  export type WebsitePageUpdateWithWhereUniqueWithoutCompanyInput = {
    where: WebsitePageWhereUniqueInput
    data: XOR<WebsitePageUpdateWithoutCompanyInput, WebsitePageUncheckedUpdateWithoutCompanyInput>
  }

  export type WebsitePageUpdateManyWithWhereWithoutCompanyInput = {
    where: WebsitePageScalarWhereInput
    data: XOR<WebsitePageUpdateManyMutationInput, WebsitePageUncheckedUpdateManyWithoutCompanyInput>
  }

  export type WebsitePageScalarWhereInput = {
    AND?: WebsitePageScalarWhereInput | WebsitePageScalarWhereInput[]
    OR?: WebsitePageScalarWhereInput[]
    NOT?: WebsitePageScalarWhereInput | WebsitePageScalarWhereInput[]
    id?: StringFilter<"WebsitePage"> | string
    companyId?: StringFilter<"WebsitePage"> | string
    url?: StringFilter<"WebsitePage"> | string
    title?: StringNullableFilter<"WebsitePage"> | string | null
    status?: StringFilter<"WebsitePage"> | string
    lastCrawledAt?: DateTimeNullableFilter<"WebsitePage"> | Date | string | null
    contentHash?: StringNullableFilter<"WebsitePage"> | string | null
    errorMessage?: StringNullableFilter<"WebsitePage"> | string | null
    createdAt?: DateTimeFilter<"WebsitePage"> | Date | string
    updatedAt?: DateTimeFilter<"WebsitePage"> | Date | string
  }

  export type CrawlJobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CrawlJobWhereUniqueInput
    update: XOR<CrawlJobUpdateWithoutCompanyInput, CrawlJobUncheckedUpdateWithoutCompanyInput>
    create: XOR<CrawlJobCreateWithoutCompanyInput, CrawlJobUncheckedCreateWithoutCompanyInput>
  }

  export type CrawlJobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CrawlJobWhereUniqueInput
    data: XOR<CrawlJobUpdateWithoutCompanyInput, CrawlJobUncheckedUpdateWithoutCompanyInput>
  }

  export type CrawlJobUpdateManyWithWhereWithoutCompanyInput = {
    where: CrawlJobScalarWhereInput
    data: XOR<CrawlJobUpdateManyMutationInput, CrawlJobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CrawlJobScalarWhereInput = {
    AND?: CrawlJobScalarWhereInput | CrawlJobScalarWhereInput[]
    OR?: CrawlJobScalarWhereInput[]
    NOT?: CrawlJobScalarWhereInput | CrawlJobScalarWhereInput[]
    id?: StringFilter<"CrawlJob"> | string
    companyId?: StringFilter<"CrawlJob"> | string
    domain?: StringFilter<"CrawlJob"> | string
    status?: StringFilter<"CrawlJob"> | string
    triggeredBy?: StringFilter<"CrawlJob"> | string
    totalPages?: IntFilter<"CrawlJob"> | number
    donePages?: IntFilter<"CrawlJob"> | number
    failedPages?: IntFilter<"CrawlJob"> | number
    startedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlJob"> | Date | string
  }

  export type CompanyCreateWithoutDocumentChunksInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    websitePages?: WebsitePageCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutDocumentChunksInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    websitePages?: WebsitePageUncheckedCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutDocumentChunksInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDocumentChunksInput, CompanyUncheckedCreateWithoutDocumentChunksInput>
  }

  export type CompanyUpsertWithoutDocumentChunksInput = {
    update: XOR<CompanyUpdateWithoutDocumentChunksInput, CompanyUncheckedUpdateWithoutDocumentChunksInput>
    create: XOR<CompanyCreateWithoutDocumentChunksInput, CompanyUncheckedCreateWithoutDocumentChunksInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDocumentChunksInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDocumentChunksInput, CompanyUncheckedUpdateWithoutDocumentChunksInput>
  }

  export type CompanyUpdateWithoutDocumentChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websitePages?: WebsitePageUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutDocumentChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websitePages?: WebsitePageUncheckedUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutWebsitePagesInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutWebsitePagesInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkUncheckedCreateNestedManyWithoutCompanyInput
    crawlJobs?: CrawlJobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutWebsitePagesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutWebsitePagesInput, CompanyUncheckedCreateWithoutWebsitePagesInput>
  }

  export type CompanyUpsertWithoutWebsitePagesInput = {
    update: XOR<CompanyUpdateWithoutWebsitePagesInput, CompanyUncheckedUpdateWithoutWebsitePagesInput>
    create: XOR<CompanyCreateWithoutWebsitePagesInput, CompanyUncheckedCreateWithoutWebsitePagesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutWebsitePagesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutWebsitePagesInput, CompanyUncheckedUpdateWithoutWebsitePagesInput>
  }

  export type CompanyUpdateWithoutWebsitePagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutWebsitePagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUncheckedUpdateManyWithoutCompanyNestedInput
    crawlJobs?: CrawlJobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutCrawlJobsInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkCreateNestedManyWithoutCompanyInput
    websitePages?: WebsitePageCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCrawlJobsInput = {
    id?: string
    userId: string
    name: string
    slug: string
    website?: string | null
    description?: string | null
    logoUrl?: string | null
    apiKey?: string
    apiKeyCreatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    documentChunks?: DocumentChunkUncheckedCreateNestedManyWithoutCompanyInput
    websitePages?: WebsitePageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCrawlJobsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCrawlJobsInput, CompanyUncheckedCreateWithoutCrawlJobsInput>
  }

  export type CompanyUpsertWithoutCrawlJobsInput = {
    update: XOR<CompanyUpdateWithoutCrawlJobsInput, CompanyUncheckedUpdateWithoutCrawlJobsInput>
    create: XOR<CompanyCreateWithoutCrawlJobsInput, CompanyUncheckedCreateWithoutCrawlJobsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCrawlJobsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCrawlJobsInput, CompanyUncheckedUpdateWithoutCrawlJobsInput>
  }

  export type CompanyUpdateWithoutCrawlJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUpdateManyWithoutCompanyNestedInput
    websitePages?: WebsitePageUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCrawlJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    apiKeyCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentChunks?: DocumentChunkUncheckedUpdateManyWithoutCompanyNestedInput
    websitePages?: WebsitePageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type DocumentChunkCreateManyCompanyInput = {
    id?: string
    botConfigId?: string | null
    sourceType: string
    sourceId?: string | null
    sourceUrl?: string | null
    title?: string | null
    content: string
    contentHash: string
    chunkIndex?: number
    anchor?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsitePageCreateManyCompanyInput = {
    id?: string
    url: string
    title?: string | null
    status?: string
    lastCrawledAt?: Date | string | null
    contentHash?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlJobCreateManyCompanyInput = {
    id?: string
    domain: string
    status?: string
    triggeredBy: string
    totalPages?: number
    donePages?: number
    failedPages?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DocumentChunkUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentChunkUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentChunkUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsitePageUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastCrawledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    totalPages?: IntFieldUpdateOperationsInput | number
    donePages?: IntFieldUpdateOperationsInput | number
    failedPages?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}