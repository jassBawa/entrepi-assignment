
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Streak
 * 
 */
export type Streak = $Result.DefaultSelection<Prisma.$StreakPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonCompletion
 * 
 */
export type LessonCompletion = $Result.DefaultSelection<Prisma.$LessonCompletionPayload>
/**
 * Model ReflectiveQuestion
 * 
 */
export type ReflectiveQuestion = $Result.DefaultSelection<Prisma.$ReflectiveQuestionPayload>
/**
 * Model Reflection
 * 
 */
export type Reflection = $Result.DefaultSelection<Prisma.$ReflectionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streak`: Exposes CRUD operations for the **Streak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streaks
    * const streaks = await prisma.streak.findMany()
    * ```
    */
  get streak(): Prisma.StreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonCompletion`: Exposes CRUD operations for the **LessonCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonCompletions
    * const lessonCompletions = await prisma.lessonCompletion.findMany()
    * ```
    */
  get lessonCompletion(): Prisma.LessonCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reflectiveQuestion`: Exposes CRUD operations for the **ReflectiveQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReflectiveQuestions
    * const reflectiveQuestions = await prisma.reflectiveQuestion.findMany()
    * ```
    */
  get reflectiveQuestion(): Prisma.ReflectiveQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reflection`: Exposes CRUD operations for the **Reflection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reflections
    * const reflections = await prisma.reflection.findMany()
    * ```
    */
  get reflection(): Prisma.ReflectionDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Streak: 'Streak',
    Course: 'Course',
    Lesson: 'Lesson',
    LessonCompletion: 'LessonCompletion',
    ReflectiveQuestion: 'ReflectiveQuestion',
    Reflection: 'Reflection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "streak" | "course" | "lesson" | "lessonCompletion" | "reflectiveQuestion" | "reflection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Streak: {
        payload: Prisma.$StreakPayload<ExtArgs>
        fields: Prisma.StreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findFirst: {
            args: Prisma.StreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findMany: {
            args: Prisma.StreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          create: {
            args: Prisma.StreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          createMany: {
            args: Prisma.StreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          delete: {
            args: Prisma.StreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          update: {
            args: Prisma.StreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          deleteMany: {
            args: Prisma.StreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          upsert: {
            args: Prisma.StreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          aggregate: {
            args: Prisma.StreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreak>
          }
          groupBy: {
            args: Prisma.StreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreakCountArgs<ExtArgs>
            result: $Utils.Optional<StreakCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonCompletion: {
        payload: Prisma.$LessonCompletionPayload<ExtArgs>
        fields: Prisma.LessonCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          findFirst: {
            args: Prisma.LessonCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          findMany: {
            args: Prisma.LessonCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[]
          }
          create: {
            args: Prisma.LessonCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          createMany: {
            args: Prisma.LessonCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[]
          }
          delete: {
            args: Prisma.LessonCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          update: {
            args: Prisma.LessonCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          deleteMany: {
            args: Prisma.LessonCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[]
          }
          upsert: {
            args: Prisma.LessonCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonCompletionPayload>
          }
          aggregate: {
            args: Prisma.LessonCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonCompletion>
          }
          groupBy: {
            args: Prisma.LessonCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCompletionCountAggregateOutputType> | number
          }
        }
      }
      ReflectiveQuestion: {
        payload: Prisma.$ReflectiveQuestionPayload<ExtArgs>
        fields: Prisma.ReflectiveQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReflectiveQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReflectiveQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          findFirst: {
            args: Prisma.ReflectiveQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReflectiveQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          findMany: {
            args: Prisma.ReflectiveQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>[]
          }
          create: {
            args: Prisma.ReflectiveQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          createMany: {
            args: Prisma.ReflectiveQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReflectiveQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>[]
          }
          delete: {
            args: Prisma.ReflectiveQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          update: {
            args: Prisma.ReflectiveQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ReflectiveQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReflectiveQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReflectiveQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>[]
          }
          upsert: {
            args: Prisma.ReflectiveQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectiveQuestionPayload>
          }
          aggregate: {
            args: Prisma.ReflectiveQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReflectiveQuestion>
          }
          groupBy: {
            args: Prisma.ReflectiveQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReflectiveQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReflectiveQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ReflectiveQuestionCountAggregateOutputType> | number
          }
        }
      }
      Reflection: {
        payload: Prisma.$ReflectionPayload<ExtArgs>
        fields: Prisma.ReflectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReflectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReflectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findFirst: {
            args: Prisma.ReflectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReflectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findMany: {
            args: Prisma.ReflectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          create: {
            args: Prisma.ReflectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          createMany: {
            args: Prisma.ReflectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReflectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          delete: {
            args: Prisma.ReflectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          update: {
            args: Prisma.ReflectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          deleteMany: {
            args: Prisma.ReflectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReflectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReflectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          upsert: {
            args: Prisma.ReflectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          aggregate: {
            args: Prisma.ReflectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReflection>
          }
          groupBy: {
            args: Prisma.ReflectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReflectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReflectionCountArgs<ExtArgs>
            result: $Utils.Optional<ReflectionCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    streak?: StreakOmit
    course?: CourseOmit
    lesson?: LessonOmit
    lessonCompletion?: LessonCompletionOmit
    reflectiveQuestion?: ReflectiveQuestionOmit
    reflection?: ReflectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reflections: number
    lessonCompletions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reflections?: boolean | UserCountOutputTypeCountReflectionsArgs
    lessonCompletions?: boolean | UserCountOutputTypeCountLessonCompletionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonCompletionWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    reflections: number
    completions: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reflections?: boolean | LessonCountOutputTypeCountReflectionsArgs
    completions?: boolean | LessonCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectiveQuestionWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonCompletionWhereInput
  }


  /**
   * Count Type ReflectiveQuestionCountOutputType
   */

  export type ReflectiveQuestionCountOutputType = {
    reflections: number
  }

  export type ReflectiveQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reflections?: boolean | ReflectiveQuestionCountOutputTypeCountReflectionsArgs
  }

  // Custom InputTypes
  /**
   * ReflectiveQuestionCountOutputType without action
   */
  export type ReflectiveQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestionCountOutputType
     */
    select?: ReflectiveQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReflectiveQuestionCountOutputType without action
   */
  export type ReflectiveQuestionCountOutputTypeCountReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    xp: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    xp: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    xp: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    xp: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    xp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    xp?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    xp?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    xp: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streak?: boolean | User$streakArgs<ExtArgs>
    reflections?: boolean | User$reflectionsArgs<ExtArgs>
    lessonCompletions?: boolean | User$lessonCompletionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "xp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streak?: boolean | User$streakArgs<ExtArgs>
    reflections?: boolean | User$reflectionsArgs<ExtArgs>
    lessonCompletions?: boolean | User$lessonCompletionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      streak: Prisma.$StreakPayload<ExtArgs> | null
      reflections: Prisma.$ReflectionPayload<ExtArgs>[]
      lessonCompletions: Prisma.$LessonCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      xp: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streak<T extends User$streakArgs<ExtArgs> = {}>(args?: Subset<T, User$streakArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reflections<T extends User$reflectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessonCompletions<T extends User$lessonCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$lessonCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.streak
   */
  export type User$streakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    where?: StreakWhereInput
  }

  /**
   * User.reflections
   */
  export type User$reflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    cursor?: ReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * User.lessonCompletions
   */
  export type User$lessonCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    where?: LessonCompletionWhereInput
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    cursor?: LessonCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonCompletionScalarFieldEnum | LessonCompletionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Streak
   */

  export type AggregateStreak = {
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  export type StreakAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    currentCount: number | null
  }

  export type StreakSumAggregateOutputType = {
    id: number | null
    userId: number | null
    currentCount: number | null
  }

  export type StreakMinAggregateOutputType = {
    id: number | null
    userId: number | null
    currentCount: number | null
    lastActiveOn: Date | null
  }

  export type StreakMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    currentCount: number | null
    lastActiveOn: Date | null
  }

  export type StreakCountAggregateOutputType = {
    id: number
    userId: number
    currentCount: number
    lastActiveOn: number
    _all: number
  }


  export type StreakAvgAggregateInputType = {
    id?: true
    userId?: true
    currentCount?: true
  }

  export type StreakSumAggregateInputType = {
    id?: true
    userId?: true
    currentCount?: true
  }

  export type StreakMinAggregateInputType = {
    id?: true
    userId?: true
    currentCount?: true
    lastActiveOn?: true
  }

  export type StreakMaxAggregateInputType = {
    id?: true
    userId?: true
    currentCount?: true
    lastActiveOn?: true
  }

  export type StreakCountAggregateInputType = {
    id?: true
    userId?: true
    currentCount?: true
    lastActiveOn?: true
    _all?: true
  }

  export type StreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streak to aggregate.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streaks
    **/
    _count?: true | StreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreakMaxAggregateInputType
  }

  export type GetStreakAggregateType<T extends StreakAggregateArgs> = {
        [P in keyof T & keyof AggregateStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreak[P]>
      : GetScalarType<T[P], AggregateStreak[P]>
  }




  export type StreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithAggregationInput | StreakOrderByWithAggregationInput[]
    by: StreakScalarFieldEnum[] | StreakScalarFieldEnum
    having?: StreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreakCountAggregateInputType | true
    _avg?: StreakAvgAggregateInputType
    _sum?: StreakSumAggregateInputType
    _min?: StreakMinAggregateInputType
    _max?: StreakMaxAggregateInputType
  }

  export type StreakGroupByOutputType = {
    id: number
    userId: number
    currentCount: number
    lastActiveOn: Date
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  type GetStreakGroupByPayload<T extends StreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreakGroupByOutputType[P]>
            : GetScalarType<T[P], StreakGroupByOutputType[P]>
        }
      >
    >


  export type StreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentCount?: boolean
    lastActiveOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentCount?: boolean
    lastActiveOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentCount?: boolean
    lastActiveOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectScalar = {
    id?: boolean
    userId?: boolean
    currentCount?: boolean
    lastActiveOn?: boolean
  }

  export type StreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentCount" | "lastActiveOn", ExtArgs["result"]["streak"]>
  export type StreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      currentCount: number
      lastActiveOn: Date
    }, ExtArgs["result"]["streak"]>
    composites: {}
  }

  type StreakGetPayload<S extends boolean | null | undefined | StreakDefaultArgs> = $Result.GetResult<Prisma.$StreakPayload, S>

  type StreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreakCountAggregateInputType | true
    }

  export interface StreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streak'], meta: { name: 'Streak' } }
    /**
     * Find zero or one Streak that matches the filter.
     * @param {StreakFindUniqueArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreakFindUniqueArgs>(args: SelectSubset<T, StreakFindUniqueArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreakFindUniqueOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreakFindUniqueOrThrowArgs>(args: SelectSubset<T, StreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreakFindFirstArgs>(args?: SelectSubset<T, StreakFindFirstArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreakFindFirstOrThrowArgs>(args?: SelectSubset<T, StreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streaks
     * const streaks = await prisma.streak.findMany()
     * 
     * // Get first 10 Streaks
     * const streaks = await prisma.streak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streakWithIdOnly = await prisma.streak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreakFindManyArgs>(args?: SelectSubset<T, StreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streak.
     * @param {StreakCreateArgs} args - Arguments to create a Streak.
     * @example
     * // Create one Streak
     * const Streak = await prisma.streak.create({
     *   data: {
     *     // ... data to create a Streak
     *   }
     * })
     * 
     */
    create<T extends StreakCreateArgs>(args: SelectSubset<T, StreakCreateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streaks.
     * @param {StreakCreateManyArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreakCreateManyArgs>(args?: SelectSubset<T, StreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streaks and returns the data saved in the database.
     * @param {StreakCreateManyAndReturnArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreakCreateManyAndReturnArgs>(args?: SelectSubset<T, StreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streak.
     * @param {StreakDeleteArgs} args - Arguments to delete one Streak.
     * @example
     * // Delete one Streak
     * const Streak = await prisma.streak.delete({
     *   where: {
     *     // ... filter to delete one Streak
     *   }
     * })
     * 
     */
    delete<T extends StreakDeleteArgs>(args: SelectSubset<T, StreakDeleteArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streak.
     * @param {StreakUpdateArgs} args - Arguments to update one Streak.
     * @example
     * // Update one Streak
     * const streak = await prisma.streak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreakUpdateArgs>(args: SelectSubset<T, StreakUpdateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streaks.
     * @param {StreakDeleteManyArgs} args - Arguments to filter Streaks to delete.
     * @example
     * // Delete a few Streaks
     * const { count } = await prisma.streak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreakDeleteManyArgs>(args?: SelectSubset<T, StreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreakUpdateManyArgs>(args: SelectSubset<T, StreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks and returns the data updated in the database.
     * @param {StreakUpdateManyAndReturnArgs} args - Arguments to update many Streaks.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreakUpdateManyAndReturnArgs>(args: SelectSubset<T, StreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streak.
     * @param {StreakUpsertArgs} args - Arguments to update or create a Streak.
     * @example
     * // Update or create a Streak
     * const streak = await prisma.streak.upsert({
     *   create: {
     *     // ... data to create a Streak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streak we want to update
     *   }
     * })
     */
    upsert<T extends StreakUpsertArgs>(args: SelectSubset<T, StreakUpsertArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakCountArgs} args - Arguments to filter Streaks to count.
     * @example
     * // Count the number of Streaks
     * const count = await prisma.streak.count({
     *   where: {
     *     // ... the filter for the Streaks we want to count
     *   }
     * })
    **/
    count<T extends StreakCountArgs>(
      args?: Subset<T, StreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreakAggregateArgs>(args: Subset<T, StreakAggregateArgs>): Prisma.PrismaPromise<GetStreakAggregateType<T>>

    /**
     * Group by Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakGroupByArgs} args - Group by arguments.
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
      T extends StreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreakGroupByArgs['orderBy'] }
        : { orderBy?: StreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streak model
   */
  readonly fields: StreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Streak model
   */
  interface StreakFieldRefs {
    readonly id: FieldRef<"Streak", 'Int'>
    readonly userId: FieldRef<"Streak", 'Int'>
    readonly currentCount: FieldRef<"Streak", 'Int'>
    readonly lastActiveOn: FieldRef<"Streak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Streak findUnique
   */
  export type StreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findUniqueOrThrow
   */
  export type StreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findFirst
   */
  export type StreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findFirstOrThrow
   */
  export type StreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findMany
   */
  export type StreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streaks to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak create
   */
  export type StreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Streak.
     */
    data: XOR<StreakCreateInput, StreakUncheckedCreateInput>
  }

  /**
   * Streak createMany
   */
  export type StreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
  }

  /**
   * Streak createManyAndReturn
   */
  export type StreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak update
   */
  export type StreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Streak.
     */
    data: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
    /**
     * Choose, which Streak to update.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak updateMany
   */
  export type StreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
  }

  /**
   * Streak updateManyAndReturn
   */
  export type StreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak upsert
   */
  export type StreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Streak to update in case it exists.
     */
    where: StreakWhereUniqueInput
    /**
     * In case the Streak found by the `where` argument doesn't exist, create a new Streak with this data.
     */
    create: XOR<StreakCreateInput, StreakUncheckedCreateInput>
    /**
     * In case the Streak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
  }

  /**
   * Streak delete
   */
  export type StreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter which Streak to delete.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak deleteMany
   */
  export type StreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaks to delete
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to delete.
     */
    limit?: number
  }

  /**
   * Streak without action
   */
  export type StreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    courseId: number | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    courseId: number | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    content: number
    courseId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: number
    title: string
    content: string
    courseId: number
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    reflections?: boolean | Lesson$reflectionsArgs<ExtArgs>
    completions?: boolean | Lesson$completionsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "courseId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    reflections?: boolean | Lesson$reflectionsArgs<ExtArgs>
    completions?: boolean | Lesson$completionsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      reflections: Prisma.$ReflectiveQuestionPayload<ExtArgs>[]
      completions: Prisma.$LessonCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      courseId: number
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reflections<T extends Lesson$reflectionsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$reflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completions<T extends Lesson$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly content: FieldRef<"Lesson", 'String'>
    readonly courseId: FieldRef<"Lesson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.reflections
   */
  export type Lesson$reflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    where?: ReflectiveQuestionWhereInput
    orderBy?: ReflectiveQuestionOrderByWithRelationInput | ReflectiveQuestionOrderByWithRelationInput[]
    cursor?: ReflectiveQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReflectiveQuestionScalarFieldEnum | ReflectiveQuestionScalarFieldEnum[]
  }

  /**
   * Lesson.completions
   */
  export type Lesson$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    where?: LessonCompletionWhereInput
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    cursor?: LessonCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonCompletionScalarFieldEnum | LessonCompletionScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonCompletion
   */

  export type AggregateLessonCompletion = {
    _count: LessonCompletionCountAggregateOutputType | null
    _avg: LessonCompletionAvgAggregateOutputType | null
    _sum: LessonCompletionSumAggregateOutputType | null
    _min: LessonCompletionMinAggregateOutputType | null
    _max: LessonCompletionMaxAggregateOutputType | null
  }

  export type LessonCompletionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
  }

  export type LessonCompletionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
  }

  export type LessonCompletionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
    completedAt: Date | null
  }

  export type LessonCompletionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: number | null
    completedAt: Date | null
  }

  export type LessonCompletionCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    completedAt: number
    _all: number
  }


  export type LessonCompletionAvgAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
  }

  export type LessonCompletionSumAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
  }

  export type LessonCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completedAt?: true
  }

  export type LessonCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completedAt?: true
  }

  export type LessonCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    completedAt?: true
    _all?: true
  }

  export type LessonCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonCompletion to aggregate.
     */
    where?: LessonCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonCompletions to fetch.
     */
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonCompletions
    **/
    _count?: true | LessonCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonCompletionMaxAggregateInputType
  }

  export type GetLessonCompletionAggregateType<T extends LessonCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonCompletion[P]>
      : GetScalarType<T[P], AggregateLessonCompletion[P]>
  }




  export type LessonCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonCompletionWhereInput
    orderBy?: LessonCompletionOrderByWithAggregationInput | LessonCompletionOrderByWithAggregationInput[]
    by: LessonCompletionScalarFieldEnum[] | LessonCompletionScalarFieldEnum
    having?: LessonCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCompletionCountAggregateInputType | true
    _avg?: LessonCompletionAvgAggregateInputType
    _sum?: LessonCompletionSumAggregateInputType
    _min?: LessonCompletionMinAggregateInputType
    _max?: LessonCompletionMaxAggregateInputType
  }

  export type LessonCompletionGroupByOutputType = {
    id: number
    userId: number
    lessonId: number
    completedAt: Date
    _count: LessonCompletionCountAggregateOutputType | null
    _avg: LessonCompletionAvgAggregateOutputType | null
    _sum: LessonCompletionSumAggregateOutputType | null
    _min: LessonCompletionMinAggregateOutputType | null
    _max: LessonCompletionMaxAggregateOutputType | null
  }

  type GetLessonCompletionGroupByPayload<T extends LessonCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], LessonCompletionGroupByOutputType[P]>
        }
      >
    >


  export type LessonCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonCompletion"]>

  export type LessonCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonCompletion"]>

  export type LessonCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonCompletion"]>

  export type LessonCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    completedAt?: boolean
  }

  export type LessonCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "completedAt", ExtArgs["result"]["lessonCompletion"]>
  export type LessonCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonCompletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      lessonId: number
      completedAt: Date
    }, ExtArgs["result"]["lessonCompletion"]>
    composites: {}
  }

  type LessonCompletionGetPayload<S extends boolean | null | undefined | LessonCompletionDefaultArgs> = $Result.GetResult<Prisma.$LessonCompletionPayload, S>

  type LessonCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCompletionCountAggregateInputType | true
    }

  export interface LessonCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonCompletion'], meta: { name: 'LessonCompletion' } }
    /**
     * Find zero or one LessonCompletion that matches the filter.
     * @param {LessonCompletionFindUniqueArgs} args - Arguments to find a LessonCompletion
     * @example
     * // Get one LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonCompletionFindUniqueArgs>(args: SelectSubset<T, LessonCompletionFindUniqueArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonCompletionFindUniqueOrThrowArgs} args - Arguments to find a LessonCompletion
     * @example
     * // Get one LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionFindFirstArgs} args - Arguments to find a LessonCompletion
     * @example
     * // Get one LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonCompletionFindFirstArgs>(args?: SelectSubset<T, LessonCompletionFindFirstArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionFindFirstOrThrowArgs} args - Arguments to find a LessonCompletion
     * @example
     * // Get one LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonCompletions
     * const lessonCompletions = await prisma.lessonCompletion.findMany()
     * 
     * // Get first 10 LessonCompletions
     * const lessonCompletions = await prisma.lessonCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonCompletionWithIdOnly = await prisma.lessonCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonCompletionFindManyArgs>(args?: SelectSubset<T, LessonCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonCompletion.
     * @param {LessonCompletionCreateArgs} args - Arguments to create a LessonCompletion.
     * @example
     * // Create one LessonCompletion
     * const LessonCompletion = await prisma.lessonCompletion.create({
     *   data: {
     *     // ... data to create a LessonCompletion
     *   }
     * })
     * 
     */
    create<T extends LessonCompletionCreateArgs>(args: SelectSubset<T, LessonCompletionCreateArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonCompletions.
     * @param {LessonCompletionCreateManyArgs} args - Arguments to create many LessonCompletions.
     * @example
     * // Create many LessonCompletions
     * const lessonCompletion = await prisma.lessonCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCompletionCreateManyArgs>(args?: SelectSubset<T, LessonCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonCompletions and returns the data saved in the database.
     * @param {LessonCompletionCreateManyAndReturnArgs} args - Arguments to create many LessonCompletions.
     * @example
     * // Create many LessonCompletions
     * const lessonCompletion = await prisma.lessonCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonCompletions and only return the `id`
     * const lessonCompletionWithIdOnly = await prisma.lessonCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonCompletion.
     * @param {LessonCompletionDeleteArgs} args - Arguments to delete one LessonCompletion.
     * @example
     * // Delete one LessonCompletion
     * const LessonCompletion = await prisma.lessonCompletion.delete({
     *   where: {
     *     // ... filter to delete one LessonCompletion
     *   }
     * })
     * 
     */
    delete<T extends LessonCompletionDeleteArgs>(args: SelectSubset<T, LessonCompletionDeleteArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonCompletion.
     * @param {LessonCompletionUpdateArgs} args - Arguments to update one LessonCompletion.
     * @example
     * // Update one LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonCompletionUpdateArgs>(args: SelectSubset<T, LessonCompletionUpdateArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonCompletions.
     * @param {LessonCompletionDeleteManyArgs} args - Arguments to filter LessonCompletions to delete.
     * @example
     * // Delete a few LessonCompletions
     * const { count } = await prisma.lessonCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonCompletionDeleteManyArgs>(args?: SelectSubset<T, LessonCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonCompletions
     * const lessonCompletion = await prisma.lessonCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonCompletionUpdateManyArgs>(args: SelectSubset<T, LessonCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonCompletions and returns the data updated in the database.
     * @param {LessonCompletionUpdateManyAndReturnArgs} args - Arguments to update many LessonCompletions.
     * @example
     * // Update many LessonCompletions
     * const lessonCompletion = await prisma.lessonCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonCompletions and only return the `id`
     * const lessonCompletionWithIdOnly = await prisma.lessonCompletion.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonCompletion.
     * @param {LessonCompletionUpsertArgs} args - Arguments to update or create a LessonCompletion.
     * @example
     * // Update or create a LessonCompletion
     * const lessonCompletion = await prisma.lessonCompletion.upsert({
     *   create: {
     *     // ... data to create a LessonCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonCompletion we want to update
     *   }
     * })
     */
    upsert<T extends LessonCompletionUpsertArgs>(args: SelectSubset<T, LessonCompletionUpsertArgs<ExtArgs>>): Prisma__LessonCompletionClient<$Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionCountArgs} args - Arguments to filter LessonCompletions to count.
     * @example
     * // Count the number of LessonCompletions
     * const count = await prisma.lessonCompletion.count({
     *   where: {
     *     // ... the filter for the LessonCompletions we want to count
     *   }
     * })
    **/
    count<T extends LessonCompletionCountArgs>(
      args?: Subset<T, LessonCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonCompletionAggregateArgs>(args: Subset<T, LessonCompletionAggregateArgs>): Prisma.PrismaPromise<GetLessonCompletionAggregateType<T>>

    /**
     * Group by LessonCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCompletionGroupByArgs} args - Group by arguments.
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
      T extends LessonCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonCompletionGroupByArgs['orderBy'] }
        : { orderBy?: LessonCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonCompletion model
   */
  readonly fields: LessonCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonCompletion model
   */
  interface LessonCompletionFieldRefs {
    readonly id: FieldRef<"LessonCompletion", 'Int'>
    readonly userId: FieldRef<"LessonCompletion", 'Int'>
    readonly lessonId: FieldRef<"LessonCompletion", 'Int'>
    readonly completedAt: FieldRef<"LessonCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonCompletion findUnique
   */
  export type LessonCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter, which LessonCompletion to fetch.
     */
    where: LessonCompletionWhereUniqueInput
  }

  /**
   * LessonCompletion findUniqueOrThrow
   */
  export type LessonCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter, which LessonCompletion to fetch.
     */
    where: LessonCompletionWhereUniqueInput
  }

  /**
   * LessonCompletion findFirst
   */
  export type LessonCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter, which LessonCompletion to fetch.
     */
    where?: LessonCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonCompletions to fetch.
     */
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonCompletions.
     */
    cursor?: LessonCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonCompletions.
     */
    distinct?: LessonCompletionScalarFieldEnum | LessonCompletionScalarFieldEnum[]
  }

  /**
   * LessonCompletion findFirstOrThrow
   */
  export type LessonCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter, which LessonCompletion to fetch.
     */
    where?: LessonCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonCompletions to fetch.
     */
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonCompletions.
     */
    cursor?: LessonCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonCompletions.
     */
    distinct?: LessonCompletionScalarFieldEnum | LessonCompletionScalarFieldEnum[]
  }

  /**
   * LessonCompletion findMany
   */
  export type LessonCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter, which LessonCompletions to fetch.
     */
    where?: LessonCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonCompletions to fetch.
     */
    orderBy?: LessonCompletionOrderByWithRelationInput | LessonCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonCompletions.
     */
    cursor?: LessonCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonCompletions.
     */
    skip?: number
    distinct?: LessonCompletionScalarFieldEnum | LessonCompletionScalarFieldEnum[]
  }

  /**
   * LessonCompletion create
   */
  export type LessonCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonCompletion.
     */
    data: XOR<LessonCompletionCreateInput, LessonCompletionUncheckedCreateInput>
  }

  /**
   * LessonCompletion createMany
   */
  export type LessonCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonCompletions.
     */
    data: LessonCompletionCreateManyInput | LessonCompletionCreateManyInput[]
  }

  /**
   * LessonCompletion createManyAndReturn
   */
  export type LessonCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many LessonCompletions.
     */
    data: LessonCompletionCreateManyInput | LessonCompletionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonCompletion update
   */
  export type LessonCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonCompletion.
     */
    data: XOR<LessonCompletionUpdateInput, LessonCompletionUncheckedUpdateInput>
    /**
     * Choose, which LessonCompletion to update.
     */
    where: LessonCompletionWhereUniqueInput
  }

  /**
   * LessonCompletion updateMany
   */
  export type LessonCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonCompletions.
     */
    data: XOR<LessonCompletionUpdateManyMutationInput, LessonCompletionUncheckedUpdateManyInput>
    /**
     * Filter which LessonCompletions to update
     */
    where?: LessonCompletionWhereInput
    /**
     * Limit how many LessonCompletions to update.
     */
    limit?: number
  }

  /**
   * LessonCompletion updateManyAndReturn
   */
  export type LessonCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * The data used to update LessonCompletions.
     */
    data: XOR<LessonCompletionUpdateManyMutationInput, LessonCompletionUncheckedUpdateManyInput>
    /**
     * Filter which LessonCompletions to update
     */
    where?: LessonCompletionWhereInput
    /**
     * Limit how many LessonCompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonCompletion upsert
   */
  export type LessonCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonCompletion to update in case it exists.
     */
    where: LessonCompletionWhereUniqueInput
    /**
     * In case the LessonCompletion found by the `where` argument doesn't exist, create a new LessonCompletion with this data.
     */
    create: XOR<LessonCompletionCreateInput, LessonCompletionUncheckedCreateInput>
    /**
     * In case the LessonCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonCompletionUpdateInput, LessonCompletionUncheckedUpdateInput>
  }

  /**
   * LessonCompletion delete
   */
  export type LessonCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
    /**
     * Filter which LessonCompletion to delete.
     */
    where: LessonCompletionWhereUniqueInput
  }

  /**
   * LessonCompletion deleteMany
   */
  export type LessonCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonCompletions to delete
     */
    where?: LessonCompletionWhereInput
    /**
     * Limit how many LessonCompletions to delete.
     */
    limit?: number
  }

  /**
   * LessonCompletion without action
   */
  export type LessonCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: LessonCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: LessonCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonCompletionInclude<ExtArgs> | null
  }


  /**
   * Model ReflectiveQuestion
   */

  export type AggregateReflectiveQuestion = {
    _count: ReflectiveQuestionCountAggregateOutputType | null
    _avg: ReflectiveQuestionAvgAggregateOutputType | null
    _sum: ReflectiveQuestionSumAggregateOutputType | null
    _min: ReflectiveQuestionMinAggregateOutputType | null
    _max: ReflectiveQuestionMaxAggregateOutputType | null
  }

  export type ReflectiveQuestionAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type ReflectiveQuestionSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type ReflectiveQuestionMinAggregateOutputType = {
    id: number | null
    lessonId: number | null
    question: string | null
  }

  export type ReflectiveQuestionMaxAggregateOutputType = {
    id: number | null
    lessonId: number | null
    question: string | null
  }

  export type ReflectiveQuestionCountAggregateOutputType = {
    id: number
    lessonId: number
    question: number
    _all: number
  }


  export type ReflectiveQuestionAvgAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type ReflectiveQuestionSumAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type ReflectiveQuestionMinAggregateInputType = {
    id?: true
    lessonId?: true
    question?: true
  }

  export type ReflectiveQuestionMaxAggregateInputType = {
    id?: true
    lessonId?: true
    question?: true
  }

  export type ReflectiveQuestionCountAggregateInputType = {
    id?: true
    lessonId?: true
    question?: true
    _all?: true
  }

  export type ReflectiveQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReflectiveQuestion to aggregate.
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReflectiveQuestions to fetch.
     */
    orderBy?: ReflectiveQuestionOrderByWithRelationInput | ReflectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReflectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReflectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReflectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReflectiveQuestions
    **/
    _count?: true | ReflectiveQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReflectiveQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReflectiveQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReflectiveQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReflectiveQuestionMaxAggregateInputType
  }

  export type GetReflectiveQuestionAggregateType<T extends ReflectiveQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateReflectiveQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReflectiveQuestion[P]>
      : GetScalarType<T[P], AggregateReflectiveQuestion[P]>
  }




  export type ReflectiveQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectiveQuestionWhereInput
    orderBy?: ReflectiveQuestionOrderByWithAggregationInput | ReflectiveQuestionOrderByWithAggregationInput[]
    by: ReflectiveQuestionScalarFieldEnum[] | ReflectiveQuestionScalarFieldEnum
    having?: ReflectiveQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReflectiveQuestionCountAggregateInputType | true
    _avg?: ReflectiveQuestionAvgAggregateInputType
    _sum?: ReflectiveQuestionSumAggregateInputType
    _min?: ReflectiveQuestionMinAggregateInputType
    _max?: ReflectiveQuestionMaxAggregateInputType
  }

  export type ReflectiveQuestionGroupByOutputType = {
    id: number
    lessonId: number
    question: string
    _count: ReflectiveQuestionCountAggregateOutputType | null
    _avg: ReflectiveQuestionAvgAggregateOutputType | null
    _sum: ReflectiveQuestionSumAggregateOutputType | null
    _min: ReflectiveQuestionMinAggregateOutputType | null
    _max: ReflectiveQuestionMaxAggregateOutputType | null
  }

  type GetReflectiveQuestionGroupByPayload<T extends ReflectiveQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReflectiveQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReflectiveQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReflectiveQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ReflectiveQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ReflectiveQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    question?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    reflections?: boolean | ReflectiveQuestion$reflectionsArgs<ExtArgs>
    _count?: boolean | ReflectiveQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflectiveQuestion"]>

  export type ReflectiveQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    question?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflectiveQuestion"]>

  export type ReflectiveQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    question?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflectiveQuestion"]>

  export type ReflectiveQuestionSelectScalar = {
    id?: boolean
    lessonId?: boolean
    question?: boolean
  }

  export type ReflectiveQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId" | "question", ExtArgs["result"]["reflectiveQuestion"]>
  export type ReflectiveQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    reflections?: boolean | ReflectiveQuestion$reflectionsArgs<ExtArgs>
    _count?: boolean | ReflectiveQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReflectiveQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type ReflectiveQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $ReflectiveQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReflectiveQuestion"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      reflections: Prisma.$ReflectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lessonId: number
      question: string
    }, ExtArgs["result"]["reflectiveQuestion"]>
    composites: {}
  }

  type ReflectiveQuestionGetPayload<S extends boolean | null | undefined | ReflectiveQuestionDefaultArgs> = $Result.GetResult<Prisma.$ReflectiveQuestionPayload, S>

  type ReflectiveQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReflectiveQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReflectiveQuestionCountAggregateInputType | true
    }

  export interface ReflectiveQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReflectiveQuestion'], meta: { name: 'ReflectiveQuestion' } }
    /**
     * Find zero or one ReflectiveQuestion that matches the filter.
     * @param {ReflectiveQuestionFindUniqueArgs} args - Arguments to find a ReflectiveQuestion
     * @example
     * // Get one ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReflectiveQuestionFindUniqueArgs>(args: SelectSubset<T, ReflectiveQuestionFindUniqueArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReflectiveQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReflectiveQuestionFindUniqueOrThrowArgs} args - Arguments to find a ReflectiveQuestion
     * @example
     * // Get one ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReflectiveQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReflectiveQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReflectiveQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionFindFirstArgs} args - Arguments to find a ReflectiveQuestion
     * @example
     * // Get one ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReflectiveQuestionFindFirstArgs>(args?: SelectSubset<T, ReflectiveQuestionFindFirstArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReflectiveQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionFindFirstOrThrowArgs} args - Arguments to find a ReflectiveQuestion
     * @example
     * // Get one ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReflectiveQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReflectiveQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReflectiveQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReflectiveQuestions
     * const reflectiveQuestions = await prisma.reflectiveQuestion.findMany()
     * 
     * // Get first 10 ReflectiveQuestions
     * const reflectiveQuestions = await prisma.reflectiveQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reflectiveQuestionWithIdOnly = await prisma.reflectiveQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReflectiveQuestionFindManyArgs>(args?: SelectSubset<T, ReflectiveQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReflectiveQuestion.
     * @param {ReflectiveQuestionCreateArgs} args - Arguments to create a ReflectiveQuestion.
     * @example
     * // Create one ReflectiveQuestion
     * const ReflectiveQuestion = await prisma.reflectiveQuestion.create({
     *   data: {
     *     // ... data to create a ReflectiveQuestion
     *   }
     * })
     * 
     */
    create<T extends ReflectiveQuestionCreateArgs>(args: SelectSubset<T, ReflectiveQuestionCreateArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReflectiveQuestions.
     * @param {ReflectiveQuestionCreateManyArgs} args - Arguments to create many ReflectiveQuestions.
     * @example
     * // Create many ReflectiveQuestions
     * const reflectiveQuestion = await prisma.reflectiveQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReflectiveQuestionCreateManyArgs>(args?: SelectSubset<T, ReflectiveQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReflectiveQuestions and returns the data saved in the database.
     * @param {ReflectiveQuestionCreateManyAndReturnArgs} args - Arguments to create many ReflectiveQuestions.
     * @example
     * // Create many ReflectiveQuestions
     * const reflectiveQuestion = await prisma.reflectiveQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReflectiveQuestions and only return the `id`
     * const reflectiveQuestionWithIdOnly = await prisma.reflectiveQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReflectiveQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReflectiveQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReflectiveQuestion.
     * @param {ReflectiveQuestionDeleteArgs} args - Arguments to delete one ReflectiveQuestion.
     * @example
     * // Delete one ReflectiveQuestion
     * const ReflectiveQuestion = await prisma.reflectiveQuestion.delete({
     *   where: {
     *     // ... filter to delete one ReflectiveQuestion
     *   }
     * })
     * 
     */
    delete<T extends ReflectiveQuestionDeleteArgs>(args: SelectSubset<T, ReflectiveQuestionDeleteArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReflectiveQuestion.
     * @param {ReflectiveQuestionUpdateArgs} args - Arguments to update one ReflectiveQuestion.
     * @example
     * // Update one ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReflectiveQuestionUpdateArgs>(args: SelectSubset<T, ReflectiveQuestionUpdateArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReflectiveQuestions.
     * @param {ReflectiveQuestionDeleteManyArgs} args - Arguments to filter ReflectiveQuestions to delete.
     * @example
     * // Delete a few ReflectiveQuestions
     * const { count } = await prisma.reflectiveQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReflectiveQuestionDeleteManyArgs>(args?: SelectSubset<T, ReflectiveQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReflectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReflectiveQuestions
     * const reflectiveQuestion = await prisma.reflectiveQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReflectiveQuestionUpdateManyArgs>(args: SelectSubset<T, ReflectiveQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReflectiveQuestions and returns the data updated in the database.
     * @param {ReflectiveQuestionUpdateManyAndReturnArgs} args - Arguments to update many ReflectiveQuestions.
     * @example
     * // Update many ReflectiveQuestions
     * const reflectiveQuestion = await prisma.reflectiveQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReflectiveQuestions and only return the `id`
     * const reflectiveQuestionWithIdOnly = await prisma.reflectiveQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReflectiveQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReflectiveQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReflectiveQuestion.
     * @param {ReflectiveQuestionUpsertArgs} args - Arguments to update or create a ReflectiveQuestion.
     * @example
     * // Update or create a ReflectiveQuestion
     * const reflectiveQuestion = await prisma.reflectiveQuestion.upsert({
     *   create: {
     *     // ... data to create a ReflectiveQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReflectiveQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ReflectiveQuestionUpsertArgs>(args: SelectSubset<T, ReflectiveQuestionUpsertArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReflectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionCountArgs} args - Arguments to filter ReflectiveQuestions to count.
     * @example
     * // Count the number of ReflectiveQuestions
     * const count = await prisma.reflectiveQuestion.count({
     *   where: {
     *     // ... the filter for the ReflectiveQuestions we want to count
     *   }
     * })
    **/
    count<T extends ReflectiveQuestionCountArgs>(
      args?: Subset<T, ReflectiveQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReflectiveQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReflectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReflectiveQuestionAggregateArgs>(args: Subset<T, ReflectiveQuestionAggregateArgs>): Prisma.PrismaPromise<GetReflectiveQuestionAggregateType<T>>

    /**
     * Group by ReflectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectiveQuestionGroupByArgs} args - Group by arguments.
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
      T extends ReflectiveQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReflectiveQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ReflectiveQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReflectiveQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReflectiveQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReflectiveQuestion model
   */
  readonly fields: ReflectiveQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReflectiveQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReflectiveQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reflections<T extends ReflectiveQuestion$reflectionsArgs<ExtArgs> = {}>(args?: Subset<T, ReflectiveQuestion$reflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReflectiveQuestion model
   */
  interface ReflectiveQuestionFieldRefs {
    readonly id: FieldRef<"ReflectiveQuestion", 'Int'>
    readonly lessonId: FieldRef<"ReflectiveQuestion", 'Int'>
    readonly question: FieldRef<"ReflectiveQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReflectiveQuestion findUnique
   */
  export type ReflectiveQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ReflectiveQuestion to fetch.
     */
    where: ReflectiveQuestionWhereUniqueInput
  }

  /**
   * ReflectiveQuestion findUniqueOrThrow
   */
  export type ReflectiveQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ReflectiveQuestion to fetch.
     */
    where: ReflectiveQuestionWhereUniqueInput
  }

  /**
   * ReflectiveQuestion findFirst
   */
  export type ReflectiveQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ReflectiveQuestion to fetch.
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReflectiveQuestions to fetch.
     */
    orderBy?: ReflectiveQuestionOrderByWithRelationInput | ReflectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReflectiveQuestions.
     */
    cursor?: ReflectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReflectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReflectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReflectiveQuestions.
     */
    distinct?: ReflectiveQuestionScalarFieldEnum | ReflectiveQuestionScalarFieldEnum[]
  }

  /**
   * ReflectiveQuestion findFirstOrThrow
   */
  export type ReflectiveQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ReflectiveQuestion to fetch.
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReflectiveQuestions to fetch.
     */
    orderBy?: ReflectiveQuestionOrderByWithRelationInput | ReflectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReflectiveQuestions.
     */
    cursor?: ReflectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReflectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReflectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReflectiveQuestions.
     */
    distinct?: ReflectiveQuestionScalarFieldEnum | ReflectiveQuestionScalarFieldEnum[]
  }

  /**
   * ReflectiveQuestion findMany
   */
  export type ReflectiveQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ReflectiveQuestions to fetch.
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReflectiveQuestions to fetch.
     */
    orderBy?: ReflectiveQuestionOrderByWithRelationInput | ReflectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReflectiveQuestions.
     */
    cursor?: ReflectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReflectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReflectiveQuestions.
     */
    skip?: number
    distinct?: ReflectiveQuestionScalarFieldEnum | ReflectiveQuestionScalarFieldEnum[]
  }

  /**
   * ReflectiveQuestion create
   */
  export type ReflectiveQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReflectiveQuestion.
     */
    data: XOR<ReflectiveQuestionCreateInput, ReflectiveQuestionUncheckedCreateInput>
  }

  /**
   * ReflectiveQuestion createMany
   */
  export type ReflectiveQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReflectiveQuestions.
     */
    data: ReflectiveQuestionCreateManyInput | ReflectiveQuestionCreateManyInput[]
  }

  /**
   * ReflectiveQuestion createManyAndReturn
   */
  export type ReflectiveQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many ReflectiveQuestions.
     */
    data: ReflectiveQuestionCreateManyInput | ReflectiveQuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReflectiveQuestion update
   */
  export type ReflectiveQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReflectiveQuestion.
     */
    data: XOR<ReflectiveQuestionUpdateInput, ReflectiveQuestionUncheckedUpdateInput>
    /**
     * Choose, which ReflectiveQuestion to update.
     */
    where: ReflectiveQuestionWhereUniqueInput
  }

  /**
   * ReflectiveQuestion updateMany
   */
  export type ReflectiveQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReflectiveQuestions.
     */
    data: XOR<ReflectiveQuestionUpdateManyMutationInput, ReflectiveQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ReflectiveQuestions to update
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * Limit how many ReflectiveQuestions to update.
     */
    limit?: number
  }

  /**
   * ReflectiveQuestion updateManyAndReturn
   */
  export type ReflectiveQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * The data used to update ReflectiveQuestions.
     */
    data: XOR<ReflectiveQuestionUpdateManyMutationInput, ReflectiveQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ReflectiveQuestions to update
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * Limit how many ReflectiveQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReflectiveQuestion upsert
   */
  export type ReflectiveQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReflectiveQuestion to update in case it exists.
     */
    where: ReflectiveQuestionWhereUniqueInput
    /**
     * In case the ReflectiveQuestion found by the `where` argument doesn't exist, create a new ReflectiveQuestion with this data.
     */
    create: XOR<ReflectiveQuestionCreateInput, ReflectiveQuestionUncheckedCreateInput>
    /**
     * In case the ReflectiveQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReflectiveQuestionUpdateInput, ReflectiveQuestionUncheckedUpdateInput>
  }

  /**
   * ReflectiveQuestion delete
   */
  export type ReflectiveQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
    /**
     * Filter which ReflectiveQuestion to delete.
     */
    where: ReflectiveQuestionWhereUniqueInput
  }

  /**
   * ReflectiveQuestion deleteMany
   */
  export type ReflectiveQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReflectiveQuestions to delete
     */
    where?: ReflectiveQuestionWhereInput
    /**
     * Limit how many ReflectiveQuestions to delete.
     */
    limit?: number
  }

  /**
   * ReflectiveQuestion.reflections
   */
  export type ReflectiveQuestion$reflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    cursor?: ReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * ReflectiveQuestion without action
   */
  export type ReflectiveQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReflectiveQuestion
     */
    select?: ReflectiveQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReflectiveQuestion
     */
    omit?: ReflectiveQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectiveQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Reflection
   */

  export type AggregateReflection = {
    _count: ReflectionCountAggregateOutputType | null
    _avg: ReflectionAvgAggregateOutputType | null
    _sum: ReflectionSumAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  export type ReflectionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
  }

  export type ReflectionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
  }

  export type ReflectionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
    answer: string | null
  }

  export type ReflectionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
    answer: string | null
  }

  export type ReflectionCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    answer: number
    _all: number
  }


  export type ReflectionAvgAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
  }

  export type ReflectionSumAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
  }

  export type ReflectionMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
  }

  export type ReflectionMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
  }

  export type ReflectionCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    _all?: true
  }

  export type ReflectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflection to aggregate.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reflections
    **/
    _count?: true | ReflectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReflectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReflectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReflectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReflectionMaxAggregateInputType
  }

  export type GetReflectionAggregateType<T extends ReflectionAggregateArgs> = {
        [P in keyof T & keyof AggregateReflection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReflection[P]>
      : GetScalarType<T[P], AggregateReflection[P]>
  }




  export type ReflectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithAggregationInput | ReflectionOrderByWithAggregationInput[]
    by: ReflectionScalarFieldEnum[] | ReflectionScalarFieldEnum
    having?: ReflectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReflectionCountAggregateInputType | true
    _avg?: ReflectionAvgAggregateInputType
    _sum?: ReflectionSumAggregateInputType
    _min?: ReflectionMinAggregateInputType
    _max?: ReflectionMaxAggregateInputType
  }

  export type ReflectionGroupByOutputType = {
    id: number
    userId: number
    questionId: number
    answer: string
    _count: ReflectionCountAggregateOutputType | null
    _avg: ReflectionAvgAggregateOutputType | null
    _sum: ReflectionSumAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  type GetReflectionGroupByPayload<T extends ReflectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReflectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReflectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
            : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
        }
      >
    >


  export type ReflectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
  }

  export type ReflectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "answer", ExtArgs["result"]["reflection"]>
  export type ReflectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | ReflectiveQuestionDefaultArgs<ExtArgs>
  }

  export type $ReflectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reflection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$ReflectiveQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      questionId: number
      answer: string
    }, ExtArgs["result"]["reflection"]>
    composites: {}
  }

  type ReflectionGetPayload<S extends boolean | null | undefined | ReflectionDefaultArgs> = $Result.GetResult<Prisma.$ReflectionPayload, S>

  type ReflectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReflectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReflectionCountAggregateInputType | true
    }

  export interface ReflectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reflection'], meta: { name: 'Reflection' } }
    /**
     * Find zero or one Reflection that matches the filter.
     * @param {ReflectionFindUniqueArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReflectionFindUniqueArgs>(args: SelectSubset<T, ReflectionFindUniqueArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reflection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReflectionFindUniqueOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReflectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReflectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReflectionFindFirstArgs>(args?: SelectSubset<T, ReflectionFindFirstArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReflectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReflectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reflections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reflections
     * const reflections = await prisma.reflection.findMany()
     * 
     * // Get first 10 Reflections
     * const reflections = await prisma.reflection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reflectionWithIdOnly = await prisma.reflection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReflectionFindManyArgs>(args?: SelectSubset<T, ReflectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reflection.
     * @param {ReflectionCreateArgs} args - Arguments to create a Reflection.
     * @example
     * // Create one Reflection
     * const Reflection = await prisma.reflection.create({
     *   data: {
     *     // ... data to create a Reflection
     *   }
     * })
     * 
     */
    create<T extends ReflectionCreateArgs>(args: SelectSubset<T, ReflectionCreateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reflections.
     * @param {ReflectionCreateManyArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReflectionCreateManyArgs>(args?: SelectSubset<T, ReflectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reflections and returns the data saved in the database.
     * @param {ReflectionCreateManyAndReturnArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReflectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReflectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reflection.
     * @param {ReflectionDeleteArgs} args - Arguments to delete one Reflection.
     * @example
     * // Delete one Reflection
     * const Reflection = await prisma.reflection.delete({
     *   where: {
     *     // ... filter to delete one Reflection
     *   }
     * })
     * 
     */
    delete<T extends ReflectionDeleteArgs>(args: SelectSubset<T, ReflectionDeleteArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reflection.
     * @param {ReflectionUpdateArgs} args - Arguments to update one Reflection.
     * @example
     * // Update one Reflection
     * const reflection = await prisma.reflection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReflectionUpdateArgs>(args: SelectSubset<T, ReflectionUpdateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reflections.
     * @param {ReflectionDeleteManyArgs} args - Arguments to filter Reflections to delete.
     * @example
     * // Delete a few Reflections
     * const { count } = await prisma.reflection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReflectionDeleteManyArgs>(args?: SelectSubset<T, ReflectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReflectionUpdateManyArgs>(args: SelectSubset<T, ReflectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections and returns the data updated in the database.
     * @param {ReflectionUpdateManyAndReturnArgs} args - Arguments to update many Reflections.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReflectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReflectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reflection.
     * @param {ReflectionUpsertArgs} args - Arguments to update or create a Reflection.
     * @example
     * // Update or create a Reflection
     * const reflection = await prisma.reflection.upsert({
     *   create: {
     *     // ... data to create a Reflection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reflection we want to update
     *   }
     * })
     */
    upsert<T extends ReflectionUpsertArgs>(args: SelectSubset<T, ReflectionUpsertArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionCountArgs} args - Arguments to filter Reflections to count.
     * @example
     * // Count the number of Reflections
     * const count = await prisma.reflection.count({
     *   where: {
     *     // ... the filter for the Reflections we want to count
     *   }
     * })
    **/
    count<T extends ReflectionCountArgs>(
      args?: Subset<T, ReflectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReflectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReflectionAggregateArgs>(args: Subset<T, ReflectionAggregateArgs>): Prisma.PrismaPromise<GetReflectionAggregateType<T>>

    /**
     * Group by Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionGroupByArgs} args - Group by arguments.
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
      T extends ReflectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReflectionGroupByArgs['orderBy'] }
        : { orderBy?: ReflectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReflectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReflectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reflection model
   */
  readonly fields: ReflectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reflection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReflectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends ReflectiveQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReflectiveQuestionDefaultArgs<ExtArgs>>): Prisma__ReflectiveQuestionClient<$Result.GetResult<Prisma.$ReflectiveQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reflection model
   */
  interface ReflectionFieldRefs {
    readonly id: FieldRef<"Reflection", 'Int'>
    readonly userId: FieldRef<"Reflection", 'Int'>
    readonly questionId: FieldRef<"Reflection", 'Int'>
    readonly answer: FieldRef<"Reflection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reflection findUnique
   */
  export type ReflectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findUniqueOrThrow
   */
  export type ReflectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findFirst
   */
  export type ReflectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findFirstOrThrow
   */
  export type ReflectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findMany
   */
  export type ReflectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflections to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection create
   */
  export type ReflectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reflection.
     */
    data: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
  }

  /**
   * Reflection createMany
   */
  export type ReflectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
  }

  /**
   * Reflection createManyAndReturn
   */
  export type ReflectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection update
   */
  export type ReflectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reflection.
     */
    data: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
    /**
     * Choose, which Reflection to update.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection updateMany
   */
  export type ReflectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
  }

  /**
   * Reflection updateManyAndReturn
   */
  export type ReflectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection upsert
   */
  export type ReflectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reflection to update in case it exists.
     */
    where: ReflectionWhereUniqueInput
    /**
     * In case the Reflection found by the `where` argument doesn't exist, create a new Reflection with this data.
     */
    create: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
    /**
     * In case the Reflection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
  }

  /**
   * Reflection delete
   */
  export type ReflectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter which Reflection to delete.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection deleteMany
   */
  export type ReflectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflections to delete
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to delete.
     */
    limit?: number
  }

  /**
   * Reflection without action
   */
  export type ReflectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    xp: 'xp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentCount: 'currentCount',
    lastActiveOn: 'lastActiveOn'
  };

  export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    courseId: 'courseId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    completedAt: 'completedAt'
  };

  export type LessonCompletionScalarFieldEnum = (typeof LessonCompletionScalarFieldEnum)[keyof typeof LessonCompletionScalarFieldEnum]


  export const ReflectiveQuestionScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    question: 'question'
  };

  export type ReflectiveQuestionScalarFieldEnum = (typeof ReflectiveQuestionScalarFieldEnum)[keyof typeof ReflectiveQuestionScalarFieldEnum]


  export const ReflectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    answer: 'answer'
  };

  export type ReflectionScalarFieldEnum = (typeof ReflectionScalarFieldEnum)[keyof typeof ReflectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    xp?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streak?: XOR<StreakNullableScalarRelationFilter, StreakWhereInput> | null
    reflections?: ReflectionListRelationFilter
    lessonCompletions?: LessonCompletionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streak?: StreakOrderByWithRelationInput
    reflections?: ReflectionOrderByRelationAggregateInput
    lessonCompletions?: LessonCompletionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    xp?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streak?: XOR<StreakNullableScalarRelationFilter, StreakWhereInput> | null
    reflections?: ReflectionListRelationFilter
    lessonCompletions?: LessonCompletionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    xp?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StreakWhereInput = {
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    id?: IntFilter<"Streak"> | number
    userId?: IntFilter<"Streak"> | number
    currentCount?: IntFilter<"Streak"> | number
    lastActiveOn?: DateTimeFilter<"Streak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
    lastActiveOn?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StreakWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    currentCount?: IntFilter<"Streak"> | number
    lastActiveOn?: DateTimeFilter<"Streak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
    lastActiveOn?: SortOrder
    _count?: StreakCountOrderByAggregateInput
    _avg?: StreakAvgOrderByAggregateInput
    _max?: StreakMaxOrderByAggregateInput
    _min?: StreakMinOrderByAggregateInput
    _sum?: StreakSumOrderByAggregateInput
  }

  export type StreakScalarWhereWithAggregatesInput = {
    AND?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    OR?: StreakScalarWhereWithAggregatesInput[]
    NOT?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Streak"> | number
    userId?: IntWithAggregatesFilter<"Streak"> | number
    currentCount?: IntWithAggregatesFilter<"Streak"> | number
    lastActiveOn?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    lessons?: LessonListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    lessons?: LessonListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    courseId?: IntFilter<"Lesson"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    reflections?: ReflectiveQuestionListRelationFilter
    completions?: LessonCompletionListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    reflections?: ReflectiveQuestionOrderByRelationAggregateInput
    completions?: LessonCompletionOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    courseId?: IntFilter<"Lesson"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    reflections?: ReflectiveQuestionListRelationFilter
    completions?: LessonCompletionListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
    content?: StringWithAggregatesFilter<"Lesson"> | string
    courseId?: IntWithAggregatesFilter<"Lesson"> | number
  }

  export type LessonCompletionWhereInput = {
    AND?: LessonCompletionWhereInput | LessonCompletionWhereInput[]
    OR?: LessonCompletionWhereInput[]
    NOT?: LessonCompletionWhereInput | LessonCompletionWhereInput[]
    id?: IntFilter<"LessonCompletion"> | number
    userId?: IntFilter<"LessonCompletion"> | number
    lessonId?: IntFilter<"LessonCompletion"> | number
    completedAt?: DateTimeFilter<"LessonCompletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_lessonId?: LessonCompletionUserIdLessonIdCompoundUniqueInput
    AND?: LessonCompletionWhereInput | LessonCompletionWhereInput[]
    OR?: LessonCompletionWhereInput[]
    NOT?: LessonCompletionWhereInput | LessonCompletionWhereInput[]
    userId?: IntFilter<"LessonCompletion"> | number
    lessonId?: IntFilter<"LessonCompletion"> | number
    completedAt?: DateTimeFilter<"LessonCompletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type LessonCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completedAt?: SortOrder
    _count?: LessonCompletionCountOrderByAggregateInput
    _avg?: LessonCompletionAvgOrderByAggregateInput
    _max?: LessonCompletionMaxOrderByAggregateInput
    _min?: LessonCompletionMinOrderByAggregateInput
    _sum?: LessonCompletionSumOrderByAggregateInput
  }

  export type LessonCompletionScalarWhereWithAggregatesInput = {
    AND?: LessonCompletionScalarWhereWithAggregatesInput | LessonCompletionScalarWhereWithAggregatesInput[]
    OR?: LessonCompletionScalarWhereWithAggregatesInput[]
    NOT?: LessonCompletionScalarWhereWithAggregatesInput | LessonCompletionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LessonCompletion"> | number
    userId?: IntWithAggregatesFilter<"LessonCompletion"> | number
    lessonId?: IntWithAggregatesFilter<"LessonCompletion"> | number
    completedAt?: DateTimeWithAggregatesFilter<"LessonCompletion"> | Date | string
  }

  export type ReflectiveQuestionWhereInput = {
    AND?: ReflectiveQuestionWhereInput | ReflectiveQuestionWhereInput[]
    OR?: ReflectiveQuestionWhereInput[]
    NOT?: ReflectiveQuestionWhereInput | ReflectiveQuestionWhereInput[]
    id?: IntFilter<"ReflectiveQuestion"> | number
    lessonId?: IntFilter<"ReflectiveQuestion"> | number
    question?: StringFilter<"ReflectiveQuestion"> | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    reflections?: ReflectionListRelationFilter
  }

  export type ReflectiveQuestionOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    question?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    reflections?: ReflectionOrderByRelationAggregateInput
  }

  export type ReflectiveQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReflectiveQuestionWhereInput | ReflectiveQuestionWhereInput[]
    OR?: ReflectiveQuestionWhereInput[]
    NOT?: ReflectiveQuestionWhereInput | ReflectiveQuestionWhereInput[]
    lessonId?: IntFilter<"ReflectiveQuestion"> | number
    question?: StringFilter<"ReflectiveQuestion"> | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    reflections?: ReflectionListRelationFilter
  }, "id">

  export type ReflectiveQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    question?: SortOrder
    _count?: ReflectiveQuestionCountOrderByAggregateInput
    _avg?: ReflectiveQuestionAvgOrderByAggregateInput
    _max?: ReflectiveQuestionMaxOrderByAggregateInput
    _min?: ReflectiveQuestionMinOrderByAggregateInput
    _sum?: ReflectiveQuestionSumOrderByAggregateInput
  }

  export type ReflectiveQuestionScalarWhereWithAggregatesInput = {
    AND?: ReflectiveQuestionScalarWhereWithAggregatesInput | ReflectiveQuestionScalarWhereWithAggregatesInput[]
    OR?: ReflectiveQuestionScalarWhereWithAggregatesInput[]
    NOT?: ReflectiveQuestionScalarWhereWithAggregatesInput | ReflectiveQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReflectiveQuestion"> | number
    lessonId?: IntWithAggregatesFilter<"ReflectiveQuestion"> | number
    question?: StringWithAggregatesFilter<"ReflectiveQuestion"> | string
  }

  export type ReflectionWhereInput = {
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    id?: IntFilter<"Reflection"> | number
    userId?: IntFilter<"Reflection"> | number
    questionId?: IntFilter<"Reflection"> | number
    answer?: StringFilter<"Reflection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<ReflectiveQuestionScalarRelationFilter, ReflectiveQuestionWhereInput>
  }

  export type ReflectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: ReflectiveQuestionOrderByWithRelationInput
  }

  export type ReflectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    userId?: IntFilter<"Reflection"> | number
    questionId?: IntFilter<"Reflection"> | number
    answer?: StringFilter<"Reflection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<ReflectiveQuestionScalarRelationFilter, ReflectiveQuestionWhereInput>
  }, "id">

  export type ReflectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    _count?: ReflectionCountOrderByAggregateInput
    _avg?: ReflectionAvgOrderByAggregateInput
    _max?: ReflectionMaxOrderByAggregateInput
    _min?: ReflectionMinOrderByAggregateInput
    _sum?: ReflectionSumOrderByAggregateInput
  }

  export type ReflectionScalarWhereWithAggregatesInput = {
    AND?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    OR?: ReflectionScalarWhereWithAggregatesInput[]
    NOT?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reflection"> | number
    userId?: IntWithAggregatesFilter<"Reflection"> | number
    questionId?: IntWithAggregatesFilter<"Reflection"> | number
    answer?: StringWithAggregatesFilter<"Reflection"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    reflections?: ReflectionCreateNestedManyWithoutUserInput
    lessonCompletions?: LessonCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
    lessonCompletions?: LessonCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateInput = {
    currentCount?: number
    lastActiveOn: Date | string
    user: UserCreateNestedOneWithoutStreakInput
  }

  export type StreakUncheckedCreateInput = {
    id?: number
    userId: number
    currentCount?: number
    lastActiveOn: Date | string
  }

  export type StreakUpdateInput = {
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreakNestedInput
  }

  export type StreakUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateManyInput = {
    id?: number
    userId: number
    currentCount?: number
    lastActiveOn: Date | string
  }

  export type StreakUpdateManyMutationInput = {
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    title: string
    description: string
    lessons?: LessonCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description: string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCreateInput = {
    title: string
    content: string
    course: CourseCreateNestedOneWithoutLessonsInput
    reflections?: ReflectiveQuestionCreateNestedManyWithoutLessonInput
    completions?: LessonCompletionCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    courseId: number
    reflections?: ReflectiveQuestionUncheckedCreateNestedManyWithoutLessonInput
    completions?: LessonCompletionUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    reflections?: ReflectiveQuestionUpdateManyWithoutLessonNestedInput
    completions?: LessonCompletionUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    reflections?: ReflectiveQuestionUncheckedUpdateManyWithoutLessonNestedInput
    completions?: LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    title: string
    content: string
    courseId: number
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCompletionCreateInput = {
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonCompletionsInput
    lesson: LessonCreateNestedOneWithoutCompletionsInput
  }

  export type LessonCompletionUncheckedCreateInput = {
    id?: number
    userId: number
    lessonId: number
    completedAt?: Date | string
  }

  export type LessonCompletionUpdateInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonCompletionsNestedInput
    lesson?: LessonUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type LessonCompletionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCompletionCreateManyInput = {
    id?: number
    userId: number
    lessonId: number
    completedAt?: Date | string
  }

  export type LessonCompletionUpdateManyMutationInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCompletionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectiveQuestionCreateInput = {
    question: string
    lesson: LessonCreateNestedOneWithoutReflectionsInput
    reflections?: ReflectionCreateNestedManyWithoutQuestionInput
  }

  export type ReflectiveQuestionUncheckedCreateInput = {
    id?: number
    lessonId: number
    question: string
    reflections?: ReflectionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type ReflectiveQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutReflectionsNestedInput
    reflections?: ReflectionUpdateManyWithoutQuestionNestedInput
  }

  export type ReflectiveQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    reflections?: ReflectionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ReflectiveQuestionCreateManyInput = {
    id?: number
    lessonId: number
    question: string
  }

  export type ReflectiveQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectiveQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionCreateInput = {
    answer: string
    user: UserCreateNestedOneWithoutReflectionsInput
    question: ReflectiveQuestionCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateInput = {
    id?: number
    userId: number
    questionId: number
    answer: string
  }

  export type ReflectionUpdateInput = {
    answer?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReflectionsNestedInput
    question?: ReflectiveQuestionUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionCreateManyInput = {
    id?: number
    userId: number
    questionId: number
    answer: string
  }

  export type ReflectionUpdateManyMutationInput = {
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StreakNullableScalarRelationFilter = {
    is?: StreakWhereInput | null
    isNot?: StreakWhereInput | null
  }

  export type ReflectionListRelationFilter = {
    every?: ReflectionWhereInput
    some?: ReflectionWhereInput
    none?: ReflectionWhereInput
  }

  export type LessonCompletionListRelationFilter = {
    every?: LessonCompletionWhereInput
    some?: LessonCompletionWhereInput
    none?: LessonCompletionWhereInput
  }

  export type ReflectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
    lastActiveOn?: SortOrder
  }

  export type StreakAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
  }

  export type StreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
    lastActiveOn?: SortOrder
  }

  export type StreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
    lastActiveOn?: SortOrder
  }

  export type StreakSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentCount?: SortOrder
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type ReflectiveQuestionListRelationFilter = {
    every?: ReflectiveQuestionWhereInput
    some?: ReflectiveQuestionWhereInput
    none?: ReflectiveQuestionWhereInput
  }

  export type ReflectiveQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonCompletionUserIdLessonIdCompoundUniqueInput = {
    userId: number
    lessonId: number
  }

  export type LessonCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonCompletionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonCompletionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type ReflectiveQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    question?: SortOrder
  }

  export type ReflectiveQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type ReflectiveQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    question?: SortOrder
  }

  export type ReflectiveQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    question?: SortOrder
  }

  export type ReflectiveQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type ReflectiveQuestionScalarRelationFilter = {
    is?: ReflectiveQuestionWhereInput
    isNot?: ReflectiveQuestionWhereInput
  }

  export type ReflectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type ReflectionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type ReflectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type ReflectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type ReflectionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type StreakCreateNestedOneWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    connect?: StreakWhereUniqueInput
  }

  export type ReflectionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type LessonCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput> | LessonCompletionCreateWithoutUserInput[] | LessonCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutUserInput | LessonCompletionCreateOrConnectWithoutUserInput[]
    createMany?: LessonCompletionCreateManyUserInputEnvelope
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
  }

  export type StreakUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    connect?: StreakWhereUniqueInput
  }

  export type ReflectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type LessonCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput> | LessonCompletionCreateWithoutUserInput[] | LessonCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutUserInput | LessonCompletionCreateOrConnectWithoutUserInput[]
    createMany?: LessonCompletionCreateManyUserInputEnvelope
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StreakUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    upsert?: StreakUpsertWithoutUserInput
    disconnect?: StreakWhereInput | boolean
    delete?: StreakWhereInput | boolean
    connect?: StreakWhereUniqueInput
    update?: XOR<XOR<StreakUpdateToOneWithWhereWithoutUserInput, StreakUpdateWithoutUserInput>, StreakUncheckedUpdateWithoutUserInput>
  }

  export type ReflectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutUserInput | ReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutUserInput | ReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutUserInput | ReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type LessonCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput> | LessonCompletionCreateWithoutUserInput[] | LessonCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutUserInput | LessonCompletionCreateOrConnectWithoutUserInput[]
    upsert?: LessonCompletionUpsertWithWhereUniqueWithoutUserInput | LessonCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonCompletionCreateManyUserInputEnvelope
    set?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    disconnect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    delete?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    update?: LessonCompletionUpdateWithWhereUniqueWithoutUserInput | LessonCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonCompletionUpdateManyWithWhereWithoutUserInput | LessonCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
  }

  export type StreakUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput
    upsert?: StreakUpsertWithoutUserInput
    disconnect?: StreakWhereInput | boolean
    delete?: StreakWhereInput | boolean
    connect?: StreakWhereUniqueInput
    update?: XOR<XOR<StreakUpdateToOneWithWhereWithoutUserInput, StreakUpdateWithoutUserInput>, StreakUncheckedUpdateWithoutUserInput>
  }

  export type ReflectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutUserInput | ReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutUserInput | ReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutUserInput | ReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type LessonCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput> | LessonCompletionCreateWithoutUserInput[] | LessonCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutUserInput | LessonCompletionCreateOrConnectWithoutUserInput[]
    upsert?: LessonCompletionUpsertWithWhereUniqueWithoutUserInput | LessonCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonCompletionCreateManyUserInputEnvelope
    set?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    disconnect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    delete?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    update?: LessonCompletionUpdateWithWhereUniqueWithoutUserInput | LessonCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonCompletionUpdateManyWithWhereWithoutUserInput | LessonCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStreakInput = {
    create?: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreakInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStreakNestedInput = {
    create?: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreakInput
    upsert?: UserUpsertWithoutStreakInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreakInput, UserUpdateWithoutStreakInput>, UserUncheckedUpdateWithoutStreakInput>
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type ReflectiveQuestionCreateNestedManyWithoutLessonInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput> | ReflectiveQuestionCreateWithoutLessonInput[] | ReflectiveQuestionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutLessonInput | ReflectiveQuestionCreateOrConnectWithoutLessonInput[]
    createMany?: ReflectiveQuestionCreateManyLessonInputEnvelope
    connect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
  }

  export type LessonCompletionCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput> | LessonCompletionCreateWithoutLessonInput[] | LessonCompletionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutLessonInput | LessonCompletionCreateOrConnectWithoutLessonInput[]
    createMany?: LessonCompletionCreateManyLessonInputEnvelope
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
  }

  export type ReflectiveQuestionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput> | ReflectiveQuestionCreateWithoutLessonInput[] | ReflectiveQuestionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutLessonInput | ReflectiveQuestionCreateOrConnectWithoutLessonInput[]
    createMany?: ReflectiveQuestionCreateManyLessonInputEnvelope
    connect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
  }

  export type LessonCompletionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput> | LessonCompletionCreateWithoutLessonInput[] | LessonCompletionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutLessonInput | LessonCompletionCreateOrConnectWithoutLessonInput[]
    createMany?: LessonCompletionCreateManyLessonInputEnvelope
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type ReflectiveQuestionUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput> | ReflectiveQuestionCreateWithoutLessonInput[] | ReflectiveQuestionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutLessonInput | ReflectiveQuestionCreateOrConnectWithoutLessonInput[]
    upsert?: ReflectiveQuestionUpsertWithWhereUniqueWithoutLessonInput | ReflectiveQuestionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ReflectiveQuestionCreateManyLessonInputEnvelope
    set?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    disconnect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    delete?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    connect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    update?: ReflectiveQuestionUpdateWithWhereUniqueWithoutLessonInput | ReflectiveQuestionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ReflectiveQuestionUpdateManyWithWhereWithoutLessonInput | ReflectiveQuestionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ReflectiveQuestionScalarWhereInput | ReflectiveQuestionScalarWhereInput[]
  }

  export type LessonCompletionUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput> | LessonCompletionCreateWithoutLessonInput[] | LessonCompletionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutLessonInput | LessonCompletionCreateOrConnectWithoutLessonInput[]
    upsert?: LessonCompletionUpsertWithWhereUniqueWithoutLessonInput | LessonCompletionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonCompletionCreateManyLessonInputEnvelope
    set?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    disconnect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    delete?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    update?: LessonCompletionUpdateWithWhereUniqueWithoutLessonInput | LessonCompletionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonCompletionUpdateManyWithWhereWithoutLessonInput | LessonCompletionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
  }

  export type ReflectiveQuestionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput> | ReflectiveQuestionCreateWithoutLessonInput[] | ReflectiveQuestionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutLessonInput | ReflectiveQuestionCreateOrConnectWithoutLessonInput[]
    upsert?: ReflectiveQuestionUpsertWithWhereUniqueWithoutLessonInput | ReflectiveQuestionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ReflectiveQuestionCreateManyLessonInputEnvelope
    set?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    disconnect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    delete?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    connect?: ReflectiveQuestionWhereUniqueInput | ReflectiveQuestionWhereUniqueInput[]
    update?: ReflectiveQuestionUpdateWithWhereUniqueWithoutLessonInput | ReflectiveQuestionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ReflectiveQuestionUpdateManyWithWhereWithoutLessonInput | ReflectiveQuestionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ReflectiveQuestionScalarWhereInput | ReflectiveQuestionScalarWhereInput[]
  }

  export type LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput> | LessonCompletionCreateWithoutLessonInput[] | LessonCompletionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonCompletionCreateOrConnectWithoutLessonInput | LessonCompletionCreateOrConnectWithoutLessonInput[]
    upsert?: LessonCompletionUpsertWithWhereUniqueWithoutLessonInput | LessonCompletionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonCompletionCreateManyLessonInputEnvelope
    set?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    disconnect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    delete?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    connect?: LessonCompletionWhereUniqueInput | LessonCompletionWhereUniqueInput[]
    update?: LessonCompletionUpdateWithWhereUniqueWithoutLessonInput | LessonCompletionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonCompletionUpdateManyWithWhereWithoutLessonInput | LessonCompletionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLessonCompletionsInput = {
    create?: XOR<UserCreateWithoutLessonCompletionsInput, UserUncheckedCreateWithoutLessonCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<LessonCreateWithoutCompletionsInput, LessonUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCompletionsInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLessonCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutLessonCompletionsInput, UserUncheckedCreateWithoutLessonCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonCompletionsInput
    upsert?: UserUpsertWithoutLessonCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLessonCompletionsInput, UserUpdateWithoutLessonCompletionsInput>, UserUncheckedUpdateWithoutLessonCompletionsInput>
  }

  export type LessonUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<LessonCreateWithoutCompletionsInput, LessonUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCompletionsInput
    upsert?: LessonUpsertWithoutCompletionsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutCompletionsInput, LessonUpdateWithoutCompletionsInput>, LessonUncheckedUpdateWithoutCompletionsInput>
  }

  export type LessonCreateNestedOneWithoutReflectionsInput = {
    create?: XOR<LessonCreateWithoutReflectionsInput, LessonUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutReflectionsInput
    connect?: LessonWhereUniqueInput
  }

  export type ReflectionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput> | ReflectionCreateWithoutQuestionInput[] | ReflectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutQuestionInput | ReflectionCreateOrConnectWithoutQuestionInput[]
    createMany?: ReflectionCreateManyQuestionInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type ReflectionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput> | ReflectionCreateWithoutQuestionInput[] | ReflectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutQuestionInput | ReflectionCreateOrConnectWithoutQuestionInput[]
    createMany?: ReflectionCreateManyQuestionInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type LessonUpdateOneRequiredWithoutReflectionsNestedInput = {
    create?: XOR<LessonCreateWithoutReflectionsInput, LessonUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutReflectionsInput
    upsert?: LessonUpsertWithoutReflectionsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutReflectionsInput, LessonUpdateWithoutReflectionsInput>, LessonUncheckedUpdateWithoutReflectionsInput>
  }

  export type ReflectionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput> | ReflectionCreateWithoutQuestionInput[] | ReflectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutQuestionInput | ReflectionCreateOrConnectWithoutQuestionInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutQuestionInput | ReflectionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ReflectionCreateManyQuestionInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutQuestionInput | ReflectionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutQuestionInput | ReflectionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type ReflectionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput> | ReflectionCreateWithoutQuestionInput[] | ReflectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutQuestionInput | ReflectionCreateOrConnectWithoutQuestionInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutQuestionInput | ReflectionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ReflectionCreateManyQuestionInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutQuestionInput | ReflectionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutQuestionInput | ReflectionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReflectionsInput = {
    create?: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReflectionsInput
    connect?: UserWhereUniqueInput
  }

  export type ReflectiveQuestionCreateNestedOneWithoutReflectionsInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutReflectionsInput, ReflectiveQuestionUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutReflectionsInput
    connect?: ReflectiveQuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReflectionsNestedInput = {
    create?: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReflectionsInput
    upsert?: UserUpsertWithoutReflectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReflectionsInput, UserUpdateWithoutReflectionsInput>, UserUncheckedUpdateWithoutReflectionsInput>
  }

  export type ReflectiveQuestionUpdateOneRequiredWithoutReflectionsNestedInput = {
    create?: XOR<ReflectiveQuestionCreateWithoutReflectionsInput, ReflectiveQuestionUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: ReflectiveQuestionCreateOrConnectWithoutReflectionsInput
    upsert?: ReflectiveQuestionUpsertWithoutReflectionsInput
    connect?: ReflectiveQuestionWhereUniqueInput
    update?: XOR<XOR<ReflectiveQuestionUpdateToOneWithWhereWithoutReflectionsInput, ReflectiveQuestionUpdateWithoutReflectionsInput>, ReflectiveQuestionUncheckedUpdateWithoutReflectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StreakCreateWithoutUserInput = {
    currentCount?: number
    lastActiveOn: Date | string
  }

  export type StreakUncheckedCreateWithoutUserInput = {
    id?: number
    currentCount?: number
    lastActiveOn: Date | string
  }

  export type StreakCreateOrConnectWithoutUserInput = {
    where: StreakWhereUniqueInput
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
  }

  export type ReflectionCreateWithoutUserInput = {
    answer: string
    question: ReflectiveQuestionCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    answer: string
  }

  export type ReflectionCreateOrConnectWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput>
  }

  export type ReflectionCreateManyUserInputEnvelope = {
    data: ReflectionCreateManyUserInput | ReflectionCreateManyUserInput[]
  }

  export type LessonCompletionCreateWithoutUserInput = {
    completedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutCompletionsInput
  }

  export type LessonCompletionUncheckedCreateWithoutUserInput = {
    id?: number
    lessonId: number
    completedAt?: Date | string
  }

  export type LessonCompletionCreateOrConnectWithoutUserInput = {
    where: LessonCompletionWhereUniqueInput
    create: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput>
  }

  export type LessonCompletionCreateManyUserInputEnvelope = {
    data: LessonCompletionCreateManyUserInput | LessonCompletionCreateManyUserInput[]
  }

  export type StreakUpsertWithoutUserInput = {
    update: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
    where?: StreakWhereInput
  }

  export type StreakUpdateToOneWithWhereWithoutUserInput = {
    where?: StreakWhereInput
    data: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
  }

  export type StreakUpdateWithoutUserInput = {
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentCount?: IntFieldUpdateOperationsInput | number
    lastActiveOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    update: XOR<ReflectionUpdateWithoutUserInput, ReflectionUncheckedUpdateWithoutUserInput>
    create: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput>
  }

  export type ReflectionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    data: XOR<ReflectionUpdateWithoutUserInput, ReflectionUncheckedUpdateWithoutUserInput>
  }

  export type ReflectionUpdateManyWithWhereWithoutUserInput = {
    where: ReflectionScalarWhereInput
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReflectionScalarWhereInput = {
    AND?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
    OR?: ReflectionScalarWhereInput[]
    NOT?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
    id?: IntFilter<"Reflection"> | number
    userId?: IntFilter<"Reflection"> | number
    questionId?: IntFilter<"Reflection"> | number
    answer?: StringFilter<"Reflection"> | string
  }

  export type LessonCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonCompletionWhereUniqueInput
    update: XOR<LessonCompletionUpdateWithoutUserInput, LessonCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<LessonCompletionCreateWithoutUserInput, LessonCompletionUncheckedCreateWithoutUserInput>
  }

  export type LessonCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonCompletionWhereUniqueInput
    data: XOR<LessonCompletionUpdateWithoutUserInput, LessonCompletionUncheckedUpdateWithoutUserInput>
  }

  export type LessonCompletionUpdateManyWithWhereWithoutUserInput = {
    where: LessonCompletionScalarWhereInput
    data: XOR<LessonCompletionUpdateManyMutationInput, LessonCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonCompletionScalarWhereInput = {
    AND?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
    OR?: LessonCompletionScalarWhereInput[]
    NOT?: LessonCompletionScalarWhereInput | LessonCompletionScalarWhereInput[]
    id?: IntFilter<"LessonCompletion"> | number
    userId?: IntFilter<"LessonCompletion"> | number
    lessonId?: IntFilter<"LessonCompletion"> | number
    completedAt?: DateTimeFilter<"LessonCompletion"> | Date | string
  }

  export type UserCreateWithoutStreakInput = {
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reflections?: ReflectionCreateNestedManyWithoutUserInput
    lessonCompletions?: LessonCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreakInput = {
    id?: number
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
    lessonCompletions?: LessonCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreakInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
  }

  export type UserUpsertWithoutStreakInput = {
    update: XOR<UserUpdateWithoutStreakInput, UserUncheckedUpdateWithoutStreakInput>
    create: XOR<UserCreateWithoutStreakInput, UserUncheckedCreateWithoutStreakInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreakInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreakInput, UserUncheckedUpdateWithoutStreakInput>
  }

  export type UserUpdateWithoutStreakInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreakInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonCreateWithoutCourseInput = {
    title: string
    content: string
    reflections?: ReflectiveQuestionCreateNestedManyWithoutLessonInput
    completions?: LessonCompletionCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    content: string
    reflections?: ReflectiveQuestionUncheckedCreateNestedManyWithoutLessonInput
    completions?: LessonCompletionUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    courseId?: IntFilter<"Lesson"> | number
  }

  export type CourseCreateWithoutLessonsInput = {
    title: string
    description: string
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: number
    title: string
    description: string
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type ReflectiveQuestionCreateWithoutLessonInput = {
    question: string
    reflections?: ReflectionCreateNestedManyWithoutQuestionInput
  }

  export type ReflectiveQuestionUncheckedCreateWithoutLessonInput = {
    id?: number
    question: string
    reflections?: ReflectionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type ReflectiveQuestionCreateOrConnectWithoutLessonInput = {
    where: ReflectiveQuestionWhereUniqueInput
    create: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput>
  }

  export type ReflectiveQuestionCreateManyLessonInputEnvelope = {
    data: ReflectiveQuestionCreateManyLessonInput | ReflectiveQuestionCreateManyLessonInput[]
  }

  export type LessonCompletionCreateWithoutLessonInput = {
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonCompletionsInput
  }

  export type LessonCompletionUncheckedCreateWithoutLessonInput = {
    id?: number
    userId: number
    completedAt?: Date | string
  }

  export type LessonCompletionCreateOrConnectWithoutLessonInput = {
    where: LessonCompletionWhereUniqueInput
    create: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput>
  }

  export type LessonCompletionCreateManyLessonInputEnvelope = {
    data: LessonCompletionCreateManyLessonInput | LessonCompletionCreateManyLessonInput[]
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectiveQuestionUpsertWithWhereUniqueWithoutLessonInput = {
    where: ReflectiveQuestionWhereUniqueInput
    update: XOR<ReflectiveQuestionUpdateWithoutLessonInput, ReflectiveQuestionUncheckedUpdateWithoutLessonInput>
    create: XOR<ReflectiveQuestionCreateWithoutLessonInput, ReflectiveQuestionUncheckedCreateWithoutLessonInput>
  }

  export type ReflectiveQuestionUpdateWithWhereUniqueWithoutLessonInput = {
    where: ReflectiveQuestionWhereUniqueInput
    data: XOR<ReflectiveQuestionUpdateWithoutLessonInput, ReflectiveQuestionUncheckedUpdateWithoutLessonInput>
  }

  export type ReflectiveQuestionUpdateManyWithWhereWithoutLessonInput = {
    where: ReflectiveQuestionScalarWhereInput
    data: XOR<ReflectiveQuestionUpdateManyMutationInput, ReflectiveQuestionUncheckedUpdateManyWithoutLessonInput>
  }

  export type ReflectiveQuestionScalarWhereInput = {
    AND?: ReflectiveQuestionScalarWhereInput | ReflectiveQuestionScalarWhereInput[]
    OR?: ReflectiveQuestionScalarWhereInput[]
    NOT?: ReflectiveQuestionScalarWhereInput | ReflectiveQuestionScalarWhereInput[]
    id?: IntFilter<"ReflectiveQuestion"> | number
    lessonId?: IntFilter<"ReflectiveQuestion"> | number
    question?: StringFilter<"ReflectiveQuestion"> | string
  }

  export type LessonCompletionUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonCompletionWhereUniqueInput
    update: XOR<LessonCompletionUpdateWithoutLessonInput, LessonCompletionUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonCompletionCreateWithoutLessonInput, LessonCompletionUncheckedCreateWithoutLessonInput>
  }

  export type LessonCompletionUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonCompletionWhereUniqueInput
    data: XOR<LessonCompletionUpdateWithoutLessonInput, LessonCompletionUncheckedUpdateWithoutLessonInput>
  }

  export type LessonCompletionUpdateManyWithWhereWithoutLessonInput = {
    where: LessonCompletionScalarWhereInput
    data: XOR<LessonCompletionUpdateManyMutationInput, LessonCompletionUncheckedUpdateManyWithoutLessonInput>
  }

  export type UserCreateWithoutLessonCompletionsInput = {
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    reflections?: ReflectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLessonCompletionsInput = {
    id?: number
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLessonCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLessonCompletionsInput, UserUncheckedCreateWithoutLessonCompletionsInput>
  }

  export type LessonCreateWithoutCompletionsInput = {
    title: string
    content: string
    course: CourseCreateNestedOneWithoutLessonsInput
    reflections?: ReflectiveQuestionCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCompletionsInput = {
    id?: number
    title: string
    content: string
    courseId: number
    reflections?: ReflectiveQuestionUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCompletionsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCompletionsInput, LessonUncheckedCreateWithoutCompletionsInput>
  }

  export type UserUpsertWithoutLessonCompletionsInput = {
    update: XOR<UserUpdateWithoutLessonCompletionsInput, UserUncheckedUpdateWithoutLessonCompletionsInput>
    create: XOR<UserCreateWithoutLessonCompletionsInput, UserUncheckedCreateWithoutLessonCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLessonCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLessonCompletionsInput, UserUncheckedUpdateWithoutLessonCompletionsInput>
  }

  export type UserUpdateWithoutLessonCompletionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLessonCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutCompletionsInput = {
    update: XOR<LessonUpdateWithoutCompletionsInput, LessonUncheckedUpdateWithoutCompletionsInput>
    create: XOR<LessonCreateWithoutCompletionsInput, LessonUncheckedCreateWithoutCompletionsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutCompletionsInput, LessonUncheckedUpdateWithoutCompletionsInput>
  }

  export type LessonUpdateWithoutCompletionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    reflections?: ReflectiveQuestionUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    reflections?: ReflectiveQuestionUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateWithoutReflectionsInput = {
    title: string
    content: string
    course: CourseCreateNestedOneWithoutLessonsInput
    completions?: LessonCompletionCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutReflectionsInput = {
    id?: number
    title: string
    content: string
    courseId: number
    completions?: LessonCompletionUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutReflectionsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutReflectionsInput, LessonUncheckedCreateWithoutReflectionsInput>
  }

  export type ReflectionCreateWithoutQuestionInput = {
    answer: string
    user: UserCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateWithoutQuestionInput = {
    id?: number
    userId: number
    answer: string
  }

  export type ReflectionCreateOrConnectWithoutQuestionInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput>
  }

  export type ReflectionCreateManyQuestionInputEnvelope = {
    data: ReflectionCreateManyQuestionInput | ReflectionCreateManyQuestionInput[]
  }

  export type LessonUpsertWithoutReflectionsInput = {
    update: XOR<LessonUpdateWithoutReflectionsInput, LessonUncheckedUpdateWithoutReflectionsInput>
    create: XOR<LessonCreateWithoutReflectionsInput, LessonUncheckedCreateWithoutReflectionsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutReflectionsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutReflectionsInput, LessonUncheckedUpdateWithoutReflectionsInput>
  }

  export type LessonUpdateWithoutReflectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    completions?: LessonCompletionUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutReflectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    completions?: LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type ReflectionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ReflectionWhereUniqueInput
    update: XOR<ReflectionUpdateWithoutQuestionInput, ReflectionUncheckedUpdateWithoutQuestionInput>
    create: XOR<ReflectionCreateWithoutQuestionInput, ReflectionUncheckedCreateWithoutQuestionInput>
  }

  export type ReflectionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ReflectionWhereUniqueInput
    data: XOR<ReflectionUpdateWithoutQuestionInput, ReflectionUncheckedUpdateWithoutQuestionInput>
  }

  export type ReflectionUpdateManyWithWhereWithoutQuestionInput = {
    where: ReflectionScalarWhereInput
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserCreateWithoutReflectionsInput = {
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakCreateNestedOneWithoutUserInput
    lessonCompletions?: LessonCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReflectionsInput = {
    id?: number
    name: string
    email: string
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    streak?: StreakUncheckedCreateNestedOneWithoutUserInput
    lessonCompletions?: LessonCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReflectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
  }

  export type ReflectiveQuestionCreateWithoutReflectionsInput = {
    question: string
    lesson: LessonCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectiveQuestionUncheckedCreateWithoutReflectionsInput = {
    id?: number
    lessonId: number
    question: string
  }

  export type ReflectiveQuestionCreateOrConnectWithoutReflectionsInput = {
    where: ReflectiveQuestionWhereUniqueInput
    create: XOR<ReflectiveQuestionCreateWithoutReflectionsInput, ReflectiveQuestionUncheckedCreateWithoutReflectionsInput>
  }

  export type UserUpsertWithoutReflectionsInput = {
    update: XOR<UserUpdateWithoutReflectionsInput, UserUncheckedUpdateWithoutReflectionsInput>
    create: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReflectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReflectionsInput, UserUncheckedUpdateWithoutReflectionsInput>
  }

  export type UserUpdateWithoutReflectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUpdateOneWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReflectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streak?: StreakUncheckedUpdateOneWithoutUserNestedInput
    lessonCompletions?: LessonCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReflectiveQuestionUpsertWithoutReflectionsInput = {
    update: XOR<ReflectiveQuestionUpdateWithoutReflectionsInput, ReflectiveQuestionUncheckedUpdateWithoutReflectionsInput>
    create: XOR<ReflectiveQuestionCreateWithoutReflectionsInput, ReflectiveQuestionUncheckedCreateWithoutReflectionsInput>
    where?: ReflectiveQuestionWhereInput
  }

  export type ReflectiveQuestionUpdateToOneWithWhereWithoutReflectionsInput = {
    where?: ReflectiveQuestionWhereInput
    data: XOR<ReflectiveQuestionUpdateWithoutReflectionsInput, ReflectiveQuestionUncheckedUpdateWithoutReflectionsInput>
  }

  export type ReflectiveQuestionUpdateWithoutReflectionsInput = {
    question?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectiveQuestionUncheckedUpdateWithoutReflectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionCreateManyUserInput = {
    id?: number
    questionId: number
    answer: string
  }

  export type LessonCompletionCreateManyUserInput = {
    id?: number
    lessonId: number
    completedAt?: Date | string
  }

  export type ReflectionUpdateWithoutUserInput = {
    answer?: StringFieldUpdateOperationsInput | string
    question?: ReflectiveQuestionUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCompletionUpdateWithoutUserInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type LessonCompletionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyCourseInput = {
    id?: number
    title: string
    content: string
  }

  export type LessonUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reflections?: ReflectiveQuestionUpdateManyWithoutLessonNestedInput
    completions?: LessonCompletionUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reflections?: ReflectiveQuestionUncheckedUpdateManyWithoutLessonNestedInput
    completions?: LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectiveQuestionCreateManyLessonInput = {
    id?: number
    question: string
  }

  export type LessonCompletionCreateManyLessonInput = {
    id?: number
    userId: number
    completedAt?: Date | string
  }

  export type ReflectiveQuestionUpdateWithoutLessonInput = {
    question?: StringFieldUpdateOperationsInput | string
    reflections?: ReflectionUpdateManyWithoutQuestionNestedInput
  }

  export type ReflectiveQuestionUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    reflections?: ReflectionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ReflectiveQuestionUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCompletionUpdateWithoutLessonInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonCompletionsNestedInput
  }

  export type LessonCompletionUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCompletionUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionCreateManyQuestionInput = {
    id?: number
    userId: number
    answer: string
  }

  export type ReflectionUpdateWithoutQuestionInput = {
    answer?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ReflectionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
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