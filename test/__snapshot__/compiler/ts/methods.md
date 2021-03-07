# Kataw parser test case

## Input

`````js
class Point {
/**
 * Does something.
 */
  foo() {}

    /**
     * Does something else.
     */
  bar() {}

                /**
                 * Does
                 * something
                 * much
                 * better
                 * than
                 * the
                 * rest.
                 */
  baz() {}

      /**
       * Buzz-Fizz.
       * Note: This is indented too far.
       */
      fizzBuzz() {}

      /**
       * Turns the given string into pig-latin.
       */
              pigLatinize(value: string) {
/**
 * This is a block comment inside of a method.
 */
              }

  /**
        * One
 * Two
   * Three
* Four
   */
  mismatchedIndentation() {}

  inline /* foo*/ (/* bar */) /* baz */ {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Point {\n/**\n * Does something.\n */\n  foo() {}\n\n    /**\n     * Does something else.\n     */\n  bar() {}\n\n                /**\n                 * Does\n                 * something\n                 * much\n                 * better\n                 * than\n                 * the\n                 * rest.\n                 */\n  baz() {}\n\n      /**\n       * Buzz-Fizz.\n       * Note: This is indented too far.\n       */\n      fizzBuzz() {}\n\n      /**\n       * Turns the given string into pig-latin.\n       */\n              pigLatinize(value: string) {\n/**\n * This is a block comment inside of a method.\n */\n              }\n\n  /**\n        * One\n * Two\n   * Three\n* Four\n   */\n  mismatchedIndentation() {}\n\n  inline /* foo*/ (/* bar */) /* baz */ {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Point",
                    "rawText": "Point",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 11
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 46
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 48
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 50
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 51
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 51
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 13,
                            "end": 51
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 102
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 104
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 106,
                                        "end": 106
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 104,
                                    "end": 107
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 107
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 51,
                            "end": 107
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 329
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 330,
                                    "end": 331
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 333,
                                        "end": 333
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 331,
                                    "end": 334
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 329,
                                "end": 334
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 107,
                            "end": 334
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "fizzBuzz",
                                    "rawText": "fizzBuzz",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 334,
                                    "end": 431
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 432,
                                    "end": 433
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 435,
                                        "end": 435
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 433,
                                    "end": 436
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 431,
                                "end": 436
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 334,
                            "end": 436
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "pigLatinize",
                                    "rawText": "pigLatinize",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 436,
                                    "end": 531
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 532,
                                                "end": 537
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 538,
                                                "end": 545
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 532,
                                            "end": 545
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 532,
                                    "end": 546
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 548,
                                        "end": 548
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 546,
                                    "end": 619
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 531,
                                "end": 619
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 436,
                            "end": 619
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "mismatchedIndentation",
                                    "rawText": "mismatchedIndentation",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 619,
                                    "end": 695
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 696,
                                    "end": 697
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 699,
                                        "end": 699
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 697,
                                    "end": 700
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 695,
                                "end": 700
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 619,
                            "end": 700
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "inline",
                                    "rawText": "inline",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 700,
                                    "end": 710
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 721,
                                    "end": 731
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 743,
                                        "end": 743
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 731,
                                    "end": 744
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 710,
                                "end": 744
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 700,
                            "end": 744
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 13,
                    "end": 746
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 746
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 746
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 746
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

