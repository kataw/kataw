# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_wrapped
> :: test: should listen to use strict directive in getter wrapped
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    (new = x);
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
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 210,
                                                                "newKeyword": {
                                                                    "kind": 138477661,
                                                                    "flags": 96,
                                                                    "start": 42,
                                                                    "end": 45
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 45,
                                                                    "end": 45
                                                                },
                                                                "argumentList": null,
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 45
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 45,
                                                                "end": 47
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 47,
                                                                "end": 49
                                                            },
                                                            "flags": 0,
                                                            "start": 42,
                                                            "end": 49
                                                        },
                                                        "flags": 36,
                                                        "start": 33,
                                                        "end": 50
                                                    },
                                                    "flags": 16,
                                                    "start": 36,
                                                    "end": 51
                                                }
                                            ],
                                            "flags": 33,
                                            "start": 18,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 55
                                    },
                                    "flags": 1057,
                                    "start": 15,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 7,
                        "end": 55
                    },
                    "flags": 49,
                    "start": 5,
                    "end": 57
                },
                "flags": 0,
                "start": 0,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    (new = x);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 45, end: 47
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 45, end: 47

```

