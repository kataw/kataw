# Kataw parser test case

## Input

`````js
(a): void => {}

(x, a): void => {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 9,
                        "end": 12
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 4,
                            "end": 9
                        },
                        "flags": 2097152,
                        "start": 4,
                        "end": 9
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 15
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 18,
                            "end": 19
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 18,
                    "end": 22
                },
                "flags": 268435489,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 96,
                    "start": 24,
                    "end": 29
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "start": 24,
                "end": 29
            },
            "flags": 16,
            "start": 24,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(a): void => {}\n\n(x, a): void => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 23, end: 24
✖ Identifier expected - start: 29, end: 32

```

