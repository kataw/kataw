# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: yield
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    yield = x
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
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
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
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1057,
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
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 97,
                                                            "start": 36,
                                                            "end": 46
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "flags": 0,
                                                        "start": 36,
                                                        "end": 50
                                                    },
                                                    "flags": 16,
                                                    "start": 36,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 18,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 54
                                    },
                                    "flags": 1057,
                                    "start": 15,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 7,
                        "end": 54
                    },
                    "flags": 49,
                    "start": 5,
                    "end": 56
                },
                "flags": 0,
                "start": 0,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    yield = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

foo = {
  get x(){
    yield = x;
  }
};
```

### Diagnostics

```javascript
✔ No errors
```

