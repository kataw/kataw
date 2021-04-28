# Kataw parser test case

## Input

`````js

"use strict"; var implements;

"use strict"; var function;

"use strict"; var foo, super;

"use strict"; var foo = super = 1;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 769,
            "start": 0,
            "end": 13
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 14,
                "end": 18
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "implements",
                            "rawText": "implements",
                            "flags": 768,
                            "start": 18,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 18,
                        "end": 29
                    }
                ],
                "flags": 128,
                "start": 18,
                "end": 29
            },
            "flags": 128,
            "start": 14,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 30,
                "end": 44
            },
            "flags": 128,
            "start": 30,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 45,
                "end": 49
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 128,
                "start": 49,
                "end": 49
            },
            "flags": 128,
            "start": 45,
            "end": 49
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 49,
                "end": 58
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 58,
                "end": 58
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 58,
                "end": 58
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 58,
                    "end": 58
                },
                "flags": 256,
                "start": 58,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 49,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 58,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 59,
                "end": 73
            },
            "flags": 128,
            "start": 59,
            "end": 74
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 74,
                "end": 78
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 78,
                            "end": 82
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 78,
                        "end": 82
                    }
                ],
                "flags": 128,
                "start": 78,
                "end": 83
            },
            "flags": 128,
            "start": 74,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 203,
                "chain": {
                    "kind": 225,
                    "superKeyword": {
                        "kind": 4259935,
                        "flags": 768,
                        "start": 83,
                        "end": 89
                    },
                    "flags": 768,
                    "start": 83,
                    "end": 89
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 89,
                    "end": 89
                },
                "flags": 256,
                "start": 83,
                "end": 89
            },
            "flags": 128,
            "start": 83,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 90,
                "end": 104
            },
            "flags": 128,
            "start": 90,
            "end": 105
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 105,
                "end": 109
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 109,
                            "end": 113
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 203,
                                "chain": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 768,
                                        "start": 115,
                                        "end": 121
                                    },
                                    "flags": 768,
                                    "start": 115,
                                    "end": 121
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 121,
                                    "end": 121
                                },
                                "flags": 256,
                                "start": 115,
                                "end": 121
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 121,
                                "end": 123
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 123,
                                "end": 125
                            },
                            "flags": 256,
                            "start": 115,
                            "end": 125
                        },
                        "flags": 128,
                        "start": 109,
                        "end": 125
                    }
                ],
                "flags": 128,
                "start": 109,
                "end": 125
            },
            "flags": 128,
            "start": 105,
            "end": 126
        }
    ],
    "isModule": false,
    "text": "\n\"use strict\"; var implements;\n\n\"use strict\"; var function;\n\n\"use strict\"; var foo, super;\n\n\"use strict\"; var foo = super = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 18, end: 29
✖ Binding identifier expected - start: 58, end: 59
✖ Unexpected token. - start: 58, end: 59
✖ 'super' must be followed by an argument list or member access. - start: 89, end: 90
✖ Dot property must be an identifier - start: 89, end: 90
✖ 'super' must be followed by an argument list or member access. - start: 121, end: 123
✖ Dot property must be an identifier - start: 121, end: 123

```

