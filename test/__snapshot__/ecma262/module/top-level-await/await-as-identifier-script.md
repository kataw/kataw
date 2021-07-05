# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: false }
`````

## Input

`````js
await;

await = yield;

await(x);
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
                "text": "await",
                "rawText": "await",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 97,
                    "start": 6,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 15,
                    "end": 21
                },
                "flags": 0,
                "start": 6,
                "end": 21
            },
            "flags": 16,
            "start": 6,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 97,
                    "start": 22,
                    "end": 29
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 30,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 30,
                    "end": 31
                },
                "flags": 268435488,
                "start": 22,
                "end": 32
            },
            "flags": 16,
            "start": 22,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "await;\n\nawait = yield;\n\nawait(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

await;
await = yield;

await(
  x
);

```

### Diagnostics

```javascript
✔ No errors
```

