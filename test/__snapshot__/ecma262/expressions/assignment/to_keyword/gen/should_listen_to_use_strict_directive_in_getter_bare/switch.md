# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: switch
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    switch = x
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
                                                    "kind": 160,
                                                    "switchKeyword": {
                                                        "kind": 37757024,
                                                        "flags": 81,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 47,
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
                                                        "flags": 0,
                                                        "transformFlags": 128,
                                                        "start": 47,
                                                        "end": 51
                                                    },
                                                    "caseBlock": {
                                                        "kind": 152,
                                                        "clauses": [],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 51,
                                                        "end": 51
                                                    },
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 55
                                                }
                                            ],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 57
                                    },
                                    "flags": 1057,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 57
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 57
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 57
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    switch = x\n  }\n}",
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
✖ Missing an opening parentheses - '( - start: 48, end: 49
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 47, end: 49
✖ Declaration or statement expected - start: 54, end: 55
✖ ',' expected - start: 56, end: 57

```

