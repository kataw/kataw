# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await 0

await + 0
await - 0
await ( 0 )
await [ 0 ]
await / 0 /u
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 7,
                    "end": 14
                },
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "operand": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 18
                },
                "flags": 32,
                "start": 7,
                "end": 18
            },
            "flags": 16,
            "start": 7,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 18,
                    "end": 24
                },
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "operand": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 28
                },
                "flags": 32,
                "start": 18,
                "end": 28
            },
            "flags": 16,
            "start": 18,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 28,
                    "end": 34
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 36,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 40
                },
                "flags": 32,
                "start": 28,
                "end": 40
            },
            "flags": 16,
            "start": 28,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 40,
                    "end": 46
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 48,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 48,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 52
                },
                "flags": 32,
                "start": 40,
                "end": 52
            },
            "flags": 16,
            "start": 40,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 52,
                    "end": 58
                },
                "expression": {
                    "kind": 371,
                    "text": "/ 0 /u",
                    "flags": 96,
                    "start": 58,
                    "end": 65
                },
                "flags": 32,
                "start": 52,
                "end": 65
            },
            "flags": 16,
            "start": 52,
            "end": 65
        }
    ],
    "isModule": true,
    "source": "await 0\n\nawait + 0\nawait - 0\nawait ( 0 )\nawait [ 0 ]\nawait / 0 /u",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

await 0;
await + 0;
await - 0;
await (0);
await [ 0, ];
await / 0 /u;

```

### Diagnostics

```javascript
✔ No errors
```

