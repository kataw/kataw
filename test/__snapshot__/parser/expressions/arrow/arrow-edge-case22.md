# Kataw parser test case

## Input

`````js
(a?: number, b) => {}

(x, a?: number, b) => {}
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
                        "start": 15,
                        "end": 18
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 2,
                                "end": 3
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 4,
                                    "end": 11
                                },
                                "flags": 2097152,
                                "start": 4,
                                "end": 11
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 11
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
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
                        "start": 18,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 21
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 24,
                            "end": 25
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 26,
                                "end": 28
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 28,
                                "end": 29
                            },
                            "consequent": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 29,
                                "end": 29
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 29,
                                "end": 30
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "number",
                                "rawText": "number",
                                "flags": 96,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 37
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 24,
                    "end": 40
                },
                "flags": 268435489,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 46,
                "end": 46
            },
            "flags": 16,
            "start": 44,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(a?: number, b) => {}\n\n(x, a?: number, b) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 29, end: 30
✖ Expected a `;` - start: 41, end: 44

```

