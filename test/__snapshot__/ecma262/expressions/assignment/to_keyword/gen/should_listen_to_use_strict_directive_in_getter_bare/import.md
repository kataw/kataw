# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    import = x
  }
}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 13
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1057,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "use strict",
                                                        "rawText": "\"use strict\"",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 35
                                                    }
                                                ],
                                                "statements": [
                                                    {
                                                        "kind": 263,
                                                        "importKeyword": {
                                                            "kind": 37814364,
                                                            "flags": 81,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 47
                                                        },
                                                        "typeKeyword": null,
                                                        "typeofKeyword": null,
                                                        "fromClause": null,
                                                        "moduleSpecifier": null,
                                                        "importClause": null,
                                                        "flags": 81,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 47
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 47
                                        },
                                        "flags": 1057,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 47
                        },
                        "flags": 49,
                        "transformFlags": 8,
                        "start": 5,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 5,
                    "end": 51
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    import = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `import` keyword can only be used with the module goal - start: 36, end: 49
✖ Declaration or statement expected - start: 47, end: 49
✖ '=' expected - start: 47, end: 49
✖ The left-hand side must be a variable or a property access. - start: 5, end: 49
✖ Declaration or statement expected - start: 51, end: 55
✖ Declaration or statement expected - start: 55, end: 57

```

