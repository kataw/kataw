# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: interface
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    interface = x
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
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "interface",
                                                            "rawText": "interface",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 50
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 52
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 54
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 128,
                                                        "start": 36,
                                                        "end": 54
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 36,
                                                    "end": 54
                                                }
                                            ],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 58
                                    },
                                    "flags": 1057,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 58
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 58
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 58
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 60
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    interface = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
foo = { get x() {

    "\"use strict\"";
    interface = x;
  } };
```

### Diagnostics

```javascript
✔ No errors
```

