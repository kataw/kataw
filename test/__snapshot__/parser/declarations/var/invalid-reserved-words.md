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

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 97,
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
                "flags": 0,
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
                            "flags": 96,
                            "start": 18,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 18,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 29
            },
            "flags": 16,
            "start": 14,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 30,
                "end": 44
            },
            "flags": 16,
            "start": 30,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 45,
                "end": 49
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 49,
                "end": 49
            },
            "flags": 16,
            "start": 45,
            "end": 49
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 49,
                "end": 58
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 58,
                "end": 58
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 58,
                    "end": 58
                },
                "flags": 32,
                "start": 58,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 49,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 58,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 59,
                "end": 73
            },
            "flags": 16,
            "start": 59,
            "end": 74
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                            "flags": 96,
                            "start": 78,
                            "end": 82
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 78,
                        "end": 82
                    }
                ],
                "flags": 16,
                "start": 78,
                "end": 83
            },
            "flags": 16,
            "start": 74,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 225,
                    "superKeyword": {
                        "kind": 4259935,
                        "flags": 0,
                        "start": 83,
                        "end": 89
                    },
                    "flags": 96,
                    "start": 83,
                    "end": 89
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 89,
                    "end": 89
                },
                "flags": 536870944,
                "start": 83,
                "end": 89
            },
            "flags": 16,
            "start": 83,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 90,
                "end": 104
            },
            "flags": 16,
            "start": 90,
            "end": 105
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                            "flags": 96,
                            "start": 109,
                            "end": 113
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 115,
                                        "end": 121
                                    },
                                    "flags": 96,
                                    "start": 115,
                                    "end": 121
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 121,
                                    "end": 121
                                },
                                "flags": 536870944,
                                "start": 115,
                                "end": 121
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 121,
                                "end": 123
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 123,
                                "end": 125
                            },
                            "flags": 32,
                            "start": 115,
                            "end": 125
                        },
                        "flags": 16,
                        "start": 109,
                        "end": 125
                    }
                ],
                "flags": 16,
                "start": 109,
                "end": 125
            },
            "flags": 16,
            "start": 105,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "\n\"use strict\"; var implements;\n\n\"use strict\"; var function;\n\n\"use strict\"; var foo, super;\n\n\"use strict\"; var foo = super = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 18, end: 29
✖ Expected a `;` - start: 49, end: 58
✖ Binding identifier expected - start: 58, end: 59
✖ Missing an opening parentheses - '( - start: 58, end: 59
✖ Expression expected - start: 58, end: 59
✖ Trailing comma not allowed. - start: 83, end: 89
✖ 'super' must be followed by an argument list or member access. - start: 83, end: 90
✖ Dot property must be an identifier - start: 89, end: 90
✖ 'super' must be followed by an argument list or member access. - start: 115, end: 123
✖ Dot property must be an identifier - start: 121, end: 123
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 121, end: 123

```

