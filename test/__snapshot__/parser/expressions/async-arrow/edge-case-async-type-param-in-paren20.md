# Kataw parser test case

## Input

`````js
async <A = B, C = D,>(x) => y;

(async <A = B, C = D,>(x) => y;);
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 2097152,
                                "start": 0,
                                "end": 12
                            },
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "D",
                                            "rawText": "D",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "start": 0,
                        "end": 21
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 21
                },
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 23
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 24,
                    "end": 27
                },
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 27,
                    "end": 29
                },
                "flags": 288,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 30,
                    "end": 62
                },
                "flags": 32,
                "start": 30,
                "end": 62
            },
            "flags": 16,
            "start": 30,
            "end": 63
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 64,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "async <A = B, C = D,>(x) => y;\n\n(async <A = B, C = D,>(x) => y;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 62, end: 63
✖ Declaration or statement expected - start: 63, end: 64

```

