# Kataw parser test case

## Input

`````js
declare function foo<T>(): void;

declare function foo(x: number, y: string): void;

declare function foo(): void

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
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "flags": 32,
                "start": 20,
                "end": 20
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 7,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 21,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 21,
                            "end": 22
                        }
                    ],
                    "flags": 0,
                    "start": 20,
                    "end": 23
                },
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 64,
                        "start": 26,
                        "end": 31
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 31
                },
                "flags": 32,
                "start": 20,
                "end": 31
            },
            "flags": 16,
            "start": 20,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 96,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 32,
            "end": 41
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 41,
                "end": 50
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 50,
                "end": 54
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 55,
                            "end": 56
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 55,
                        "end": 56
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 54,
                "end": 57
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 56,
                    "end": 56
                },
                "flags": 32,
                "start": 56,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 41,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 57,
                        "end": 64
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 65,
                        "end": 67
                    }
                ],
                "flags": 32,
                "start": 57,
                "end": 67
            },
            "flags": 16,
            "start": 57,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 68,
                "end": 75
            },
            "flags": 16,
            "start": 68,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 77,
                    "end": 82
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 82,
                    "end": 82
                },
                "flags": 32,
                "start": 77,
                "end": 82
            },
            "flags": 16,
            "start": 77,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 96,
                "start": 83,
                "end": 92
            },
            "flags": 16,
            "start": 83,
            "end": 92
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 92,
                "end": 101
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 101,
                "end": 105
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 105,
                "end": 107
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 107,
                    "end": 107
                },
                "flags": 32,
                "start": 107,
                "end": 107
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 92,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 108,
                    "end": 113
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 113,
                    "end": 113
                },
                "flags": 32,
                "start": 108,
                "end": 113
            },
            "flags": 16,
            "start": 108,
            "end": 113
        }
    ],
    "isModule": false,
    "source": "declare function foo<T>(): void;\n\ndeclare function foo(x: number, y: string): void;\n\ndeclare function foo(): void\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 16
✖ Unexpected token. - start: 20, end: 21
✖ Expression expected - start: 31, end: 32
✖ Expected a `;` - start: 41, end: 50
✖ ',' expected - start: 56, end: 57
✖ Expected a ')' to match the '(' token here - start: 56, end: 57
✖ Unexpected token. - start: 56, end: 57
✖ Expected a `;` - start: 67, end: 68
✖ Expected a `;` - start: 75, end: 76
✖ Declaration or statement expected - start: 76, end: 77
✖ Expression expected - start: 82, end: 83
✖ Expected a `;` - start: 92, end: 101
✖ Unexpected token. - start: 107, end: 108
✖ Declaration or statement expected - start: 107, end: 108
✖ Expression expected - start: 113, end: 114

```

